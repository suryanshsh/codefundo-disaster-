from django.shortcuts import render
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import City , CityHospital , Police
from.serializers import CitySerializer , HosSerializer , PoliceSerializer
import json
from django.http import HttpResponse
import ssl
import urllib.error
import urllib.parse
import urllib.request
from django.views.generic import TemplateView

# To ignore ssl certificate errors

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE



def input_location():
    place=str(City.objects.all()[len(City.objects.all())-1])

    add=urllib.parse.urlencode({'address': place})
    url_add=  'https://maps.googleapis.com/maps/api/geocode/json?{}&key=AIzaSyDR3UzznLlJM_UoaOQiId0Q5Lh0sV3eXOg'.format(add)
    opn=urllib.request.urlopen(url_add, context=ctx).read().decode()
    op=json.loads(opn)
    latnlon=op['results'][0]['geometry']['location']
    return latnlon



def suggest_places():
    dict = input_location()
    lat = dict['lat']
    lon = dict['lng']
    url_add = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location={},{}&radius=6000&type=hospital&keyword=cruise&key=AIzaSyDR3UzznLlJM_UoaOQiId0Q5Lh0sV3eXOg'.format(
        lat, lon)
    opn = urllib.request.urlopen(url_add, context=ctx).read().decode()
    hos = json.loads(opn)
    c = City.objects.get(city=str(City.objects.all()[len(City.objects.all()) - 1]))
    for i in range(len(hos['results'])):
        lat_h = hos['results'][i]['geometry']['location']['lat']
        lon_h = hos['results'][i]['geometry']['location']['lng']
        hos_obj = CityHospital(hospital_name=hos['results'][i]['name'] , hospital_lat= lat_h , hospital_lon=lon_h , hospital_vicinity=hos['results'][i]['vicinity'], place_id=c.id)
        hos_obj.save()
    return 'lol'



def index(request):

    forms = request.GET.get('name', default=None)
    City.objects.all().delete()
    epicenter = City(city=forms)
    epicenter.save()
    dummy=input_location()
    dummy_2 = suggest_places()
    dummy_3 = suggest_police()
    return HttpResponse('<h1>lol</h1>')






class CityList(APIView):
    def get(self,request):
        city= City.objects.all()
        serializer = CitySerializer(city,many=True)
        return Response(serializer.data)

    def post(self):
        pass



class Hoslist(APIView):
    def get(self,request):
        hos = CityHospital.objects.all()
        serializer = HosSerializer(hos,many=True)
        return  Response(serializer.data)



class Policelist(APIView):
    def get(self,request):
        pol =Police.objects.all()
        serializer = PoliceSerializer(pol,many=True)
        return  Response(serializer.data)

def suggest_police():
    dict = input_location()
    lat = dict['lat']
    lon = dict['lng']
    url_add =  "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location={},{}+&radius=2000&types=police&key=AIzaSyDR3UzznLlJM_UoaOQiId0Q5Lh0sV3eXOg".format(lat,lon)
    opn = urllib.request.urlopen(url_add, context=ctx).read().decode()
    pol = json.loads(opn)
    c = City.objects.get(city=str(City.objects.all()[len(City.objects.all()) - 1]))
    for i in range(len(pol['results'])):
        lat_h = pol['results'][i]['geometry']['location']['lat']
        lon_h = pol['results'][i]['geometry']['location']['lng']
        pol_obj = Police(police_name=pol['results'][i]['name'] , police_lat= lat_h , police_lon=lon_h , police_vicinity=pol['results'][i]['vicinity'], place_id=c.id)
        pol_obj.save()
    return 'lol'

class HomePageView(TemplateView):
    def get(self, request, **kwargs):
        return render(request, 'index.html', context=None)
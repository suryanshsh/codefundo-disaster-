from rest_framework import serializers
from .models import City , CityHospital , Police


class CitySerializer(serializers.ModelSerializer):

        class Meta:
            model = City
            fields = '__all__'
class HosSerializer(serializers.ModelSerializer):

        class Meta:
            model =CityHospital
            fields = '__all__'


class PoliceSerializer(serializers.ModelSerializer):

        class Meta:
            model = Police
            fields = '__all__'




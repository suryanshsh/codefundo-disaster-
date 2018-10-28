from django.db import models
from django import forms

# Create your models here.


class City(models.Model):
    city= models.CharField(max_length=120)


    def __str__(self):
        return self.city


class CityHospital(models.Model):
    place = models.ForeignKey(City, on_delete=models.CASCADE)
    hospital_name = models.CharField(max_length=100)
    hospital_lat = models.CharField(max_length=50)
    hospital_lon = models.CharField(max_length=50)
    hospital_vicinity = models.CharField(max_length=300)

    def __str__(self):
        return self.hospital_name

class Police(models.Model):
    place = models.ForeignKey(City , on_delete= models.CASCADE)
    police_name = models.CharField(max_length=100)
    police_lat = models.CharField(max_length=50)
    police_lon = models.CharField(max_length=50)
    police_vicinity = models.CharField(max_length=300)

    def __str__(self):
        return  self.police_name



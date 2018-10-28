from django.contrib import admin
from .models import City , CityHospital ,Police
from twitter.models import Twitter
# Register your models here.
admin.site.register(City)
admin.site.register(CityHospital)
admin.site.register(Police)
admin.site.register(Twitter)
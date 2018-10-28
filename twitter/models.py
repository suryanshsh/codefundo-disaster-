from django.db import models

# Create your models here.


class Twitter(models.Model):

    twitter_percentage = models.CharField(max_length=10)
    city_name = models.CharField(max_length=100)
    disaster = models.CharField(max_length=20)

    def __str__(self):
        return self.disaster

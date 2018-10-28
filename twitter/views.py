from django.shortcuts import render

# Create your views here.
from time import sleep
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from tweepy import OAuthHandler
from django.shortcuts import render
from tweepy import Cursor
import datetime
from datetime import timedelta
import pandas as pd
import tweepy
import operator
from textblob import TextBlob
import re
from.serializers import TwitterSerializer
from .models import Twitter
from django.http import HttpResponse


class TwitterAnalysis(object):

    def __init__(self):
        consumer_key = "wCWAR5aEzbwbNPSqYtAXWR7sN"
        consumer_secret = "KUI0mNZVNnDZQ5qCDwTr8nqpQCaNkhzMU0fMOEpfX4GPcGBne6"
        access_token = "404823005-NQ9LquakMRMgv6s7YZ4Cu9dwIQ8tSV3uatnKLrzM"
        access_token_secret = "rGY8HuRtMJjlhknucByIp0hwhedA6s8gxblouHY9j5Lro"

        try:
            self.auth = OAuthHandler(consumer_key, consumer_secret)
            self.auth.set_access_token(access_token, access_token_secret)
            self.api = tweepy.API(self.auth, wait_on_rate_limit_notify=True)
            print("Authentication successful")
        except:
            print("Error:Authentication failed")

    # print (self.api.rate_limit_status())

    def clean_tweets(self, tweet):
        return ' '.join(re.sub(r"(@\w+)|([^\w \t])|(\w+:\/\/\S+)", " ", tweet).split())

    def get_tweets(self, query):
        today = datetime.datetime.now()
        difference = timedelta(days=2)
        start_date = today - difference
        start_date = start_date.date()
        i = 0
        query = query + " -filter:retweets"
        try:
            for tweet in tweepy.Cursor(self.api.search, q=query, count=20, lang="en", since=start_date,
                                       geocode="22.719568,75.857727,2100km").items(800):
                if (not tweet.retweeted) and ('RT @' not in tweet.text):
                    df.loc[i] = [self.clean_tweets(tweet.text), self.get_sentiment(tweet.text), tweet.user.location]
                    i += 1
        except tweepy.TweepError as e:
            print("Error : " + str(e))
        return df

    def get_sentiment(self, tweet):
        analysis = TextBlob(self.clean_tweets(tweet))
        res = analysis.sentiment.polarity
        if res > 0:
            return "positive"
        elif res < 0:
            return "negative"
        elif res == 0:
            return "neutral"

    def find_percent_and_location(self, df, disaster):
        positive = 0
        negative = 0
        neutral = 0
        state_list = ["Andhra Pradesh", "Arunachal Pradesh ", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat",
                      "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala",
                      "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha",
                      "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh",
                      "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands", "Chandigarh",
                      "Dadra and Nagar Haveli", "Daman and Diu", "Lakshadweep", "National Capital Territory of Delhi",
                      "Puducherry"]
        no_of_times_state = [0] * 36

        for i in range(len(df)):
            sentiment = df.loc[i]['Sentiment']
            if sentiment == "positive":
                positive += 1
            elif sentiment == "negative":
                for j in range(len(state_list)):
                    if state_list[j] in self.clean_tweets(df.loc[i]["Text"]):
                        no_of_times_state[j] += 1
                negative += 1
            elif sentiment == "neutral":
                neutral += 1
        threshold = 20
        percent = negative * 100 / (positive + negative + neutral)
        prediction_value = percent
        if percent > threshold:
            index, value = max(enumerate(no_of_times_state), key=operator.itemgetter(1))
            epicenter = state_list[index]
        else:
            epicenter = "None"
        return prediction_value, epicenter, disaster

df = pd.DataFrame(columns=['Text', 'Sentiment', 'Location'])


def answer(request):

    api = TwitterAnalysis()
    queries = ["flood", "drought", "earthquake", "landslide"]
    Twitter.objects.all().delete()
    for query in queries:
        df = api.get_tweets(query)
        value, epicenter, calamity = api.find_percent_and_location(df, query)
        twi_obj = Twitter(twitter_percentage=str(value),city_name=epicenter,disaster=calamity)
        twi_obj.save()
    return HttpResponse('<h1>lol</h1>')

class Twitterlist(APIView):
    def get(self,request):
        hos = Twitter.objects.all()
        serializer = TwitterSerializer(hos,many=True)
        return  Response(serializer.data)


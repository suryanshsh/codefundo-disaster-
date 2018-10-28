from django.urls import path

from . import  views


urlpatterns =[

    path('',views.Twitterlist.as_view()),
    path('checktwitter/',views.answer)
]



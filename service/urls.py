from django.urls import path
from service.views import index, play

urlpatterns = [
    path("", index, name="index"),
    path("play/", play, name="play")
]


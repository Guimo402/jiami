from django.urls import path, include
from service.views.index import index

urlpatterns = [
    path("", index, name="index"),

]

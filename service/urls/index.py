from django.urls import path, include
from service.views.index import index


urlpatterns = [
    path("", index, name="index"),
    path("menu/", include("service.urls.menu.index")),
    path("settings/", include("service.urls.settings.index")),
]


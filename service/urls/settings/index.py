from django.urls import path
from service.views.settings.getinfo import getinfo
from service.views.settings.login import signin
from service.views.settings.logout import signout
from service.views.settings.register import register


urlpatterns = [
    path("getinfo/", getinfo, name="settings_getinfo"),
    path("login/", signin, name="settings_login"),
    path("logout/", signout, name="settings_logout"),
    path("register/", register, name="settings_register"),
]

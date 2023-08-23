from django.contrib import admin
from service.models.doctor.doctor import Doctor
from service.models.patient.patient import Patient

# Register your models here.
admin.site.register(Doctor)
admin.site.register(Patient)
from django.http import JsonResponse
from service.models.doctor.doctor import Doctor
from service.models.patient.patient import Patient


# 每个处理请求的函数都要加一个request参数
def getinfo(request):
    user = request.user
    if not user.is_authenticated:
        return JsonResponse({
            'result': "未登录"
        })
    else:
        patient = Patient.objects.all()[0]
        return JsonResponse({
            'result': "success",
            'username': patient.user.username,
            'other_info': patient.other_info,
        })
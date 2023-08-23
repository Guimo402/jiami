from django.db import models

from django.contrib.auth.models import User

class Patient(models.Model):
    # 意思：当我们user删除的时候，我们怎么处理Patient这个数据
    # cascade 意思就是user删除的时候，这个Patient数据会被一起删除掉
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    other_info = models.CharField(max_length=256, blank=True)
    
    def __str__(self):
        return str(self.user)
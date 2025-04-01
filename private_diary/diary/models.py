from django.db import models

# Create your models here.
class Tasks(models.Model):
    name_task = models.CharField(max_length=256, verbose_name='Name')
    description = models.TextField(verbose_name='Description')
    status = models.BooleanField(default=False, verbose_name='Status')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Created at')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Updated at')

   
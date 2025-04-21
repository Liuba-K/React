#from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet

from .models import Tasks
from .serializers import TasksModelSerializer

class TaskModelViewSet(ModelViewSet):
    queryset = Tasks.objects.values("name_task", "description")
    serializer_class = TasksModelSerializer


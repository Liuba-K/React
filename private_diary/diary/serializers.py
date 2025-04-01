from rest_framework.serializers import ModelSerializer
from .models import Tasks

class TasksModelSerializer(ModelSerializer):

    class Meta:
        model = Tasks
        fields = ('name_task', 'description')


from rest_framework import serializers
from jupitor_app.models import jupitorPost, File

class jupitorPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = jupitorPost
        fields = '__all__'

class FilePostSerializer(serializers.ModelSerializer):
    class Meta:
        model = File
        fields = '__all__'


from rest_framework import serializers
from jupitor_app.models import jupitorPost, File
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.contrib.auth.models import User


class jupitorPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = jupitorPost
        fields = '__all__'

class FilePostSerializer(serializers.ModelSerializer):
    class Meta:
        model = File
        fields = '__all__'

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    
    def validate(self, attrs):
        try:
            attrs['username'] = attrs['email']
        except:
            pass
        data = super().validate(attrs)

        data["user"] ={"id":self.user.id,
                    "name":self.user.first_name,
                    "username":self.user.username,
                    "email":self.user.email
                    }

        return data

    @classmethod
    def get_token(cls, user):
        token = super(MyTokenObtainPairSerializer, cls).get_token(user)
        return token

class RegisterSerializer(serializers.ModelSerializer):
    name = serializers.CharField(source='first_name')

    class Meta:
        model = User
        fields = ('id', 'name',  'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['email'], password=validated_data['password'],
                                        email=validated_data.get('email'), first_name=validated_data['first_name'])

        return user

class UserSerializer(serializers.ModelSerializer):
     isStaffAdmin = serializers.SerializerMethodField(read_only=True)

     class Meta:
         model = User
         fields = ['id', 'username', 'email', 'isStaffAdmin']

     def get_isStaffAdmin(self, obj):
         return obj.is_staff
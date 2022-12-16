from django import forms
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth.models import User
from .models import File
from django.forms import inlineformset_factory


# Create your forms here.

class NewUserForm(UserCreationForm):
	email = forms.EmailField(required=True)

	class Meta:
		model = User
		fields = ("first_name", "last_name", "username", "email", "password1", "password2")

	

	def save(self, commit=True):
		user = super(NewUserForm, self).save(commit=False)
		user.email = self.cleaned_data['email']
		if commit:
			user.save()
		return user
	


class EventForm(forms.ModelForm):
    #Events form fields here...

    class Meta:
        model  = File
        fields = '__all__'



# EventFormSet = inlineformset_factory(File, form=EventForm, 
#                                       max_num=1, can_delete=False)
	

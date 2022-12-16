from django.shortcuts import render, redirect, HttpResponse, HttpResponseRedirect
from .forms import NewUserForm, EventForm
# from django.contrib.auth import login
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth import login, authenticate
from django.contrib import messages
from rest_framework import generics
from rest_framework.response import Response
from jupitor_app.models import jupitorPost
from jupitor_app.serializers import jupitorPostSerializer, FilePostSerializer
from .models import *
from django.urls import reverse
import logging
import csv
# Create your views here.


class API_objects(generics.ListCreateAPIView):
    queryset = jupitorPost.objects.all()
    serializer_class = jupitorPostSerializer

class API_objects_details(generics.RetrieveUpdateDestroyAPIView):
    queryset = jupitorPost.objects.all()
    serializer_class = jupitorPostSerializer

class API_File_objects(generics.ListAPIView):

    serializer_class = FilePostSerializer

    def get(self, request, *args, **kwargs):
        try:
            queryset = File.objects.all().order_by('id')
            serialize = self.get_serializer(queryset, many = True)
            return Response(serialize.data)
        except Exception as ex:
            return Response({"error":str(ex)})

    def post(self, request, pk,  *args, **kwargs):

        try:
            File.objects.create(id = pk)
            return Response({"Success": "True"})
        
        except Exception as ex:
            return Response({"Success" : "Error"})
    
    def patch(self, request ,pk , *args, **kwargs):
        try:
            print(pk)
            print(request.data)
            queryset = File.objects.get(id = pk)
            serialize = self.get_serializer(queryset, data=request.data, partial = True)
            if (serialize.is_valid()):
                serialize.save()
                return Response({"Success": "True"})
            else:
                return Response(serialize.data)

        
        except Exception as ex:
            return Response({"Success" : "Error"})

           

def register_request(request):
    if request.method == "POST":
        form = NewUserForm(request.POST) 
        if form.is_valid():
            user = form.save()
            login(request, user)
            print("registered successfully")
            messages.success(request, "Registration successful.")
            return HttpResponse("USER successfully registered")
        messages.error(request, "Unsuccessful registration. Invalid information.")
    form = NewUserForm()
    return render (request=request, template_name="jupitor_app/register.html", context={"register_form":form})


def login_request(request):
    if request.method == "POST":
        form = AuthenticationForm(request, data=request.POST)
        if form.is_valid():
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')
            user = authenticate(username=username, password=password)
            if user is not None:
                login(request, user)
                messages.info(request, f"You are now logged in as {username}.")
                return HttpResponse("USER successfully loged in!")
            else:
                messages.error(request,"Invalid username or password.")
        else:
            messages.error(request,"Invalid username or password.")
    form = AuthenticationForm()
    return render(request=request, template_name="jupitor_app/login.html", context={"login_form":form})

def upload_csv(request):
    data = {}
    if "GET" == request.method:
        return render(request, "jupitor_app/upload.html", data)
    try:
        csv_file = request.FILES["csv_file"]
        print(csv_file)
        if not csv_file.name.endswith('.csv'):
            messages.error(request,'File is not CSV type')
            return HttpResponse("File type is not csv.")
        #if file is too large, return
        if csv_file.multiple_chunks():
            messages.error(request,"Uploaded file is too big (%.2f MB)." % (csv_file.size/(1000*1000),))
            return HttpResponse("file size is too big.")
            # return HttpResponseRedirect(reverse("myapp:upload_csv"))
        
        file_data = csv_file.read().decode("utf-8")		
        lines = file_data.split("\n")
		#loop over the lines and save them in db. If error , store as string and then display
        for line in lines:	
            print(line)						
            fields = line.split(",")
            print(fields)
            data_dict = {}
            data_dict["id"] = fields[0]
            data_dict["staff_name"] = fields[1]
            data_dict["position"] = fields[2]
            data_dict["age"] = fields[3]
            data_dict["year_joined"] = fields[4]
            try:
                form = EventForm(data_dict)
                if form.is_valid():
                    form.save()					
                else:
                    logging.getLogger("error_logger").error(form.errors.as_json())												
            except Exception as e:
                logging.getLogger("error_logger").error(repr(e))					
				
    except Exception as e:
        logging.getLogger("error_logger").error("Unable to upload file. "+repr(e))
        messages.error(request,"Unable to upload file. "+repr(e))
    return HttpResponse("csv uploaded successfully.")
    
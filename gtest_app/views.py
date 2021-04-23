from django.shortcuts import redirect, render
from django.views.decorators.csrf import ensure_csrf_cookie
from rest_framework import viewsets
from .serializers import DojoSerializer
from .models import Dojo



def home(request):
    return redirect("http://localhost:3000/new")



@ensure_csrf_cookie
def add(request):
    Dojo.objects.create(
                branch=request.POST['branch'],
                street=request.POST['street'],
                city=request.POST['city'],
                state=request.POST['state'],
            )
    return redirect("http://localhost:3000/new")



class DojoAPIView(viewsets.ModelViewSet):
    serializer_class = DojoSerializer
    queryset = Dojo.objects.all()

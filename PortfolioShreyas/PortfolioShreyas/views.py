
from django.http import  HttpResponse
from django.shortcuts import render
from .models import Contact

def index(request):
    return render(request,'index.html')

# def contact_us(request):
#     if request.method == "POST":
#         form = Contact(request.POST)
#         if form.is_valid():
#             return HttpResponse("Thank you")
#     else:
#         form=Contact()
#
#     return render(request,'index.html',{'form' : form})
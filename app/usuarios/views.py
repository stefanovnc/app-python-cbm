from django.shortcuts import render
from django.http import HttpResponse
from .models import Usuario

def usuarios(request):
    if request.method == "GET":
        return render(request, 'usuarios.html')
    elif request.method == "POST":
        nome = request.POST.get('nome-material')
        patente = request.POST.get('patente')
        email = request.POST.get('email')
        cpf = request.POST.get('cpf')

        usuario = Usuario(
            nome = nome,
            email = email,
            cpf = cpf,
            patente = patente
        )

        usuario.save()

        return HttpResponse('teste')
    

def home(request):
    return render(request, 'home.html')

def material(request):
    return render(request, 'material.html')


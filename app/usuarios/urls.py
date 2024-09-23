from django.urls import path
from . import views

urlpatterns = [
    path('', views.usuarios, name="usuarios"),
    path('home/', views.home, name="home"), 
    path('material/', views.material, name="material") 
]

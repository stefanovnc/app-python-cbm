from django.db import models

class Usuario(models.Model):
    nome = models.CharField(max_length=50)
    patente = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    cpf = models.CharField(max_length=50)

    def __str__(self) -> str:
        return self.nome
    
class Material(models.Model):
    material = models.CharField(max_length=50)
    tombo = models.CharField(max_length=50)
    descricao = models.CharField(max_length=50)
    destino = models.CharField(max_length=50)

    def __str__ (self) -> str:
        return self.material
    
class Perfis(models.Model):
    perfil = models.CharField(max_length=50)

    def __str__ (self) -> str:
        return self.perfil
    
class UsuariosPerfis(models.Model):
    usuario_id = models.CharField(max_length=50)
    perfil_id = models.CharField(max_length=50)
    

    def __str__ (self) -> str:
        return self.usuario_id

class logsAcesso(models.Model):
    usuario_id = models.CharField(max_length=50)
    data_acesso = models.CharField(max_length=50)
    acao = models.CharField(max_length=50)

    def __str__ (self) -> str:
        return self.usuario_id

class Saidas(models.Model):
    saida_id = models.CharField(max_length=50)
    usuario_id  = models.CharField(max_length=50)
    material_id = models.CharField(max_length=50)
    quantidade = models.CharField(max_length=50)
    data_destinacao = models.CharField(max_length=50)
    destinacao = models.CharField(max_length=50)
    obs = models.CharField(max_length=50)

    def __str__ (self) -> str:
        return self.saida_id
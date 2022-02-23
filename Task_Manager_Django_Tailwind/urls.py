from django.contrib import admin
from django.urls import path
from core import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.tasks, name='tasks'),
    path('add-task/', views.add_task, name='add_task'),
    path('delete-task/<int:id>/', views.delete_task, name='delete_task'),
    path('update-task/<int:id>/', views.update_task, name='update_task'),
    path('edit-task/<int:id>/', views.edit_task, name='edit_task')
]

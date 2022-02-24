from django.shortcuts import render
from django.views.decorators.http import require_http_methods
from django.http.response import HttpResponse
from .models import Task

# All tasks
def tasks(request, *args, **kwargs):
    all_tasks = Task.objects.all()
    context   = {'all_tasks': all_tasks}
    return render(request, 'core/tasks.html', context)



@require_http_methods(['POST'])
def add_task(request, *args, **kwargs):
    task = None
    title = request.POST.get('title', '')
    if title:
        task = Task.objects.create(title=title)
    return render(request, 'core/subs/task.html', {'task': task})


@require_http_methods(['DELETE'])
def delete_task(request, id, *args, **kwargs):
    task = Task.objects.get(id=id)
    task.delete()
    return HttpResponse()


@require_http_methods(['PUT'])
def update_task(request, id, *args, **kwargs):
    task = Task.objects.get(id=id)
    task.completed = True
    task.save()
    return render(request, 'core/subs/task.html', {'task': task})


@require_http_methods(['GET', 'POST'])
def edit_task(request, id, *args, **kwargs):
    task = Task.objects.get(id=id)
    if request.method == 'POST':
        task.title = request.POST.get('title', '')
        task.save()

        return render(request, 'core/subs/task.html', {'task': task})

    return render(request, 'core/subs/edit_task.html', {'task': task})

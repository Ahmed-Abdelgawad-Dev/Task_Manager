## Task Manager

This is to do like App that has the same functionalities such as adding, editing deleting and changing status of the task.

The App is using HTML to implement SPA so there is no need to refresh the page by sending Ajax requests.

#### Technologies Used:
* Python **[Django](https://www.djangoproject.com/)**  as a full stack app.

* **[HTMX](https://htmx.org/)** for implementing the SPA(Single Page Application) nature.

* **[Tailwindcss](https://tailwindcss.com/)** : for styling the application.

#### Run the App:
```shell
git clone https://github.com/Ahmed-Abdelgawad-Dev/Task_Manager.git
```
```shell
cd Task_Manager
```
```shell
./manage.py runserver
```

* Use this command to free the port if busy (Unix) ```sudo lsof -t -i tcp:8000 | xargs kill -9``` Feel free to change the port number.
* Or u can use another port in case the default one 8000 is busy by typing ```./manage.py runserver 8081``` use 8081 port instead of the 8080.
* The purpose here is implementing HTMX .
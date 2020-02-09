from django.urls import path
from fileupload.fileupload.views import FileUpload

urlpatterns = [
    path('', FileUpload.as_view()),
]

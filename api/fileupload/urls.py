from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework.urlpatterns import format_suffix_patterns

from fileupload.fileupload.views import FileUpload

urlpatterns = [
    path('admin/', admin.site.urls),
    path('upload/', include('fileupload.fileupload.urls')),
]


if settings.DEBUG:
  urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

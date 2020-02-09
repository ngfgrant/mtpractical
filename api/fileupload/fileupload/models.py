import uuid
from django.db import models


class FileUpload(models.Model):
    id = models.UUIDField(default=uuid.uuid4, primary_key=True, editable=False)
    created = models.DateTimeField(auto_now_add=True)
    file = models.FileField(blank=False, null=False) 

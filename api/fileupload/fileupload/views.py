from django.http import Http404
from rest_framework.parsers import FileUploadParser
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from fileupload.fileupload.models import FileUpload
from fileupload.fileupload.serializers import FileUploadSerializer


class FileUpload(APIView):
    parser_class = (FileUploadParser)

    def post(self, request, format=None):
        serializer = FileUploadSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

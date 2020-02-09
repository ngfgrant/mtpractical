# README

## Requirements

The backend API uses Django/Django REST Framework. The frontend is written in
React.

Backend requirements:

- Python, preferably running a `virtualenv`/`pyenv`

Frontend requirements:

- NodeJS

## Running

To run the backend:

```shell

pyenv virtualenv 3.6.2 ng-mercurytide

pyenv activate ng-mercurytide

cd api

pip install -r requirements.txt

python manage.py migrate

python manage.py runserver

```

The backend will run on `http://127.0.0.1:8000/` by default

To run the frontend:

```shell
cd frontend/

npm install

npm start
```

The frontend will run on `http://localhost:3000/` by default.

## Usage

Go to `http://localhost:3000` and you will be able to upload and download files
from there.

## Application Features

- Both main user stories were addressed.
- A user can upload multiple files
- The link generated is pseudo-random to prevent guessing.

### Partial Features

- The data about a user's upload is saved to `localStorage` so that can be used
  in the future to persist data across sessions. Similar to Firefox Send.

- Simple model in the backend for `FileUpload` allows extension for other data,
  including expiry dates, password etc.

## Application Limitations

- The frontend does not currently load up the `localStorage` data as I ran out
  of time to implement that.

- There is no progress bar for uploading. However, file upload was developed
  using `async` so it would be possible to implement the progression and the UI
  library used (Semantic UI) has a progress bar component that could be
  utilised.

- The Download functionality is a little basic. In the model I implemented
  `FileUpload` to have an `id` of type `UUID`. With an additional `download`
  url a user could download a file from this `id`, e.g.
  `/download/59c9830e-59cd-4706-a421-4d15ff54f501`.

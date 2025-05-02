# Use an official Python runtime as a parent image
FROM python:3.9
RUN apt-get install pkg-config default-libmysqlclient-dev

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

ENV POETRY_VIRTUALENVS_CREATE false
ENV PIP_IGNORE_INSTALLED true
ENV PATH /usr/bin/:${PATH}

# Set the working directory
WORKDIR /private_diary

# Install dependencies
COPY pyproject.toml poetry.lock /private_diary/
RUN pip install "poetry==2.1.2" && poetry --version
RUN poetry config virtualenvs.create false --local
RUN poetry install --no-root

# Copy the project code into the container
COPY . /private_diary/
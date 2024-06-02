import os
from dotenv import load_dotenv

from .common import *


# Load environment variables
load_dotenv()


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/5.0/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.environ.get('SECRET_KEY')

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ['*']

# Database
# https://docs.djangoproject.com/en/5.0/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': os.environ.get('USER_DB_NAME'),
        'USER': os.environ.get('USER_DB_USER'),
        'PASSWORD': os.environ.get('USER_DB_PASSWORD'),
        'HOST': os.environ.get('USER_DB_HOST'),
        'PORT': os.environ.get('USER_DB_PORT')
    },
    # 'db_itnovai_test': {
    #     'ENGINE': 'django.db.backends.mysql',
    #     'NAME': os.environ.get('ITNOVAI_DB_NAME'),
    #     'USER': os.environ.get('ITNOVAI_DB_USER'),
    #     'PASSWORD': os.environ.get('ITNOVAI_DB_PASSWORD'),
    #     'HOST': os.environ.get('ITNOVAI_DB_HOST')
    # }
}

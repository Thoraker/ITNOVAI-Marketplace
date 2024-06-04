# ITNOVAI MARKET

ITNOVAI MARKET es una aplicación web de comercio electrónico desarrollada a solicitud de ITNOVAI a modo de prueba técnica.

## Características principales

- **Catálogo de productos**: Los usuarios pueden explorar una amplia selección de productos organizados por categorías. Cada producto cuenta con una imagen, precio, descuentos.

## Tecnologías utilizadas

- **Frontend**: Javascript, Bootstrap
- **Backend**: Django, Django-Rest-Framework
- **Base de datos**: MySQL

## Instalación y configuración

1. Clona este repositorio: `git clone https://github.com/Thoraker/ITNOVAI-Marketplace`
2. Instala las dependencias del frontend: `npm install`
3. Crea un entorno virtual para el backend: `cd ../backend && python -m venv env`
4. Activa el entorno virtual: `source env/bin/activate` # En Windows usa `env\Scripts\activate`
5. Instala las dependencias del backend desde el archivo requirements.txt: `pip install -r requirements.txt`
6. Configura las variables de entorno necesarias (como credenciales de la base de datos y claves de API)
7. Inicia el servidor de desarrollo: `python manage.py runserver`
8. Inicia el desactivando el entorno virtual y ejecutando `npm run dev`
9. Abre `http://localhost:5173` en tu navegador

   
## Badges

Add badges from somewhere like: [shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)

[![Django](https://img.shields.io/badge/Django-5.0.3-blue.svg)](https://www.djangoproject.com/)
[![Django REST Framework](https://img.shields.io/badge/Django%20REST%20Framework-v3.15.1-orange.svg)](https://www.django-rest-framework.org/)
[![Javascript](https://img.shields.io/badge/Node-20.11.0-blue.svg)](https://nodejs.org/en/)

## Referencias de la API

#### Llama a todos los productos

```http
  GET /api/product
```

#### Llama a un producto segun el id

```http
  GET /api/items/${id}
```

| Parametro | Tipo     | Descripción                             |
| :-------- | :------- | :-------------------------------------- |
| `id`      | `string` | **Requerida**. Id del producto a llamar |

#### Llama todas las categorias

```http
  GET /api/category
```

#### Llama a una categoria según el id

```http
  GET /api/category/${id}
```

| Parametro | Tipo     | Descripción                                |
| :-------- | :------- | :----------------------------------------- |
| `id`      | `string` | **Requerida**. Id de la categoria a llamar |

#### Documentacion de la API

```http
  GET api/schema/swagger-ui
```

## Autor

- [@Thoraker](https://www.github.com/Thoraker)

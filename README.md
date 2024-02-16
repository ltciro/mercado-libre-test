# Test Práctico - Frontend

Test Práctico - Frontend para mercado libre

## Correr el proyecto

Pasos para correr el proyecto:

### Client

Desde la carpeta raiz

```bash
cd client && npm i
```

```bash
npm run prod
```

### Server

Desde la carpeta raiz

```bash
cd server && npm i
```

```bash
npm run start
```

## Correr los test

Pasos para correr los test:

### Client

Desde la carpeta raiz

```bash
cd client
```

instalar paquetes si aún no lo haces con `npm i`

```bash
npm run test
```

## Project Structure

### Client

Carpetas:

- app : contiene las páginas; loding, layouts, not-found, home, items , item y sus respectivos tests.
- components: componentes usados en las páginas y sus respectivos tests.
- service: contiene funciones para hacer llamados al backend.
- shared: contiene interfaces, constastes y utils.

### Server

Carpetas:

- api : contiene las controllers y rutas; para get-items y get-item.
- config: algunas constantes de configuración.
- loaders: contiene el código de inicio de la aplicación.
- utils: contiene helpers, transformers y los mensajes de retorno del api.

### APP reports

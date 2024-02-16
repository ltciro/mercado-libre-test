# Test Práctico - Frontend

Test Práctico - Frontend para mercado libre
Por Laura Tatiana Ciro

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

#### Core vitals
![Screenshot 2024-02-16 at 9 41 20 AM](https://github.com/ltciro/mercado-libre-test/assets/26748227/620aba14-3132-490a-ba4c-cbb0fbb3c9ff)
![Screenshot 2024-02-16 at 9 42 39 AM](https://github.com/ltciro/mercado-libre-test/assets/26748227/ffe9d948-c6af-4b04-929c-0f500d88eba5)
#### A11y insights 
![Screenshot 2024-02-16 at 9 43 03 AM](https://github.com/ltciro/mercado-libre-test/assets/26748227/d39a1cf5-1dae-4ac2-bf62-907bb15667bb)
![Screenshot 2024-02-16 at 9 41 39 AM](https://github.com/ltciro/mercado-libre-test/assets/26748227/ec07b0f8-17c6-4e7c-8b90-223e61bec48c)
#### lighthouse
![Screenshot 2024-02-16 at 9 42 04 AM](https://github.com/ltciro/mercado-libre-test/assets/26748227/df1bc839-5b70-4570-af21-9949e5bc2286)
![Screenshot 2024-02-16 at 9 42 27 AM](https://github.com/ltciro/mercado-libre-test/assets/26748227/238d28e3-ec44-4e79-9a98-c0defac04d59)


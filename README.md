# argenpills
Argenpills mobile esta hecho sobre React 17.x, y lee la informacion de las pastillas desde una API hosteada en AWS.


## FrontEnd

### Build
Para correr el codigo, primero: 

`npm install`

Y despues

`npm build`

### Deploy

Hay basicamente dos scripts en el `package.json`:

1. `build:production`
2. `upload:production`

Obviamente hay que tener configurada la cuenta de AWS para poder hacer deploy a estos buckets. 
El nombre del profile es **ap**

Para actualizar el site, hay que correrlos en orden, primero `build:production` y luego `upload:production`

Tambien le agregue Vercel (https://www.vercel.com) que hace un deploy automatico cuando `main` recibe un commit. 
El sitio es https://argenpills.vercel.app, se puede usar para hacer preview de los cambios antes de subir.

### TO-DO

- Hacer que Vercel haga el deploy automaticamente a PROD seria muy bueno
    - En vez de escuchar en `main`, podriamos escuchar en algun tag (`/release/v.x` donde x es la version)
- Tener un entorno de pruebas (https://test.argenpills.vercel.com o algo asi)

## Backend build
Por ahora no hay manera de correr localmente el backend. Si alguien tiene ganas de armar el SAM, hagan un PR :D 

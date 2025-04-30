# argenpills
Argenpills mobile esta hecho sobre React 17.x, y lee la informacion de las pastillas desde una API hosteada en AWS. El Frontend esta hosteado en Vercel, porque soy vaga y porque es el new-kid-on-the-block

## FrontEnd

### Build
Para correr el codigo, primero: 

`bun install`

Y despues

`bun dev` para correrlo local, y `bun build` para "publicar" el codigo. Igual Vercel lo hace por nosotros.

### Deploy

Hagan un PR y cuando se mergee a `main`, hace deploy automaticamente a Vercel

### Upgrades
`ncu` para actualizar los paquetes

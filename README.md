# Prueba de *Angular* : Indicaciones
**FNALPOST** es un amago de clon de [Medium](https://medium.com/). Sus pretensiones son mucho más humildes que las del conocido portal, pero a la vez contribuyen a una grandiosa causa: que aprendas a familiarizarte con Angular. 
Lee detenidamente estas instrucciones **hasta el final**, las vas a necesitar para completar la práctica. 

## ¿Qué hay que hacer exactamente? 
**FNALPOST** es una app que funciona perfectamente desde el momento en que la descargas, pero la *pobre* está algo escasa de funcionalidad y opciones: ahí es donde te necesito. Te ofrezco seis caminos posibles de mejora que a mí se me ocurren, a los que he llamado Paths; tendrás que **completarlos**. No te preocupes, son asequibles.
Los **Paths** están distribuidos por colores. Cuando navegues por el código de **FNALPOST** verás que existen comentarios relacionados con los distintos **Paths**; eso significa que tienes trabajo que hacer justo en esa pieza de código. Por ejemplo: 

	/*=========================================================================|
 	| Blue Path                                                                |
 	|==========================================================================|
 	| Crea el pipe FromNowPipe. Su cometido es, partiendo de una fecha dada,   |
 	| retornar una cadena de texto que exprese el tiempo que ha pasado desde   |
 	| dicha fecha hasta ahora.                                                 |
 	|=========================================================================*/
  
Visto ese comentario, y siempre que estés completando ese **Path** concreto al que se hace referencia, ponte el mono de trabajo y ¡al lío!. En cualquier caso, más abajo en cada **Path** te explico en qué consiste y qué documentos requieren tu atención. 

Por cierto, por si te lo habías preguntado: no tienes que tocar ni una sola línea de CSS, y las que tienes que tocar de HTML, que son pocas, son del lenguaje de templates de Angular. La idea de esta práctica es que te centres en la parte funcional, en Angular, y dejes aparcado todo lo contextual. Si te sientes creativo y quieres tocar algo de los estilos o de la maquetación siéntete con total libertad para hacerlo, siempre que tengas en cuenta que lo prioritario son los **Paths**.

##Entidades 

En esta app existen tres entidades: `Post`, `User` y  `Category`. Como puedes imaginar, la entidad `Post` es la que más peso tiene y sobre la que gira **FNALPOST**. Tiene todos los atributos necesarios para almacenar los datos propios de un post, además de mantener relación con User para establecer el autor del mismo y con `Category` para enlazar las categorías en las que se publica. Están definidas de la siguiente forma: 

Entidad `Post`:

- `id` de tipo `number`.
- `title` de tipo `string`.
- `intro` de tipo `string`.
- `body` de tipo `string`.
- `media` de tipo `string`.
- `publicationDate` de tipo `number`.
- `categories` de tipo `Category[]`.
- `author` de tipo `User`.
- `likes` de tipo `number[]`.  

Entidad `User`:

- `id` de tipo `number`.
- `name` de tipo `string`. 
- `username` de tipo `string`. 
- `email` de tipo `string`. 
- `avatar` de tipo `string`.

Entidad `Category` :

- `id` de tipo `number`.
- `name` de tipo `string`.

## Puesta a punto

Antes de empezar a completar **FNALPOST**, que sé que tienes ganas, tienes que clonarlo e instalar sus dependencias. Puedes descargar el código desde [su repositorio](https://bitbucket.org/fernandCordon/finalpost), o bien clonarlo desde una terminal:

```
$ git clone https://fernandCordon@bitbucket.org/fernandCordon/finalpost.git
```

Recuerda que debes tener instalado [Angular CLI](https://cli.angular.io/) a nivel global para trabajar con Postium:

```
$ npm install -g @angular/cli
```
Una vez descargado y descomprimido, o bien clonado, vamos al directorio correspondiente e instalamos las dependencias:

```
$ npm install

```

## Paths

La práctica que entregues debe tener implementados los siguientes **Paths**. Ve completándolos uno por uno; te recomiendo que no lleves varios a la vez.

### Blue Path: Apañando la fecha de publicación

¿Te has fijado en que la fecha de publicación de los posts de **FNALPOST** no se muestran correctamente?. Ahora mismo aparecen con formato de timestamp, lo cual carece de valor para los usuarios. Lo que debes hacer es indicar qué tiempo ha transcurrido desde que el post se publicó. Puedes hacerlo muy fácilmente con un Pipe y la librería [Moment.js](http://momentjs.com/).

Dependencias:

- Ninguna 

Documentos:

- src/app/post-details/**post-details.component.html** 
- src/app/post-preview/**post-preview.component.html**
- src/app/**from-now.pipe.ts**
- src/app/**app.module.ts**

Qué practicamos:

- Pipes


### Pink Path: Filtrando y ordenando posts

Los posts que se están mostrando no están ordenados, y lo ideal es que lo hicieran por fecha de publicación descendente, lo más nuevos primero. Además, hay un par de ellos cuya publicación está programada para un fecha futura, y sin embargo ya son visibles. ¿Podrías corregirlo?

Dependencias:

- Ninguna 

Documentos:

- src/app/**post.service.ts** 

Qué practicamos:

- Cliente HTTP

### Green Path: Detalles de un post


¿Te ves capaz de habilitar la vista en detalle de los posts? Ahora mismo, por mucho que hagas clic sobre el título, imagen o cuerpo del post, no te lleva a una vista individual en la que leer el resto del post y ver otros detalles del mismo, como las categorías en las que se ha publicado. Este **Path** no debería resultarte especialmente complicado, así que ¡ánimo!.

Dependencias: 

- Ninguna 

Documentos:

- src/app/post-preview/**post-preview.component.html** 
- src/app/post-preview/**post-preview.component.ts** 
- src/app/posts-list/**posts-list.component.html** 
- src/app/posts-list/**posts-list.component.ts**

Qué practicamos:

- Comunicación entre componentes


### Purple Path: Creación de posts

Aún no es posible crear nuevos posts. En primer lugar, el enlace que presenta **FNALPOST** en la parte superior no funciona. En segundo lugar, una vez habilitado el enlace, el formulario que se muestra en la sección navegada no funciona como se espera. Y en tercer lugar, no se está llamando al servidor para enviar el post que acabamos de introducir en el formulario. Intenta arreglar todo esto.

Dependencias: 

- Ninguna 

Documentos:

- src/app/header-bar/**header-bar.component.html** 
- src/app/post-form/**post-form.component.html** 
- src/app/post-form/**post-form.component.ts** 
- src/app/**post.service.ts**

Qué practicamos:

- Formularios 
- Cliente HTTP


### Red Path: Posts por autor

Sería genial poder filtrar los posts por autor. Todos tenemos unos autores que nos gustan más que otros y tener a un clic todo lo que tienen que contarnos es algo aportaría mucho valor a **FNALPOST**. Este **Path** es algo más complicado. Ahora mismo, si te posicionas con el ratón sobre el autor de un post verás que el cursor cambia, indicando que el clic desencadena una acción; pero no es así, por más clics que se hacen no ocurre nada. Puedes empezar este **Path** por ahí.

Dependencias:

- Ninguna 

Documentos:

- src/app/post-details/**post-details.component.html** 
- src/app/post-details/**post-details.component.ts**
- src/app/post-preview/**post-preview.component.html** 
- src/app/post-preview/**post-preview.component.ts** 
- src/app/posts-list/**posts-list.component.html** 
- src/app/posts-list/**posts-list.component.ts** 
- src/app/**post.service.ts** 
- src/app/**posts-resolve.service.ts**


Qué practicamos:

- Comunicación entre componentes 
- Routing
- Cliente HTTP


### Yellow Path: Posts por categoría

Cuando estás viendo los detalles de un post puedes apreciar en la parte inferior del mismo que aparecen sus categorías. Sería una buena idea poder listar todos los posts de una misma categoría para tener la información temáticamente homogeneizada.

Dependencias:
 
- Green Path

Documentos:

- src/app/category-box/**ategory-box.component.html** 
- src/app/category-box/**category-box.component.ts** 
- src/app/post-details/**post-details.component.html** 
- src/app/post-details/**post-details.component.ts** 
- src/app/**post.service.ts** 
- src/app/**posts-resolve.service.ts**
                   
Qué practicamos:

- Comunicación entre componentes 
- Routing
- Cliente HTTP

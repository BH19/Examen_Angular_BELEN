import * as moment from 'moment';
import 'moment/locale/es';
import { Pipe, PipeTransform } from '@angular/core';

/*=========================================================================|
| Blue Path                                                                |
|==========================================================================|
| Crea el pipe FromNowPipe. Su cometido es, partiendo de una fecha dada,   |
| retornar una cadena de texto que exprese el tiempo que ha pasado desde   |
| dicha fecha hasta ahora. Por ejemplo: hace 2 horas. Para esta tarea nos  |
| apoyamos en la librería Moment.js; ya tienes hecho el import             |
| correspondiente, solo tienes que usarla donde proceda. Haciendo          |
| 'moment(fecha).fromNow()' obtenemos justo lo que necesitamos.            |
|=========================================================================*/

/*
Con el decorador @Pipe otrogamos a la clase decorada
comportamiento de Pipe. La clase debe implementar la interfaz
'PipeTransform', que a su vez obliga la implementación de la función
'transform'. Además, es necesario indicar en el metadato 'name'
un nombre, el cual utilizaremos en templates para aplicar el Pipe.
*/

@Pipe ({ 
    name: 'fechaArticulo' 
})

export class FromNowPipe implements PipeTransform {

    /*
    En esta función hacemos la transformación del dato
    correspondiente. Éste siempre viene dado como primer parámetro
    de la función. Podríamos definir otros parámetros para
    personalizar la lógica de la transformación.
    */

    transform(date: number): string {
        return moment(date).fromNow()
    }
}
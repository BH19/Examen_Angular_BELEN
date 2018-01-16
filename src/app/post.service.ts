import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { map, filter } from 'rxjs/operators';

import { environment } from '../environments/environment';
import { Post } from './post';

import { Category } from './category';
import { UserService } from './user.service';
import { CategoryService } from './category.service';


@Injectable()
export class PostService {

  constructor(private _http: HttpClient) { } //esto inyecta la dependencia con el modificador de acceso private

  getPosts(): Observable<Post[]> {

    /*=========================================================================|
    | Pink Path                                                                |
    |==========================================================================|
    | Pide al servidor que te retorne los posts ordenados de más reciente a    |
    | menos, teniendo en cuenta su fecha de publicación. Filtra también        |
    | aquellos que aún no están publicados, pues no deberían mostrarse al      |
    | usuario.                                                                 |
    |                                                                          |
    | En la documentación de 'JSON Server' tienes detallado cómo hacer el      |
    | filtro y ordenación de los datos en tus peticiones, pero te ayudo        |
    | igualmente. La querystring debe tener estos parámetros:                  |
    |                                                                          |
    |   - Filtro por fecha de publicación: publicationDate_lte=fecha           |
    |   - Ordenación: _sort=publicationDate&_order=DESC                        |
    |                                                                          |
    | Una pista más, por si acaso: HttpParams.                                 |
    |=========================================================================*/
    const options = {
      params: new HttpParams().set('publicationDate_lte=fecha', Date.now().toString())
    };
      /*
      params: new HttpParams()
        .set('_sort', 'fechaPublicacion') //ordenando el campo por fecha de publicación
        .set('_orden','desc') //ordenandolo en fecha descendente
        .set('userId', 'contacto.id.toString'), //y ordenandolo por el identificador del usuario
      headers: new HttpHeaders()
        //la api, esto lo que hace es que pasamos los datos a la api
        .set('miApiKey', 'clave que te dan que tienes que meter')
        .set('Accept','application/json') 
        //que devuelva los objetos en json
      */
    //http://localhost3004/contactos?_sort=fechaPublicacion&_order=desc&userId=8

    return this._http.get<Post[]>(`${environment.backendUri}/posts?_sort=publicationDate&_order=DESC&publicationDate_ne=1516864214000`);
  }


  getUserPosts(id: number): Observable<Post[]> {

    /*=========================================================================|
    | Red Path                                                                 |
    |==========================================================================|
    | Ahora mismo, esta función está obteniendo todos los posts existentes, y  |
    | solo debería obtener aquellos correspondientes al autor indicado. Añade  |
    | los parámetros de búsqueda oportunos para que retorne solo los posts que |
    | buscamos. Ten en cuenta que, además, deben estar ordenados por fecha de  |
    | publicación descendente y obtener solo aquellos que estén publicados.    |
    |                                                                          |
    | En la documentación de 'JSON Server' tienes detallado cómo hacer el      |
    | filtro y ordenación de los datos en tus peticiones, pero te ayudo        |
    | igualmente. La querystring debe tener estos parámetros:                  |
    |                                                                          |
    |   - Filtro por autor: author.id=autor                                    |
    |   - Filtro por fecha de publicación: publicationDate_lte=fecha           |
    |   - Ordenación: _sort=publicationDate&_order=DESC                        |
    |                                                                          |
    | Una pista más, por si acaso: HttpParams.                                 |
    |=========================================================================*/
    
    //http://localhost3004/contactos?_sort=fechaPublicacion&_order=desc&userId=8

    const mismoAutor = {
      params: new HttpParams()
      .set('_sort', 'publicationDate')
      .set('_order', 'DESC')
      .set('publicationDate_lte', Date.now().toString())
      .set('author.id', id.toString())
    };

     return this._http.get<Post[]>(`${environment.backendUri}/posts`, mismoAutor);

  }


  checkIfPostContainsACategory(post: Post, categoryId: number): Boolean {
    let result = false;
    post.categories.forEach((element) => {
      if (element.id === categoryId) {
        result = true;
        return;
      }
    });
    return result;
  }


  getCategoryPosts(id: number): Observable<Post[]> {

    const opciones = {
      params: new HttpParams()
      .set('_sort', 'publicationDate')
      .set('_order', 'DESC')
      .set('publicationDate_lte', Date.now().toString())
      //.set('author.id', id.toString())
    };

    /*=========================================================================|
    | Yellow Path                                                              |
    |==========================================================================|
    | Ahora mismo, esta función está obteniendo todos los posts existentes, y  |
    | solo debería obtener aquellos correspondientes a la categoría indicada.  |
    | Añade los parámetros de búsqueda oportunos para que retorne solo los     |
    | posts que buscamos. Ten en cuenta que, además, deben estar ordenados por |
    | fecha de publicación descendente y obtener solo aquellos que estén       |
    | publicados.                                                              |
    |                                                                          |
    | Este Path tiene un extra de dificultad: un objeto Post tiene una         |
    | colección de objetos Categoria, y 'JSON Server' no permite filtrado en   |
    | colecciones anidadas. Por tanto, te toca a ti darle una solución a este  |
    | marrón. Una posibilidad sería aprovechar el operador 'map' de los        |
    | observables. Sirven para transformar flujos de datos y, de alguna forma, |
    | es lo que vamos buscando. Podríamos obtener todos los posts y luego      |
    | filtrarlos por categoría en 'map'. Ahí te lo dejo.                       |
    |                                                                          |
    | En la documentación de 'JSON Server' tienes detallado cómo hacer el      |
    | filtro y ordenación de los datos en tus peticiones, pero te ayudo        |
    | igualmente. La querystring debe tener estos parámetros:                  |
    |                                                                          |
    |   - Filtro por fecha de publicación: publicationDate_lte=fecha           |
    |   - Ordenación: _sort=publicationDate&_order=DESC                        |
    |                                                                          |
    | Una pista más, por si acaso: HttpParams.                                 |
    |=========================================================================*/
/*
    var clicks = Rx.Observable.fromEvent(document, 'click');
    var positions = clicks.map(ev => ev.clientX);
    positions.subscribe(x => console.log(x));
    */
    /*
    Datas = allUserData.pipe(
      map(user => user.data),
      filter(data => data),
      .subscribe()
    )
    */
    /*
    const Category = [];
    function myFunction() {
      x = document.getElementById("categories")
      x.innerHTML = Category.map(Math.sqrt);
    }
 */   
    return this._http.get<Post[]>(`${environment.backendUri}/posts`, opciones)
    /*
      .map(posts: Post[]): Post[]
      return.filter (posts:Post[]) : boolean => 
      post.categories.find ((categories: Category[]) => 
      (Category:any, id:any) => undefined
    */
    /*.map(posts => {
      return posts.filter(post => {
        
      }) 
    })*/
  }

  getPostDetails(id: number): Observable<Post> {
    return this._http.get<Post>(`${environment.backendUri}/posts/${id}`);
  }

  createPost(post: Post): Observable<Post> {

    /*=========================================================================|
    | Purple Path                                                              |
    |==========================================================================|
    | Utiliza el cliente HTTP para guardar en servidor el post indicado. La    |
    | ruta sobre la cual tienes que hacer la petición POST es '/posts'.        |
    | Recuerda que siempre que se crea una entidad en servidor es una buena    |
    | práctica retornar la misma con los datos actualizados obtenidos tras la  |
    | inserción.                                                               |
    |=========================================================================*/

    return this._http.post<Post>(
      `${environment.backendUri}/post`, post.author);
  }

}

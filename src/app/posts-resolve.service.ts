import { Injectable, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { Post } from './post';
import { PostService } from './post.service';
import { ActivatedRoute } from '@angular/router/src/router_state';

@Injectable()
export class PostsResolveService implements Resolve<Post[]> {

  constructor(private _postService: PostService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Post[]> {

    /*=========================================================================|
    | Red Path                                                                 |
    |==========================================================================|
    | Modifica este Resolve para que, en caso de tener que obtener los posts   |
    | correspondientes a un usuario, llame a la función 'getUserPosts()' del   |
    | servicio PostService. Recuerda mirar en los parámetros de la ruta, a ver |
    | qué encuentras.                                                          |
    |=========================================================================*/

    if(route.params.userId) {
      return this._postService.getUserPosts(route.params.userId)
    } 
    //else {
/*
    if(route.params.user['id']) {
      return this._postService.getUserPosts(route.params.user['id'])
    } else {
*/
/*
    const id: string = route.snapshot.params.id;
    const url: string = route.url.join('');
    const user = route.data.user;
 */ 
    /*=========================================================================|
    | Yellow Path                                                              |
    |==========================================================================|
    | Modifica este Resolve para que, en caso de tener que obtener los posts   |
    | correspondientes a una categoría, llame a la función 'getCategoryPosts()'|
    | del servicio PostService. Recuerda mirar en los parámetros de la ruta, a |
    | ver qué encuentras.                                                      |
    |=========================================================================*/
/*
    else if {
      return this._postService.getCategoryPosts(route.params.category)
    } else {
*/
    return this._postService.getPosts();
  
  }
}



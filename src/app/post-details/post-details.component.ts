import { Component, Inject, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NativeWindow } from '../window';
import { Post } from '../post';

import { Router } from '@angular/router'
import { User } from '../user';
import { Category } from '../category';

@Component({
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  post: Post;
  
  constructor(
    private _router:Router,
    private _activatedRoute: ActivatedRoute,
    @Inject(NativeWindow) private _window) {
      console.log('componente instanciado y servicio inyectado (autor)')
    } /* _router */

  ngOnInit(): void {
    this._activatedRoute
        .data
        .subscribe((data: { post: Post }) => {
          this.post = data.post;
          this._window.scrollTo(0, 0);
        });
  }

  plainTextToHtml(text: string): string {
    return text ? `<p>${text.replace(/\n/gi, '</p><p>')}</p>` : '';
  }

  /*=========================================================================|
  | Red Path                                                                 |
  |==========================================================================|
  | Añade un manejador que navegue a la dirección correspondiente a los      |
  | posts del autor indicado. Recuerda que para hacer esto necesitas         |
  | inyectar como dependencia el Router de la app. La ruta a navegar es      |
  | '/posts/users', pasando como parámetro el identificador del autor.       |
  |=========================================================================*/

  verAutor(user: User): void {
    this._router.navigate(['/posts/users', user.id]);
  }


  /*=========================================================================|
  | Yellow Path                                                              |
  |==========================================================================|
  | Añade un manejador que navegue a la dirección correspondiente a los      |
  | posts de la categoría indicada. Recuerda que para hacer esto necesitas   |
  | inyectar como dependencia el Router de la app. La ruta a navegar es      |
  | '/posts/categories', pasando como parámetro el identificador de la       |
  | categoría.                                                               |
  |=========================================================================*/

  verCategoria(category: Category) {
    this._router.navigate(['/posts/category/', category.id]);
  }

}

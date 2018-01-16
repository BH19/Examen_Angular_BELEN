import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Post } from '../post';

import { PostService } from '../post.service';
import { Router } from '@angular/router'
import { User } from '../user';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostsListComponent {

  constructor(
    //private _postService: PostService,
    private _router:Router) {
    console.log('componente instanciado y servicio inyectado')
  }

  @Input() posts: Post[];
  

  /*=========================================================================|
  | Red Path                                                                 |
  |==========================================================================|
  | Maneja el evento del componente PostPreviewComponent que indica la       |
  | selección del autor de un post y navega a la dirección correspondiente.  |
  | Recuerda que para hacer esto necesitas inyectar como dependencia el      |
  | Router de la app. La ruta a navegar es '/posts/users', pasando como      |
  | parámetro el identificador del autor.                                    |
  |=========================================================================*/

  verAutor(user: User) {
    this._router.navigate(['/posts/users', user.id]);
  }

  /*=========================================================================|
  | Green Path                                                               |
  |==========================================================================|
  | Maneja el evento del componente PostPreviewComponent que indica la       |
  | selección de un post y navega a la dirección correspondiente. Recuerda   |
  | que para hacer esto necesitas inyectar como dependencia el Router de la  |
  | app. La ruta a navegar es '/posts', pasando como parámetro el            |
  | identificador del post.                                                  |
  |=========================================================================*/

  //seleccionarDetalles: Post;

  verDetalles(post: Post) {
    //this.seleccionarDetalles = post;
    /*
    Tambien se puede poner:
    this._router.navigate(['/posts/' + id]);
    */
    this._router.navigate(['/posts', post.id]);
  }
  
}

import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Post } from '../post';
import { RouterLink } from '@angular/router/src/directives/router_link';
import { User } from '../user';

@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.css']
})
export class PostPreviewComponent {

  @Input() post: Post;

  /*=========================================================================|
  | Red Path                                                                 |
  |==========================================================================|
  | Expón un atributo de salida con el decorador correspondiente. El tipo de |
  | este atributo debe permitir la emisión de eventos; la idea es enviar al  |
  | componente padre el usuario sobre el cuál se ha hecho clic. Y puesto que |
  | dicho clic se realiza en el template de este componente, necesitas,      |
  | además, un manejador para el mismo.                                      |
  |=========================================================================*/

  @Output() seleccionarAutorPost = new EventEmitter<User>()
  

  seleccionAutorPost(author: User): void {
    this.seleccionarAutorPost.emit(this.post.author)
  }

  /*=========================================================================|
  | Green Path                                                               |
  |==========================================================================|
  | Expón un atributo de salida con el decorador correspondiente. El tipo de |
  | este atributo debe permitir la emisión de eventos; la idea es enviar al  |
  | componente padre el post sobre el cuál se ha hecho clic. Y puesto que    |
  | dicho clic se realiza en el template de este componente, necesitas,      |
  | además, un manejador para el mismo.                                      |
  |=========================================================================*/

  @Output() seleccionarDetalles = new EventEmitter<Post>()
  constructor () {
    this.seleccionarDetalles = new EventEmitter<Post>()}
    notificarSeleccionDetalles(post: Post): void {this.seleccionarDetalles.emit(this.post);
  }
  

  plainTextToHtml(text: string): string {
    return text ? `<p>${text.replace(/\n/gi, '</p><p>')}</p>` : '';
  }

}

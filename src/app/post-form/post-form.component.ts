import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Post } from '../post';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {

  postForm: FormGroup;

  @Output() postSubmitted: EventEmitter<Post> = new EventEmitter();

  constructor(
    private _userService: UserService,
    private _formBuilder: FormBuilder) {
      this.createForm();
    }

  private createForm() {

    /*=========================================================================|
    | Purple Path                                                              |
    |==========================================================================|
    | Define para este FormGroup los objetos FormControl correspondientes a    |
    | las propiedades 'title', 'intro' y 'body' de los posts. Los dos primeros |
    | son obligatorios, así que recuerda añadir el validador oportuno.         |
    |=========================================================================*/
    /*
    Para crear un nuevo 'FormGroup' debemos indicar en un objeto
    JSON las propiedades que recogeremos del formulario HTML
    A su vez, tambien tendremos disponible los valores que el
    usuario indica en el formulario a través de la propiedad
    'value' del 'FormGroup'.
    */
    this.postForm = this._formBuilder.group({ 
      title: ['', Validators.required],
      intro: ['', Validators.required],
      body: ['']

    });
  }

  emitPostSubmitted(): void {
    const post: Post = this.postForm.value;
    post.likes = [];
    post.categories = [];
    post.author = this._userService.getDefaultUser();
    post.publicationDate = Date.now();
    this.postSubmitted.emit(post);
  }

}

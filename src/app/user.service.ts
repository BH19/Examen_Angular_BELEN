import { Injectable } from '@angular/core';

import { User } from './user';

@Injectable()
export class UserService {

  private readonly DEFAULT_USER = {
    id: 1,
    name: 'PymCoder',
    username: 'pymcoder',
    email: 'pymcoder@postium.com',
    avatar: 'assets/images/pymcoder.jpg'
  };

  getDefaultUser(): User {
    return { ...this.DEFAULT_USER };
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from './user.model';
import { Observable } from 'rxjs';
import { AUserService } from './a-user.service';

@Injectable()
export class UserService implements AUserService {
  private readonly baseRoute = 'https://jsonplaceholder.typicode.com/users';

  constructor(public http: HttpClient) { }

  public getUserById(id: number): Observable<User> {
    return this.http.get(`${this.baseRoute}/${id}`).pipe(
      map((value) => new User(value))
    );
  }
}

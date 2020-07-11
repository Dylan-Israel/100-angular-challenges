import { Observable, of } from 'rxjs';
import { User } from './user.model';
import { AUserService } from './a-user.service';

export class UserServiceMock implements AUserService {
  public lastId: number = null;
  public user = new User();

  public getUserById(id: number): Observable<User> {
    this.lastId = id;

    return of(this.user);
  }
}

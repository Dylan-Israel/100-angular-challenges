import { User } from './user.model';
import { Observable } from 'rxjs';

export abstract class AUserService {
  public abstract getUserById(id: number): Observable<User>;
}


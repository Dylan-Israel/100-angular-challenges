import { UserService } from './user.service';
import { HttpClientMock } from 'src/app/mocks/http-client.mock';
import { User } from './user.model';

describe(UserService.name, () => {
  it('Exists', () => {
    // assert
    expect(UserService).toBeDefined();
  });

  describe('General', () => {
    let service: UserService;
    let http: HttpClientMock;

    beforeEach(() => {
      http = new HttpClientMock();
      service = new UserService(http as any);
    });

    describe('getByUserId', () => {
      it('hits correct route with id', async () => {
        // arrange
        const id = 5;
        const correctUrl = `https://jsonplaceholder.typicode.com/users/${id}`;
        http.lastUrl = null;

        // act
        await service.getUserById(id).toPromise();

        // assert
        expect(http.lastUrl).toBe(correctUrl);
      });

      it('is a GET call', async () => {
        // arrange
        http.lastHttpMethod = null;

        // act
        await service.getUserById(5).toPromise();

        // assert
        expect(http.lastHttpMethod).toBe('GET');
      });

      it('returns a User', async () => {
        // arrange
        const name = 'Dylan';
        http.response = { name };

        // act
        const result = await service.getUserById(5).toPromise();

        // assert
        expect(result).toBeInstanceOf(User);
        expect(result.name).toBe(name);
      });
    });
  });
});

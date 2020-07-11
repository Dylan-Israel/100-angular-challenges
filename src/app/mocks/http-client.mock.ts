import { Observable, of } from 'rxjs';

export class HttpClientMock {
  public lastUrl = '';
  public lastOptions = null;
  public response: { [key: string]: any };
  public lastHttpMethod: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

  public get(url: string, options?: { [key: string]: any }): Observable<any> {
    this.lastUrl = url;
    this.lastOptions = options;
    this.lastHttpMethod = 'GET';

    return of(this.response);
  }
}

import { of } from 'rxjs';

export class UserService {
  private cache: { [key: string]: any } = {};

  getUsers(page: number) {
    const cacheKey = `users-page-${page}`;
    if (this.cache[cacheKey]) {
      return of(this.cache[cacheKey]);
    } else {
      return this.http.get(`${this.apiUrl}?page=${page}`).pipe(
        tap(data => {
          this.cache[cacheKey] = data;
        })
      );
    }
  }
}
import { Router } from '@angular/router';

export class HeaderComponent {
  searchQuery: string;

  constructor(private userService: UserService, private router: Router) {}

  searchUser(): void {
    if (this.searchQuery) {
      this.router.navigate(['/user', this.searchQuery]);
    }
  }
}

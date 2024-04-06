import { Router } from '@angular/router';

export class UserDetailsComponent {
  constructor(private router: Router) {}

  goBack(): void {
    this.router.navigate(['/']);
  }
}

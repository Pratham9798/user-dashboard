import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {

  users: any[] = []; // Initialize with an empty array
@Inject
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((users: any[]) => {
      this.users = users; // Assign fetched users to the array



      UserListComponent.constructor(private Router: Router) {}
  
    navigateToUserDetails(id: number): void
    });

  }




    
      
    
  

}
function navigateToUserDetails(id: any, number: any) {
  throw new Error('Function not implemented.');
}


import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { User } from '../user/user.model';

@Component({
  selector: 'app-service-documentation',
  templateUrl: './service-documentation.component.html',
  styleUrls: ['./service-documentation.component.scss']
})
export class ServiceDocumentationComponent implements OnInit {
  public user: User;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUserById(1).subscribe({
      next: (response: User) => {
        this.user = response;
        console.log(this.user)
      },
      error: (error: Error) => {
        console.log(error);
      },
      complete: () => {
        console.log('Done.');
      }
    });
  }

}

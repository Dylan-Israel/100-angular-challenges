import { Component, OnInit } from '@angular/core';
import { User } from '../user/user.model';
import { UserService } from '../user/user.service';
import { SnackbarService } from '../snackbar/snackbar.service';

@Component({
  selector: 'app-service-documentation',
  templateUrl: './service-documentation.component.html',
  styleUrls: ['./service-documentation.component.scss']
})
export class ServiceDocumentationComponent implements OnInit {
  public user = new User();

  constructor(public userService: UserService, public snackbarService: SnackbarService) { }

  public ngOnInit(): void {
    this.userService.getUserById(1).subscribe({
      next: (response: any) => {
        this.user = response;
        console.log(this.user);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('Done');
      }
    });
  }

  public callSnackbar(): void {
    this.snackbarService.callSnackbar('Snackbar Service Example');
  }
}

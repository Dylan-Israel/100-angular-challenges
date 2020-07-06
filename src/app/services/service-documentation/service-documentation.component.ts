import { Component, OnInit } from '@angular/core';
import { User } from '../user/user.model';
import { UserService } from '../user/user.service';
import { SnackbarService } from '../snackbar/snackbar.service';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Component({
  selector: 'app-service-documentation',
  templateUrl: './service-documentation.component.html',
  styleUrls: ['./service-documentation.component.scss']
})
export class ServiceDocumentationComponent implements OnInit {
  public user = new User();
  public state: { [key: string]: any } = {};

  constructor(
    public userService: UserService,
    public snackbarService: SnackbarService,
    public localStorageService: LocalStorageService
  ) { }

  public ngOnInit(): void {
    this.localStorageService.state$.subscribe((data) => {
      this.state = data;
    });

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

  public updateState(): void {
    this.localStorageService.setState('hello', 'world');
  }
}

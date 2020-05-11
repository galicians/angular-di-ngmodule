import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Dependency Injection';
  userName: string;
  // When this component is created, Angular will inject the singleton instance of `UserService` here
  constructor(private userService: UserService) {}

  signIn(): void {
    this.userService.setUser({
      name: 'Pablo P'
    })
    this.userName = this.userService.getUser().name;
    console.log('User name is: ', this.userName)
  }

}

import { Component, OnInit } from '@angular/core';
import { UsersService } from '@grafficocreation/users';

@Component({
  selector: 'grafficocreation-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'bherwanishop';

  constructor(private usersService : UsersService){}

  ngOnInit() {
    this.usersService.initAppSession()
  }
}

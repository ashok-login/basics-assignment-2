import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: string;
  isValidUsername: Boolean;
  constructor() {
    
  }
// stop doing undo
  ngOnInit(): void {
    this.isUsernameBlank();
  }
  onUpdateUsername(event: Event): void
  {
    this.username= (event.target as HTMLInputElement).value;
  }

  isUsernameBlank(): boolean {
    if(this.username === undefined)
    {
      return false;
    }
    return this.username.length > 0;
  }

  SubmitUsername(): void {
    // this.username = 'The submitted username is: ' + this.username;
    this.username = '';
  }
}

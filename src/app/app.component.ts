import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'engineering-hub';
  constructor(private router: Router) { 
    // console.log(this.router.url)
  }

  ngOnInit(): void {
  }


  onLogin() {
    this.router.navigateByUrl('/login')
  }

  getPath(){
    // console.log(this.router.url)
    return this.router.url;
  }
}

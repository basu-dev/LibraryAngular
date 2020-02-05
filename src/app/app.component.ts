import { navcomponents } from './global/navcomponents';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public router:Router){}
  ngOnInit(): void {

    this.navlist=navcomponents
  }
  navlist;
  title = 'library';
  opened=false;
  Link(link){
    if(link){
      this.router.navigate([link]);
    }
  }
  open(){
    if(this.opened){
      console.log(navcomponents);
    }
  }
  
}

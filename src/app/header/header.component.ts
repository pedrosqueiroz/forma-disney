import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  showMenu = () => {
    var menu = (<HTMLDListElement>document.querySelector('ul'));
    menu.style.display = 'flex';
    menu.style.flexDirection = 'column';
    console.log(menu);
    
}
ngOnInit() {
  
}

}

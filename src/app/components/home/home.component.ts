import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  menu = [
    { name: 'Home', icon: 'home', path: 'form' },
    { name: 'Gallery', icon: 'dashboard', path: 'template' },
    { name: 'Dashboard', icon: 'dashboard', path: 'path2' },
    { name: 'Setting', icon: 'settings', path: 'path3' },
    { name: 'File', icon: 'folder_open', path: 'path4' },
    { name: 'Logout', icon: 'input', path: 'path5' },
  ]
  selectedInd = 0;
  isDark = false;
  constructor(
    private router:Router,
  ) { }

  ngOnInit() {
      this.changeColor()
    }
    changeColor() {
      let t = new Date()
      if(t.getHours()>6 &&t.getHours()<18){
        this.isDark = false
      }else{
        this.isDark = true
      }
    }
  activeRout(route){
    if(this.router.url.includes(route)){
      return true
    }else
    return false;
  }

  selectMenu(item, ind) {
    // this.selectedInd = ind
    this.router.navigate([`home/${item.path}`])

  }
  changeClass() {
    if (this.isDark) {
      return 'dark-cls'
    } else {
      return 'light-cls'
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pnf',
  templateUrl: './pnf.component.html',
  styles: []
})
export class PNFComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  showCondotion() {
    if (this.router.url.includes('home')) {
      return true
    } else
      return false;
}

}

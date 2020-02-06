import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: []
})
export class TemplateComponent implements OnInit {
  data=[
    {name:'Samsung',price:12000,img:'favicon.png',model:"M30"},
]
  constructor() { }

  ngOnInit() {
    for(let i =0; i<20; i++){
      this.data.push({name:'Samsung',price:12000,img:'favicon.png',model:"M30"})
  }
}

}

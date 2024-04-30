import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input()
  product?: any;
  
  delete(id: number){
    console.log(id);
  }
  edit(id:number, image:string, name:string, species:string, gender:string){
    console.log(this.edit );
  }
};

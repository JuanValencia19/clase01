import { Component, Input, input } from '@angular/core';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  constructor(private api: ServicesService){

  }
  onInit(){
    console.log(this.product);
  }
  @Input()
  product?: any;
  
  delete(id: number){
    console.log(id);
  }
  edit(id:number, image:string, name:string, species:string, gender:string){
    console.log(this.edit);
  }
};

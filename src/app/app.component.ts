import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';
import { NgForOf } from '@angular/common';
import { ServicesService } from './services/services.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'clase01';

  products = [
    {
      name: 'Manzana',
      img: "https://www.frutality.es/wp-content/uploads/manzana-royal.png",
      price: '$3',
      description: "Commodo sunt id aliquip anim irure laboris."
    },

    {
      name: 'Pera',
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbqbWlKoOrj9Tr_VtppX9BqxQ_pVJ4qhYte5Whc9VGdg&s",
      price: '$5',
      description: "Commodo sunt id aliquip anim irure laboris."
    },

    {
      name: 'Sandia',
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUm02Ec4aB3J7VNIn3s_c850nu7S1FDpj2jY5PutKCNA&s",
      price: '$10',
      description: "Commodo sunt id aliquip anim irure laboris."
    },

    {
      name: 'Zanahoria',
      img: "https://blog.cruzverde.com.co/images/crema-de-zanahoria-1.png",
      price: '$2',
      description: "Commodo sunt id aliquip anim irure laboris."
    },

    {
      name: 'Mango',
      img: "https://www.fedemango.org/wp-content/uploads/2023/03/Mango-Yulima.png",
      price: 'Colombia',
      description: "Commodo sunt id aliquip anim irure laboris."
    },
  ]
  constructor(private api: ServicesService) {

  }
  ngOnInit() {
    this.api.getAllCharacters();
  }
}

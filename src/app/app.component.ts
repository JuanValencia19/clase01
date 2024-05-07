import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';
import { NgForOf } from '@angular/common';
import { ServicesService } from './services/services.service';
import { FormControl, ReactiveFormsModule,  } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, NgForOf, ReactiveFormsModule],
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

  info: any;

  name= new FormControl('');
  image= new FormControl('');
  status= new FormControl('');
  species= new FormControl('');
  type= new FormControl('');
  gender= new FormControl('');

  ngOnInit() {
    return this.api.getAllCharacters().subscribe((characters: any) => {
      console.log(characters);
      this.products = characters.results;
    });
  }

  OnSummit(){
    const newCharater = {
      name: this.name.value,
      status: this.status.value,
      species: this.species.value,
      type: this.type.value,
      gender: this.gender.value
    };
    this.api.createCharacter(newCharater).subscribe((res) =>{
      console.log(res);
    });
  }
}

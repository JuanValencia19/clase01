import { Component, } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';
import { NgForOf } from '@angular/common';
import { ServicesService } from './services/services.service';
import { FormControl, ReactiveFormsModule, } from '@angular/forms';


declare var bootstrap: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, NgForOf, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {

  products: any[] = [];

  constructor(private api: ServicesService) {

  }

  info: any;

  title = new FormControl('');
  price = new FormControl('');
  description = new FormControl('');
  images = new FormControl('');

  ngOnInit() {
    return this.api.getAllCharacters().subscribe((products: any) => {
      console.log(products);
      products.map((item: any) => {


        let imageStringify = JSON.stringify(item.images); // convertimos el array de imagenes a string
        
        
        let imageNoGarbage = imageStringify
        
        
        .substring(2, imageStringify.length - 2)
        
        
        .replaceAll('\\', ' ')
        
        
        .replaceAll('""', '"')
        
        
        .replaceAll('" "', '"')
        
        
        .replaceAll(' ', '');
        
        
        try {
        
        
        item.images = JSON.parse(imageNoGarbage);
        
        
        item.imagesActual = item.images[0];
        
        
        } catch (e) {}
        
        
        });
      this.products = products;
    });
  }

  OnSummit() {
    const newCharater = {
      title: this.title.value,
      price: this.price.value,
      description: this.description.value,
      images: [this.images.value]
    };
  
    this.api.createCharacter(newCharater).subscribe(
      (response) => {
        console.log('Nuevo producto creado:', response);
        // Aquí podrías realizar alguna acción adicional después de crear el nuevo producto, como recargar la lista de productos
      },
      (error) => {
        console.error('Error al crear el nuevo producto:', error);
        // Aquí podrías manejar el error de manera adecuada, como mostrar un mensaje de error al usuario
      }
    );
  }
  onDeleteProduct(product: any) {
    const index = this.products.indexOf(product);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }
}

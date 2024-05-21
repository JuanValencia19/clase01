import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ServicesService } from '../services/services.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,FormsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})

export class CardComponent {
  constructor(private api: ServicesService) {

  }
  onInit() {
    console.log(this.product);
  }
  @Input()
  product?: any;
  @Output() deleteProduct: EventEmitter<any> = new EventEmitter();
  editing: boolean = false;
  editedProduct: any = {};
  @Output() productCreated: EventEmitter<any> = new EventEmitter();


  onDeleteClick() {
    this.deleteProduct.emit(this.product);
  }
  toggleEdit() {
    this.editing = !this.editing;
    this.editedProduct = {
      title: this.product.title,
      description: this.product.description,
      price: this.product.price,
      images: this.product.images
    };
  }

  onSubmit() {
    this.api.updateCharacter(this.product.id, this.editedProduct);
    this.editing = false;
  }
}
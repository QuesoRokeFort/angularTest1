import { Component,Output,EventEmitter } from '@angular/core';
import { Wishitem } from '../../shared/models/wishitem';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'add-wish-form',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './add-wish-form.component.html',
  styleUrl: './add-wish-form.component.css'
})
export class AddWishFormComponent {
  @Output() addWish = new EventEmitter<Wishitem>();
  newWishText='';
  
  addNewWish(){
    this.addWish.emit(new Wishitem(this.newWishText));
    this.newWishText = '';
  }

}

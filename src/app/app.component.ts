import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule
import { RouterOutlet } from '@angular/router';
import { Wishitem } from '../shared/models/wishitem';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,FormsModule],  // Add CommonModule to the imports array
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Fix the typo in styleUrls
})
export class AppComponent {
  items : Wishitem[] = [
    new Wishitem('To Learn Angular'),
    new Wishitem('Get coffee', true),
    new Wishitem('Find grass that cuts itself'),
    new Wishitem('another test'),
  ];

  newWishText='';
  title = 'Wishlist';

  toggleItem(item : Wishitem){
    item.isComplete = !item.isComplete;
    console.log(item);
  }
  deleteElement(item : Wishitem, index : number) {
    this.items.splice(index,1);
    }
  addNewWish(){
    this.items.push(new Wishitem(this.newWishText));
    this.newWishText = '';
  }
}
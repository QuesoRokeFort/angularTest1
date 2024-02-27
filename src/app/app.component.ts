import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { Wishitem } from '../shared/models/wishitem';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,FormsModule,WishListComponent,AddWishFormComponent,WishFilterComponent], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  
})

export class AppComponent {
  items : Wishitem[] = [
    new Wishitem('To Learn Angular'),
    new Wishitem('Get coffee', true),
    new Wishitem('Find grass that cuts itself'),
    new Wishitem('another test'),
  ];
  filter:any = () => {};
  title = 'WishList';

  get visibleItems(): Wishitem[]{
    return this.items.filter(this.filter);
  }
}
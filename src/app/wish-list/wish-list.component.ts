import { Component, Input,Output,EventEmitter} from '@angular/core';
import { Wishitem } from '../../shared/models/wishitem';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'wish-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css'
})
export class WishListComponent {
  @Output() deleteItem = new EventEmitter<Wishitem>();
  @Input() items :Wishitem[] = [];
  toggleItem(item : Wishitem){
    item.isComplete = !item.isComplete;
  }
  deleteElement(item : Wishitem,) {
      this.deleteItem.emit(item);
    }
}

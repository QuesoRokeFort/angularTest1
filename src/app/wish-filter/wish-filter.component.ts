import { Component ,Output,EventEmitter,OnInit} from '@angular/core';
import { Wishitem } from '../../shared/models/wishitem';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
const filters=[
  (item :Wishitem ) => item,
  (item :Wishitem ) => !item.isComplete,
  (item :Wishitem ) => item.isComplete
];

@Component({
  selector: 'wish-filter',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './wish-filter.component.html',
  styleUrl: './wish-filter.component.css'
})
export class WishFilterComponent {

  @Output() filter = new EventEmitter<any>();

  listFilter: any = '0';

  ngOnInit():void{
    this.filter.emit(filters['0']);
  }
  
  cangeFilter(value : any){
    this.filter.emit(filters[value])
  }
}

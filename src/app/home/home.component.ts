import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  products=[

    {
    },
    {
    }
  ]
  searchText:string = '';

  search(){
    console.log(this.searchText, 'SEARCH')
  }
}

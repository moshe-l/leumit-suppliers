import { Component, OnInit } from '@angular/core';
import { SuppliersService } from "../../services/suppliers.servics";

@Component({
  selector: 'app-search-suppliers',
  templateUrl: './search-suppliers.component.html',
  styleUrls: ['./search-suppliers.component.css']
})
export class SearchSuppliersComponent implements OnInit {
  
  inputText: string;
  searchText: string;

  constructor(public svc : SuppliersService) {  }

  ngOnInit() {
  }

}

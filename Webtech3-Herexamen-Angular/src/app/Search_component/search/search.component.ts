import { Component, OnInit } from '@angular/core';
import overtredingen from '../../../../overtredingen.json'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(overtredingen);
  }

}

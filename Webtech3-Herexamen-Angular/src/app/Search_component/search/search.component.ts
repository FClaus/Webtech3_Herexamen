import { Component, OnInit } from '@angular/core';
import overtredingen from '../../../../overtredingen.json'
import { OvertredingenService } from 'src/app/services/overtredingen.service.js';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  overtredingenArray = [];

  constructor(private overtredingService: OvertredingenService) { }

  ngOnInit() {
    console.log(overtredingen);
  }

  onSubmitStraat(opnameplaats: string){
    this.overtredingenArray = this.overtredingService.getSearchStraat(opnameplaats);
  }

  onSubmitSnelheid(aantalOvertredingen: Number){
    this.overtredingenArray = this.overtredingService.getSearchAantalOvertredingen(aantalOvertredingen);
  }
}

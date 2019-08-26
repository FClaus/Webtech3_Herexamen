import { Injectable } from '@angular/core';
import overtredingen from '../../../overtredingen.json'
import {Overtreding} from '../model/overtreding';
import { ParsedEvent } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class OvertredingenService {
  overtredingenArray = [];

  constructor() { }

  getAllOvertredingen(): Array<any[]>{
    overtredingen.forEach(Overtreding => {
      this.overtredingenArray.push(Overtreding);
  })
  return this.overtredingenArray;
  }

  getSearchStraat(text: string): Array<any[]>{
    this.overtredingenArray = [];

    overtredingen.forEach(Overtreding => {
      if(text == Overtreding.opnameplaats_straat){
        this.overtredingenArray.push(Overtreding);
      }
  })
  return this.overtredingenArray;
}

getSearchAantalOvertredingen(nummer: Number): Array<any[]>{
  this.overtredingenArray = [];

  overtredingen.forEach(Overtreding => {
    if(nummer <= Overtreding.aantal_overtredingen_snelheid){
      this.overtredingenArray.push(Overtreding);
    }
})

  return this.overtredingenArray;
}
}

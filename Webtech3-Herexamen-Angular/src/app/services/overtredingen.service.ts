import { Injectable } from '@angular/core';
import overtredingen from '../../../overtredingen.json'
import {Overtreding} from '../model/overtreding';

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
}

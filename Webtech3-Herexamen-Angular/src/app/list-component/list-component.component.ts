import { Component, OnInit } from '@angular/core';
import { OvertredingenService } from '../services/overtredingen.service.js';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent implements OnInit {

  overtredingenArray = [];

  constructor(private overtredingService: OvertredingenService) { }

  ngOnInit() {
    
     this.overtredingenArray = this.overtredingService.getAllOvertredingen();
  }

}

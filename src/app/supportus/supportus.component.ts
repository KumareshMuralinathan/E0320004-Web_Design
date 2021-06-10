import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supportus',
  templateUrl: './supportus.component.html',
  styleUrls: ['./supportus.component.css']
})
export class SupportusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  org=[
    {name:'Bachpan Bachao Andolan', cont: '+91 9856743128',},
    {name:'Goonj', cont:'+91 9094040144',},
    {name:'Child In Need Institute', cont:'+91 7456488873', },
  ];

}

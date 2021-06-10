import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apj',
  templateUrl: './apj.component.html',
  styleUrls: ['./apj.component.css']
})
export class ApjComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
Apj_awards=["IEEE Honorary Membership","Ramanujan Award","Bharat Ratna","Indira Gandhi Award for National Integration",
"SASTRA Ramanujan Prize","International von Kármán Wings Award","Veer Savarkar Award", "Hoover Medal"
,"King Charles II Medal"];

}

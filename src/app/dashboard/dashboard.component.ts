import { Component, OnInit } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  tables = [
    { title: 'Project Title', description: 'Description', date: '10 Nov 2017' },
    { title: 'Project Title', description: 'Description', date: '9 Nov 2017' },
    { title: 'Project Title', description: 'Description', date: '8 Nov 2017' },
    { title: 'Project Title', description: 'Description', date: '7 Nov 2017' },
    { title: 'Project Title', description: 'Description', date: '6 Nov 2017' }
  ];
  constructor() { }

  ngOnInit() {
  }
}

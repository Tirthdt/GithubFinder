import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  historyData: string[] = [];

  constructor() {}

  ngOnInit(): void {
    const d = localStorage.getItem('history');
    this.historyData = JSON.parse(d ? d : '[]');
    console.log(this.historyData);
  }

  clearHistory() {
    localStorage.setItem('history', JSON.stringify([]));
    const d = localStorage.getItem('history');
    this.historyData = JSON.parse(d ? d : '[]');
  }
}

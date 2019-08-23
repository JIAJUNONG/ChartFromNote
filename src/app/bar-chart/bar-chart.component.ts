import { Component, OnInit } from '@angular/core';
import data from '../../moviePreferenceStats.js';
import { Label } from 'ng2-charts';
import { ChartType, ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  public barChartLabels: Label[] = ['a', 'b', 'c', 'd'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartData: ChartDataSets[] = [
    { data: [5, 15, 14, 7], label: 'Series 1' },
    { data: [10, 12, 8, 8], label: 'Series 2' }
  ];


  constructor() { }

  ngOnInit() {
    const example = data;
    debugger;
  }

}





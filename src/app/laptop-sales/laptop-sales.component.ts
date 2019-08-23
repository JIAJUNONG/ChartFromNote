import { Component, OnInit } from '@angular/core';
import { Label } from 'ng2-charts';
import { ChartType } from 'chart.js';
import data from '../../laptopSales';

@Component({
  selector: 'app-laptop-sales',
  templateUrl: './laptop-sales.component.html',
  styleUrls: ['./laptop-sales.component.css']
})
export class LaptopSalesComponent implements OnInit {
  public pieChartLabels: Label[] = [];
  public pieChartData: number[] = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
    },
  ];


  constructor() { }

  ngOnInit() {
    for (const laptop of data) {
      // add it to the labels
      // add it to the pie chart data
      this.pieChartLabels.push(laptop.model)
      this.pieChartData.push(laptop.numberOfSales)
    }
  }

}

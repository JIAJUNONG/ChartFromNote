import { Component, OnInit } from '@angular/core';
import data from '../../multiYearLaptopSales.js';
import { Label } from 'ng2-charts';
import { ChartType, ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-laptop-sales-by-model-by-month',
  templateUrl: './laptop-sales-by-model-by-month.component.html',
  styleUrls: ['./laptop-sales-by-model-by-month.component.css']
})
export class LaptopSalesByModelByMonthComponent implements OnInit {
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartData: ChartDataSets[] = [
    // { data: [2000, 1500, 1000], label: 'XPS' },
  ];

  constructor() { }

  ngOnInit() {
    const salesData = data;

    const tempDataStore = {};
    // {
    //   2018: {
    //     xps: 2000,
    //     latitude: 1500
    //   },
    //   2017: {
    //     xps: 1500,
    //     latitude: 2000
    //   }
    // }

    for (const transaction of salesData) {
      const monthfromData = transaction.transactionDate;
      const formatmonthdata = new Date(monthfromData).getMonth() + 1;
      // const month = formatmonthdata.getMonth;
      // console.log(formatmonthdata);
      const model = transaction.model;
      // tempDataStore[year]
      //   {
      //     xps: 1500,
      //     latitude: 2000
      //   }


      if (tempDataStore[formatmonthdata]) {
        if (tempDataStore[formatmonthdata][model]) {
          // if model is found increase count by one
          tempDataStore[formatmonthdata][model] += 1;
        } else {
          // if model not found in year, set as 1
          tempDataStore[formatmonthdata][model] = 1;
        }
      } else {
        // create an empty object for that year and set count for model as 1
        tempDataStore[formatmonthdata] = {};
        tempDataStore[formatmonthdata][model] = 1;
      }
    }

    const modelSalesCount = {};
    // {
    //   xps: [2000, 1500],
    //   latitude: [1500, 2000]
    // }

    for (const month in tempDataStore) {
      this.barChartLabels.push(month)
      for(let model in tempDataStore[month]){
        if(modelSalesCount[model]){
          modelSalesCount[model].push(tempDataStore[month][model])
        } else {
          modelSalesCount[model] = [tempDataStore[month][model]]
        }
      }
    }

    for (const model in modelSalesCount) {
      this.barChartData.push(
        {data: modelSalesCount[model], label: model}
      );
    }
  }

}

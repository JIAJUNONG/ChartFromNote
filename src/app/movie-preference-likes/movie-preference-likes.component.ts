import { Component, OnInit } from '@angular/core';
import { Label } from 'ng2-charts';
import { ChartType } from 'chart.js';
import data from '../../moviePreferenceComplicated';

@Component({
  selector: 'app-movie-preference-likes',
  templateUrl: './movie-preference-likes.component.html',
  styleUrls: ['./movie-preference-likes.component.css']
})
export class MoviePreferenceLikesComponent implements OnInit {
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
    const movieData = data;
    console.log(movieData);

    const likes = {};
    for (const x of movieData) {

      for ( const movieName of x.movies) {
        if (likes[movieName]) {
          // if movie already checked, increment by 1
          likes[movieName] += 1;
        } else {
          // if movie not yet checked, set to 1
          likes[movieName] = 1;
        }
      }
    }

    for (const key in likes) {
      this.pieChartLabels.push(key)
      const numLikes = likes[key]
      this.pieChartData.push(numLikes)
    }

  }

}

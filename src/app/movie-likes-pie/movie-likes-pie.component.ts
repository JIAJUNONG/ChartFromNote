import { Component, OnInit } from '@angular/core';
import { Label } from 'ng2-charts';
import { ChartType } from 'chart.js';
import data from '../../movieUserPreference'

interface UserPreferenceData {
  name: string
  movie: string
}

@Component({
  selector: 'app-movie-likes-pie',
  templateUrl: './movie-likes-pie.component.html',
  styleUrls: ['./movie-likes-pie.component.css']
})
export class MovieLikesPieComponent implements OnInit {
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
    const movieData = data as UserPreferenceData[]

    let likes = {}

    for (const x of movieData) {
      if (likes[x.movie]) {
        // if movie already checked, increment by 1
        likes[x.movie] += 1
      } else {
        // if movie not yet checked, set to 1
        likes[x.movie] = 1
      }

    }

    for (const key in likes) {
      this.pieChartLabels.push(key)
      const numLikes = likes[key]
      this.pieChartData.push(numLikes)
    }
  }

}

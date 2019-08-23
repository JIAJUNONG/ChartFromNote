import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LaptopSalesComponent } from './laptop-sales/laptop-sales.component';
import { MovieLikesComponent } from './movie-likes/movie-likes.component';
import { MovieLikesPieComponent } from './movie-likes-pie/movie-likes-pie.component';
import { MoviePreferenceLikesComponent } from './movie-preference-likes/movie-preference-likes.component';
import { LaptopSalesByYearModelComponent } from './laptop-sales-by-year-model/laptop-sales-by-year-model.component';
import { LaptopSalesByModelByMonthComponent } from './laptop-sales-by-model-by-month/laptop-sales-by-model-by-month.component';

const routes: Routes = [
  {path: 'line-chart', component: LineChartComponent},
  {path: 'bar-chart', component: BarChartComponent},
  {path: 'pie-chart', component: PieChartComponent},
  {path: 'laptop-sales', component: LaptopSalesComponent},
  {path: 'movie-likes', component: MovieLikesComponent},
  {path: 'movie-likes-pie', component: MovieLikesPieComponent},
  {path: 'movie-preference-likes', component: MoviePreferenceLikesComponent},
  {path: 'laptop-sales-year-model', component: LaptopSalesByYearModelComponent},
  {path: 'laptop-sales-month-model', component: LaptopSalesByModelByMonthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

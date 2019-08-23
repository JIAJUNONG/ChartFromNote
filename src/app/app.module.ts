import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { LaptopSalesComponent } from './laptop-sales/laptop-sales.component';
import { MovieLikesComponent } from './movie-likes/movie-likes.component';
import { MovieLikesPieComponent } from './movie-likes-pie/movie-likes-pie.component';
import { MoviePreferenceLikesComponent } from './movie-preference-likes/movie-preference-likes.component';
import { LaptopSalesByYearModelComponent } from './laptop-sales-by-year-model/laptop-sales-by-year-model.component';
import { LaptopSalesByModelByMonthComponent } from './laptop-sales-by-model-by-month/laptop-sales-by-model-by-month.component';

@NgModule({
  declarations: [
    AppComponent,
    PieChartComponent,
    BarChartComponent,
    LineChartComponent,
    LaptopSalesComponent,
    MovieLikesComponent,
    MovieLikesPieComponent,
    MoviePreferenceLikesComponent,
    LaptopSalesByYearModelComponent,
    LaptopSalesByModelByMonthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

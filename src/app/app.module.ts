import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { UserService } from './user.service';
import { Metric, AnalyticsImplementation } from './analytics-demo.interface';
import { AnalyticsService } from './analytics.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent ],
  providers: [ UserService,{ provide: AnalyticsService, useFactory() { const loggingImplementation: AnalyticsImplementation = {
    recordEvent: (metric: Metric): void => {
      console.log('The metric is :', metric)
    }
  }
return new AnalyticsService(loggingImplementation)
  }} ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

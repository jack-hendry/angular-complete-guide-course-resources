import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { StatusComponent } from './dashboard/status/status.component';
import { TrafficChartComponent } from './dashboard/traffic-chart/traffic-chart.component';
import { SupportTicketsComponent } from './dashboard/support-tickets/support-tickets.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    StatusComponent,
    TrafficChartComponent,
    SupportTicketsComponent,
  ],
})
export class AppComponent {}

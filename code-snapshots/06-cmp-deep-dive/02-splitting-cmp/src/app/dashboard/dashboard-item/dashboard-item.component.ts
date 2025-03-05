import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css'
})
export class DashboardItemComponent {
  // @Input({required: true}) img: { src: string; alt: string } | undefined;
  // @Input({required: true}) title: string | undefined;
  // @Input({required: true}) description: string | undefined;


  img = input.required<{ src: string; alt: string }>();
  title = input.required<string>();
  description = input.required<string>();
}

import { AfterViewInit, Component, contentChild, ContentChild, ElementRef, inject, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()'
  },
})
export class ControlComponent implements AfterViewInit{
  label = input.required<string>();
  private el = inject(ElementRef);
  // @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;
  private form = contentChild.required<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  ngAfterViewInit(): void {
    console.log("AFTER View INIT")
    console.log(this.form().nativeElement);
  }
  onClick() {
    console.log('Control clicked');
    console.log(this.el)
    console.log(this.form())
  } 
}

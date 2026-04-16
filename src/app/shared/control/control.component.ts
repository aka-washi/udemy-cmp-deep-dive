import { Component, HostBinding, HostListener, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()'
  }
})
export class ControlComponent {
  // Alternative to using @HostBinding but discouraged as it is less efficient and more verbose
  // @HostBinding('class') className = 'control';
  // @HostListener('click') onClickHost() {
  //   console.log('Clicked control with label: ' + this.label);
  // }
  label = input.required<string>();

  onClick() {
    console.log('Clicked control with label: ' + this.label);
  }
}

import {
  AfterContentInit,
  afterNextRender,
  Component,
  contentChild,
  ContentChild,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

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
export class ControlComponent implements OnInit, AfterContentInit {
  // Alternative to using @HostBinding but discouraged as it is less efficient and more verbose
  // @HostBinding('class') className = 'control';
  // @HostListener('click') onClickHost() {
  //   console.log('Clicked control with label: ' + this.label);
  // }
  label = input.required<string>();
  private el = inject(ElementRef);
  // @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;
  private control =
    contentChild.required<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  constructor() {
    console.log('CONSTRUCTOR');

    afterNextRender(() => {
      console.log('AFTER NEXT RENDER');
      console.log(this.control());
    });
  }

  ngOnInit(): void {
    console.log('ON INIT');
    console.log(this.control());
  }

  ngAfterContentInit(): void {
    console.log('AFTER CONTENT INIT');
    console.log(this.control());
  }

  onClick() {
    console.log('Clicked control with label: ' + this.label);
    console.log('Element reference:', this.el);
    console.log('Control reference:', this.control());
  }
}

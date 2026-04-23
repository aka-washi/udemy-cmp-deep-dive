import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, output, Output, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  //@ViewChild('form') private form?: ElementRef<HTMLFormElement>;

  // Signal available in Angular 17.3 or later
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  // @Output() add = new EventEmitter<{ title: string; request: string }>();
  add = output<{ title: string; request: string }>();

  ngOnInit(): void {
    console.log('ON INIT');
    console.log(this.form().nativeElement);
  }

  ngAfterViewInit() {
    console.log('AFER VIEW INIT');
    console.log(this.form().nativeElement);
  }

  // Alternatively to two-way binding, we can also use template reference variables to access the input values on submit.
  onSubmit(titleInput: string, requestInput: string) {
    this.add.emit({ title: titleInput, request: requestInput });

    this.form().nativeElement.reset();
  }
}

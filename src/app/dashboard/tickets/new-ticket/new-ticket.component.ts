import { Component, ElementRef, viewChild, ViewChild } from '@angular/core';
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
export class NewTicketComponent {
  //@ViewChild('form') private form?: ElementRef<HTMLFormElement>;

  // Signal available in Angular 17.3 or later
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  // Alternatively to two-way binding, we can also use template reference variables to access the input values on submit.
  onSubmit(titleInput: string, requestInput: string) {
    const title = titleInput;
    const request = requestInput;
    console.log({ title, request });

    this.form().nativeElement.reset();
  }
}

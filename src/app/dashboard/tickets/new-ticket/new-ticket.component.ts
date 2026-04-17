import { Component } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {

  // Alternatively to two-way binding, we can also use template reference variables to access the input values on submit.
  onSubmit(titleInput: string, requestInput: string) {
    const title = titleInput;
    const request = requestInput;
    console.log({ title, request });
  }
}

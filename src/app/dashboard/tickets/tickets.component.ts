import { Component } from '@angular/core';
import { NewTicket } from "./new-ticket/new-ticket.component";

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicket],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {

}

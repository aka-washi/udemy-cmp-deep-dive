import { Component, DestroyRef, inject, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit {
  currentStatus = signal<'online' | 'offline' | 'unknown'>('offline');
  //private intervalId?: ReturnType<typeof setInterval>;
  private destroyRef = inject(DestroyRef); // alternative to OnDestroy on newer Angular versions

  constructor() {}

  ngOnInit() {
    // Simulate fetching server status from an API
    const intervalId = setInterval(() => {
      const rnd = Math.random();

      if (rnd < 0.5) {
        this.currentStatus.set('online');
      } else if (rnd < 0.8) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 5000);

    this.destroyRef.onDestroy(() => {
      // Clean up the interval when the component is destroyed
        clearInterval(intervalId);
    });
  }

  //   ngOnDestroy(): void {
  //   if (this.intervalId) {
  //     clearInterval(this.intervalId);
  //   }
  // }

}

import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  readonly TRANSITION_SECONDS = 5;
  readonly COUNTDOWN_INTERVAL = 1000;
  countdown: number;

  constructor(private router: Router) {
    this.countDown();
  }

  ngOnInit() {
  }

  countDown() {
    this.countdown = this.TRANSITION_SECONDS;
    interval(this.COUNTDOWN_INTERVAL).pipe(
      take(this.TRANSITION_SECONDS)).subscribe(() => {
        this.countdown--;
        if (this.countdown === 0) { this.router.navigate(['./login']); }
      });
  }

}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss']
})
export class CountdownTimerComponent {
  private countDownTime: Date;
  private timerNumerics = {
    milliseconds: 1000,
    minuteInSeconds: 60,
    minutesInHour: 60,
    hoursInDay: 24
  };
  @Input() set time(value: string) {
    this.countDownTime = new Date(value);
  }

  private getTimeDifference(): number {
    const countDownTime = new Date(this.countDownTime).getTime();
    const currentTime = new Date().getTime();
    const timeDifference = countDownTime - currentTime;

    return timeDifference;
  }

  get days(): string {
    const { milliseconds, minuteInSeconds, minutesInHour, hoursInDay } = this.timerNumerics;
    const days = Math.floor(this.getTimeDifference() / (hoursInDay * minutesInHour * minuteInSeconds * milliseconds));

    return days < 10 ? `0${days}` : `${days}`;
  }

  get hours(): string {
    const { milliseconds, minuteInSeconds, minutesInHour, hoursInDay } = this.timerNumerics;
    const hours = Math.floor((this.getTimeDifference() % (hoursInDay * minutesInHour * minuteInSeconds * milliseconds))
      / (minutesInHour * minuteInSeconds * milliseconds));

    return hours < 10 ? `0${hours}` : `${hours}`;
  }

  get minutes(): string {
    const { milliseconds, minuteInSeconds, minutesInHour } = this.timerNumerics;
    const minutes = Math.floor(
      (this.getTimeDifference() % (minutesInHour * minuteInSeconds * milliseconds))
      / (minuteInSeconds * milliseconds));

    return minutes < 10 ? `0${minutes}` : `${minutes}`;
  }

  get seconds(): string {
    const { milliseconds, minuteInSeconds } = this.timerNumerics;
    const seconds = Math.floor((this.getTimeDifference() % (minuteInSeconds * milliseconds)) / milliseconds);

    return seconds < 10 ? `0${seconds}` : `${seconds}`;
  }

}

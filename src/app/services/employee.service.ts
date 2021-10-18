import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor() {}
  msToTime(duration: number): string {
    let milliseconds = Math.floor((duration % 1000) / 100),
      seconds: string | number = Math.floor((duration / 1000) % 60),
      minutes: string | number = Math.floor((duration / (1000 * 60)) % 60),
      hours: string | number = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = hours < 10 ? `0 ${hours}` : hours;
    minutes = minutes < 10 ? `0 ${minutes}` : minutes;
    seconds = seconds < 10 ? `0 ${seconds}` : seconds;

    return `${hours} : ${minutes} : ${seconds} .${milliseconds}`;
  }
  getCurrentDate(): string {
    const date = new Date();
    return date.toLocaleString();
  }
}

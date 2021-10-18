import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { AttendanceListComponent } from '../attendance-list/attendance-list.component';

@Component({
  selector: 'app-attendance-record',
  templateUrl: './attendance-record.component.html',
  styleUrls: ['./attendance-record.component.scss'],
})
export class AttendanceRecordComponent implements OnInit, OnDestroy {
  counter: any = '00 : 00 : 00. 0';
  timerRef;
  isRunning: boolean = false;
  employeeId = 0;
  employeeName = '';
  attendanceList = [];
  @ViewChild(AttendanceListComponent, { static: false })
  private attendanceListComp: AttendanceListComponent;

  constructor(private employeeSvc: EmployeeService) {}
  ngOnInit(): void {}

  startTimer(): void {
    this.employeeId++;
    this.isRunning = !this.isRunning;
    this.counter = undefined;

    if (this.isRunning) {
      const startTime = Date.now() - (this.counter || 0);
      this.timerRef = setInterval(() => {
        this.counter = Date.now() - startTime;
        this.counter = this.employeeSvc.msToTime(this.counter);
      });
    } else {
      clearInterval(this.timerRef);
    }

    this.attendanceList.push({
      employeeId: this.employeeId,
      employeeName: this.employeeName,
      timeIn: this.employeeSvc.getCurrentDate(),
    });
    this.attendanceListComp.instantiateTable();
  }

  clearTimer(): void {
    this.isRunning = false;
    this.counter = undefined;
    clearInterval(this.timerRef);
  }
  employeeCheckout(): void {
    for (let i = 0; i < this.attendanceList.length; i++) {
      const element = this.attendanceList[i];
      if (element['employeeId'] === this.employeeId) {
        element['timeOut'] = this.employeeSvc.getCurrentDate();
        this.attendanceListComp.instantiateTable();
        break;
      }
    }
    this.clearTimer();
    this.employeeName = '';
    localStorage.setItem('attendanceList', JSON.stringify(this.attendanceList));
  }
  ngOnDestroy(): void {
    clearInterval(this.timerRef);
  }
}

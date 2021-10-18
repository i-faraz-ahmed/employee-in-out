import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-attendance-list',
  templateUrl: './attendance-list.component.html',
  styleUrls: ['./attendance-list.component.scss'],
})
export class AttendanceListComponent implements OnInit {
  selectedIndex = null;
  displayedColumns: string[] = ['name', 'time_in', 'time_out'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<any>;
  constructor(public employeeSvc: EmployeeService) {}
  @Input() attendanceList: any[];
  ngOnInit(): void {
    this.instantiateTable();
  }
  instantiateTable(): void {
    this.dataSource = new MatTableDataSource<any[]>(this.attendanceList);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}

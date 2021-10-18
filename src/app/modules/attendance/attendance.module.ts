import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttendanceRecordComponent } from './attendance-record/attendance-record.component';
import { AttendanceRoutingModule } from './attendance-routing.module';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { AttendanceListComponent } from './attendance-list/attendance-list.component';

@NgModule({
  declarations: [AttendanceRecordComponent, AttendanceListComponent],
  imports: [CommonModule, AttendanceRoutingModule, MaterialModule, FormsModule],
})
export class AttendanceModule {}

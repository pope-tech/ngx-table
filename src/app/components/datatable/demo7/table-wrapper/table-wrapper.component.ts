import {
  AfterViewInit,
  Component,
  ContentChildren,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
  QueryList, TemplateRef, ViewChild
} from '@angular/core';
import { ColumnWrapperComponent } from "../column-wrapper/column-wrapper.component";

@Component({
  selector: 'app-table-wrapper',
  templateUrl: './table-wrapper.component.html',
  styleUrls: ['./table-wrapper.component.css']
})
export class TableWrapperComponent implements OnInit, AfterViewInit {

  @Input() title;
  @Input() items;
  @Input() itemCount;
  @Input() pageLimits;
  @Input() wrapperClass;
  @Input() rowTooltip;

  @Output() reload = new EventEmitter();
  @Output() rowClick = new EventEmitter();
  @Output() rowDoubleClick = new EventEmitter();
  @ContentChildren(ColumnWrapperComponent) columns: QueryList<ColumnWrapperComponent>;
  constructor() { }

  ngOnInit() {
    console.log('Init');
  }

  ngAfterViewInit(): void {
    console.log('After view init');
    console.log(this.columns);
    console.log(this.columns.first);
  }

  public onReload(event)
  {
    this.reload.emit(event);
  }

  public onRowClick(event)
  {
    this.rowClick.emit(event);
  }

  public onRowDoubleClick(event)
  {
    this.rowDoubleClick.emit(event);
  }

}

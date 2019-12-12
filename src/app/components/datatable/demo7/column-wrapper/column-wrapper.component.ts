import {
  AfterContentChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ContentChild,
  Input,
  OnInit,
  TemplateRef,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-column-wrapper',
  templateUrl: './column-wrapper.component.html',
  styleUrls: ['./column-wrapper.component.css']
})
export class ColumnWrapperComponent implements OnInit, AfterViewInit {

  @Input() property;
  @Input() header;
  @Input() sortable;
  @Input() resizable;
  @Input() visible;
  @Input() width;
  public showCellTemplate: TemplateRef<any>;
  public showHeaderTemplate: TemplateRef<any>;

  @ContentChild('cellTemplate', { static: true, read: TemplateRef}) cellTemplate: TemplateRef<any>;
  @ViewChild('cellTemplate', { static:  true, read: TemplateRef }) defaultCellTemplate: TemplateRef<any>;

  @ContentChild('headerTemplate', { static: true, read: TemplateRef}) headerTemplate: TemplateRef<any>;
  @ViewChild('headerTemplate', { static:  true, read: TemplateRef }) defaultHeaderTemplate: TemplateRef<any>;

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.showCellTemplate = this.defaultCellTemplate;
    this.showHeaderTemplate = this.defaultHeaderTemplate;
  }

  ngAfterViewInit(): void {

    if(this.cellTemplate) {
      this.showCellTemplate = this.cellTemplate;
    }

    if(this.headerTemplate) {
      this.showHeaderTemplate = this.headerTemplate;
    }

  }

}

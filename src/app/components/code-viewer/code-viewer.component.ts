import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, of } from 'rxjs';

import hljs from 'highlight.js/lib/core';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'code-viewer',
  templateUrl: './code-viewer.component.html',
  styleUrls: ['./code-viewer.component.css']
})
export class CodeViewerComponent {

  @ViewChild('tsViewerNode') tsNode: ElementRef;
  @ViewChild('htmlViewerNode') htmlNode: ElementRef;
  @ViewChild('cssViewerNode') cssNode: ElementRef;

  showTsNode = true;
  showHtmlNode = true;
  showCssNode = true;

  tsContent = '';
  htmlContent = '';
  cssContent = '';

  visibility = false;
  baseUrl = 'assets/src';
  path = '';

  constructor(private http: HttpClient) {
    hljs.configure({ languages: ['css', 'html', 'ts'] });
    // Highlight.initHighlighting();
  }

  public toggle(): void {
    if (!this.visibility && this.path.length > 0) {
      const ts = this.http.get(`${this.baseUrl}/${this.path}.ts`, {responseType: 'text'})
        .pipe(catchError(() => of('')));
      const html = this.http.get(`${this.baseUrl}/${this.path}.html`, {responseType: 'text'})
        .pipe(catchError(() => of('')));
      const css = this.http.get(`${this.baseUrl}/${this.path}.css`, {responseType: 'text'})
        .pipe(catchError(() => of('')));
      forkJoin([ts, html, css]).subscribe((results: string[]) => {
        this.tsContent = results[0];
        this.htmlContent = results[1];
        this.cssContent = results[2];
        this.showCodeBlock();
        setTimeout(() => this.highlight(), 250);
      }, error => {
        console.debug(error); /* tslint:disable-line:no-console */
      });
    } else {
      this.hideCodeBlock();
    }
  }

  public setPath(path: string): void {
    this.path = path;
  }

  hideCodeBlock(): void {
    this.visibility = false;
  }

  showCodeBlock(): void {
    this.visibility = true;
  }

  highlight() {
    if (this.showTsNode) { hljs.highlightBlock(this.tsNode.nativeElement); }
    if (this.showHtmlNode) { hljs.highlightBlock(this.htmlNode.nativeElement); }
    if (this.showCssNode) { hljs.highlightBlock(this.cssNode.nativeElement); }
  }
}

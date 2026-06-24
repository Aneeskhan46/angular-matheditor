import { Component, AfterViewInit, OnDestroy, ElementRef, ViewChild, Input } from '@angular/core';
import { createRoot, Root } from 'react-dom/client';
import { createElement } from 'react';
import { CustomMathEditor } from 'my-anees-package';
import 'my-anees-package/style.css';

@Component({
  selector: 'app-react-math-editor',
  standalone: true,
  template: `<div #reactContainer></div>`,
  styles: [`
    :host {
      display: block;
      width: 100%;
      height: 100%;
    }
  `]
})
export class ReactMathEditorComponent implements AfterViewInit, OnDestroy {
  @ViewChild('reactContainer', { static: true }) container!: ElementRef;
  @Input() value: string = '';

  private root!: Root;

  ngAfterViewInit() {
    this.root = createRoot(this.container.nativeElement);
    this.render();
  }

  ngOnChanges() {
    if (this.root) {
      this.render();
    }
  }

  ngOnDestroy() {
    if (this.root) {
      this.root.unmount();
    }
  }

  private render() {
    this.root.render(createElement(CustomMathEditor, { value: this.value }));
  }
}

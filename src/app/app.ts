import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactMathEditorComponent } from './react-math-editor.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactMathEditorComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-anees-app');
  editorValue = '';
}

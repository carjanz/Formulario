import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormularioComponent } from "./formulario/formulario.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule, FormularioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'formulario';
}

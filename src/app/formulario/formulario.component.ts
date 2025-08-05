import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  imports: [ReactiveFormsModule],
  standalone: true,
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {
  formulario: FormGroup;
  tiposDocumento = [
    { value: 'DNI', label: 'DNI' },
    { value: 'Cedula', label: 'Cédula' },
    { value: 'Pasaporte', label: 'Pasaporte' }
  ];

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nombre: ['', [Validators.required, this.validarSoloLetras]],
      apellido: ['', [Validators.required, this.validarSoloLetras]],
      tipoDni: ['', Validators.required],
      dni: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    });

    this.formulario.get('tipoDni')?.valueChanges.subscribe(tipo => {
      this.actualizarValidacionesDni(tipo);
    });
  }

  validarSoloLetras(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (!value) return null;

    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    return regex.test(value) ? null : { soloLetras: true };
  }

  actualizarValidacionesDni(tipo: string) {
    const dniControl = this.formulario.get('dni');
    dniControl?.clearValidators();
    dniControl?.addValidators(Validators.required);

    switch(tipo) {
      case 'DNI':
        dniControl?.addValidators([Validators.pattern(/^\d{8}$/)]);
        break;
      case 'Cedula':
        dniControl?.addValidators([Validators.pattern(/^\d{6,10}$/)]);
        break;
      case 'Pasaporte':
        dniControl?.addValidators([Validators.pattern(/^[a-zA-Z0-9]{6,12}$/)]);
        break;
    }

    dniControl?.updateValueAndValidity();
  }

  getDniErrorMessage(): string {
    const errors = this.formulario.get('dni')?.errors;
    if (!errors) return '';

    const tipo = this.formulario.get('tipoDni')?.value;

    if (errors['required']) return 'Este campo es requerido';
    if (errors['pattern']) {
      switch(tipo) {
        case 'DNI': return 'El DNI debe tener exactamente 8 dígitos';
        case 'Cedula': return 'La cédula debe tener entre 6 y 10 dígitos';
        case 'Pasaporte': return 'El pasaporte debe tener entre 6 y 12 caracteres alfanuméricos';
        default: return 'Formato inválido';
      }
    }

    return '';
  }

  getDniLabel(): string {
    const tipo = this.formulario.get('tipoDni')?.value;
    if (!tipo) return 'Documento*';

    const tipoObj = this.tiposDocumento.find(t => t.value === tipo);
    return tipoObj ? tipoObj.label + '*' : 'Documento*';
  }

  onSubmit() {
    if (this.formulario.valid) {
      console.log('Formulario válido:', this.formulario.value);
      alert('Formulario enviado correctamente');
    } else {
      this.formulario.markAllAsTouched();
    }
  }
}

import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-event',
  standalone: true,
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css'],
  imports: [ReactiveFormsModule, CommonModule], // Importar módulos necesarios
})
export class CreateEventComponent {
  eventForm: FormGroup;
  areasDeportivas = ['Alberca Olímpica', 'Pista de Atletismo', 'Zona de Ciclismo Indoor', 'Zona de Spa y Relajación'];

  constructor(private fb: FormBuilder) {
    this.eventForm = this.fb.group({
      nombre: ['', Validators.required],
      area: ['', Validators.required],
      fechaInicioInscripcion: ['', Validators.required],
      fechaCierreInscripcion: ['', Validators.required],
      fechaInicioEvento: ['', Validators.required],
      fechaFinEvento: ['', Validators.required],
      horarios: this.fb.array([]),
      modalidades: ['', Validators.required],
      costo: ['', [Validators.required, Validators.min(0)]],
      requisitos: ['', Validators.required],
      convocatoria: [null, Validators.required],
    });
  }

  get horarios(): FormArray {
    return this.eventForm.get('horarios') as FormArray;
  }

  agregarHorario() {
    const horarioGroup = this.fb.group({
      dia: ['', Validators.required],
      hora: ['', Validators.required],
    });
    this.horarios.push(horarioGroup);
  }

  eliminarHorario(index: number) {
    this.horarios.removeAt(index);
  }

  onSubmit() {
    if (this.eventForm.valid) {
      console.log(this.eventForm.value);
      // Aquí puedes conectar con el backend
    } else {
      console.log('Formulario inválido');
    }
  }
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-adopcion',
  templateUrl: './adopcion.component.html',
  styleUrls: ['./adopcion.component.css']
})
export class AdopcionComponent {
  mostrarFormularioAdopcion: boolean = false;
  donarMascotaForm: FormGroup;
  mascotasEnAdopcion: any[] = [];

  constructor(private fb: FormBuilder) {
    this.donarMascotaForm = this.fb.group({
      nombre: ['', Validators.required],
      edad: [0, [Validators.required, Validators.min(1)]],
      raza: ['', Validators.required],
      contacto: ['', Validators.required]
    });
  }

  toggleMostrarFormularioAdopcion() {
    this.mostrarFormularioAdopcion = !this.mostrarFormularioAdopcion;
  }

  enviarFormulario() {
    if (this.donarMascotaForm.valid) {
      const nuevaMascota = this.donarMascotaForm.value;
      this.mascotasEnAdopcion.push(nuevaMascota);
      // Puedes hacer lo que quieras con la variable mascotasEnAdopcion aquí
      // Por ejemplo, podrías almacenarla en algún servicio, enviarla a un backend, etc.
      console.log('Mascota enviada:', nuevaMascota);
      // Reinicia el formulario y oculta el formulario después de enviar
      this.donarMascotaForm.reset();
      this.mostrarFormularioAdopcion = false;
    }
  }
}


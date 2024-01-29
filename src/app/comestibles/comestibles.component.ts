import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-comestibles',  // Ajusta el selector según sea necesario
  templateUrl: './comestibles.component.html',
  styleUrls: ['./comestibles.component.css']
})
export class DonarAlimentoComponent {
  mostrarFormulario: boolean = false;
  donarAlimentoForm: FormGroup;
  alimentosDisponibles: any[] = [];

  constructor(private fb: FormBuilder) {
    this.donarAlimentoForm = this.fb.group({
      marca: ['', Validators.required],
      gramaje: [0, [Validators.required, Validators.min(1)]],
      tipo: ['', Validators.required],
      numero: ['', Validators.required]
    });
  }

  toggleFormulario() {
    this.mostrarFormulario = !this.mostrarFormulario;
    if (!this.mostrarFormulario) {
      // Reinicia el formulario cuando se oculta
      this.donarAlimentoForm.reset();
    }
  }

  donarAlimento() {
    if (this.donarAlimentoForm.valid) {
      const nuevoAlimento = { ...this.donarAlimentoForm.value };
      this.alimentosDisponibles.push(nuevoAlimento);

      // Reinicia el formulario después de donar
      this.donarAlimentoForm.reset();
    }
  }
}
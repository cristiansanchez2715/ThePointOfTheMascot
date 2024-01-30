import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-comestibles',
  templateUrl: './comestibles.component.html',
  styleUrls: ['./comestibles.component.css']
})
export class DonarAlimentoComponent {
  mostrarFormulario: boolean = false;
  donarAlimentoForm: FormGroup;
  alimentosDisponibles: any[] = [{marca: "alimento1", gramaje: 500, tipo: "cchorro", numero: "325"}];
  private apiUrl = 'http://localhost:4000/donaciones';
  private apiUrlGet = 'http://localhost:4000/traerDonacion'

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.donarAlimentoForm = this.fb.group({
      Marca: ['', Validators.required],
      Gramaje: [0, [Validators.required, Validators.min(1)]],
      Tipo: ['', Validators.required],
      Numero: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    // Llamada al método para cargar datos cuando el componente se inicia
    this.cargarDatos();
  }


  toggleFormulario() {
    this.mostrarFormulario = !this.mostrarFormulario;
    if (!this.mostrarFormulario) {
      this.donarAlimentoForm.reset();
    }
  }

  donarAlimento(): Subscription {
    if (this.donarAlimentoForm.valid) {
      const nuevoAlimento = { ...this.donarAlimentoForm.value };
      // this.alimentosDisponibles.push(nuevoAlimento);
      this.donarAlimentoForm.reset();
      
      // Realiza la solicitud HTTP sin manejar explícitamente el error
      console.log(nuevoAlimento);
      const headers = { 'Content-Type': 'application/json' };
      return this.http.post(this.apiUrl, nuevoAlimento, { headers }).subscribe(
        (response) => {
          console.log('Éxito:', response);
          this.cargarDatos();
        },
        (error) => {
          console.error('Error en la solicitud:', error);
        }
      );
    } else {
      // Retorna una suscripción que no hace nada si los datos no son válidos
      return new Subscription();
    }
  }

// cargar datos componente

cargarDatos(): void {
  this.http.get(this.apiUrlGet).subscribe(
    (data: any) => {
      // Llena el array alimentosDisponibles con los datos recibidos
      this.alimentosDisponibles = data.data;
    },
    (error) => {
      console.error('Error al cargar datos:', error);
    }
  );
}




}
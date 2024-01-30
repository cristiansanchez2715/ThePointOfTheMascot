import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-adopcion',
  templateUrl: './adopcion.component.html',
  styleUrls: ['./adopcion.component.css']
})
export class AdopcionComponent {
  mostrarFormularioAdopcion: boolean = false;
  donarMascotaForm: FormGroup;
  mascotasEnAdopcion: any[] = [];
  private apiUrl = 'http://localhost:4000/adopciones';
  private apiUrlGet = 'http://localhost:4000/traerAdopcion'



  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.donarMascotaForm = this.fb.group({
      Nombre: ['', Validators.required],
      Edad: [0, [Validators.required, Validators.min(1)]],
      Raza: ['', Validators.required],
      Contacto: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Llamada al método para cargar datos cuando el componente se inicia
    this.cargarDatos();
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
      
      // Realiza la solicitud HTTP sin manejar explícitamente el error
  
      const headers = { 'Content-Type': 'application/json' };
      return this.http.post(this.apiUrl, nuevaMascota, { headers }).subscribe(
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

  cargarDatos(): void {
    this.http.get(this.apiUrlGet).subscribe(
      (data: any) => {
        // Llena el array alimentosDisponibles con los datos recibidos
        this.mascotasEnAdopcion = data.data;
      },
      (error) => {
        console.error('Error al cargar datos:', error);
      }
    );
  }


}


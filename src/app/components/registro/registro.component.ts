import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: "app-registro",
  templateUrl: "./registro.component.html",
  styleUrls: ["./registro.component.css"]
})
export class RegistroComponent implements OnInit {
  contacto: FormGroup;
  submitted = false;
  apiURL="https://server-origenes.herokuapp.com/email";
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.contacto = this.formBuilder.group({
      instituto: ["", Validators.required],
      paginaWeb: [""],
      pais: ["", Validators.required],
      ciudad: ["", Validators.required],
      direccion: ["", Validators.required],
      telefono: ["", Validators.required],
      contacto: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      movil: ["", Validators.required],
      mensaje: [""]
    });
  }

  get f() {
    return this.contacto.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.contacto.invalid) {
      return;
    }
    let body=this.contacto.value;
    this.http.post(this.apiURL,body).subscribe(data=>console.log(data), err=>console.log(err));
    alert('Registro completado. Pronto nos pondremos en contancto');
  }
}

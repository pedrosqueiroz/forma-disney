import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  messageForm: FormGroup;
  mensagemEnviada = false;
  formCorreto = false;

  constructor(private formBuilder: FormBuilder) {
    this.messageForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      school: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      phone: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    this.mensagemEnviada = true;

    if (this.messageForm.invalid) {
      return;
    }

    this.formCorreto = true;
  }

  ngOnInit() {
    //Quantidade de caracteres restantes no campo message
    document.querySelector('#message').addEventListener("keyup", event => {
      (<HTMLInputElement>document.querySelector('#message')).value.length;
      return;
    });

  }
}

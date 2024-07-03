import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = {
    username: '',
    password: ''
  };
  
  onSubmit() {
    // Aqui você pode implementar a lógica para autenticar o usuário
    console.log('Formulário enviado:', this.usuario);
    // Exemplo: chamar um serviço para autenticação
    // this.authService.login(this.usuario.username, this.usuario.password);
  }

  constructor() { }

  ngOnInit(): void {
  }

}

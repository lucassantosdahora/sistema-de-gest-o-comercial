import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  usuario = {
    name: '',
    email: '',
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

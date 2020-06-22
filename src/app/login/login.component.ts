import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Token } from '../models/models';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    telefone: new FormControl(''),
    senha: new FormControl(''),
  })

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  submit() {
    this.authService.logar(this.loginForm.get('telefone').value, this.loginForm.get('senha').value).subscribe(
      (token: Token) => {
        localStorage.setItem('token', token.token);
        this.router.navigate(['user']);
      }, (err) => {
        alert(err.error.message);
        
      }  
    
      )

    //console.log(this.usuarioService.name);
  }
}

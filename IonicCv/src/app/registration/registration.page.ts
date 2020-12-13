import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationService } from "../shared/authetication.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})

export class RegistrationPage implements OnInit {

  constructor(
    public authService: AuthenticationService,
    public router: Router
  ) { }

  ngOnInit(){}

  signUp(email, password){
      this.authService.RegisterUser(email.value, password.value)      
      .then((res) => {
        this.router.navigate(['/tabs'])
      }).catch((error) => {
        window.alert(error.message)
      })
  }

}
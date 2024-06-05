import { Component } from '@angular/core';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  constructor(private tokenService: TokenService, private router: Router){}


  ngOnInit(){
    this.getResponseFromServer()
  }


  getResponseFromServer() : void{

    this.tokenService.getAdmin().subscribe({
      next : res => {
        console.log(res)
      },
      error : err => {
        console.log('Código de estado (error) del servidor', err.status)

        if(err.status == 403)
          this.router.navigate(['/user'])
      }
    })
  }
}

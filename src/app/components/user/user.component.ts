import { Component } from '@angular/core';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  constructor(private tokenService: TokenService, private router: Router){}


  ngOnInit(){
    this.getResponseFromServer()
  }


  getResponseFromServer() : void{

    this.tokenService.getUser().subscribe({
      next : res => {
        console.log(res)
      },
      error : err => {
        console.log('Código de estado (error) del servidor', err.status)

        if(err.status == 403)
          this.router.navigate(['/'])
      }
    })
  }

}

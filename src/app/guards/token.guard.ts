import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core'

export const tokenGuard: CanActivateFn = (route, state) => {

  console.log("Pasando por el guard")

  let token = sessionStorage.getItem('token')
  const router = inject(Router)

  if(!token){
    router.navigateByUrl("/")
  }


  return true;
};

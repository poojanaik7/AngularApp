import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  user = {
    username:"",
    password:""
    
  }

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  signin(){
    const observable : Observable<any> = this.userService.signinUser(this.user);
    observable.subscribe((response:any) => {
      console.log(response)
    },
    error =>{
      alert("something went wrong")
    }
    )
  }

}

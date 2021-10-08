import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject ,Subject} from 'rxjs';
import { take, map, tap , delay} from 'rxjs/operators';
import { environment } from '../../environments/environment';


interface userProfile{
  email: string,
  name: string,
  last_name: string,
  billing_title: string,
  gender: string,
  date_birth: string,
  document_type: any,
  document_number: any}

  interface userProfile{
    status:Number,
    data:Object
  }

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_URI = environment.API_URI;

  public registerEmail: userProfile;
  private registerEmailUpdated = new Subject<userProfile>();


  private _userIsAuthenticated = false;
  server_url = this.API_URI;
  
  constructor(private http: HttpClient) { }

  get userIsAuthenticated()
  {
    return this._userIsAuthenticated;
  }

  login()
  {
    this._userIsAuthenticated = true;
  }

  logout()
  {
    this._userIsAuthenticated = false;
  }

  getQueryEmailUpdateListener(){
    return this.registerEmailUpdated.asObservable();
  }

  queryUserEmail(email:string){
    var prefix = '/auth/exist/email';
    var enPoint = this.server_url + prefix;
    var params = {
      "email":email
    };

    return this.http
    .post<userProfile>(enPoint,params)
    
  }

  registerUser(data: Object){
    var prefix = '/registrar/cliente';
    var enPoint = this.server_url + prefix;

    return this.http
    .post(enPoint,data)
  }

  loginValidation(email: string){
    var prefix = '/auth/login/cliente';
    var enPoint = this.server_url + prefix;
    var params = {
      "email":email
    };

    return this.http
    .post(enPoint,params)
  }


}

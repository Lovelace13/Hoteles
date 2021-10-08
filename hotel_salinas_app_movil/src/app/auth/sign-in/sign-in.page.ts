import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
import { LoadingController } from "@ionic/angular";
import { NgForm } from '@angular/forms';
import { AlertController,NavController } from '@ionic/angular';



@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  isLoading = false;
  isLogin = true;

  constructor(private authService: AuthService,
    private router: Router,
    private loadingCtrl: LoadingController,private alertController: AlertController,private navCtrl: NavController) { }

  ngOnInit() {
  }

  onLogin() {
    this.isLoading = true;
    this.loadingCtrl.create({keyboardClose:true,message:'Logging in...'})
    .then(loadingEl => {
      loadingEl.present();
      setTimeout(() => {
        this.isLoading = false;
        loadingEl.dismiss();
        this.router.navigateByUrl("/places/tabs/discover");
      }, 400);
    });

    this.authService.login();
    
  }

  async presentAlert(title:string,subtitle:string,message:string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: title,
      subHeader: subtitle,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  onSubmit(form: NgForm)
  {
    
    if(!form.valid){
      form.reset();
      return;
    }

    const email = form.value.email;
    const password = form.value.password;
    console.log(email,password);

    //Cualquier huevada
    this.authService.loginValidation(email)
     .subscribe((response) => {
      console.log(response);
       if(response['status'] == 1){
        var passwordCompare = response['data']['password'];
        console.log("* " + passwordCompare);
        console.log("* " + password);
        if(passwordCompare == password)
        {
          console.log("INICIO EXITOSO");
          this.onLogin();
        }
        else{
          this.presentAlert('Inicio Fallido','Parece que las credenciales ingresadas son incorrectas.','');
        }
        
       }
       else{
        console.log("Error de conexion!!!")
        
       }
       
      
      
    });

    if(this.isLogin){
      //Send a request to login servers
      form.reset();
      
    }else{
      //Send a request to signup servers
    }
  }

  backEvent(){
    this.navCtrl.back();
  }

}

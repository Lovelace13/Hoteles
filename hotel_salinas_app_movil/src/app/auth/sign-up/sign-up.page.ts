import { Component, OnInit } from '@angular/core';
import { AlertController,NavController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  constructor(public authService: AuthService,private alertController: AlertController,private navCtrl: NavController) { }
  private userSub: Subscription;
  //Configurador de flujo
  phase_user_info = false;
  phase_user_location = false;
  phase_user_credentials = false;
  actualPhase = 1;

  //DATA FASE 2
  user_name:string;
  user_lastname:string;
  user_title:string;
  user_gender:string;
  user_datebirth:Date;

  //DATA FASE 1
  input_email:string;
  input_passw:string;
  confirm_passw:string;
  
  ngOnInit() {
    console.log("[OnInit] Iniciando proceso de registro fase 1");
    this.initSignUp();
  }

  ionViewWillEnter(){
    console.log("[WillEnter] Iniciando proceso de registro fase 1");
    this.initSignUp();
}

  initSignUp(){
    this.actualPhase = 1;
    this.phase_user_credentials = true;
    this.phase_user_info = false;
    this.phase_user_location = false;
  }

  changePhase(actualPhase:number){
    switch(actualPhase) { 
      case 1: { 
        this.phase_user_credentials = true;
        this.phase_user_info = false;
        this.phase_user_location = false;
         break; 
      } 
      case 2: { 
        this.phase_user_credentials = false;
        this.phase_user_info = true;
        this.phase_user_location = false;
         break; 
      } 
      default: { 
        this.phase_user_credentials = false;
        this.phase_user_info = false;
        this.phase_user_location = false;
         break; 
      } 
   } 
   this.actualPhase = actualPhase;
  }

  phaseBack(){
    this.actualPhase = this.actualPhase -1;
    this.changePhase(this.actualPhase);
  }

  onSubmitP1(form: NgForm){
    const email = form.value.email;
    const password = form.value.password;
    const confirmPass = form.value.pass_confirmation;
    
    console.log(password);
    console.log(confirmPass);
    console.log(email);


    if(!(password === confirmPass)){
      var title = "Contraseña Incorrecta";
      var subtitle = "Las credenciales ingresadas no coinciden";
      var message = "\n\nPor favor intentalo de nuevo";

      this.presentAlert(title,subtitle,message);
    }
    else if(!form.valid){
      var title = "Error con el correo";
      var subtitle = "El correo ingresado para invalido";
      var message = "\n\nPor favor intentalo de nuevo";

      this.presentAlert(title,subtitle,message);
    }
    else{
      //CONFIRMAMOS SI EL EMAIL EXISTE
      /*
      var emailInfo;
      this.authService.queryUserEmail(email);
      this.userSub = this.authService.getQueryEmailUpdateListener()
      .subscribe((data) => {
        emailInfo = data;
      });
      console.log("previa");
      console.log(this.authService.registerEmail);
      */
     this.authService.queryUserEmail(email)
     .subscribe((postData) => {
       console.log(postData);
       if(postData.status === 1){
        this.presentAlert('Correo en uso','Lo lamento el mail ingresado se encuentra actualmente en uso.','Intenta con un nuevo correo');
       }
       else{
        console.log("exito!!!")
        this.changePhase(this.actualPhase + 1);
       }
    });
      


      
    }
  }


  onSubmitP2(form: NgForm){
    const titulo = form.value.select_title;
    const nombres = form.value.nombres;
    const apellidos = form.value.apellidos;
    const genero = form.value.select_gender;
    const nacimiento = new Date(form.value.datebirth);
    
    console.log(titulo);
    console.log(nombres);
    console.log(apellidos);
    console.log(genero);
    console.log(nacimiento);
    var time = Number(new Date().getTime()) - Number(nacimiento.getTime());
    console.log(age);
    var age = Math.floor((time / (1000 * 3600 * 24))/365);


    
    if((age < 18)){
      var title = "Edad Insuficiente";
      var subtitle = "\n\n\nLo sentimos, por politicas de seguridad debes de ser mayor de edad para poder crear una cuenta en hotelsalinasec.com";
      var message = "";

      this.presentAlert(title,subtitle,message);
    }
    else if(!titulo){
      var title = "Llenar campo Título";
      var subtitle = "\n\n\nLo sentimos, por politicas de seguridad debes de ser mayor de edad para poder crear una cuenta en hotelsalinasec.com";
      var message = "";

      this.presentAlert(title,subtitle,message);
    }
    else if(!genero){
      var title = "Llenar campo Género";
      var subtitle = "\n\n\nLo sentimos, por politicas de seguridad debes de ser mayor de edad para poder crear una cuenta en hotelsalinasec.com";
      var message = "";

      this.presentAlert(title,subtitle,message);
    }
    else if(!form.valid){
      return;
    }
    else{
      console.log("RESULTADO");
      console.log(this.user_name);
      console.log(this.user_lastname);
      console.log(this.user_title);
      console.log(this.user_gender);
      console.log(this.user_datebirth);
      console.log("RESULTADO");
      console.log(this.input_email);
      console.log(this.input_passw);
      console.log(this.confirm_passw);

      var sendData = {
        username: this.user_name,
        lastname: this.user_lastname,
        title: this.user_title,
        gender: this.user_gender,
        datebirth: this.user_datebirth,
        email: this.input_email,
        password: this.confirm_passw
      }

      this.authService.registerUser(sendData)
     .subscribe((response) => {
       console.log("filas");
       console.log(response['rowsInserted']);
       console.log(response['status']);
      
       if(response['rowsInserted']>0 && response['status'] ==1 ){
         console.log("INSERTADO EXITOSAMENTE");
        var title = "Registro Exitoso!";
        var subtitle = this.user_name + " Bienvenido a Hotel Salinas , ahora ya puedes iniciar sesión y comenzar a vivir la aventura";
        var message = "";
        this.presentAlert(title,subtitle,message);
        this.navCtrl.back();
       }
       else{
        console.log("Fallo!!!")
        var title = "Error de Conexión";
        var subtitle = this.user_name + "Ups! Parece que hubo un error en nuestros servicios, lamentamos el inconveniente";
        var message = "Favor intentar dentro de unos minutos";
        this.presentAlert(title,subtitle,message);
        this.navCtrl.back();
       }
       
      
      
    });

      
  
    }
    
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

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Cancelacion de registro',
      message: 'Estas seguro que deseas cancelar tu proceso de registro?\nSe perdera tu información ingresada!',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Si',
          handler: () => {
            console.log('Confirm Okay');
            this.navCtrl.back();
          }
        }
      ]
    });

    await alert.present();
  }

}

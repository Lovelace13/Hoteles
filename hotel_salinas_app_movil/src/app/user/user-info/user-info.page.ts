import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.page.html',
  styleUrls: ['./user-info.page.scss'],
})
export class UserInfoPage implements OnInit {

  constructor() { }
  //Configurador de flujo
  phase_user_info = false;
  phase_user_location = false;
  phase_user_credentials = false;
  actualPhase = 1;

  //DATA FASE 2
  user_name="Carlos David";
  user_lastname="Cunalata Chang";
  user_title="sr";
  user_gender="m";
  user_phone="0990867613";
  user_address="Ceibos Norte Calle primera #314";
  user_country="EC";
  user_zip="00914";
  //user_datebirth:Date = new Date();

  //DATA FASE 1
  input_email:string;
  input_passw:string;
  confirm_passw:string;
  ngOnInit() {
  }

}

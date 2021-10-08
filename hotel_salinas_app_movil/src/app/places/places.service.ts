import { Injectable } from "@angular/core";
import { Place } from "./place.model";
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { take, map, tap , delay} from 'rxjs/operators';
import { environment } from '../../environments/environment';


interface PlaceData{
  room_id:number,
  name:string,
  room_number:number,
  description: string,
  path_image:string,score:number,price:number,
  isavailable:boolean,
  max_beds:number,max_adults:number,
  max_children:number,
  createon:string,
  updateon:string}


@Injectable({
  providedIn: "root",
})
export class PlacesService {
  private _places =  new BehaviorSubject<Place[]>([]); 
  API_URI = environment.API_URI;


  constructor(private http: HttpClient) { }

  get places(){
    return this._places.asObservable();
  }

  getPlacesUpdateListener(){
    return this._places.asObservable();
  }
  trama = '/hotel/rooms';
  server_url = this.API_URI + this.trama;
  fetchPlaces(){
    return this.http
    .get<{[key:string]:PlaceData}>(this.server_url)
    .pipe(map(resData => {
      
      const places = [];
      for(const key in resData)
      {
        if(resData.hasOwnProperty(key)){
          console.log(resData);
        places.push(new Place(resData[key].room_id,resData[key].name,resData[key].room_number,
          resData[key].description,resData[key].path_image,resData[key].score,resData[key].price,resData[key].isavailable,
          resData[key].max_beds,resData[key].max_adults,resData[key].max_children,new Date(resData[key].createon)
          ,new Date(resData[key].updateon)));
        } 
      }
      console.log(places);
      return places;

    }),tap(places => {
      this._places.next(places); 
    })
    );
  }

  

  getPlace(id: String)
  {
    return {room_id: 1,name:"Piquero",room_number:1,description:"Habitación doble con aire acondicionado, escritorio y suelo de baldosa/mármol.",path_image:"https://images.squarespace-cdn.com/content/v1/5c5080afcef372bf3c831bbd/1583515265614-EBUYMJ2MROVF634REI02/ke17ZwdGBToddI8pDm48kA9rhCjhJUYcQpKsBaLXN1ZZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIye_uGeP4isZUnhF2J4BSLX0iSmbQA7pLf20f1CNe8SkKMshLAGzx4R3EDFOm1kBS/Habitacion-Doble-Full-Hotel-La-Ria-Playas-Ecuador.jpg",score:0,price:39,isavailable:true,max_beds:1,max_adults:2,max_children:1,createon:new Date("2020-09-23"),updateon: new Date("2020-09-23")};
  }
  
  
}

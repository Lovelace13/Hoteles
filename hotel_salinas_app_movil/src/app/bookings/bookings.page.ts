import { Component, OnInit } from '@angular/core';
import { BookingService } from './bookings.service';
import { Booking } from './booking.model';
import { IonItemSliding } from '@ionic/angular';
import { Place } from '../places/place.model';
import { Subscription } from 'rxjs';
import { PlacesService } from '../places/places.service';




@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {
  loadedPlaces: Place[];
  private roomsSub: Subscription;
  isLoading = false;

  constructor(private placesService: PlacesService,private bookingService: BookingService) { }

  ngOnInit(): void {
    this.roomsSub = this.placesService.places.subscribe(places  => {
      this.loadedPlaces = places;
    });
   }
   ionViewWillEnter(){
     this.isLoading = true;
     this.placesService.fetchPlaces().subscribe(() =>{
       this.isLoading = false;
     });
   }
  onCancelBooking(offerId:String,slidingEl:IonItemSliding)
  {
    slidingEl.close();
  }

}

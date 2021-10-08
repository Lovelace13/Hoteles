import { Component, OnInit } from '@angular/core';
import { Place } from '../place.model';
import { PlacesService } from '../places.service';
import { IonItemSliding } from '@ionic/angular';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  loadedPlaces: Place[];
  private roomsSub: Subscription;
  isLoading = false;
  constructor(private placesService: PlacesService, private router: Router) {  }

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
  

  onEdit(offerId: String, slidingItem: IonItemSliding)
  {
    slidingItem.close();
    this.router.navigate(['/','places','tabs','offers','edit',offerId]);
    console.log('Editing Item',offerId);
  }

}

import { Component, OnInit } from '@angular/core';
import { Place } from '../place.model';
import { PlacesService } from '../places.service';
import {SegmentChangeEventDetail} from '@ionic/core';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  placesSub: Subscription;
  loadedPlaces: Place[];
  isLoading = false;

  constructor(private placesService: PlacesService) { }

  ngOnInit(): void {
    this.placesSub = this.placesService.getPlacesUpdateListener().subscribe( (places: Place[]) => {
      console.log(places);
      this.loadedPlaces = places;
    });
  }
  ionViewWillEnter(){
    this.isLoading = true;
    this.placesService.fetchPlaces().subscribe(() =>{
      this.isLoading = false;
    });
  }
  

  OnFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>)
  {
    console.log(event.detail);
  }
}

import { Component } from '@angular/core';
import { BucketService } from '../bucket.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  latitude: number;
  longitude: number;
  latitude1 = 32.641232;
  longitude1 = 74.167022;

  bucket: {bucket_uri: string, lat: number, lng: number, distance: number};

  constructor(private bucketService: BucketService) {
    if (navigator) {
      navigator.geolocation.getCurrentPosition(pos => {
        this.longitude = +pos.coords.longitude;
        this.latitude = +pos.coords.latitude;
      });
    }

    this.bucketService.getBucketById(57).subscribe(data => console.log(data));
  }

}

import { Component, OnInit } from '@angular/core';
import { MapService } from '../map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  location: object;

  constructor( private _mapHttp: MapService) { }

  ngOnInit(): void {
    this._mapHttp.getMapCoordinates().subscribe( data => {
      this.location = data;
      console.log(this.location);
    });
  }

}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor( private mapHttp: HttpClient) { }

  getMapCoordinates(){
    return this.mapHttp.get('http://api.open-notify.org/iss-now.json');
  }

}


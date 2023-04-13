import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  getPosition(): Promise<any>
  {
    return new Promise((resolve, reject) => {

      navigator.geolocation.getCurrentPosition(resp => {

          resolve({lng: resp.coords.longitude, lat: resp.coords.latitude});
        },
        err => {
          reject(err);
        });
    });

  }

  distance(lat1:any, lon1:any, lat2:any, lon2:any, unit?:any) {
    var radlat1 = Math.PI * lat1/180
    var radlat2 = Math.PI * lat2/180
    var theta = lon1-lon2
    var radtheta = Math.PI * theta/180
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist)
    dist = dist * 180/Math.PI
    dist = dist * 60 * 1.1515
    if (unit=="K") { dist = dist * 1.609344 }
    if (unit=="N") { dist = dist * 0.8684 }
    return dist
  }

  getValFromKey(arr:any[],key:string,value:any,valKey?:string){
    if(arr.length){
      if(valKey===undefined){
        let obj=arr.find((obj:any)=>obj[key]===value);
        return obj?obj:null;
      } else{
        let obj=arr.find((obj:any)=>obj[key]===value);
        return obj?.[valKey] ? obj[valKey] : null;
      }
    } else{
      return null;
    }
  }
}

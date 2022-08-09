import { User } from "./User";
import { Company } from "./Company";  



export class Maps{
    private googleMap: google.maps.Map;

    constructor(divId: string){
    const mapEl = document.getElementById(divId) as HTMLElement;

    this.googleMap = new google.maps.Map(mapEl,{
    center:{
    lat:0,
    lng:0
    },
    zoom: 1,
  
    });
    }

   


    addUserMarker(user: User):void{
        new google.maps.Marker({
            map: this.googleMap,
            position:{
                lat: user.location.lat,
                lng: user.location.lng
            }
        })
    }

    addCompanyMarker(company: Company):void{
        new google.maps.Marker({
            map: this.googleMap,
            position:{
                lat:company.location.lat,
                lng:company.location.lng
            }
        })
    }

    
}
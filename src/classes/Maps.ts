// import { User } from "./User";
// import { Company } from "./Company";  

//instructions to every other on how
// they can be an argument to 'addMarker'
export interface Map_Marker {
    location:{
        lat:number;
        lng:number;
    };
    markerContent():string;
    //color:string;
}

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

   

    //using the or operator will limit the amount of properties we can refer to since 
    //the types won't share all of the same properties
    addMarker(marker: Map_Marker):void{
      const mapMarker =  new google.maps.Marker({
            map: this.googleMap,
            position:{
                lat: marker.location.lat,
                lng: marker.location.lng
            }
        })

        mapMarker.addListener('mouseover', () =>{
            const infoWindow = new google.maps.InfoWindow({
                content: marker.markerContent()
            })

            infoWindow.open(this.googleMap,  mapMarker)
        })
    }

    
}
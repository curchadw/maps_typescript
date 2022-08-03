import { User } from './classes/User'
import { Company } from './classes/Company'
/// <reference types="@types/google.maps" />



new google.maps.Map(document.getElementById("map"),{
  zoom:1,
  center:{
    lat:0,
    lng:0
  }
});


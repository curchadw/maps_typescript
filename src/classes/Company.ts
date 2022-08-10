import faker from 'faker'
import { Map_Marker } from './Maps'

//Refer to User class on implement clause
export class Company implements Map_Marker{
    companyName:string
    phrase:string
    location:{
        lat:number,
        lng:number
    }

    constructor(){
        this.companyName = faker.company.companyName();
        this.phrase = faker.company.catchPhrase();
        this.location = {
            lat:parseFloat(faker.address.latitude()),
            lng:parseFloat(faker.address.longitude())
        }
    }

    markerContent():string{
        return `
        <div>
            <h1>Company Name: ${this.companyName}</h1>
            <h4>Catch Phrase: ${this.phrase}</h4>
            <h4>Location: ${this.location.lat} ${this.location.lng}</h4>
        </div>        
        `
    }
}
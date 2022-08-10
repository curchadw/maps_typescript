import faker from 'faker'
import { Map_Marker } from './Maps'

//the implement statement is optional if we want to make sure a specific class implements a interface
//The same properties would need to exist in the class
export class User implements Map_Marker{
   
    //properties for a user
    firstName:string
    lastName:string
    location:{
        lat:number,
        lng:number
    }

    constructor(){
        this.firstName = faker.name.firstName()
        this.lastName = faker.name.lastName();
        this.location = {
            lat:parseFloat(faker.address.latitude()),
            lng:parseFloat(faker.address.longitude())
        }
    }

    markerContent():string{
        return `
            <div>
                <h1>User Name ${this.firstName} ${this.lastName}</h1>
                <h4>Location: ${this.location.lat} ${this.location.lng}</h4>
            </div>
            `
    }
}
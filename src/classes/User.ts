import faker from 'faker'

export class User{
   
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
}
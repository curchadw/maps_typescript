import { User } from './classes/User'
import { Company } from './classes/Company'
import { Maps } from './classes/Maps'

const map1 = new Maps('map');
const user1 = new User();
const company1 = new Company();
map1.addUserMarker(user1)
map1.addCompanyMarker(company1)






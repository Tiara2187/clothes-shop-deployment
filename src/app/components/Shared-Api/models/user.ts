export class User {
    _id : string;
    username: string;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    phone: string;
    birthdate: Date;
    address: string;
 
}

export class ForgetPass {
    username: string;
    password: string;
    email: string;
}

export class addressUser {
    country: string;
    province: string;
    city : string;
    district: string;
    village : string;
    zip : number;
}

export class UpdateUser {
    firstname: string;
    lastname: string;
    password: string;
    birthdate: Date;
    address: string;

}
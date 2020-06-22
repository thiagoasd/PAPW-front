export class Client {
    id: number;
    name: string;
    phone_number: string;
    zip_code: string;
    address_number: string;
    user: User;
}

export class User {
    id: number;
    name: string;
    phone_number: string;
    password: string;
    clients: Client[];
}

export class Token{
    token: string;
}
import auth0 from 'auth0-js';
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';
import axios from 'axios';
import { resolve } from 'path';

class Auth0 {
    constructor() {
        this.auth0 = new auth0.WebAuth({
            domain: ''
        });

        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.handleAuthentication = this.handleAuthentication.bind(this);
    }

    handleAuthentication() {
        return new Promise((resolve, reject) => {

        });
    }

    login() {

    }

    logout() {

    }
}

const auth0Client = new Auth0();

export default auth0Client;
import auth0 from 'auth0-js';
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';
import axios from 'axios';
import { resolve } from 'path';

class Auth0 {
    constructor() {
        this.auth0 = new auth0.WebAuth({
            domain: '',
            clientID: CLIENT_ID,
            redirectUri: `${process.env.BASE_URL}/callback`,
            responseType: 'token id_token',
        });

        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.handleAuthentication = this.handleAuthentication.bind(this);
    }

    handleAuthentication() {
        return new Promise((resolve, reject) => {
            this.auth0.parseHash((err, authResult) => {
                if (authResult && authResult.accessToken && authResult.idToken) {
                    this.setSession(authResult);
                    resolve();
                } else if (err) {
                    reject(err);
                    console.log(err);
                }
            });
        });
    }

    setSession(authResult) {
        const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());

        Cookies.set('jwt', authResult.idToken);
    }

    login() {
        this.auth0.authorize();
    }

    logout() {
        Cookies.remove('jwt');

        this.auth0.logout({
            returnTo: process.env.BASE_URL,
            clientID: CLIENT_ID
        });
    }

    async getJWKS() {
        const res = await axios.get('');
        const jwks = res.data;
        return jwks;
    }

    async clientAuth() {
        const token = Cookies.getJSON('jwt');
        const verifiedToken = await this.verifyToken(token);

        return verifiedToken;    
    }

    async serverAuth(req) {
        if(req.headers.cookie) {
            const token = getCookieFromReq(req, 'jwt');
            const verifiedToken = await this.verifyToken(token);

            return verifiedToken;
        }

        return undefined;
    }
}

const auth0Client = new Auth0();

export default auth0Client;
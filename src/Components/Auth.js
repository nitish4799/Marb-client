import axios from "axios";
import Cookies from 'universal-cookie';

const cookies = new Cookies();
axios.defaults.withCredentials = true;

class Auth {
    constructor() {
        this.authenticated = false;
    }
    isAuthenticated() {
        const accessToken = cookies.get('authSession');
        const refreshToken = cookies.get('refreshTokenID');

        if ( !accessToken && !refreshToken ) {
            return ( this.authenticated = false );
        }
        if ( accessToken && refreshToken ) {
            return ( this.authenticated = true );
        }
        if ( !accessToken && refreshToken ) {
            axios.post('https://gold-zealous-newt.cyclic.app/refresh', {
                withCredentials: true
            }).then((res) => {
                console.log(res.data);
                window.location.reload();
            }).catch((error) => {
                console.log(error.response)
            })
            return ( this.authenticated = true );
        }
    }
}

export default new Auth();

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Cookies from 'universal-cookie';

// const cookies = new Cookies();
// axios.defaults.withCredentials = true;

// function Auth() {
//   const [authenticated, setAuthenticated] = useState(false);

//   useEffect(() => {
//     function checkAuthentication() {
//       const accessToken = cookies.get('authSession');
//       const refreshToken = cookies.get('refreshTokenID');

//       if (!accessToken && !refreshToken) {
//         setAuthenticated(false);
//       } else if (accessToken && refreshToken) {
//         setAuthenticated(true);
//       } else if (accessToken && !refreshToken) {
//         axios.post('http://localhost:5000/refresh', {
//           withCredentials: true
//         }).then((res) => {
//           console.log(res.data);
//           window.location.reload();
//           setAuthenticated(true);
//         }).catch((error) => {
//           console.log(error.response);
//           setAuthenticated(false);
//         });
//       }
//     }

//     checkAuthentication();
//   }, []);

//   return null;
// }

// export default Auth;

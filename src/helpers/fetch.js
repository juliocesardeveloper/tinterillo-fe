import axios from 'axios'
import btoa from 'btoa'

const baseUrl = 'https://searcher-col.herokuapp.com/api';

const fetchSinToken = async( endpoint, data, method = 'GET' ) => {


  const url = `${ baseUrl }/${ endpoint }`;
  
  // axios.post( url, { withCredentials: true } ).then((res) => {
  //   console.log(res.data);
  // });

  if ( method === 'GET' ) {
    return fetch( url );
  } else {
    return fetch( url, {
      method,
      headers: {
        'Authorization': `Basic ${btoa(`${data.email}:${data.password}`)}`,
        'Content-type': 'application/json; charset=utf-8',
        // 'Set-Cookie': `token=${token}; Path=/; HttpOnly; Secure`
      },
      body: JSON.stringify( data, null, 2 )
      });
    }
}

const fetchConToken = ( endpoint, data, method = 'GET' ) => {

  const url = `${ baseUrl }/${ endpoint }`;
  

  if ( method === 'GET' ) {
    return fetch( url, {
      method,
      headers: {
        // 'Authorization': `Basic ${btoa(`${data.email}:${data.password}`)}`,
        // 'Content-type': 'application/json; charset=utf-8',
        'Set-Cookie': 'token=token.value; Path=/; HttpOnly; Secure'
      }
    });
  } else {
    return fetch( url, {
      method,
      headers: {
        'Authorization': `Basic ${btoa(`${data.email}:${data.password}`)}`,
        'Content-type': 'application/json; charset=utf-8',
        'Set-Cookie': '<cookie-name>=<cookie-value>; HttpOnly'
      },
      body: JSON.stringify( data, null, 2 )
    });
  }
  
}

export {
  fetchSinToken,
  fetchConToken
}
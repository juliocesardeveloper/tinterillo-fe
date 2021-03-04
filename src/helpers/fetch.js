import axios from 'axios';
import btoa from 'btoa'

const baseUrl = 'https://searcher-col.herokuapp.com/api';



const fetchSinToken = async( endpoint, data, method = 'GET' ) => {


  const url = `${ baseUrl }/${ endpoint }`;
  const token = localStorage.getItem('token') || '';


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
  const token = localStorage.getItem('token') || '';

  if ( method === 'GET' ) {
    return fetch( url, {
      method,
      headers: {
        'Authorization': `Basic ${btoa(`${data.email}:${data.password}`)}`,
        'Content-type': 'application/json; charset=utf-8',
        'Set-Cookie': token
      }
    });
  } else {
    return fetch( url, {
      method,
      headers: {
        'Authorization': `Basic ${btoa(`${data.email}:${data.password}`)}`,
        'Content-type': 'application/json; charset=utf-8',
        // 'Set-Cookie': token
      },
      body: JSON.stringify( data )
    });
  }

}

export {
  fetchSinToken,
  fetchConToken
}
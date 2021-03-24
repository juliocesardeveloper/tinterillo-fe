import axios from 'axios'
import btoa from 'btoa'

// const baseUrl = 'https://searcher-col.herokuapp.com/api';
const baseUrl = 'http://localhost:4000/api';

const fetchSinToken = async( endpoint, data, method = 'GET' ) => {

  const url = `${ baseUrl }/${ endpoint }`;

  if ( method === 'GET' ) {
    return fetch( url );
  } else {
    return fetch( url, {
      method,
      headers: {
        'Authorization': `Basic ${btoa(`${data.email}:${data.password}`)}`,
        'Content-type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify( data, null, 2 )
      });
    }
}

const fetchConToken = ( endpoint, data, method = 'GET' ) => {

  const url = `${ baseUrl }/${ endpoint }`;
  const token = localStorage.getItem('token') || '';
  console.log(token);

  if ( method === 'POST' ) {
    return fetch( url, {
      method,
      headers: {
        'Authorization': `Basic ${btoa(`${data.email}:${data.password}`)}`,
        'Content-type': 'application/json',
        'Cookie': `token=${token}`
      }
    });
  } else {
    return fetch( url, {
      method,
      headers: {
        'Authorization': `Basic ${btoa(`${data.email}:${data.password}`)}`,
        'Content-type': 'application/json',
        'Cookie': `token=${token}`
      },
      body: JSON.stringify( data, null, 2 )
    });
  }
}

export {
  fetchSinToken,
  fetchConToken,
  // fetchAut
}
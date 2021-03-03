
const baseUrl = 'https://searcher-col.herokuapp.com/api';

const fetchSinToken = ( endpoint, data, method = 'GET' ) => {

  const url = `${ baseUrl }/${ endpoint }`;
  const token = localStorage.getItem('token') || '';

  if ( method === 'GET' ) {
    return fetch( url );
  } else {
    return fetch( url, {
      method,
      headers: {
        'Authorization': 'Basic',
        'Content-type': 'application/json; charset=utf-8',
        'Set-Cookie': token
      },
      body: JSON.stringify( data )
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
        'Set-Cookie': token
      }
    });
  } else {
    return fetch( url, {
      method,
      headers: {
        'Authorization': 'Basic',
        'Content-type': 'application/json; charset=utf-8',
        'Set-Cookie': token
      },
      body: JSON.stringify( data )
    });
  }

}

export {
  fetchSinToken,
  fetchConToken
}
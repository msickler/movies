import fetch from 'isomorphic-fetch';

const API_URL = process.env.REACT_APP_API_URL;

const setMovies = movies => {
  return {
    type: GET_MOVIES_SUCCESS,
    movies
  }
}

export const getMovies = () => {
  return dispatch => {
    dispatch({ type: 'LOADING_MOVIES' })
    return fetch(`${API_URL}/movies`)
      .then(response => response.json())
      .then(movies => dispatch(setMovies(movies)))
      .catch(error => console.log(error))
  }
}

const addMovie = movie => {
  return {
    type: 'CREATE_MOVIE_SUCCESS',
    movie
  }
}

export const createMovie = movie => {
  return dispatch => {
    return fetch(`${API_URL}/movies`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ movie: movie })
    })
      .then(response => response.json())
      .then(movie => {
        dispatch(addMovie(movie))
        dispatch(resetMovieForm())
      })
      .catch(error => console.log(error))
  }
}

export function deleteMovie(id) {
   return (dispatch) => {
     dispatch({ type: 'DELETE_MOVIE' })
     return fetch(`${API_URL}/movies/${id}`, {
       method:'DELETE',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       },
       body: JSON.stringify({ id: id })
     })
     .then((res) => res.json())
     .then((responseJson) => {dispatch({ type: 'SUCCESSFULLY_DELETED_MOVIE', payload: responseJson})
       return responseJson
     })
   }
 }

 export function editMovie(movie) {
    return (dispatch) => {
      dispatch({ type: 'EDIT_MOVIE' })
      return fetch(`${API_URL}/movies/${movie.id}`, {
        method:'PATCH',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: movie.id,
          title: movie.title,
          director: movie.director,
          img_url: movie.img_url,
          rating: movie.rating,
          year: movie.year
        })
      })
      .then((res) => res.json())
      .then((responseJson) => {dispatch({ type: 'SUCCESSFULLY_EDITED_MOVIE', payload: responseJson })
      return responseJson
      })
    }
  }

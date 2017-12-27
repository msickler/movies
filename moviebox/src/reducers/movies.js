export default (state: [], action) => {
  switch(action.type) {
    case 'LOADING_MOVIES':
      return state

    case 'LOADING_MOVIES_SUCCESS':
      return action.movies

    case 'CREATE_MOVIE_SUCCESS':
      return state.concat(action.movie)

    case 'DELETE_MOVIE':
      return state

    case 'SUCCESSFULLY_DELETED_MOVIE':
      return action.payload

    case 'EDIT_MOVIE':
      return state 

    case 'SUCCESSFULLY_EDITED_MOVIE':
      return action.payload

    default: return state

  }
}

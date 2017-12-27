const initialState = {
  title: '',
  author: '',
  img_url: '',
  rating: 0,
  completed: '',
  likes: 0
}

export default (state = initialState, action) => {

  switch(action.type) {
    case 'UPDATED_DATA':
      return action.moviesForm;

    case 'RESET_MOVIE_FORM':
      return initialState;

    default:
      return state;
  }
}

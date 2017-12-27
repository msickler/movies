export const updateMovieForm = moviesForm => {
  return {
    type: 'UPDATED_DATA',
    moviesForm
  }
}

export const resetMovieForm = () => {
  return {
    type: 'RESET_MOVIE_FORM'
  }
} 

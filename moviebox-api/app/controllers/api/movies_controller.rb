class Api::MoviesController < ApplicationController
  before_action :set_movie, only: [:show, :update, :destroy]

  def index
    render json: Movie.all
  end

  def create
    binding.pry
    movie = Movie.new(movie_params)
    if movie.save
      render json: movie
    else
      render json: { message: movie.errors }, status: 400
    end
  end

  def show
    render json @movie
  end

  def update
    if @movie.update(movie_params)
      render json: Movie.all, status:201
    else
      render json: { message: @movie.errors }, status: 400
    end
  end

  def destroy
    @movie = Movie.find(movie_params[:id])
    @movie.delete
    render json: Movie.all, status: 412
  end

  private

  def set_movie
    @movie = Movie.find_by(id: params[:id])
  end

  def movie_params
    params.require(:movie).permit(:id, :title, :director, :year, :img_url, :rating)
  end

end

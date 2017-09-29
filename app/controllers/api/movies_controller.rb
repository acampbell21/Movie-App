class Api::MoviesController < ApplicationController
  def index
    render json: Movie.all
  end

  def create
    movie = Movie.new(movie_params)
    if movie.save
      render json: movie
    else
      render json: { errors: movie.errors }, status: :unprocessable_entity
    end
  end

  def update
    movie = Movie.find(params[:id])
    if movie.update(movie_params)
      render json: movie
    else
      # render 404
    end
  end

  def destroy
    Movie.find(params[:id]).destroy
    render json: { message: 'Movie deleted' }
  end

  private

  def movie_params
    params.require(:movie).permit(:title, :summary, :release_year)
  end

end

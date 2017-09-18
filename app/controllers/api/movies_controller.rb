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
    movie.update(complete: !movie.complete)
    render json: movie
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

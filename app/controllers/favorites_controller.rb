class FavoritesController < ApplicationController
    def index
        favorites = Favorite.all
        render json: favorites, status: :ok
    end

    def destroy
        favorite = Favorite.find(params[:id])
        favorite.destroy
        head :no_content
    end

    def create
        favorite = Favorite.create!(favorite_params)
        render json: favorite, status: :created
    end

    def update
        favorite = Favorite.find(params[:id])
        favorite.update!(favorite_params)
        render json: favorite, status: :ok
    end

    private

    def favorite_params
        params.permit(:user_id, :team_id)
    end

end

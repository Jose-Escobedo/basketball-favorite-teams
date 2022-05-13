class StatsController < ApplicationController
    def index 
        stats = Stat.all
        render json: stats, status: :ok
    end

    def show
        stat = Stat.find(params[:id])
        render json: stat, status: :ok
    end
end

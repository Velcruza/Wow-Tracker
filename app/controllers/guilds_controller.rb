class GuildsController < ApplicationController
    
    def index
        render json: Guild.all, status: :ok
    end
end

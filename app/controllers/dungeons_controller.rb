class DungeonsController < ApplicationController
    def index
        render json: Dungeon.all, status: :ok
    end
end

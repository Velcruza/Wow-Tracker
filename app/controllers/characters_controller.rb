class CharactersController < ApplicationController
    def create
        new_char = Character.create!(char_params)
        render json: new_char, status: :created
    end

    def show
        char = Character.find(params[:id])
        render json: char
    end

    def destroy
        char = Character.find(params[:id])
        char.destroy
    end
    
    private

    def char_params
        params.permit(:name, :realm, :bio)
    end
end

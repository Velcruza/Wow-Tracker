class UserCharactersController < ApplicationController
    def create
        new_user_char = UserCharacter.create!(user_char_params)
        render json: new_user_char, status: :created
    end

    private

    def user_char_params
        params.permit(:user_id, :character_id)
    end
end

class Character < ApplicationRecord
    has_many :user_characters, dependent: :delete_all
end

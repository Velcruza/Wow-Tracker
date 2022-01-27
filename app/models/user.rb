class User < ApplicationRecord
    has_secure_password
    has_many :messages
    has_many :user_characters
    has_many :characters, through: :user_characters
    validates :username, presence: true
end

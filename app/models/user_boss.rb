class UserBoss < ApplicationRecord
  belongs_to :character
  belongs_to :boss
end

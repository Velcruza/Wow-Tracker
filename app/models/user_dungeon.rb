class UserDungeon < ApplicationRecord
  belongs_to :character
  belongs_to :dungeon
end

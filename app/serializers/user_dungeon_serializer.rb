class UserDungeonSerializer < ActiveModel::Serializer
  attributes :id, :level, :modifier
  has_one :character
  has_one :dungeon
end

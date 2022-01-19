class UserBossSerializer < ActiveModel::Serializer
  attributes :id, :parse
  has_one :character
  has_one :boss
end

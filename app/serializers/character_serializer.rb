class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :name, :bio, :realm
end

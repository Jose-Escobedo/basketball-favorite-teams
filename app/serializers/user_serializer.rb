class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :password_digest
  has_many :games
  has_many :teams, through: :games
  has_many :favorites
  has_many :teams, through: :favorites
end

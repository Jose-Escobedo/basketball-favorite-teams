class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :password_digest
  has_many :games
  has_many :teams, through: :games
end

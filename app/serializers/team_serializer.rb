class TeamSerializer < ActiveModel::Serializer
  attributes :id, :name, :img_url
  has_many :games
  has_many :users, through: :games
end

class TeamSerializer < ActiveModel::Serializer
  attributes :id, :name, :img_url
  has_one :stat
  has_many :favorites
  has_many :users, through: :favorites
end

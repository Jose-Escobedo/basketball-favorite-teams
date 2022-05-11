class GameSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :team1_id, :team2_id
  belongs_to :user
  belongs_to :team1, class_name: 'Team'
  belongs_to :team2, class_name: 'Team'
end

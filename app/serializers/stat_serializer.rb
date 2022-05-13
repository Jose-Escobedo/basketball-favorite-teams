class StatSerializer < ActiveModel::Serializer
  attributes :id, :wins, :losses, :odds, :team_id
  belongs_to :team
end

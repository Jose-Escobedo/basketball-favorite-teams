class Team < ApplicationRecord
    validates :name, uniqueness: true
    has_many :team1_games, class_name: 'Game', foreign_key: :team1_id
    has_many :team2_games, class_name: 'Game', foreign_key: :team2_id
    has_many :users, through: :games
    has_many :favorite_teams
    has_many :users, through: :favorite_teams


    def games
      Game.where('team1_id = ? or team2_id = ?', id, id)
    end
    
end

class User < ApplicationRecord
    has_secure_password
    validates :username, presence: true, uniqueness: true
    has_many :games
    has_many :teams, through: :games
    has_many :favorite_teams
    has_many :teams, through: :favorite_teams

    def teams
        Game.where('team1_id = ? or team2_id = ?', id, id)
    end
end

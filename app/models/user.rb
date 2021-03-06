class User < ApplicationRecord
    has_secure_password
    validates :name, presence: true, uniqueness: true
  
    has_many :favorites
    has_many :teams, through: :favorites

    # def teams
    #     Game.where('team1_id = ? or team2_id = ?', id, id)
    # end
end

class CreateGames < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.integer :user_id
      t.integer :team1_id
      t.integer :team2_id

      t.timestamps
    end
  end
end

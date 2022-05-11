# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
game1 = Game.create(
    user_id: '1', 
    team1_id: '1',
    team2_id: '2'
)

game2 = Game.create(
    user_id: '2', 
    team1_id: '3',
    team2_id: '4'
)

game3 = Game.create(
    user_id: '1', 
    team1_id: '3',
    team2_id: '1'
)

suns = Team.create(
    name: "Phoenix Suns", 
    img_url: "./images/phoenix-suns-logo.svg"
)

heat = Team.create(
    name: "Miami Heat", 
    img_url: "./images/phoenix-suns-logo.svg"
)

grizzlies = Team.create(
    name: "Memphis Grizzlies", 
    img_url: "./images/phoenix-suns-logo.svg"
)

celtics = Team.create(
    name: "Boston Celtics", 
    img_url: "./images/phoenix-suns-logo.svg"
)

favorite1 = FavoriteTeam.create(user_id: "1", team_id: "2")
favorite2 = FavoriteTeam.create(user_id: "1", team_id: "3")


zack_user = User.create(username: "zack", password:"flatiron")
bob_user = User.create(username: "bob", password:"flatiron")
tom_user = User.create(username: "tom", password:"flatiron")

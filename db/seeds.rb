# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


suns = Team.create(
    name: "Phoenix Suns", 
    img_url: "https://svgshare.com/i/h2E.svg"
)

mavericks = Team.create(
    name: "Dallas Mavericks", 
    img_url: "https://svgshare.com/i/h2T.svg"
)

grizzlies = Team.create(
    name: "Memphis Grizzlies", 
    img_url: "https://svgshare.com/i/h2V.svg"
)

pelicans = Team.create(
    name: "New Orleans Pelicans", 
    img_url: "https://svgshare.com/i/h1M.svg"
)

nets = Team.create(
    name: "Brooklyn Nets",
    img_url: "https://svgshare.com/i/h2w.svg"
)

hawks = Team.create(
    name: "Atlanta Hawks",
    img_url: "https://svgshare.com/i/h1N.svg"
)

bucks = Team.create(
    name: "Milwaukee Bucks",
    img_url: "https://svgshare.com/i/h27.svg"
)

jazz = Team.create(
    name: "Utah Jazz",
    img_url: "https://svgshare.com/i/h2U.svg"
)

favorite1 = Favorite.create(user_id: 1, team_id: 2)
favorite2 = Favorite.create(user_id: 1, team_id: 3)


zack_user = User.create(name: "zack", password:"flatiron")
bob_user = User.create(name: "bob", password:"flat")
tom_user = User.create(name: "tom", password:"flatearth")

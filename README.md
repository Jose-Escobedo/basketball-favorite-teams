# Project Basketball-Favorite-Teams

## Description

Web application that lets a user add, update, or remove teams from their favorites.

## Deliverables

User can view all teams and games

User can login

User can view their favorites

User can add teams to their favorites

User can delete teams from their favorites

User can update order of their favorites

User can navigate to pages using react router

## Stretch

Teams are basketball teams using Basketball Api

User can view live scores of basketball games using baskteball api

User can view their favorite teams games and live scores

## Mockup

![mockup-1](https://user-images.githubusercontent.com/70832391/167024507-809796f1-4de6-47a2-a004-a22659b45812.png)
![mockup-2](https://user-images.githubusercontent.com/70832391/167024535-f0dcbd30-4807-4339-834b-50c552e99b07.png)

## Backend

![backend-wireframe](https://user-images.githubusercontent.com/70832391/167032336-96019554-5cb6-4359-b244-0fb99d07bd40.png)

## User Model

  User has many games
  
  User has many teams, through games

## Team Model

  Team has many games
  
  Team has many users through games
  
  belongs_to sport

## Game Model

  belongs_to :team1, class_name: 'Team'
  
  belongs_to :team2, class_name: 'Team'
  
  belongs_to :user
  
  belongs_to :sport
  
## Sport Model

  has many games
  
  has many users through games
  
  has many teams


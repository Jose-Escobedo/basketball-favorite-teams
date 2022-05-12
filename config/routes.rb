Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  resources :users, only: [:index, :show, :create, :destroy]
  resources :favorites, only: [:index, :create, :show, :destroy, :update]
  # resources :teams, only: [:index, :show]
  get "/teams", to: "teams#index"
  # get "/favorite_teams", to: "favorite_teams#index"
  # post "/favorite_teams", to: "favorite_teams#create"
  # patch "/favorite_teams", to: "favorite_teams#update"
  # delete "favorite_teams/:id", to: "favorite_teams#destroy"
  post "/login", to: "sessions#create"
  post "/signup", to: "users#create"
  get "/authorized_user", to: "users#show"
  delete "/logout", to: "sessions#destroy"
end

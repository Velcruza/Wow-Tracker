Rails.application.routes.draw do
  
  resources :user_bosses
  resources :user_dungeons
  resources :user_characters
  resources :bosses
  resources :dungeons
  resources :characters
  resources :users

  #user routes
  post '/signup', to: 'users#create'
  get '/me', to: 'users#me'


  #session routes
  post "/login", to: "sessions#create"
  delete '/logout', to: 'sessions#destroy'

  get '/my_characters', to: 'users#my_characters'

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

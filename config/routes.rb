Rails.application.routes.draw do
  
  post "/api/auth/login", to:"session#login"
  delete "/api/auth/logout", to:"session#logout"
  get "/api/current_user", to:"users#current_user"

scope "api" do
  resources :reviews, only: [:index, :create, :update, :destroy]
  resources :foods, only: [:index, :create, :destroy]
  resources :users, only: [:index, :show, :create]

  end
  get '/api/foods/:id', to: 'foods#single_food', as: 'single_food'


  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

 
end

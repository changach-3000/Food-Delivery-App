Rails.application.routes.draw do
  resources :restaurant_foods
  resources :reviews
  resources :foods
  resources :restaurants
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end

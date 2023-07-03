Rails.application.routes.draw do
  resources :reviews
  resources :foods, only: [:index, :create, :destroy]
  get '/foods/:id', to: 'foods#single_food', as: 'single_food'
  resources :users, only: [:index, :show, :create]

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end

Rails.application.routes.draw do
  
  scope "api" do
  resources :reviews
  resources :foods, only: [:index, :create, :destroy]
  resources :users, only: [:index, :show, :create]

  end
  get '/api/foods/:id', to: 'foods#single_food', as: 'single_food'


  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

 
end

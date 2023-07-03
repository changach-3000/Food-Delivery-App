class Restaurant < ApplicationRecord
     has_many :restaurant_foods
     has_many :foods, through: :restaurant_foods
     has_many :reviews
end
   

class RestaurantFood < ApplicationRecord
  belongs_to :restaurant
  belongs_to :food
end

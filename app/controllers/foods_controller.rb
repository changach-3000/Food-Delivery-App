class FoodsController < ApplicationController
  skip_before_action :authorize, only: [:index]
     ###get all foods
     def index
      foods = Food.includes(reviews: :user).all
      foods_data = foods.map do |food|
        {
          id: food.id,
          name: food.name,
          image: food.image,
          price: food.price,
          restaurant_name: food.restaurant_name,
          
          reviews: food.reviews.map do |review|
            {
              id: review.id,
              comment: review.comment,
              username: review.user.username
            }
          end
        }
      end
      render json: foods_data
    end
    
    


### Get food by id
def single_food
     foods= Food.includes(:reviews).find_by(id: params[:id])
     
     if foods.nil?
       render json: { error: "Food not found" }, status: :not_found
     else
       render json: foods, include: :reviews
     end
end
   
   
     ###add food 
     def create
      if !@current_user || !@current_user.is_admin?
        render json: { error: "You are not authorized to create a new food" }, status: :unauthorized
      else
        food = Food.new(food_params)
        food.user_id = @current_user.id # Assign the user_id explicitly
    
        if food.save
          render json: { success: "Food created successfully" }
        else
          render json: { error: food.errors.full_messages.join(", ") }, status: :unprocessable_entity
        end
      end
    end
    
     ###delete foods
     def destroy
      food = Food.find_by(id: params[:id])
    
      if food.nil?
        render json: { error: "Food not found" }, status: :not_found
      elsif !@current_user
        render json: { error: "You are not authorized to delete this food" }, status: :unauthorized
      elsif @current_user.is_admin? && food.user_id != @current_user.id
        render json: { error: "You are not authorized to delete another admin's food" }, status: :unauthorized
      else
        food.reviews.destroy_all
        food.destroy
        render json: { success: "Food and its reviews deleted successfully" }
      end
    end
    
    
        
        
   
     private
   
     def food_params 
       params.permit(:name, :description,:image, :price, :restaurant_name)
     end
   end
   
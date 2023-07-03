class FoodsController < ApplicationController
     ###get all foods
     def index 
       foods = Food.all 
       render json: foods
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
       food = Food.create(food_params)
             
       if food.persisted?
         render json: { success: "Food created successfully" }
       else
         render json: { error: food.errors.full_messages.join(", ") }, status: :unprocessable_entity
       end
     end
   
     ###delete foods
     def destroy
          food = Food.find_by(id: params[:id])
        
          if food.nil?
            render json: { error: "Food not found" }, status: :not_found
          else
            food.reviews.destroy_all
            food.destroy
            render json: { success: "Food and its reviews deleted successfully" }
          end
        end
        
   
     private
   
     def food_params 
       params.permit(:name, :image, :price, :restaurant_name)
     end
   end
   
class ReviewsController < ApplicationController
     skip_before_action :authorize, only: [:index]
        
     ### get all reviews
     def index
       reviews = Review.all
       render json: reviews
     end
   
     ### create new review
     def create
       @current_user
       food = Food.find_by(id: params[:food_id])
   
       if @current_user.nil?
         render json: { error: "Only existing users can comment" }, status: :not_found
       elsif food.nil?
         render json: { error: "No such food" }, status: :not_found
       else
         review = @current_user.reviews.create(comment: params[:comment], food: food)
         render json: review
       end
     end
   
     ### update existing review by id
     def update
       review = Review.find_by(id: params[:id])
   
       if review.nil?
         render json: { error: "Review not found" }, status: :not_found
       else
         user = User.find_by(id: params[:user_id])
   
         if @current_user.reviews.update(comment: params[:comment])
           render json: { success: "Updated successfully" }
         else
           render json: { error: review.errors.full_messages.join(", ") }, status: :unprocessable_entity
         end
       end
     end
   
     ### delete an existing review by the id
     def destroy
       review = Review.find_by(id: params[:id])
   
       if review.nil?
         render json: { error: "Review not found" }, status: :not_found
       elsif review.user_id != @current_user.id
         render json: { error: "You are not authorized to delete this review" }, status: :unauthorized
       else
         if review.destroy
           render json: { success: "Review deleted successfully" }
         else
           render json: { error: review.errors.full_messages.join(", ") }, status: :unprocessable_entity
         end
       end
     end
   end
   
class ReviewsController < ApplicationController
     ### get all reviews
     def index
       reviews = Review.all
       render json: reviews
     end
   
     ### create new review
     def create
       user = User.find_by(id: params[:user_id])
       food = Food.find_by(id: params[:food_id])
   
       if user.nil?
         render json: { error: "Only existing users can comment" }, status: :not_found
       elsif food.nil?
         render json: { error: "No such food" }, status: :not_found
       else
         review = Review.create(comment: params[:comment], user: user, food: food)
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
                
            if review.update(comment: params[:comment], user: user)
              render json: review
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
       elsif review.user_id != params[:user_id].to_i
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
   
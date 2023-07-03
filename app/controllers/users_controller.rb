class UsersController < ApplicationController
     ##get all users
     def index
       users = User.all
       render json: users
     end
   ###get user bty id
   def show
     user = User.includes(:reviews).find_by(id: params[:id])
     render json: user, include: :reviews
   end
   

   ###create new user
   def create
     user = User.create(user_params)
   
     if user.valid?
       render json: { success: "User created successfully" }
     else
       render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
     end
   end
   
   private
   
   def user_params
     params.permit(:username, :email, :profile_picture, :password, :is_admin)
   end
   
end
   
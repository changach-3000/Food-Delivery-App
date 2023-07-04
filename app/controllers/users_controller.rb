class UsersController < ApplicationController
  skip_before_action :authorize, only: [:create ]
###get current logged  in user

def current_user
  user = User.find_by(id: session[:user_id])

  if user
    render json: user.slice(:id, :username, :email, :profile_picture)
  else
    render json: { error: "Not logged in" }, status: :not_found
  end
end



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
  if @current_user
    render json: { error: "You are already logged in" }, status: :unprocessable_entity
  else
    user = User.create(user_params)
  
    if user.valid?
      render json: { success: "User created successfully" }
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end
end


private

def user_params
  params.permit(:username, :email, :profile_picture, :password)
end

end
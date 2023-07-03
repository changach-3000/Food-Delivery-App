class SessionController < ApplicationController
     skip_before_action :authorize, only: [:login]
     ##login function
     def login 
          email = params[:email]
          password = params[:password]
          
          user = User.find_by(email: email)
  
          if user && user.authenticate(password)
              session[:user_id]=user.id
  
              render json: {success: "Login success"}
          else
              render json: {error: "Wrong email adress/password"}
  
          end
      end 
  
  
      def logout
         session.delete :user_id
         render json: {success: "Logout success"}
      end
end

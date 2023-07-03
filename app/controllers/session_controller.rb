class SessionController < ApplicationController
     ##login function
     def login 
          email = params[:email]
          password = params[:password]
         

          users = User.find_by(email: email)

          if user && user.authenticate(password):
               #login user

          else
               render json: {error: "Wrong email adress or password"}
          end

     end
     ## logout function
     def logout 
     end
end

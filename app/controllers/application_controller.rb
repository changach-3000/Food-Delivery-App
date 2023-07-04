class ApplicationController < ActionController::API
     include ActionController::Cookies
   
     private

     def authorize
        @current_user=User.find_by(id: session[:user_id])
        if !@current_user
           render json: {"error": "not authorized"},status: :unauthorized
        end
     
     end

     def authorize_admin
      user = User.find_by(id: session[:user_id])
    
      if user.nil? || !user.is_admin?
        render json: {'error': "User is not authorized" },status: :unauthorized
                       
      end
   end

end

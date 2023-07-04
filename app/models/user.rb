class User < ApplicationRecord
     has_many :reviews
     has_many :foods, through: :reviews
     has_secure_password
     validates :username, presence: true, uniqueness: true, length: { minimum: 8 }
     validates :password, presence: true, length: { minimum: 10 }
     validates :email, presence: true, uniqueness: true

     def is_admin?
          is_admin
     end
   end
   
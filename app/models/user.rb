class User < ApplicationRecord
     has_many :reviews
     has_many :foods, through: :reviews
     validates :username, presence: true, uniqueness: true, length: { minimum: 8 }
     validates :password_digest, presence: true, length: { minimum: 10 }
     validates :email, presence: true
   end
   
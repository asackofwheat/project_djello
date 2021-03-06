class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :user_boards
  has_many :boards, through: :user_boards

  has_many :card_users
  has_many :cards, through: :card_users
end

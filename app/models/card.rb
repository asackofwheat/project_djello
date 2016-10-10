class Card < ApplicationRecord

  belongs_to :list

  has_many :card_users
  has_many :users, through: :card_users
  has_many :activities

end

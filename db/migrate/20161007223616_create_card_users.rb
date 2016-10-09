class CreateCardUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :card_users do |t|
      t.belongs_to :user, index: true
      t.belongs_to :card, index: true

      t.timestamps
    end
  end
end

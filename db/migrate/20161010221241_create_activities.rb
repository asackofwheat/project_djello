class CreateActivities < ActiveRecord::Migration[5.0]
  def change
    create_table :activities do |t|
      t.string :person
      t.string :activity
      t.string :object
      t.text :description
      t.integer :card_id

      t.timestamps
    end
  end
end

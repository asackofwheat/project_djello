class CreateUserBoards < ActiveRecord::Migration[5.0]
  def change
    create_table :user_boards do |t|
      t.belongs_to :user, index: true
      t.belongs_to :board, index: true

      t.timestamps
    end
  end
end

class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.text :comment
      t.integer :user_id
      t.integer :food_id

      t.timestamps
    end
  end
end

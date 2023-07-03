class CreateFoods < ActiveRecord::Migration[7.0]
  def change
    create_table :foods do |t|
      t.string :name
      t.string :image
      t.float :price
      t.string :restaurant_name
      
      t.timestamps
    end
  end
end

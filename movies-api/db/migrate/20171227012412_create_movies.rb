class CreateMovies < ActiveRecord::Migration[5.1]
  def change
    create_table :movies do |t|
      t.string :title
      t.string :director
      t.integer :year
      t.string :img_url
      t.integer :rating
    end
  end
end

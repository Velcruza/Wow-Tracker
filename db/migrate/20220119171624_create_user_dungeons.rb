class CreateUserDungeons < ActiveRecord::Migration[6.1]
  def change
    create_table :user_dungeons do |t|
      t.references :character, null: false, foreign_key: true
      t.references :dungeon, null: false, foreign_key: true
      t.integer :level
      t.string :modifier

      t.timestamps
    end
  end
end

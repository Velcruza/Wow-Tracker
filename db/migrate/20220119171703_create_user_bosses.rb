class CreateUserBosses < ActiveRecord::Migration[6.1]
  def change
    create_table :user_bosses do |t|
      t.references :character, null: false, foreign_key: true
      t.references :boss, null: false, foreign_key: true
      t.integer :parse

      t.timestamps
    end
  end
end

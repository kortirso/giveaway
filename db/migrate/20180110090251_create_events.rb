class CreateEvents < ActiveRecord::Migration[5.1]
    def change
        create_table :events do |t|
            t.integer :user_id
            t.string :name, null: false, default: ''
            t.string :image
            t.datetime :date_end
            t.integer :count_winners, default: 1
            t.integer :count_losers, default: 0
            t.string :url
            t.integer :price_tokens, default: 0
            t.timestamps
        end
        add_index :events, :user_id
    end
end

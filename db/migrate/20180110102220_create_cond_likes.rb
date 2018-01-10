class CreateCondLikes < ActiveRecord::Migration[5.1]
    def change
        create_table :cond_likes do |t|
            t.integer :event_id
            t.string :url, null: false, default: ''
            t.timestamps
        end
        add_index :cond_likes, :event_id
    end
end

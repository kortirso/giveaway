class CreateIdentities < ActiveRecord::Migration[5.1]
    def change
        create_table :identities do |t|
            t.integer :user_id
            t.string :uid, null: false, default: ''
            t.string :provider, null: false, default: ''
            t.timestamps
        end
        add_index :identities, :user_id
    end
end

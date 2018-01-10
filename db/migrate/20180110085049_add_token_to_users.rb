class AddTokenToUsers < ActiveRecord::Migration[5.1]
    def self.up
        add_column :users, :token, :string, null: false, default: ''
    end

    def self.down
        remove_column :users, :token
    end
end

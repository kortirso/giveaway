class AddUsernameToUsers < ActiveRecord::Migration[5.1]
    def self.up
        add_column :users, :username, :string, null: false, default: ''
    end

    def self.down
        remove_column :users, :username
    end
end

class AddLikersToEvents < ActiveRecord::Migration[5.1]
    def change
        add_column :events, :likers, :text, default: ''
    end
end

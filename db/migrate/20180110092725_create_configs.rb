class CreateConfigs < ActiveRecord::Migration[5.1]
    def change
        create_table :configs do |t|
            t.integer :koef_eur
            t.integer :koef_usd
            t.timestamps
        end
    end
end

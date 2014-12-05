

class InitializeDatabase < ActiveRecord::Migration
  def change
    create_table :contacts do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.timestamps
    end
    create_table :phone_numbers do |table|
      table.references :contact
      table.string :label
      table.string :number
      table.timestamps
    end
  end
end

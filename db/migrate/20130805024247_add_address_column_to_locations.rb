class AddAddressColumnToLocations < ActiveRecord::Migration
  def change
    add_column :locations, :address, :string
  end
end

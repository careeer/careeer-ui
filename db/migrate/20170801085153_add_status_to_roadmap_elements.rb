class AddStatusToRoadmapElements < ActiveRecord::Migration[5.1]
  def change
    add_column :roadmap_elements, :status, :string
  end
end

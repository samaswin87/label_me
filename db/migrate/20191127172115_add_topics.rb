# rails db:migrate:down VERSION=20191127172115
class AddTopics < ActiveRecord::Migration[6.0]

  def up
    create_table(:topics) do |t|
      t.string :name, :limit => 120
      t.text   :description
      t.text :url
      t.string :author, :limit => 60
      t.column :status_id, 'tinyint(2) unsigned', :default => 0
      t.timestamps
    end
  end

  def down
    drop_table(:topics)
  end

end

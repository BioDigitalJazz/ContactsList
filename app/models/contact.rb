


class Contact < ActiveRecord::Base
 
  has_many :phone_numbers
  validates :first_name, :last_name, presence: true
  validates :email, uniqueness: true, presence: true

  def to_s
    return "ID\# #{self.id} - #{self.first_name} #{self.last_name} - #{self.email}"
  end
end

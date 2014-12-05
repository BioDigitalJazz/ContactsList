

class PhoneNumbers < ActiveRecord::Base

  belongs_to :contact

  # def to_s
  #   output = ""
  #   @numbers.each { |label, value| output += "#{label.to_s}: #{value}  " }
  #   output[0..-2]
  # end


end

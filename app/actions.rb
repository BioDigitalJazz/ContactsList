# Homepage (Root path)
get '/' do
  erb :index
end

get '/contacts' do
  Contact.all.to_json
end 

get '/contacts/search' do
  Contact.where("email LIKE ? OR last_name LIKE ? OR first_name LIKE ?", "%#{params[:query]}%","%#{params[:query]}%","%#{params[:query]}%").to_json
end

post '/contacts/create' do
  response = Hash.new
  response[:result] = false
  contact = Contact.new(first_name: params[:first_name], last_name: params[:last_name], email: params[:email])

  if contact.save
    response[:result] = true
    response[:id] = contact.id
  end

  response.to_json
end

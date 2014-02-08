require 'sinatra'
require "sinatra/content_for"

get '/' do
  	erb :index, :layout => false

end

get '/features' do
    erb :features, :layout => :layout
end

get '/pricing' do
    erb :pricing
end

get '/contact' do
    erb :contact_us
end

get '/how_it_works' do
	erb :how_it_works
end

get '/how_to' do
	erb :how_to_order
end



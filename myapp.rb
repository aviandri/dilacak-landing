require 'sinatra'
require "sinatra/content_for"
require 'pony'

require 'pry'

configure :development do
  set :email_options, {
    :via => :smtp,
    :via_options => {
	    :address              => 'smtp.gmail.com',
	    :port                 => '587',
	    :enable_starttls_auto => true,
	    :user_name            => '',
	    :password             => '',
	    :authentication       => :plain, 
	    :domain               => "" 
  	}
  }

Pony.options = settings.email_options

end


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

get '/about' do
	erb :about_us
end


post '/send_message' do
	Pony.mail :to => "aviandri@dilacak.com",
            :from => params[:email],
            :subject => "New Message from, #{params[:name]}!",
            :body => erb(:message_template, :layout => false)

end


post '/send_order' do
	Pony.mail :to => "aviandri@dilacak.com",
            :from => params[:email],
            :subject => "New Message from, #{params[:name]}!",
            :body => erb(:message_template, :layout => false)

    redirect '/contact' 
end





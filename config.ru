require 'rubygems'
require 'sinatra'
require 'rack'
require 'newrelic_rpm'
require './myapp.rb'

set :root, Pathname(__FILE__).dirname
set :environment, :development
set :run, false
NewRelic::Agent.after_fork(:force_reconnect => true)
run Sinatra::Application

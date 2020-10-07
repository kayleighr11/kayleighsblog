require 'sinatra'
require 'mongoid'
require './models/post.rb'
require 'dotenv/load'

Mongoid.load!(File.join(File.dirname(__FILE__), 'config', 'mongoid.yml'))

get '/' do
  @title = 'Training Blog'
  erb :index
end

# index action
get '/posts' do
  Post.all.to_json
end

get '/posts/:post_id' do |post_id|
  Post.find(post_id).to_json
end 

#string > create variable > use it 
source 'https://rubygems.org'

ruby '2.3.1'

git_source(:github) do |repo_name|
    repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?('/')
    "https://github.com/#{repo_name}.git"
end

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '5.1.4'

# Use postgresql as the database for Active Record
gem 'pg', '0.21'

# Use Puma as the app server
gem 'puma', '3.10.0'

# Use SCSS for stylesheets
gem 'sass-rails', '5.0.6'

# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '3.2.0'

# See https://github.com/rails/execjs#readme for more supported runtimes
gem 'therubyracer', platforms: :ruby

# Add Webpack
gem 'foreman'
gem 'webpacker', '3.2.0'
gem 'webpacker-react', '~> 0.3.2'

# Store secrets
gem 'figaro'

# Code analyzation
gem 'rubocop', '~> 0.49.1', require: false

# Use Slim as the templating engine. Better than ERB
gem 'slim'

# Authentication
gem 'devise', github: 'plataformatec/devise'
gem 'omniauth-instagram'

# I18n
gem 'route_translator'

# HTTP Service
gem 'httparty', '0.15.6'

group :development, :test do
    gem 'capybara'
    gem 'database_cleaner'
    gem 'factory_bot_rails'
    gem 'rails-controller-testing'
    gem 'rspec-rails'
end

group :development do
    gem 'capistrano', require: false
    gem 'capistrano-bundler', require: false
    gem 'capistrano-rails', require: false
    gem 'capistrano-rvm', require: false
    gem 'listen', '3.1.5'
    gem 'spring'
    gem 'spring-watcher-listen', '~> 2.0.0'
end

group :test do
    gem 'json_spec'
    gem 'shoulda-matchers'
    gem 'simplecov', require: false
end

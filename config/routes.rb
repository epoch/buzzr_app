P3::Application.routes.draw do
  root :to => 'home#index'
<<<<<<< HEAD
  resources :user, :only => [:index, :new, :create]
  resources :images, :only => [:index, :show, :new]
  resources :location, :only => [:index, :new, :create] do
  end
=======

  resources :users, :only => [:index, :new, :create]

  resources :locations, :only => [:index, :create]
    #collection do
    #  get :???
    #end

  resources :images, :only => [:index, :show, :new]
    #collection do
    #  get :???
    #end
>>>>>>> 5071e94ac7a0dd8464f6ec23c07b81e16581b4ad

  get '/map' => 'home#map'
  get '/points/:locale' => 'home#points'

  get '/photo/:id/' => 'landing#photo'
  get '/landing' => 'landing#index'

  get '/login' => 'session#new'
  post '/login' => 'session#create'
  delete '/login' => 'session#destroy'

end

Rails.application.routes.draw do
  root 'homepage#index'

  #get '/styleguide', to: 'homepage#styleguide', as: 'styleguide'
end

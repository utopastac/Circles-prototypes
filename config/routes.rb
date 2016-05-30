Rails.application.routes.draw do
  root 'homepage#index'

  get '/circles', to: 'circles#index', as: 'circles'
end

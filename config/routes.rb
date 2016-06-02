Rails.application.routes.draw do
  root 'homepage#index'

  get '/intro', to: 'circles#intro', as: 'intro'
  get '/status', to: 'circles#status', as: 'status'
  get '/onboarding', to: 'circles#onboarding', as: 'onboarding'
  get '/onboarding-support', to: 'circles#onboarding-support', as: 'onboarding-support'

  get '/network', to: 'circles#network', as: 'network'
  get '/account', to: 'circles#account', as: 'account'
  get '/account_profile', to: 'circles#account_profile', as: 'account_profile'
  get '/account_readme', to: 'circles#account_readme', as: 'account_readme'
  get '/notifications', to: 'circles#notifications', as: 'notifications'
  get '/circles', to: 'circles#circles', as: 'circles'
  get '/circle', to: 'circles#circle', as: 'circle'
  get '/circle_private', to: 'circles#circle_private', as: 'circle_private'


end

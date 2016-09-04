Rails.application.routes.draw do
  root 'homepage#index'

  get '/intro', to: 'circles#intro', as: 'intro'

  get '/setup-status', to: 'circles#setup-status', as: 'setup-status'
  get '/status', to: 'circles#status', as: 'status'

  get '/home', to: 'circles#home', as: 'home'
  get '/ob_create', to: 'circles#ob_create', as: 'ob_create'
  get '/ob_confirm', to: 'circles#ob_confirm', as: 'ob_confirm'
  get '/ob_double_confirm', to: 'circles#ob_double_confirm', as: 'ob_double_confirm'
  get '/ob_age', to: 'circles#ob_age', as: 'ob_age'

  get '/new_circle', to: 'circles#new_circle', as: 'new_circle'
  get '/new_circle_purpose', to: 'circles#new_circle_purpose', as: 'new_circle_purpose'
  get '/new_circle_who', to: 'circles#new_circle_who', as: 'new_circle_who'
  get '/new_circle_add', to: 'circles#new_circle_add', as: 'new_circle_add'
  get '/new_circle_confirm', to: 'circles#new_circle_confirm', as: 'new_circle_confirm'
  get '/new_circle_photo', to: 'circles#new_circle_photo', as: 'new_circle_photo'

  get '/invite_home', to: 'circles#invite_home', as: 'invite_home'
  get '/invite_create', to: 'circles#invite_create', as: 'invite_create'
  get '/invite_confirm', to: 'circles#invite_confirm', as: 'invite_confirm'
  get '/invite_relationship', to: 'circles#invite_relationship', as: 'invite_relationship'
  get '/invite_double', to: 'circles#invite_double', as: 'invite_double'
  get '/invite_refuse', to: 'circles#invite_refuse', as: 'invite_refuse'
  get '/invite_dont_know', to: 'circles#invite_dont_know', as: 'invite_dont_know'
  get '/invite_your_photo', to: 'circles#invite_your_photo', as: 'invite_your_photo'

  get '/onboarding-support', to: 'circles#onboarding-support', as: 'onboarding-support'

  get '/network', to: 'circles#network', as: 'network'
  get '/account', to: 'circles#account', as: 'account'
  get '/bookmarks', to: 'circles#bookmarks', as: 'bookmarks'

  get '/account_readme', to: 'circles#account_readme', as: 'account_readme'
  get '/notifications', to: 'circles#notifications', as: 'notifications'

  get '/circles', to: 'circles#circles', as: 'circles'
  get '/circle', to: 'circles#circle', as: 'circle'
  get '/circle_private', to: 'circles#circle_private', as: 'circle_private'

  get '/terms_and_conditions', to: 'circles#terms_and_conditions', as: 'terms_and_conditions'

end

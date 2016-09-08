Rails.application.routes.draw do
  root 'homepage#index'

  get '/intro', to: 'circles#intro', as: 'intro'
  get '/what_is_a_circle', to: 'circles#what_is_a_circle', as: 'what_is_a_circle'

  get '/setup_status', to: 'circles#setup_status', as: 'setup_status'
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
  get '/invite_photo', to: 'circles#invite_photo', as: 'invite_photo'

  get '/network_empty', to: 'circles#network_empty', as: 'network_empty'
  get '/network', to: 'circles#network', as: 'network'
  get '/account_empty', to: 'circles#account_empty', as: 'account_empty'
  get '/account', to: 'circles#account', as: 'account'
  get '/bookmarks_empty', to: 'circles#bookmarks_empty', as: 'bookmarks_empty'
  get '/bookmarks', to: 'circles#bookmarks', as: 'bookmarks'

  get '/photo_chooser', to: 'circles#photo_chooser', as: 'photo_chooser'
  get '/photo_confirm', to: 'circles#photo_confirm', as: 'photo_confirm'

  get '/expression', to: 'circles#expression', as: 'expression'
  get '/new_meeting', to: 'circles#new_meeting', as: 'new_meeting'
  get '/new_post', to: 'circles#new_post', as: 'new_post'
  get '/new_pledge', to: 'circles#new_pledge', as: 'new_pledge'

  get '/account_readme', to: 'circles#account_readme', as: 'account_readme'
  get '/notifications', to: 'circles#notifications', as: 'notifications'

  get '/circle_first_time', to: 'circles#circle_first_time', as: 'circle_first_time'
  get '/circle_first_time_status', to: 'circles#circle_first_time_status', as: 'circle_first_time_status'
  get '/circle_first_time_inner', to: 'circles#circle_first_time_inner', as: 'circle_first_time_inner'
  get '/circle_private_first_time', to: 'circles#circle_private_first_time', as: 'circle_private_first_time'
  get '/circle_switcher', to: 'circles#circle_switcher', as: 'circle_switcher'
  get '/circle', to: 'circles#circle', as: 'circle'
  get '/circle_new_status', to: 'circles#circle_new_status', as: 'circle_new_status'
  get '/circle_inner', to: 'circles#circle_inner', as: 'circle_inner'
  get '/circle_private', to: 'circles#circle_private', as: 'circle_private'

  get '/terms_and_conditions', to: 'circles#terms_and_conditions', as: 'terms_and_conditions'

end

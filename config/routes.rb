Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get 'login', to: 'login#index'
  root 'home#index'
end

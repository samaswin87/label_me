Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  devise_for :users, controllers: {
      sessions: 'users/sessions'
  }

  devise_scope :user do
    root to: "users/sessions#new"
  end

  get '/home', to: "home#index"
end

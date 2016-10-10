Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static_pages#index'

  scope 'api' do
    scope 'v1' do
      resources :boards
      resources :lists
      resources :cards
      resources :users
      resources :card_users
      resources :user_boards
      resources :activities
      get 'remove', to: 'card_users#show'
    end
  end
end

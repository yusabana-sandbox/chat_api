Rails.application.routes.draw do
  namespace :api do
    resources :messages do
      resources :reactions
    end
  end
end

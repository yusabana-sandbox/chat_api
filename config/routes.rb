Rails.application.routes.draw do
  resources :messages do
    resources :reactions
  end
end

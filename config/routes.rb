Rails.application.routes.draw do
    devise_for :users, skip: %i[sessions registrations passwords], controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }

    localized do
        devise_for :users, skip: %i[omniauth_callbacks registrations passwords], controllers: { sessions: 'users/sessions' }
        get 'omniauth/:provider' => 'users/omniauth#localized', as: :localized_omniauth
        devise_scope :user do
            get 'users/sign_out' => 'users/sessions#destroy'
        end

        resources :events, only: %i[index show new create]

        root to: 'pages#home'
    end

    match '*path', to: 'application#catch_404', via: :all
end

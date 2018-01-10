module Users
    class OmniauthController < ApplicationController
        def localized
            session[:omniauth_login_locale] = I18n.locale
            redirect_to path_selector(params[:provider])
        end

        private def path_selector(provider)
            case provider
                when 'instagram' then user_instagram_omniauth_authorize_path
                else root_path
            end
        end
    end
end

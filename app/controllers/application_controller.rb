class ApplicationController < ActionController::Base
    protect_from_forgery with: :exception
    prepend_view_path Rails.root.join('frontend')

    before_action :configure_permitted_parameters, if: :devise_controller?

    rescue_from ActionController::RoutingError, with: :render_not_found
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

    def catch_404
        raise ActionController::RoutingError.new(params[:path]), 'route error'
    end

    private def configure_permitted_parameters
        devise_parameter_sanitizer.permit(:sign_up) { |u| u.permit(:username, :email, :password, :password_confirmation) }
    end

    private def render_not_found
        render template: 'pages/error', status: 404
    end
end

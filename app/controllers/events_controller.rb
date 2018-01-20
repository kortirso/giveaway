class EventsController < ApplicationController
    skip_before_action :verify_authenticity_token, only: %i[create]

    def index; end

    def show; end

    def new; end

    def create; end

    private def event_params
        params.require(:event).permit(:name, :url)
    end

    private def condition_params
        params.require(:conditions).permit!
    end
end

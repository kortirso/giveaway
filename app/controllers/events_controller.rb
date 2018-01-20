class EventsController < ApplicationController
    skip_before_action :verify_authenticity_token, only: %i[create]
    before_action :find_events, only: %i[index]
    before_action :find_event, only: %i[show]

    def index; end

    def show; end

    def new; end

    def create
        SaveEventService.new(event: event_params, conditions: condition_params, user_id: current_user.id).call
    end

    private def event_params
        params.require(:event).permit(:name, :url)
    end

    private def condition_params
        params.require(:conditions).permit!.to_h
    end

    private def find_events
        @events = Event.all
    end

    private def find_event
        @event = Event.find(params[:id])
    end
end

# Service for saving events with conditions from new event form
class SaveEventService
    attr_reader :event_params, :conditions_params, :user_id

    def initialize(args)
        @event_params = args[:event]
        @conditions_params = args[:conditions]
        @user_id = args[:user_id]
    end

    def call
        event = Event.create event_params.merge(user_id: user_id, date_end: DateTime.now, count_winners: 1, count_losers: 1)
        check_likes_conditions(event)
    end

    private def check_likes_conditions(event)
        return if conditions_params[:likes][:present] == 'false'
        event.create_cond_like url: conditions_params[:likes][:url]
    end
end

# Service for analyzing instagram posts
class EventAnalyzeService
    attr_reader :event, :instagram_service

    def initialize(args = {})
        @event = args[:event]
        @instagram_service = InstagramService.new(token: event.user.token)
    end

    # receive likes for post and update Event
    def receive_likers
        media = instagram_service.media_by_shortcode(event.url)
        media_id = media['data']['id']
        likes = instagram_service.media_likes(media_id)
        event.update(likers: likes['data'].collect { |elem| elem['username'] })
    end
end
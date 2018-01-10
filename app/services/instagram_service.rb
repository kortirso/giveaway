require 'httparty'

class InstagramService
    include HTTParty

    attr_reader :access_token

    def initialize(args = {})
        @access_token = args[:token]
    end

    def media_by_shortcode(shortcode)
        request(select_uri(type: __method__, shortcode: shortcode))
    end

    def media_likes(media_id)
        request(select_uri(type: __method__, media_id: media_id))
    end

    def media_comments(media_id)
        request(select_uri(type: __method__, media_id: media_id))
    end

    def self_followed_by
        request(select_uri(type: __method__)
    end

    private def select_uri(args = {})
        case args[:type]
            when :media_by_shortcode then "https://api.instagram.com/v1/media/shortcode/#{args[:shortcode]}?access_token=#{access_token}"
            when :media_likes then "https://api.instagram.com/v1/media/#{args[:media_id]}/likes?access_token=#{access_token}"
            when :media_comments then "https://api.instagram.com/v1/media/#{args[:media_id]}/comments?access_token=#{access_token}"
            when :self_followed_by then "https://api.instagram.com/v1/users/self/followed-by?access_token=#{access_token}"
        end
    end

    private def request(uri)
        response = self.class.get(uri)
        response.parsed_response
    end
end

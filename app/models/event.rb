# Represents events for giveawaing
class Event < ApplicationRecord
    serialize :likers

    belongs_to :user

    has_one :cond_like, dependent: :destroy

    validates :name, :user_id, :date_end, :count_winners, :count_losers, :url, :price_tokens, presence: true

    def price_in_currency(currency)
        case currency
            when 'EUR' then (price_tokens / Config.koef_eur).round(2)
            when 'USD' then (price_tokens / Config.koef_usd).round(2)
            when 'RUR' then price_tokens
            else 1
        end
    end
end

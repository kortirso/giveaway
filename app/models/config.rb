# Represents application's configuration
class Config < ApplicationRecord
    EUR_KOEF = 70
    USD_KOEF = 60

    validates :koef_eur, :koef_usd, presence: true

    class << self
        def koef_eur
            Config.last.try(:koef_eur) || EUR_KOEF
        end

        def koef_usd
            Config.last.try(:koef_usd) || USD_KOEF
        end
    end
end

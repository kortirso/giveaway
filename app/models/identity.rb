# Represents identities with social networks
class Identity < ApplicationRecord
    belongs_to :user

    validates :uid, :provider, :user_id, presence: true

    class << self
    end
end

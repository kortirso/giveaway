# Represents post's url if event's condition is liking
class CondLike < ApplicationRecord
    belongs_to :event

    validates :url, :event_id, presence: true
end

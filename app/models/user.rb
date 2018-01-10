# Represents user object
class User < ApplicationRecord
    devise :database_authenticatable, :registerable, :recoverable, :rememberable, :trackable, :validatable, :omniauthable, omniauth_providers: %i[instagram]

    has_many :identities, dependent: :destroy

    validates :username, presence: true, uniqueness: true

    class << self
        def find_for_oauth(auth)
            identity = Identity.find_for_oauth(auth)
            return identity.user if identity.present?
            user = User.find_or_create_by(username: auth.extra.raw_info[:username]) do |u|
                u.password = Devise.friendly_token[0, 20]
                u.email = "#{auth.extra.raw_info[:username]}@instagram.com"
            end
            user.update_token(auth.credentials[:token])
            user.identities.create(provider: auth.provider, uid: auth.uid)
            user
        end
    end

    def update_token(token)
        update(token: token)
    end
end

FactoryBot.define do
    factory :oauth, class: OmniAuth::AuthHash do
        provider 'instagram'
        uid { '1234567890' }
        extra { build(:oauth_info) }

        trait :with_credentials do
            credentials { build(:oauth_credentials) }
        end
    end

    factory :oauth_info, class: OmniAuth::AuthHash do
        raw_info { build(:info) }
    end

    factory :info, class: OmniAuth::AuthHash do
        username { 'test_first_name' }
    end

    factory :oauth_credentials, class: OmniAuth::AuthHash do
        expires true
        expires_at { 2.months.from_now.to_i }
        token { SecureRandom.base58 161 }
    end
end

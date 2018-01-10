FactoryBot.define do
    factory :identity do
        uid 123
        provider 'instagram'
        association :user
    end
end

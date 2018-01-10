FactoryBot.define do
    factory :event do
        sequence(:name) { |i| "name#{i}" }
        association :user
        date_end DateTime.now + 7.days
        count_winners 1
        count_losers 3
        url 'someurl'
        price_tokens 300
    end
end

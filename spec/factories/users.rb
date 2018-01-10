FactoryBot.define do
    factory :user do
        sequence(:email) { |i| "tester#{i}@gmail.com" }
        password 'password12'
    end
end

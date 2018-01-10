RSpec.describe Event, type: :model do
    it { should belong_to :user }
    it { should validate_presence_of :name }
    it { should validate_presence_of :user_id }
    it { should validate_presence_of :date_end }
    it { should validate_presence_of :count_winners }
    it { should validate_presence_of :count_losers }
    it { should validate_presence_of :url }
    it { should validate_presence_of :price_tokens }

    it 'should be valid' do
        event = create :event

        expect(event).to be_valid
    end

    describe 'object methods' do
        context '.price_in_currency' do
            let!(:config) { create :config }
            let!(:event) { create :event }

            it 'returns price in EUR for EUR' do
                expect(event.price_in_currency('EUR')).to eq((event.price_tokens / config.koef_eur).round(2))
            end

            it 'returns price in USD for USD' do
                expect(event.price_in_currency('USD')).to eq((event.price_tokens / config.koef_usd).round(2))
            end

            it 'returns price in RUR for RUR' do
                expect(event.price_in_currency('RUR')).to eq event.price_tokens
            end
        end
    end
end

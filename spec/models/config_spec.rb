RSpec.describe Config, type: :model do
    it { should validate_presence_of :koef_eur }
    it { should validate_presence_of :koef_usd }

    it 'should be valid' do
        config = create :config

        expect(config).to be_valid
    end

    describe 'class methods' do
        context '.koef_eur' do
            let!(:config) { create :config }

            it 'returns eur koef' do
                expect(Config.koef_eur).to eq config.koef_eur
            end
        end

        context '.koef_usd' do
            let!(:config) { create :config }

            it 'returns usd koef' do
                expect(Config.koef_usd).to eq config.koef_usd
            end
        end
    end
end

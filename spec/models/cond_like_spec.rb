RSpec.describe CondLike, type: :model do
    it { should belong_to :event }
    it { should validate_presence_of :url }
    it { should validate_presence_of :event_id }

    it 'should be valid' do
        cond_like = create :cond_like

        expect(cond_like).to be_valid
    end
end

RSpec.describe EventsController, type: :controller do
    describe 'GET #index' do
        before { get :index, params: { locale: 'en' } }

        it 'renders events#index' do
            expect(response).to render_template :index
        end
    end

    describe 'GET #new' do
        before { get :new, params: { locale: 'en' } }

        it 'renders events#new' do
            expect(response).to render_template :new
        end
    end
end

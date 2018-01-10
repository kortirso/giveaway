RSpec.describe PagesController, type: :controller do
    describe 'GET #home' do
        before { get :home, params: { locale: 'en' } }

        it 'renders pages#home' do
            expect(response).to render_template :home
        end
    end
end

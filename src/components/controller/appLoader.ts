import Loader from './loader';

class AppLoader extends Loader {
    constructor() {

        super('https://rss-news-api.onrender.com', { 
    apiKey: 'adc2f44c7fb3489d95446cbb236333a8',
});
    }
}

export default AppLoader;
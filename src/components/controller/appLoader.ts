import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super(process.env.API_URL || 'https://onrender.com', {
            apiKey: process.env.API_KEY || '',
        });
    }
}

export default AppLoader;
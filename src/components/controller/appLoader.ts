import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://railway.app', {
            apiKey: '492b4931a26d400192d6e379024f2b90',
        });
    }
}

export default AppLoader;
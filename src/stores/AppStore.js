import Store from '../lib/Store';
import find from 'lodash/collection/find';
import dispatcher from '../dispatcher';
import Actions from '../actions';
import $ from 'jquery';

class AppStore extends Store {

    constructor() {
        super('AppStore');
        this.logger.debug('Initializing AppStore');

        this.initialize('pages', [
          { name: 'login', title: 'Login', nav: true, auth: false, default: true },
          { name: 'tabla', title: 'Tabla', nav: true, auth: false },
          { name: 'ej1', title: 'EJ1', nav: true, auth: false },
          { name: 'ej2', title: 'EJ2', nav: true, auth: false },
          { name: 'ej3', title: 'EJ3', nav: true, auth: false },
          { name: 'ej4', title: 'EJ4', nav: true, auth: false }
        ]);
        this.initialize('route', this.getNavigationRoute(window.location.hash.substr(1)));
        this.initialize('userLogIn', false);
        // this.initialize('images', []);
        // this.initialize('lastFlickrRequest', 0);
    }

    onAction(actionType, data) {
        this.logger.debug(`Received Action ${actionType} with data`, data);
        switch (actionType) {

            case 'NAVIGATE':
                let newRoute = this.getNavigationRoute(data.location);
                if (newRoute !== this.get('route')) {
                    this.set('route', newRoute);
                    window.location.hash = `#${newRoute}`;
                }
                break;

            case 'REQUEST-LOGIN-DATA':
                // let lastRequest = this.get('lastFlickrRequest');
                // let currentTime = Date.now;
                // let fiveMinutes = 5 * 60 * 1000;
                // if ((currentTime - lastRequest) > fiveMinutes) {
                //     return;
                // }
                // $.ajax({
                //     url: '/json/users.json',
                //     dataType: 'json'
                // }).done(response => {
                //     Actions.processLoginData(response);
                // });
                alert('Bienvenido a la clase de React');
                break;

            case 'PROCESS-LOGIN-DATA':
                let valid = false;
                for(let i = 0, length = data.length; i < length; i++ ){
                    if(data[i].password == 'admin'){
                        valid = true;
                        continue;
                    }
                }
                this.set('userLogIn', valid);
                break;

            default:
                this.logger.debug('Unknown actionType for this store - ignoring');
                break;
        }
    }

    getNavigationRoute(route) {
        let newRoute = find(this.get('pages'), path => { return path.name === route.toLowerCase(); });
        if (!newRoute) {
            newRoute = find(this.get('pages'), path => { return path.default && path.default === true; });
        }
        return newRoute.name || '';
    }
}

var appStore = new AppStore();
dispatcher.registerStore(appStore);

export default appStore;

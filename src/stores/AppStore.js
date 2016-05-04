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
          { name: 'tabla', title: 'Tabla', nav: true, auth: true },
          { name: 'ej1', title: 'EJ1', nav: true, auth: true },
          { name: 'ej2', title: 'EJ2', nav: true, auth: true },
          { name: 'ej3', title: 'EJ3', nav: true, auth: true },
          { name: 'ej4', title: 'EJ4', nav: true, auth: true }
        ]);
        this.initialize('route', this.getNavigationRoute(window.location.hash.substr(1)));
        this.initialize('authenticated', false);
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
                let formData = data;

                $.getJSON('/src/json/users.json')
                  .done((data) => {
                    Actions.processLoginData(formData, data);
                    });

                break;
            case 'PROCESS-LOGIN-DATA':
                let email = data.formData.email,
                    password = data.formData.password;

                for (let i = 0, length = data.jsonData.length; i < length; i++ ) {
                    if (data.jsonData[i].email === email) {
                        if (data.jsonData[i].password === password) {
                            this.set('authenticated', true);
                            this.changeStore();
                            break;
                        } else {
                            alert('Usuario y/o contraseña incorrecta.');
                        }
                    }
                }

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

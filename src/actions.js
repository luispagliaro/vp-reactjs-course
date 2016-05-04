import dispatcher from './dispatcher';

export default class Actions {
    static navigate(newRoute) {
        dispatcher.dispatch('NAVIGATE', { location: newRoute });
    }

    static requestLoginData(user) {
        dispatcher.dispatch('REQUEST-LOGIN-DATA', user);
    }

    static processLoginData(formData, jsonData) {
        dispatcher.dispatch('PROCESS-LOGIN-DATA', {formData, jsonData});
    }
}

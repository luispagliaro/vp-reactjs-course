import dispatcher from './dispatcher';

export default class Actions {
    static navigate(newRoute) {
        dispatcher.dispatch('NAVIGATE', { location: newRoute });
    }

    static requestLoginData(tag) {
        dispatcher.dispatch('REQUEST-LOGIN-DATA', { tag: tag });
    }

    static processLoginData(data) {
        dispatcher.dispatch('PROCESS-LOGIN-DATA', data);
    }
}

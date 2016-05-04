import React from 'react';
import appStore from '../stores/AppStore';
import NavBar from './NavBar';
import Login from '../loginComponents/LoginForm';
import Tabla from '../tableComponents/StudentTableFilter';
import EJ1 from '../EJ/ej1';
import EJ2 from '../EJ/ej2';
import EJ3 from '../EJ/ej3';
import EJ4 from '../EJ/ej4';

const students = [{
  lastName: 'Lopez',
  name: 'José',
  exams: [6.5, 7, 6.5]
}, {
  lastName: 'Acosta',
  name: 'Hernán',
  exams: [5, 8, 8]
}, {
  lastName: 'Masei',
  name: 'Ernesto',
  exams: [6.5, 9, 7.5]
}, {
  lastName: 'Lisso',
  name: 'Magali',
  exams: [8, 7, 6.5]
}, ];

class AppView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pages: [],
            route: 'login'
        };
    }

    componentWillMount() {
        this.appStoreId = appStore.registerView(() => { this.updateState(); });
        this.updateState();
    }

    componentWillUnmount() {
        appStore.deregisterView(this.appStoreId);
    }

    updateState() {
        this.setState({
            route: appStore.get('route'),
            pages: appStore.get('pages')
        });
    }

    render() {
        let Route;
        switch (this.state.route) {
            case 'login': Route = <Login />; break;
            case 'tabla': Route = <Tabla data={students} />; break;
            case 'ej1': Route = <EJ1 />; break;
            case 'ej2': Route = <EJ2 />; break;
            case 'ej3': Route = <EJ3 />; break;
            case 'ej4': Route = <EJ4 />; break;
            default: Route = <Login />;
        }

        return (
            <div id="pagehost">
                <NavBar pages={this.state.pages} route={this.state.route}/>
                {Route}
            </div>
        );
    }
}

export default AppView;

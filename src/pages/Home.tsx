import React from 'react';

// Components
import Hero from '../components/Hero';
import Steps from '../components/Steps';
import News from '../components/News';

import NProgress from 'nprogress';

class Home extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {};
    }
    
    componentDidMount() {
        NProgress.done();
    }
    
    componentWillUnmount() {
        NProgress.start();
    }

    render() {
        return (
            <div>
                <Hero />
                <Steps />
                <News />
            </div>
        );
    }
}

export default Home;
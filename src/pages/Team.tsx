import React from 'react';

import Members from '../components/Members';

import NProgress from 'nprogress';

class Team extends React.Component {
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
            <div className="container mx-auto font-poppins px-[30px] xl:px-0">
                <Members />
            </div>
        );
    }
}

export default Team;
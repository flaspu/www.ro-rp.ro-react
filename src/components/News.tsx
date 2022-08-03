import React, { ReactElement } from 'react';
import axios from 'axios';

import PNews from './Placeholders/News';

const NEWS_URL = 'https://ucp.ro-rp.ro/news';

interface IState {
    news: Array<INews>
}

interface INews {
    ID: string,
    Title: string,
    Description: string,
    Date: string,
    PostedBy: string,
    Image: string,
    Link: string,
}

class News extends React.Component<any, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            news: []
        };
    }

    componentDidMount() {    
        axios.get(NEWS_URL).then(res => {
            this.setState({
                news: res.data
            });
        });
    }

    render() {
        let cards: Array<ReactElement> = [];
        let news = this.state.news;

        if(news.length > 0) {
            if(news.length > 4) {
                news = news.slice(0, 4);
            } 

            news.forEach(item => {
                let style = { backgroundImage: `url('${item.Image}')` };

                cards.push((
                    <div className="card" v-for="(item, key) of news.slice(0, 4)">
                        <div className="card-image" style={ style }></div>
                        <div className="card-header">
                            <h4 className="card-title">{ item.Title }</h4>
                            <h4 className="card-tooltip text-slate-600 font-light">{ item["Date"].replace(' ', '*').split('*')[0].replace('-', '/').replace('-', '/') }</h4>
                        </div>
                        <div className="separator"></div>
                        <p className="text-gray-500">
                            { item.Description }
                            <br className="mb-2" />
                            <a href={item.Link} className="underline underline-offset-4">Citește mai mult</a>
                        </p>
                    </div>
                ));
            });
        }

        return <>
            <div className="eclipse-left">
                <div className="container mx-auto font-poppins mt-20 px-[30px] xl:px-0 z-10">
                    <div className="flex justify-between items-center">
                        <h2 className="text-4xl font-semibold text-[#333] mb-4">Ultimele noutăți</h2>
                        <button className="btn-sm bg-white text-sm text-slate-800 outline-primary">Vezi toate noutățile</button>
                    </div>
                    {
                        (this.state.news.length === 0) ? <PNews /> : 
                        <div className="lg:grid flex flex-col grid-cols-4 news gap-8 mt-4"> 
                            {cards}
                        </div>
                    }
                </div>
            </div>
        </>;
    }
}

export default News;
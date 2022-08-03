export default function PNews(props: any) {
    let cards = [];

    for(let i = 0; i < 4; i++) {
        cards.push((
            <div className="card">
                <div className="card-image bg-slate-100"></div>
                <div className="card-header mb-4">
                    <div className="text-slate-600 font-light bg-slate-100 rounded w-[200px] h-5"></div>
                    <div className="card-tooltip text-slate-600 font-light bg-slate-100 rounded w-20 h-5"></div>
                </div>
                <div className="px-[35px] py-4 flex flex-row gap-1">
                    <div className="bg-slate-100 rounded w-[130px] h-3"></div>
                    <div className="bg-slate-100 rounded w-[40px] h-3"></div>
                    <div className="bg-slate-100 rounded w-[100px] h-3"></div>
                </div>
                <div className="px-[35px] flex flex-row gap-1">
                    <div className="bg-slate-100 rounded w-[30px] h-3"></div>
                    <div className="bg-slate-100 rounded w-[140px] h-3"></div>
                    <div className="bg-slate-100 rounded w-[90px] h-3"></div>
                </div>
                <div className="px-[35px] py-4 flex flex-row gap-1">
                    <div className="bg-slate-100 rounded w-[50px] h-3"></div>
                    <div className="bg-slate-100 rounded w-[100px] h-3"></div>
                    <div className="bg-slate-100 rounded w-[120px] h-3"></div>
                </div>
            </div>
        ));
    }

    return <>
        <div className="lg:grid flex flex-col grid-cols-4 news gap-8 mt-4">
            {cards}
        </div>
    </>;
}
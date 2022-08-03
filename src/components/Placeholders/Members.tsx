export default function PMembers(props: any) {
    let members = [];

    

    for(let i = 0; i < Math.floor(Math.random() * 7) + 5; i++) {
        let roles = [];
        for(let j = 0; j < Math.floor(Math.random() * 2) + 1; j++) {
            roles.push((<div className="role bg-slate-100 rounded-full font-light placeholder" style={{ width: '170px', height: '26px' }}></div>));
        }
        
        members.push((
            <div className="member shadow-lg flex flex-row p-4 gap-4">
                <div className="flex flex-row">
                    <div className="rounded-full avatar bg-slate-100"></div>
                </div>
                <div className="flex flex-col">
                    <div className="text-lg font-semibold bg-slate-100 rounded-full" style={{ width: '100px', height: '14px' }}></div>
                    <div className="roles flex-col">
                        {roles}
                    </div>
                </div>
            </div>
        ));
    }

    return <>
        {members}
    </>;
}
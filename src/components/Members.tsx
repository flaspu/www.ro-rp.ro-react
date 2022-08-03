import React, { ReactElement } from 'react';
import axios from 'axios';

import PMembers from '../components/Placeholders/Members';

const ROLES: IRole = {
    'Trial Admin': 'admin',
    'Game Admin Level 2': 'admin',
    'Game Admin Level 3': 'admin',
    'Senior Administrator': 'admin',
    'Lead Administrator': 'admin',

    'Management': 'leadership',
    'Community Supporter': 'leadership',

    'Tester': 'tester',

    'Game Developer': 'game-dev',
    'Senior Developer': 'senior-dev',
    'Lead Developer': 'lead-dev',

    'Property Management': 'pm',
    'Head of Properties': 'pm',

    'Faction Management': 'fm',
    'Head of Factions': 'fm',
};
const TEAM_URL = 'https://ucp.ro-rp.ro/teams';

enum AdminLevels {
    "Trial Admin" = 1,
    "Game Admin Level 2",
    "Game Admin Level 3",
    "Senior Administrator",
    "Lead Administrator",
    "Management",
    "Community Supporter"
}

enum DeveloperLevels {
    "Game Developer" = 1,
    "Senior Developer",
    "Lead Developer"
}

enum PropertyLevels {
    "Property Management" = 1,
    "Head of Properties"
}

enum FactionLevels {
    "Faction Management" = 1,
    "Head of Factions"
}

interface IState {
    members: Array<IMember>,
    team: ITeam
}

interface IRole {
    [key: string]: string,
}

interface ITeam {
    [key: string]: IMember[];
}

interface IMember {
    Username: string,
    AdminLevel: number,
    TesterLevel: number,
    DeveloperLevel: number,
    FactionLevel: number,
    PropertyLevel: number,
    Avatar: string
}

class Members extends React.Component<any, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            members: [],
            team: {
                'Leadership': [],
                'Administratori': [],
                'Developeri': [],
                'Testeri': [],
                'Faction Management': [],
                'Property Management': []
            },
        };
    }

    componentDidMount() {    
        axios.get(TEAM_URL).then(res => {
            this.setState({
                members: res.data,
                team: {
                    'Leadership': res.data.filter((x: IMember) => x.AdminLevel > 5),
                    'Administratori': res.data.filter((x: IMember) => x.AdminLevel <= 5 && x.AdminLevel > 0),
                    'Developeri': res.data.filter((x: IMember) => x.DeveloperLevel > 0),
                    'Testeri': res.data.filter((x: IMember) => x.TesterLevel > 0),
                    'Faction Management': res.data.filter((x: IMember) => x.FactionLevel > 0),
                    'Property Management': res.data.filter((x: IMember) => x.PropertyLevel > 0)
                }
            });
        });
    }

    getAvatar(avatar: string): string {
        if(avatar === 'blank.png') {
            return 'https://ucp.ro-rp.ro/assets/media/avatars/blank.png';
        } else {
            return 'https://ucp.ro-rp.ro/uploads/avatars/' + avatar;
        }
    }

    getMemberRoles(username: string): string[] {
        let roles = [];

        let member = this.state.members.find(x => x.Username === username);
        if(member) {
            if(member.AdminLevel > 0) {
                roles.push(AdminLevels[member.AdminLevel]);
            }

            if(member.DeveloperLevel > 0) {
                roles.push(DeveloperLevels[member.DeveloperLevel]);
            }

            if(member.TesterLevel > 0) {
                roles.push('Tester');
            }

            if(member.FactionLevel > 0) {
                roles.push(FactionLevels[member.FactionLevel]);
            }

            if(member.PropertyLevel > 0) {
                roles.push(PropertyLevels[member.PropertyLevel]);
            }
        }

        return roles;
    }

    render() {
        let sections: Array<ReactElement> = [];

        Object.keys(this.state.team).forEach(section => {
            let members: Array<ReactElement> = [];

            if(this.state.team[section].length > 0) {
                this.state.team[section].forEach(member => {
                    let roles: Array<ReactElement> = [];
    
                    this.getMemberRoles(member.Username).slice(0, 2).forEach(role => {
                        let className = `role bg-gray-100 font-light ${ROLES[role]}`;
                        roles.push((
                            <div className="roles" >
                                <div className={className}>
                                    { role }
                                </div>
                            </div>
                        ))
                    });
    
                    members.push((
                        <div className="member shadow-lg flex flex-row p-4 gap-4">
                            <div className="flex flex-row">
                                <div className="rounded-full avatar" style={{ backgroundImage: `url('${this.getAvatar(member.Avatar)}')` }}></div>
                            </div>
                            <div className="flex flex-col">
                                <h2 className="text-lg font-semibold">{ member.Username }</h2>
                                {roles}
                            </div>
                        </div>
                    ))
                });
            }
        
            sections.push((
                <div>
                    <h2 className="text-4xl font-semibold text-[#333] my-10">{ section }</h2>
                    <div className="grid grid-cols-4 gap-10">
                        { this.state.members.length === 0 ? <PMembers /> :
                            members
                        }
                    </div>
                </div>
            ));
        });

        return sections;
    }
}

export default Members;
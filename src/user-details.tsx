import * as React from 'react';
class UserDetails extends React.Component{
    public openAddUserModal(){
        console.log('Click');
    }
    public render(){
        return (
            <div>
                <div className="header">
                    <button onClick={(e)=>this.openAddUserModal()}>+User</button>
                </div>
            </div>
        );
    }
}

export default UserDetails;
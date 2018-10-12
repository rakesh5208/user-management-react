import * as React from 'react';
import { connect } from 'react-redux'
import store from './users.store'
class UserList extends React.Component<any, any> {
    idx: any[] = [];
    constructor(props: any) {
        super(props);
        let userSelectSate = [];
        for(let i=0; i<this.props.users.length;i++){
            userSelectSate[i] = false;
        }
        this.state = {
            
        }
    }
    public setSelectedUser(user: any) {
        this.props.onUserSelect(user);
    }
    public onChange(event: any, user: any) {
        if (event.target.checked) {
            this.idx.push(user.id);
        } else {
            const indexOf = this.idx.findIndex((id) => id === user.id)
            if (indexOf != -1) {
                this.idx.splice(indexOf, 1);
            }
        }
    }
    public deleletUsers(event: any) {
        event.preventDefault();
        store.dispatch({ type: 'DELETE_USERS', ids: this.idx })
    }
    selectAll(event: any) {
        this.idx = [];
        if (event.target.checked) {
            this.props.users.forEach((user: any) => {
                this.idx.push(user.id);
            });
        }

    }
    isSelected(user: any) {
        console.log(user);
        return this.idx.find((id) => id === user.id);
    }
    public render() {
        return (
            <div>
                <div className="list-header">
                    <input type="checkbox" onClick={(e) => this.selectAll(e)} />
                    <button onClick={(e) => this.deleletUsers(e)}>Del</button>
                </div>
                <div >
                    {this.props.users.map((user: any) => this.renderUserListRowItem(user))}
                </div>

            </div>
        );
    }

    public renderUserListRowItem(user: any) {
        return (<div key={user.id} className="user-list-row" onClick={() => this.setSelectedUser(user)}>
            <input type="checkbox" checked={this.isSelected(user)} onClick={(e) => this.onChange(e, user)} />
            <span >{user.name}</span>
        </div>
        )
    }
}
const mapStateToProps = (state: any) => ({
    users: state
})

export default connect(mapStateToProps)(UserList);
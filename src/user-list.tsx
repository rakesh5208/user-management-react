import * as React from 'react';
import { connect } from 'react-redux'
import store from './users.store'
class UserList extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            selectedUsers: [],
            selectectUserForView: null
        }
    }
    public setSelectedUser(event: any, user: any) {
        this.setState({
            selectectUserForView: user
        })
        this.props.onUserSelect(user);
    }
    public noEvent(event: any) {
        event.stopPropagation();
    }
    public selectOne(event: any, user: any) {
        if (event.target.checked) {
            this.setState({
                selectedUsers: [...this.state.selectedUsers, user]
            })
        } else {
            const copied = [...this.state.selectedUsers];
            const findIdx = copied.findIndex((u: any) => {
                return u.id === user.id
            })
            if (findIdx !== -1) {
                copied.splice(findIdx, 1);
                this.setState({
                    selectedUsers: [...copied]
                })
            }
        }
    }

    public deleletUsers(event: any) {
        this.filterCurrentViewUser();
        store.dispatch({ type: 'DELETE_USERS', users: this.state.selectedUsers })
        this.setState({
            selectedUsers: []
        })
    }
    private filterCurrentViewUser() {
        if (this.state.selectectUserForView) {
            const found = this.state.selectedUsers.some((user: any) => {
                return user.id === this.state.selectectUserForView.id
            })
            if (found) {
                this.setSelectedUser(null, null);
            }
        }

    }
    selectAllUser(event: any) {
        if (event.target.checked) {
            this.setState({
                selectedUsers: [...this.props.users]
            })
        } else {
            this.setState({
                selectedUsers: []
            })
        }
    }
    isSelected(user: any) {
        const checked = this.state.selectedUsers.some((selectedUser: any) => selectedUser.id === user.id);
        return checked;
    }
    isAllSelected() {
        let allSelected = true;
        if (this.props.users.length === 0) {
            return false;
        }
        for (let i = 0; i < this.props.users.length; i++) {
            if (!this.isSelected(this.props.users[i])) {
                allSelected = false;
                break;
            }
        }
        return allSelected;
    }
    public render() {
        return (
            <div>
                <div className="app-list-header row">
                    <div className="col-sm-4" onClick={e => { this.noEvent(e) }}>
                        <input type="checkbox" checked={this.isAllSelected()} onChange={(e) => this.selectAllUser(e)} />
                    </div>
                    <div className=" col-sm-8 text-right">
                        <button className="btn btn-sm btn-danger" onClick={(e) => this.deleletUsers(e)}>Delete</button>
                    </div>
                </div>
                <div >
                    {this.props.users.map((user: any, index: any) => this.renderUserListRowItem(user, index))}
                </div>

            </div>
        );
    }

    public renderUserListRowItem(user: any, index: any) {
        return (
            <div key={user.id} className="user-list-row" onClick={(event) => this.setSelectedUser(event, user)}>
                <div onClick={(e) => this.noEvent(e)}>
                    <input type="checkbox" checked={this.isSelected(user)} onChange={(event) => { this.selectOne(event, user) }} />
                </div>
                <span>{user.name}</span>
            </div>
        )
    }
}
const mapStateToProps = (state: any) => ({
    users: state
})

export default connect(mapStateToProps)(UserList);
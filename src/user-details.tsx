import * as React from 'react';
import store from './users.store'
class UserDetails extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            openModal: false
        }
    }
    public openAddUserModal(modalState: boolean) {
        this.setState({
            openModal: modalState
        })
    }
    public renderUserDetailView(user:any) {
        return (<div className="user-details-view">
            <div>
                <label>Name</label>
                <label>{user.name}</label>
            </div>
            <div>
                <label>Id</label>
                <label>{user.id}</label>
            </div>
            <div>
                <label>Descripton</label>
                <label>{user.description}</label>
            </div>
        </div>)
    }
    public render() {
        const { user } = this.props;
        return (

            <div>
                <div className="header">
                    <button onClick={(e) => this.openAddUserModal(true)}>+User</button>
                </div>
                {user !== null ? this.renderUserDetailView(user) : null }

                {this.state.openModal ? (<AddUser onClose={this.openAddUserModal.bind(this)} />) : (null)}
            </div>

        );
    }
}

class AddUser extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            name: '',
            id: '',
            description: ''

        }
    }
    close() {
        this.props.onClose(false);
    }
    public onChange(event: any, propKey: string) {
        switch (propKey) {
            case 'name':
                this.setState({
                    name: event.target.value
                })
                break;
            case 'id':
                this.setState({
                    id: event.target.value
                })
                break;
            case 'description':
                this.setState({
                    description: event.target.value
                })
                break;
        }

    }
    public submitForm(event: any) {
        event.preventDefault();
        if (this.state.id && this.state.name && this.state.description) {
            store.dispatch({ type: 'ADD_USER', user: this.state });
            this.close();
        }
    }
    public render() {
        return (
            <div className="modal-container">
                <div className="modal">
                    <div className="modal-header">
                        <span onClick={() => this.close()}>  X </span></div>
                    <form onSubmit={(e) => this.submitForm(e)}>
                        <div><label>Name</label>
                            <input value={this.state.name} onChange={(event) => this.onChange(event, 'name')}></input>
                        </div>
                        <div><label>ID</label>
                            <input value={this.state.id} onChange={(event) => this.onChange(event, 'id')}></input>
                        </div>
                        <div><label>Descripton</label>
                            <input value={this.state.descripton} onChange={(event) => this.onChange(event, 'description')}></input>
                        </div>
                        <div>
                            <button type="button" onClick={() => this.close()}>Cancel</button>
                            <button type="submit">Add User</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

// export default AddUser;

export default UserDetails;
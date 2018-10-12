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
    public renderUserDetailView(user: any) {
        return (<div className="user-details-view">
            <div className="row">
                <label className="col-sm-3" >Name</label>
                <span className="col-sm-9 value" >{user.name}</span>
            </div>
            <div className="row">
                <label className="col-sm-3">Id</label>
                <span className="col-sm-9 value">{user.id}</span>
            </div>
            <div className="row">
                <label className="col-sm-3">Descripton</label>
                <span className="col-sm-9 value">{user.description}</span>
            </div>
        </div>)
    }
    public render() {
        const { user } = this.props;
        return (

            <div>
                <div className="app-header">
                    <button className="btn btn-deep-blue btn-circle" onClick={(e) => this.openAddUserModal(true)}>+</button>
                </div>
                {user !== null ? this.renderUserDetailView(user) : null}

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
            <div className="app-modal-container">
                <div className="app-modal">
                    <div className="app-modal-header">
                        <span onClick={() => this.close()}> &times; </span>
                    </div>
                    <form className ="add-user-form form-inline"onSubmit={(e) => this.submitForm(e)}>
                        <div className="form-group row">
                            <label className="col-sm-3">Name</label>
                            <input className=" col-sm-9 form-control" value={this.state.name} onChange={(event) => this.onChange(event, 'name')}></input>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3">ID</label>
                            <input className=" col-sm-9 form-control" value={this.state.id} onChange={(event) => this.onChange(event, 'id')}></input>
                        </div>
                        <div className="form-group row" >
                            <label className="col-sm-3">Descripton</label>
                            <textarea  className=" col-sm-9 form-control"  rows={5} value={this.state.descripton} onChange={(event) => this.onChange(event, 'description')}></textarea>
                        </div>
                        <div className="text-right row">
                            <span className="btn btn-default" onClick={() => this.close()}>Cancel</span>
                            <button className="btn btn-deep-blue" type="submit">Add User</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

// export default AddUser;

export default UserDetails;
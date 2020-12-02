import React, {Component} from 'react';
import API from '../../utils/API'
import SearchForm from "../../components/SearchForm"

class Directory extends Component {
    constructor() {
        super();
        this.state = {
            search: '',
            loading: false,
            results: [],
            initialResults: []   
        }
    };

    componentDidMount = () =>  {
        this.setState({
            loading: true
        })
        API.getUsers()
        .then((results) => {
            console.log(results)
            this.setState({
                loading: false,
                results: results.data.results,
                initialResults: results.data.results
            })
        });       
    }

    handleChange = (event) => {
        let {name, value} = event.target
        console.log(this.state[name])



        const filteredUsers = this.state.results.filter(user => {            
            let userName = `${user.name.first} ${user.name.last}` 
            userName = userName.toLowerCase();
            console.log(userName);
            
            return userName.includes(value);
        });
        if(value === '') {
            this.setState({
                [name]: value,
                results: this.state.initialResults
            })
        }
        else {
            this.setState({
                [name]: value,
                results: filteredUsers
            })
        }
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
    }

    handleClick = () => {
        this.setState(prevState => 
        {
            return {
                results: prevState.results.sort(this.sortName)
            }
        });
        console.log(this.state.results);
    }

    sortName = (currentSpot, nextSpot) => {
        if (currentSpot.name.first > nextSpot.name.first) {
            return 1
        }
        return -1
    }

    render = () => {
        return (
            <div>
            <SearchForm 
            onChange={this.handleChange}
            onClick={this.handleClick} 
            value={this.state.search}
            />

            {/* Ternary loader operator */}
            {this.state.loading 
            ? 
            <h1>Loading...</h1>
            :
            <table className='table'>
                <thead>
                    <tr>
                    <th>Profile</th>
                    <th><button onClick={this.handleClick}>Name</button></th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>DOB</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.results.map(employee => (
                    <tr key={employee.login.uuid}>
                        <td><img src={employee.picture.thumbnail} alt="" /></td>
                        <td>{employee.name.first} {employee.name.last}</td>
                        <td>{employee.phone}</td>
                        <td>{employee.email}</td>
                        <td>{employee.dob.date}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
            }
            </div>
        );    
    }
}

export default Directory;
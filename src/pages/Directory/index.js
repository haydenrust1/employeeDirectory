import React, {Component} from 'react';
import API from '../../utils/API'
import SearchForm from "../../components/SearchForm"

class Directory extends Component {
    state = {
        results: []
    };

    componentDidMount() {
        API.getUsers()
        .then((results) => {
            this.setState({
                results: results.data.results
            })
        });       
    }

    sortByFirst = (currentSpot, nextSpot) => {
        if (currentSpot.name.first > nextSpot.name.first) {
          return 1;
        }
        return -1;
      };

    render() {
        return (
            <container>
            <SearchForm />
            <table className='table'>
                <thead>
                    <tr>
                    <th>Profile</th>
                    <th onClick=''>Name</th>
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
            </container>
        );    
    }
}

export default Directory;
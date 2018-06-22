import React, { Component } from 'react';


class Table extends Component {



      render() {

            let arrayList = this.props.list.map((item, index) => {
                return (
                    <tr key={index}>
                        <td>{item.ip}</td>
                        <td>{item.hostname}</td>
                        <td>{item.city}</td>
                        <td>{item.country_name}</td>
                        <td>{item.longitude}</td>
                        <td>{item.latitude}</td>
                    </tr>
                )
            });

            return (
                    
                <table className="table">
                    <thead className="thead-dark">
                        <tr>   
                            <th scope="col">IP</th>
                            <th scope="col">HOSTNAME</th>
                            <th scope="col">City</th>
                            <th scope="col">Country</th>
                            <th scope="col">Long</th>
                            <th scope="col">Lat </th>
                        </tr>
                    </thead> 
                    <tbody>  
                        {arrayList}
                    </tbody>                 
                </table>              
            )

    }

}

export default Table;





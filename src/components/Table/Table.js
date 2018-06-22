import React, { Component } from 'react';



class Table extends Component {



    
      

      
      render() {

            let arrayList = this.props.list.map((item, index) => {
                return (
                    <tr key={index}>
                        <td>{item.ip}</td>
                        <td>{item.country_name}</td>
                        <td>{item.region_name}</td>
                        <td>{item.city}</td>
                    </tr>
                )
            });

            return (
                    
                <table className="table">
                    <thead className="thead-dark">
                        <tr>   
                            <th scope="col">IP</th>
                            <th scope="col">Country</th>
                            <th scope="col">Region</th>
                            <th scope="col">City</th>
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





import React, { Component } from 'react';



class Input extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            ip: ""
        };
      } 

  render() {
    
    let disabled = !this.state.ip ? "disabled": "" ;
    
    return (
 
        <div className="form">
            <form>
                <div className="form-row align-items-center">

                    <div className="col-sm-3 my-1">
                        <label className="sr-only" ></label>
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Ip or Domain name" onChange={event => this.setState({ip: event.target.value})}  />
                        </div>
                    </div>

                    <div className="col-auto my-1">
                        <button type="button" className="btn btn-primary" onClick={() => this.props.submit(this.state.ip)} disabled = {disabled}>IP Find</button>
                    </div>

                    <div className="col-auto my-1">
                        <button type="button" className="btn btn-primary" onClick={() => this.props.submit(window.ip)}>My Location</button>
                    </div>

                </div>
            </form>
        </div>

  

      
    );
  }
}

export default Input;


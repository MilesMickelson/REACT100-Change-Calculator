import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      amountDue: '',
      amountReceived: '',
      twenties: '0',
      tens: '0',
      fives: '0',
      ones: '0',
      quarters: '0',
      dimes: '0',
      nickels: '0',
      pennies: '0',
      text: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleCalculation = this.handleCalculation.bind(this);
  }

  handleChange (event) {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleCalculation () {
    let due = (this.state.amountDue * 100);
    let received = (this.state.amountReceived * 100);
    let changeDue = ((received - due)/100).toFixed(2);
    let subTotal = (received - due);
    let twenties = Math.floor((subTotal)/2000);
    let tens = Math.floor((subTotal%2000)/1000);
    let fives = Math.floor((subTotal%1000)/500);
    let ones = Math.floor((subTotal%500)/100);
    let quarters = Math.floor((subTotal%100)/25);
    let dimes = Math.floor((subTotal%25)/10);
    let nickels = Math.floor((subTotal-twenties*2000-tens*1000-fives*500-ones*100-quarters*25-dimes*10)/5);
    let pennies = Math.ceil((subTotal%5)/1);
    this.setState({
    text: `The total change due is $${changeDue}`,
    twenties: twenties,
    tens: tens,
    fives: fives,
    ones: ones,
    quarters: quarters,
    dimes: dimes,
    nickels: nickels,
    pennies: pennies});
    };

    render() {
      return (
      <div className="container-fluid">
        <h1 style={{ color: 'white', marginTop: '20px', marginBottom: '20px' }}>Change Calculator</h1>
        <hr style={{ backgroundColor: 'white', height: '1px' }}/>
        <div className="row">
          <div className="col-sm-4">
            <div className="card">
              <div className="card-header">Enter Information</div>
              <div className="card-body">
              <div className="form-group">
                <label style={{ fontWeight: 'bold' }} htmlFor="dueId">How much is due?</label>
                <input type="number" step="0.01" name="amountDue" className="form-control" id="dueId" placeholder="Enter amount here"
                value={this.state.amountDue} onChange={this.handleChange}/>
              </div>
              <div className="form-group">
                <label style={{ fontWeight: 'bold' }} htmlFor="amountId">How much was received?</label>
                <input type="number" step="0.01" name="amountReceived" className="form-control" id="amountId" placeholder="Enter amount here"
                value={this.state.amountReceived} onChange={this.handleChange}/>
              </div>
              </div>
              <div className="card-footer">
              <button className="btn" style={{ backgroundColor: '#337AB7', color: 'white', width: '398px', height: '44px' }}
              onClick={this.handleCalculation}>Calculate</button>
              </div>
            </div>
          </div>

        <div className="col-sm-8">
          <div className="card">
            <div className="card-body">

            <div className="row">
              <div className="card text-center" style={{ backgroundColor: '#DFF0D8', color:'#639277', width: '880px', height: '66px',
              marginTop: '8px', marginBottom: '10px', marginLeft: '18px', marginRight: '18px' }}>
                <div className="card-body">
                  <div id="output" value={this.state.text}>{this.state.text}</div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="card text-center" style={{ backgroundColor: '#F5F5F5', color: '#333333', width: '204px', height: '145px',
              marginTop: '10px', marginBottom: '10px', marginLeft: '18px', marginRight:'10px' }}>
                <div className="card-body">
                  <h5 className="card-title">Twenties</h5>
                  <div name="twenties" className="change" value={this.state.twenties}>{this.state.twenties}</div>
                </div>
              </div>
              <div className="card text-center" style={{ backgroundColor: '#F5F5F5', color: '#333333', width: '204px', height: '145px',
              marginTop: '10px', marginBottom: '10px', marginLeft: '10px', marginRight:'10px' }}>
                <div className="card-body">
                  <h5 className="card-title">Tens</h5>
                  <div name="tens" className="change" value={this.state.tens}>{this.state.tens}</div>
                </div>
              </div>
              <div className="card text-center" style={{ backgroundColor: '#F5F5F5', color: '#333333', width: '204px', height: '145px',
              marginTop: '10px', marginBottom: '10px', marginLeft: '10px', marginRight:'10px' }}>
                <div className="card-body">
                  <h5 className="card-title">Fives</h5>
                  <div name="fives" className="change" value={this.state.fives}>{this.state.fives}</div>
                </div>
              </div>
              <div className="card text-center" style={{ backgroundColor: '#F5F5F5', color: '#333333', width: '204px', height: '145px',
              marginTop: '10px', marginBottom: '10px', marginLeft: '10px', marginRight:'10px' }}>
                <div className="card-body">
                  <h5 className="card-title">Ones</h5>
                  <div name="ones" className="change" value={this.state.ones}>{this.state.ones}</div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="card text-center" style={{ backgroundColor: '#F5F5F5', color: '#333333', width: '204px', height: '145px',
              marginTop: '10px', marginBottom: '10px', marginLeft: '18px', marginRight:'10px' }}>
                <div className="card-body">
                  <h5 className="card-title">Quarters</h5>
                  <div name="quarters" className="change" value={this.state.quarters}>{this.state.quarters}</div>
                </div>
              </div>
              <div className="card text-center" style={{ backgroundColor: '#F5F5F5', color: '#333333', width: '204px', height: '145px',
              marginTop: '10px', marginBottom: '10px', marginLeft: '10px', marginRight:'10px' }}>
                <div className="card-body">
                  <h5 className="card-title">Dimes</h5>
                  <div name="dimes" className="change" value={this.state.dimes}>{this.state.dimes}</div>
                </div>
              </div>
              <div className="card text-center" style={{ backgroundColor: '#F5F5F5', color: '#333333', width: '204px', height: '145px',
              marginTop: '10px', marginBottom: '10px', marginLeft: '10px', marginRight:'10px' }}>
                <div className="card-body">
                  <h5 className="card-title">Nickels</h5>
                  <div name="nickels" className="change" value={this.state.nickels}>{this.state.nickels}</div>
                </div>
              </div>
              <div className="card text-center" style={{ backgroundColor: '#F5F5F5', color: '#333333', width: '204px', height: '145px',
              marginTop: '10px', marginBottom: '10px', marginLeft: '10px', marginRight:'10px' }}>
                <div className="card-body">
                  <h5 className="card-title">Pennies</h5>
                  <div name="pennies" className="change" value={this.state.pennies}>{this.state.pennies}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
}

export default App;

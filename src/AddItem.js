import React, { Component } from 'react'

class AddItem extends Component {
  constructor(props) {
    super(props)
    this.state = {quantity: 1,productID: this.props.products[0].id}
  }

  onSubmit = (e) => {
    e.preventDefault()
    const {quantity, productID} = this.state
    const product = this.props.products.find(product => product.id === productID)
    this.props.onAddItem({quantity, product})
  }

  onChange = (key) => {
    this.setState({
      ...this.state,
      [key.target.name]: + key.target.value,
    })
  }

  render() {
    return (
      <div className = "row">
        <div className = "col-md-3"></div>
        <div className = "col-md-6">
          <div className = "form-group">
            <form onSubmit={this.onSubmit}>
              <label htmlFor = "quantityy">Quantity:</label>
              <input id = "quantityy" className="form-control" type="number" min="1" name="quantity" onChange={this.onChange} value={this.state.quantity}/>
              <label htmlFor = "productIdd">Item:</label>
              <select id = "productIdd" className = "form-control" name="productID" onChange={this.onChange}>
                {this.props.products.map((product, i) => <option key={i} value={product.id}>{product.name}</option>)}
              </select>
              <input type="submit" className="btn btn-success" value="Submit" />
            </form>
          </div>
        </div>
        <div className = "col-md-3"></div>
      </div>
    )
  }
}

export default AddItem

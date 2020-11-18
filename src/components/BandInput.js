import React, { Component } from 'react';

class BandInput extends Component {

  state = {
    name: ''
  }

  handleOnChange(event) {
    this.setState({
      name: event.target.value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addBand(this.state);
    this.setState({
      name: '',
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            value={this.state.name}
            onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default BandInput;
//   render() {
//     return(
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <input type='text' value={this.state.name} onChange={this.handleChange} />
//           <input type='submit'/>
//         </form>
//       </div>
//     )
//   }
// }

// const mapDispatchToProps = dispatch => ({
//   addBand: formData => dispatch({ type: 'ADD_BAND', payload: formData})
// })

// export default connect(null, mapDispatchToProps)(BandInput)



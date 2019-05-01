import React, { Component } from 'react'
import { connect } from 'react-redux'
import { carouselClickHandler } from './../../actions/'
import { fetchData } from './../../actions/'

class Pagination extends Component {
  componentDidMount() {
    // --- ROTATOR ---
    this.rotator = setInterval (
      () => {this.props.carouselClickHandler(
        this.props.active < this.props.Data.length
        ?
        this.props.active + 1
        :
        1
      )},
      5000
    );
  }
  componentWillUnmount() {
    clearInterval (this.rotator);
  }
  render() {
    return (
      <ul className={"pagination active" + this.props.active}>
        {
          [...new Array(this.props.Data.length)].join(' , ').split(' , ').map((each, i) => 
            <li
              key={i + 1}
              className={`active${i + 1}`}
              onClick={() => {
                clearInterval (this.rotator); 
                this.props.carouselClickHandler(i + 1)}
              }>
              {i + 1}
            </li>
          )
        }
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    active: state.actionReducer.active,
    Data: state.postReducer.data,
  }
}
const mapDispatchToProps = {
  carouselClickHandler
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination);

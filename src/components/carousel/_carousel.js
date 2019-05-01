import React, { Component } from 'react'
import { connect } from 'react-redux' // THIS IS TO CONNECTS THIS COMPONNENT TO THE STORE
import { carouselClickHandler, fetchData } from './../../actions'
import Frames from './carousel-frames'
import Pagination from './carousel-pagination'
import './styles.scss'

class Carousel extends Component {
  render() {
    return (
      <div className={"carousel active" + this.props.active}>
        <Frames/>
        <Pagination/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    active: state.actionReducer.active,
  }
}
const mapDispatchToProps = {
  carouselClickHandler
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Carousel);


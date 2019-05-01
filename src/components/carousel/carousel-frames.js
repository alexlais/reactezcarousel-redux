import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchData } from './../../actions'

class Frames extends Component {
  componentDidMount() {
    this.props.fetchData();
  }
  componentWillUnmount () {
    this.props.Data = this.props.Data.destroy();
  }
  render() {
    return (
      <div id="carousel-frames" className={"flex length" + this.props.Data.length}>
        { 
          this.props.Data.map((each, i) => 
            {
              return (                
                <div key={i}>
                  <h2>{each.type}</h2>
                  <figure>
                    <img className="responsive" alt="" src={each.image} />
                  </figure>
                  <h3>{each.title}</h3>        
                  <p><a href="{each.url}">Read Story</a></p>
                </div>
              );
            }
          )
        }
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    Data: state.postReducer.data
  }
}
export default connect (
  mapStateToProps, 
  {fetchData}
)(Frames);
import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import google_marker from "../assets/img/icons/common/google-marker_sm.png";

const AnyReactComponent = () => <img src={google_marker} alt="google-marker" />;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 33.9486224,
      lng: -118.1776227,
    },
    zoom: 12,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "50vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyANd1bZ1rEDRvbWGJ2DG3y1vj_ophzkMHs" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}>
          <AnyReactComponent lat={90} lng={-118.1776227} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;

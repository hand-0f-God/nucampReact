import React, { Component } from 'react';
import campsite from './DirectoryComponent';


class CampsiteInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCampsite : null
        };
    }

render() {
    if (campsite)
    return (
      <div className = "row">
      </div>
    )
    else return(
        <div />
    );
  }


}

    export default CampsiteInfo;
import React, { Component } from 'react';
import Dygraph from 'dygraphs';

var globData = [
          [ 1496743541975, 68.70800018310547 ],
          [ 1496743542977, 68.70800018310547 ],
          [ 1496743543977, 68.1259994506836 ],
          [ 1496743544977, 69.87300109863281 ],
          [ 1496743545977, 67.54399871826172 ],
          [ 1496743546977, 68.70800018310547 ],
          [ 1496743547976, 68.1259994506836 ],
          [ 1496743548975, 68.70800018310547 ],
          [ 1496743549974, 66.37899780273438 ]
      ];

class SingleGraph extends Component {

  constructor(props) {
    super(props);
    console.log("constructor()");
    console.log(props);
  }

  componentDidMount = () => {

      let localData = globData;
      new Dygraph (
        this.props.thisName,
        localData,
        {
          labels: ["MessageTime", "Signal"],
          title: this.props.thisName,
          axes: {
            x: {
              axisLabelFormatter: function(ms) {
                let d = new Date(ms);
                let hour = d.getUTCHours();
                let mins = d.getUTCMinutes();
                let secs = d.getUTCSeconds();
                let msec = d.getUTCMilliseconds();

                return hour + ":" + mins + ":" + secs + "." + msec;
              }
            }
          }
        }
      )

  }


  render() {

    return (
      <div
        id={this.props.thisName}
      >
      </div>
    )

  }

}


export default SingleGraph;

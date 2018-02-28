import React, { Component } from 'react';
import SingleGraph from './SingleGraph';

class PlotCharts extends Component {

  render() {
    var plots = [];

    for (let i=0; i<5; i++) {
      plots.push("Charts_" + i);
    }

    return (
      <div>
        {
          plots.map((plot) => {
            return (
              <div>
                <SingleGraph
                  thisName={plot}
                  key={plot}
                />
                <br />
            </div>
            )
          })
        }
    </div>
    )
  }

}

export default PlotCharts;

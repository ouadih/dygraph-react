## dygraph-react

A very simple example of how to generate Dygraph divs on-the-fly at run time. I could
find no other examples anywhere in the known universe. Works very well in a redux environment. No styles applied at all, purely functional.

### SingleGraph

The SingleGraph component creates and returns a div with the specified dygraph contained
therein.

### PlotCharts

PlotCharts instantiates the SingleGraph DOM elements at run time.

All the other files are bog-standard *create-react-app* boilerplate except for
this readme.

package.json is all set, simply:

$ npm install

to setup ./node_modules and

$ npm start

to load the simple page.

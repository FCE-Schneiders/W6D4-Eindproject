import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';
import './App.css';

/*const data = [
  {quarter: 1, earnings: 5000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 20000},
  {quarter: 4, earnings: 19000},

];*/

const data = [

    {
      exercise: "SCRUM",
      name: "Evelyn",
      ratingDifficulty: 3,
      ratingJoy: 4
    },
    {
      exercise: "W1D1-1",
      name: "Evelyn",
      ratingDifficulty: 5,
      ratingJoy: 3
    },
    {
      exercise: "SCRUM",
      name: "Hero",
      ratingDifficulty: 1,
     ratingJoy: 5
    },
    {
      exercise: "W1D2-2",
      name: "Hero",
      ratingDifficulty: 1,
     ratingJoy: 4
    }

];
 


function App() {
  return (
    <div className="App">
      <p>test</p>
      <VictoryChart
       theme={VictoryTheme.material}
       domainPadding={20}
      >
        <VictoryAxis
          // tickValues specifies both the number of ticks and where
          // they are placed on the axis
          tickValues={[0, 1, 2, 3 ]}
          tickFormat={["SCRUM", "W1D2-2", "W1D1-1", "W1D2-2"]}
        />
        
        <VictoryAxis
          dependentAxis
          // tickFormat specifies how ticks should be displayed
          //tickFormat={(x) => (`$${x / 1000}k`)}
        />
        
      <VictoryBar
              data={data}
              // data accessor for x values
              x="excercise"
              // data accessor for y values
              y="ratingJoy"

             
              
      />
      </VictoryChart>

      {/* <VictoryBar
              data={data}
              // data accessor for x values
              x="quarter"
              // data accessor for y values
              y="earnings"
      /> */}
    </div>
  );
}

export default App;

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
      name: "Evelyn",
      assignment: "SCRUM",
      toughRating: 3,
      joyRating: 4
    },
    {
      name: "Evelyn",
      assignment: "W1D1-1",
      toughRating: 5,
      joyRating: 3
    },
    {
      name: "Hero",
      assignment: "SCRUM",
      toughRating: 1,
      joyRating: 5
    },
    {      
      name: "Hero",
      assignment: "W1D2-2",
      toughRating: 1,
     joyRating: 4
    }

];
 
const allStudentNames = data.map ((item) => {
  return item.name
})
console.log(allStudentNames)

const allAssignments= data.map((item)=>{
  return item.assignment
})
console.log(allAssignments)

const allJoyRatings= data.map((item ) => {
  return item.joyRating
})
console.log(allJoyRatings)

const allToughRatings= data.map((item) => {
  return item.toughRating
})
console.log(allToughRatings)


//aparte opdracht en leukheidsgraad erbij hoe? stap voor stap

const assScrum = data.filter((item) =>{
  return item.assignment.includes("SCRUM") 
})

console.log(assScrum) // array met scrum opdrachten (let wel, uit array van 4 studenten)

const joyRateScrum = assScrum.map((item) => {
  return item.joyRating;
})
console.log(joyRateScrum) 




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
              x="assignment"
              // data accessor for y values
              y="joyRating"

             
              
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

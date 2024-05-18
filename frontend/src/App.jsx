/* eslint-disable no-unused-vars */
import { useState } from "react";
import Opportunity from "./components/Opportunity";
import "./App.css";

function App() {
  const [opportunities, setOpportunities] = useState([
    {
      name: "Testing Event",
      location: "Toronto, ON",
      date: "March 1",
      description: "This is a test event",
      tags: ["tag1", "tag2"],
    },
    {
      name: "Another Test Event",
      location: "Waterloo, ON",
      date: "March 31",
      description: "This is yet another event, this time at Waterloo",
      tags: ["Hackathon", "Indigenous"],
    },
    {
      name: "Third Test Event",
      location: "Pickering, ON",
      date: "April 20",
      description: "Another fake event",
      tags: ["People of Colour", "Diversity"],
    },
  ]);

  return (
    <>
    <h1>Title</h1>
    <h2>Filters</h2>
    <ul>
      <li><input type="checkbox" /><p>Test 1</p></li>
      <li><input type="checkbox" /><p>Test 2</p></li>
      <li><input type="checkbox" /><p>Test 3</p></li>
    </ul>
      {opportunities.map((opportunity) => (
        <div key={opportunity.name}>
          <Opportunity
            name={opportunity.name}
            location={opportunity.location}
            date={opportunity.date}
            description={opportunity.description}
            tags={opportunity.tags}
          />
        </div>
      ))}
    </>
  );
}

export default App;

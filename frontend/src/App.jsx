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
      link: "https://www.google.com",
    },
    {
      name: "Another Test Event",
      location: "Waterloo, ON",
      date: "March 31",
      description: "This is yet another event, this time at Waterloo",
      tags: ["Hackathon", "Indigenous"],
      link: "https://www.google.com",
    },
    {
      name: "Third Test Event",
      location: "Pickering, ON",
      date: "April 20",
      description: "Another fake event",
      tags: ["People of Colour", "Diversity"],
      link: "https://www.google.com",
    },
  ]);

  return (
    <>
      <h1>Operation Opportunity</h1>
      <div className="filters">
        <h2>Filters</h2>
        <h3>Tags</h3>
        <ul>
          <li>
            <label>
              <input type="checkbox" />
              Test 1
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              Test 1
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              Test 1
            </label>
          </li>
        </ul>
      </div>

      <div className="opportunities">
        {opportunities.map((opportunity) => (
          <div key={opportunity.name}>
            <Opportunity
              name={opportunity.name}
              location={opportunity.location}
              date={opportunity.date}
              description={opportunity.description}
              tags={opportunity.tags}
              link={opportunity.link}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;

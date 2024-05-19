/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Opportunity from "./components/Opportunity";
import "./App.css";

function App() {
  const [tags, setTags] = useState(["tag1", "tag2"]);
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

  useEffect(() => {
    opportunities.forEach((opportunity) => {
      opportunity.tags.forEach((tag) => {
        if (!tags.includes(tag)) {
          setTags([...tags, tag]);
        }
      });
    });
  }, [opportunities, tags])

  return (
    <>
      <div className="top-bar">
        <h1>Operation Opportunities</h1>
        <img src="/opportunities-logo.png" />
      </div>
      
      <div className="filters">
        <h2>Filters</h2>
        <h3>Tags</h3>
        <ul>
          {tags.map((tag) => (
            <li key={tag}>
            <label>
              <input type="checkbox" />
              {tag}
            </label>
          </li>
          ))}
        </ul>
        <button>Submit</button>
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

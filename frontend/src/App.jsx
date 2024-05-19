
import { useEffect, useState } from "react";
import Opportunity from "./components/Opportunity";
import "./App.css";
import { getDocumentsByTags } from "../server/apiService.js";


function App() {
  const [selectedTags, setSelectedTags] = useState([]);

  const [tags, setTags] = useState(["Tech", "Internship", "Program", "Science", "Business", "STEM", "Law", "Policing", "Leadership", "Hackathon", "Data", "University"]);
  const [opportunities, setOpportunities] = useState([
  ]);

  const handleSearch = async () => {
    try {
      const data = await getDocumentsByTags(selectedTags);
      console.log("Request Send")
      console.log(data)
      setOpportunities(data);
      console.log("Request fully done")
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleTagChange = (tag) => {
    const index = selectedTags.indexOf(tag);
    if (index === -1) {
      setSelectedTags([...selectedTags, tag]);
    } else {
      const updatedTags = [...selectedTags];
      updatedTags.splice(index, 1);
      setSelectedTags(updatedTags);
    }
  };


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
              <input type="checkbox"
              checked={selectedTags.includes(tag)} 
              onChange={() => handleTagChange(tag)} 
               />
              {tag}
            </label>
          </li>
          ))}
        </ul>
        <button onClick={handleSearch}>Submit</button>
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

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// 1. Extract data into an array of objects
const skillsData = [
  { skill: "React", emoji: "💪", color: "blue" },
  { skill: "HTML+CSS", emoji: "💪", color: "orange" },
  { skill: "JavaScript", emoji: "💪", color: "yellow" },
  // Easy to add more skills here!
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Pass the data down as a prop */}
        <SkillList skills={skillsData} /> 
      </div>
    </div>
  );
}

function Avatar() {
  // Use the imported image here if you set that up: src={avatarImg}
  return <img className="avatar" src="me.png" alt="Ignacio B" />;
}

function Intro() {
  return (
    <div>
      <h1>Ignacio B</h1>
      <p>
        Junior web developer and fitness lover. When not coding or preparing a
        workout, I like to play video games, to cook (and eat), or to just enjoy
        the Tenerife's sun.
      </p>
    </div>
  );
}

// 2. Accept the skills array and map over it
function SkillList({ skills }) {
  return (
    <div className="skill-list">
      {skills.map((item) => (
        <Skill 
          key={item.skill} // Unique key required when mapping
          skill={item.skill} 
          emoji={item.emoji} 
          color={item.color} 
        />
      ))}
    </div>
  );
}

// 3. Destructured props
function Skill({ skill, emoji, color }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>{emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);

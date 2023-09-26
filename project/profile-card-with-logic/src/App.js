import "./styles.css";
const data =[
  {
    skill: "React",
    level:"beginner",
    color:"#765827",
  },
  
  
  {
    skill: "Javascript",
    level:"intermediate",
    color:"#512B81",
  },
  
  {
    skill: "HTML & CSS",
    level:"advanced",
    color:"#272829",
  },
  {
    skill: "Vue",
    level:"beginner",
    color:"#765827",
  },
  {
    skill: "UI & UX",
    level:"pro",
    color:"#252B48",
   
  },
  {
    skill: "Svelte",
    level:"beginner",
    color:"#765827",
  },
  {
    skill: "GSAP",
    level:"intermediate",
    color:"#512B81",
  },
]
export default function App() {
  return (
    <div className="card">
      <Avatar />

      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="avatar.jpg" alt="Avatar Image" />;
}
function Intro() {
  return (
    <div>
      <h1>Thomson Kelvin</h1>
      <p>
        Full-Stack web developer and teacher at Udemy. When not coding or
        preparing a couse, ilike to play boasrd games, to cook (and eat), or to
        just enjoy the Portuguese sun at the beach.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {data.map((skills)=>(
        <Skill data = {skills} key={data.skill}/>
      ))}
      
    </div>
  );
}

function Skill({data}) {
  return (
    <div className="skill" style={{backgroundColor:data.color}}>
      <span>{data.skill}</span>
      <span>
      {data.level === "beginner" && "👶"}
      {data.level === "intermediate" && "👍"}
      {data.level === "advanced" && "✌️"}
      {data.level === "pro" && "😎"}
      </span>
    </div>
  );
}


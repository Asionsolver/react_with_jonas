import "./styles.css";

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
      <Skill skill="CSS" emoji="✌️" color="#79155B"/>
      <Skill skill="JavaScript" emoji="👌" color="#313866"/>
      <Skill skill="React" emoji="💪" color="#252B48"/>
      <Skill skill="Web Design" emoji="👍" color="#272829"/>
      <Skill skill="Git & GitHub" emoji="✌️" color="#512B81"/>
      <Skill skill="Svelte" emoji="👶" color="#765827"/>
      
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{backgroundColor:props.color}}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}


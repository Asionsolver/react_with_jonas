

  function Skill({levelCount}){
    return(
    <h1>Thomson Kelvin <span>
    {levelCount > 5 && "Pro"}
    {levelCount > 4 && "advanced"}
    {levelCount > 3 && "intermediate"}
    {levelCount > 2 && "beginner"}
    </span></h1>
    );
  }
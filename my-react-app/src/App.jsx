import Student from "./Student.jsx";


function App(){

  return(
    <>
    <Student name="Sonic" age={18} isStudent={true}/>
    <Student name="Shadow" age={20} isStudent={false}/>
    <Student name="Tails" age={17} isStudent={true}/>
    <Student name="Silver" age={18} isStudent={false}/>
    <Student/>
    </>
  );
}

export default App

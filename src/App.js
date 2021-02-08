import './App.css'
import Profil from './Profile/Profil'

function App() {
  const handleName=name => alert(`This is ${name}`)
  const nom = "youcef MERZOUGUI"
  const bio = `Hi, my name is youcef MERZOUGUI ,iam 22 years old , i live in algeria,
  i am a camputer sciences student,I am passionate about web development
  and all kinds of programming (i still noob!), i speake three languages "arabic","french"
  and english, now am learning german too.`
  const profession = "Web Développer"
  const src = "snap.jpg"
  return (
    <div className="App">
      <Profil name={nom} bio={bio} profession={profession} handleName={handleName} >snap.jpg</Profil>
    </div>
  );
}

export default App;

import Profile from "./components/Profile/profile";
import Info from "./components/Info/info";

function App() {
  return (
    <div className="App">
      <div style={{display:'flex',gap:'1vw',alignItems:'flex-start',justifyContent:'center'}}>
        <Profile/>
        <Info/>
      </div>
    </div>
  );
}

export default App;

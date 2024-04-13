import myPhoto from "./assets/images/myPhoto.png";
import "./App.css";

const App = () => {
  return (
    <div className="card">
      <img src={myPhoto} alt="" className="myPhoto" />
      <h2>Ashish Vaidya</h2>
      <p id="location">Pune, Maharashtra, India</p>
      <p>
        <i>&quot;Front end developer and avid reader&quot;</i>
      </p>

      <div className="buttons">
        <button>Github</button>
        <button>Frontend Mentor</button>
        <button>LinkedIn</button>
        <button>Twitter</button>
        <button>Instagram</button>
      </div>
    </div>
  );
};

export default App;

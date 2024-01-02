import "./App.css";
const App = () => {
  return (
    <div>
      <div className="parentclass">
        <div className="child1">
          <h1>Login to your account</h1>
          <p>Login your social account</p>
          <div>
            <input type="text" placeholder="Email"></input>
          </div>
          <div>
            <input type="text" placeholder="Password"></input>
          </div>
          <button>Sign in</button>
        </div>
        <div className="child2">
          <h1>New Here?</h1>
          <p>Sign Up and access your own free To-do</p>
          <button style={{ backgroundColor: "aqua" }}>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default App;

const Signup = () => {
  return (
    <div className="signupparent">
      <div className="signupparent1">
        <h3>SignUp Here to get access of Todo List</h3>
        <label>
          <input type="text" style={{ width: 250, height: 30 }}></input>{" "}
          <br></br>
          Fullname
        </label>
        <label>
          <input type="text" style={{ width: 250, height: 30 }}></input>{" "}
          <br></br>
          Email
        </label>
        <label>
          <input type="text" style={{ width: 250, height: 30 }}></input>{" "}
          <br></br>
          Password
        </label>
        <button>SignUp</button>
      </div>
    </div>
  );
};

export default Signup;

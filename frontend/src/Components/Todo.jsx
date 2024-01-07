const Todo = () => {
  return (
    <>
      <div className="flexContainer">
        <div className="success">
          <h2>Complete Tasks</h2>
          <div className="successChild"></div>
        </div>
        <div className="pending">
          <h2>Pending Tasks</h2>
          <div className="pendingChild"></div>
        </div>
      </div>
    </>
  );
};

export default Todo;

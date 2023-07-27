import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <button>
        <Link to="/create">Create Form</Link>
      </button>
      <button>
        <Link to="/view">View Form</Link>
      </button>
    </div>
  );
}

export default Home;

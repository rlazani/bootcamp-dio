import React from "react";
import Layout from "./components/layout";

function App() {
  return (
    <main>
      <Layout>
        <div>
          <img source="https://avatars.githubusercontent.com/u/66982966?v=4" alt="Picture of user"/>
          <h1>Rodrigo Lazani</h1>
          <h3>Username: </h3>
          <span>lazani</span>
        </div>
        <div>
          <h4>Followers</h4>
          <span>5</span>
        </div>
        <div>
          <h4>Starreds</h4>
          <span>5</span>
        </div>
      </Layout>
    </main>
  );
}

export default App;

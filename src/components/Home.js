import React from "react";

function Home() {
  return (
    <div className="home">
      <div class="container-lg">
          <div class="text-white rounded bg-dark">
                <img src="./banner.jpeg" alt="banner" width="100%"></img>
                <p class="lead my-3">Export and Wholesale of all types of Dals, Fresh Vegetables, 
          Fresh Fruits, Frozen Vegtables, Frozen Fruits and Dehydrated Vegetables.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;

// import { BrowserRouter as Router } from "react-router-dom";
// import Navigation from "./Navigation";

// const Home = () => {
//   return (
//     <Router>
//       <Navigation/>
//       <img src="./banner.jpeg" alt="banner" width="100%"></img>
//     </Router>
//   );
// }

// export default Home;
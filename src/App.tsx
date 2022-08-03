import React, { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Team from './pages/Team';


class App extends React.Component {
	constructor(props: any) {
		super(props);
    this.state = {};
	}

  render() {
    return (
      <div className="eclipse-top-right flex flex-col h-[100vh]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="team" element={<Team />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="eclipse-top-right flex flex-col h-[100vh]">
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="team" element={<Team />} />
//       </Routes>
//       <Footer />
//     </div>
//   );
// }

export default App;

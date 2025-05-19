import React from 'react';
import './pages.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function Home() {
  return (
    <div>
      <h2>About Me</h2>
      <hr class="rounded"></hr>
      <p>&nbsp;</p>
      <h4> Simple Introduction </h4>
        <p class="times"> Computer Science Major with abilities in computer-based skills and media advertisement.
          Seeking any full-time positions that will allow the experience needed for software development,
           graphic design, computer graphics, or fine arts. Over 5 years of IT support and 1 year (continuing) of LMS 
           support for Blackboard and Brightspace--and over 4 years of graphic design in Twitch products and
           merchandise for a variety of Affiliated & Partnered streamers.  </p>    
      <p>&nbsp;</p>
      <h4> Interests and Hobbies </h4>
        <ul>
          <li> Graphic Design </li>
          <li> Animation </li>
          <li> Illustration </li>
          <li> Web Design </li>
          <li> Game Design </li>
        </ul>
      <p class="times">&nbsp;</p>
      <h4> Most Open to work... </h4>
      <p class="times"> In-person if needed for team projects or hybrid/remote for individual work </p>
    </div>
  );
}

export default Home;


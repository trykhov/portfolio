import React from 'react';
import '../css/mywork.css';
import g12 from '../img/g12site.png';
import yugioh from '../img/yugioh.png';
import marvel from '../img/game_mechanics.gif';

class MyWork extends React.Component {

  render() {
    return(
      <section id="portfolio">
        <div id="portfolio-container">
          <h2> Portfolio </h2>
          <div className="project">
            <div className="img-container">
              <img id="baseball" src={require('../img/splitbill_demo.gif')} alt="splitbill_app"/>
            </div>
            <div className="info">
              <p className="notes">
              This is a web application that I made in order to split dinner bills with friends. 
              I created this app using primarily <strong>React.js</strong>. 
              The idea behind this was to create an app that allowed users to enter custom totals as opposed to exact percentages and users could divide the bill up among friends.
              </p>
              <p className="source">Try the App Here: <a target="_blank" rel="noopener noreferrer" href={"https://trykhov.github.io/split-bill-app/#/"}>SplitBill</a></p>
              <p className="source">Source Code: <a target="_blank" rel="noopener noreferrer" href={"https://github.com/trykhov/split-bill-app"}>Github</a></p>
            </div>
          </div>
          <div className="border"></div>
          <div className="project">
            <div className="img-container">
              <img id="baseball" src={require('../img/baseball_app_demo.gif')} alt="baseball_app"/>
            </div>
            <div className="info">
              <p className="notes">
                This is a web application that was inspired by a friend's idea for a drinking game he invented called "Baseball".
                It play similarily to the real game of baseball. This app was made to keep track of score as well as batter rotation and
                other logistics such as strikes, outs, and innings. I created this app using <strong>React.js</strong>. Since this
                app required a lot state management to keep track of score and other logistics, I used <strong>Redux</strong>.
              </p>
              <p className="source">Try the App Here: <a target="_blank" rel="noopener noreferrer" href={"https://trykhov.github.io/baseball_tracker/#/"}>Baseball Tracker</a></p>
              <p className="source">Source Code: <a target="_blank" rel="noopener noreferrer" href={"https://github.com/trykhov/baseball_tracker"}>Github</a></p>
            </div>
          </div>
          <div className="border"></div>
          <div className="project">
            <div className="img-container">
              <img src={g12} alt="g12site"/>
            </div>
            <div className="info">
              <p className="notes">
                This is a fullstack website that I made for a growing trucking company located in Southern California.
                I used <strong>React</strong> as a framework to display the content of the site. Along with the
                content, users are able to read the site in Spanish using a translation feature that I created with the
                <strong> Redux</strong> library. The backend was created using <strong>Node.js</strong> and it allows users
                to send service requests to the client.
              </p>
              <p className="source">Visit the Site: <a target="_blank" rel="noopener noreferrer" href={"http://g12transport.com"}> G12 Transport</a></p>
            </div>
          </div>
          <div className="border"></div>
          <div className="project">
            <div className="img-container">
              <img src={yugioh} alt="yugioh-site"/>
            </div>
            <div className="info">
              <p className="notes">
              This site was a fun project that I did for a proof of concept for a website that I found online.
              The idea was to create a responsive website and change its design in order to make it look less
              disorganized and more appealing. This was a great practice for learning <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong>.
              </p>
              <p className="source">Visit the Site: <a target="_blank" rel="noopener noreferrer" href={"https://trykhov.github.io/yugioh_website/"}> Yu-Gi-Oh!</a></p>
              <p className="source">Source Code: <a target="_blank" rel="noopener noreferrer" href={"https://github.com/trykhov/yugioh_website"}> Github</a></p>
            </div>
          </div>
          <div className="border"></div>
          <div className="project">
            <div className="img-container">
              <img src={marvel} alt="marvel-game"/>
            </div>
            <div className="info">
              <p className="notes">
                This was another fun project that I made when I was practicing my <strong>JavaScript</strong>. It's a memory game
                based off of the Marvel movies. One awesome feature that I implemented is every element is randomly placed.
                This makes it so that no two games are the same despite the difficulty selected.
              </p>
              <p className="source">Play Here: <a target="_blank" rel="noopener noreferrer" href={"https://trykhov.github.io/marvel_memory_game/"}> Marvel Memory Game</a></p>
              <p className="source">Source Code: <a target="_blank" rel="noopener noreferrer" href={"https://github.com/trykhov/marvel_memory_game"}> Github</a></p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default MyWork;

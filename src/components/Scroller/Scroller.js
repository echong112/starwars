import React from 'react';
import './Scroller.scss';

export default class Scroller extends React.Component {

  render() {
    return (
      <div className="scroller">
      <button>Close</button>
        <div className="mockHtml">
          <div className="mockBody">
            <div id="target">
              <div>
                <h3 className="scroll-h3">December 2017</h3>
                <h1 className="scroll-h1">A New Hope</h1>
                It was the best of times for Enrique Solo. He bought crypto early and was riding a wave of luck, masquerading as genius. He saw the mania and cashed out to explore the Asian Dominion and South American Federation. Enrique became a student of cryptocurrency, attending conferences, MeetUps, and talks. He immersed himself in cryptography, blockchain, distributed systems, financial infrastructures, and a new future. 
                <br />
                Hope was destroyed by the evil manipulators, who deployed a plan that resulted in one of the largest wealth transfers in history. Deploying their massive reserves of fake money, the shadowy interests known as the LizardSquad manipulated the prices to pump and dump the markets at will, destroying all hopes of a better future. They become very rich reptiles. 
                <br />
                Enrique Solo travelled across the galaxy to meet visionaries with goals of a future of equality, freedom, and peace. Instead, he found day traders, gamblers and the worst scum the galaxy had to offer. After escaping from a Chinese crypto gang holding him for ransom, Enrique Solo rushed back to New York to warn all hodlers, save his friends' life savings, and restore freedom to the galaxy......
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//Bracket of top 16/32/whatever most-voted memes that will face off against each other

import React, { Component } from 'react'
import '../App.css'
import trophy from '../images/trophy.png'

class MemeBracket extends Component {

//need to dynamically occupy the brackets.

  render() {
      return (
        <div>
        	<section id="bracket">
        	<div className="container">
        	   <div className="split split-one">

               <div className="round round-one current">
                 <div className="round-details">Round 1<br/></div>
            			<ul className="matchup">
            				<li className="team team-top">MEME 1<span className="votes">IMAGE</span></li>
            				<li className="team team-bottom">MEME 2<span className="votes">IMAGE</span></li>
            			</ul>
            			<ul className="matchup">
            				<li className="team team-top">MEME3<span className="votes">IMAGE</span></li>
            				<li className="team team-bottom">MEME4<span className="votes">IMAGE</span></li>
            			</ul>
            			<ul className="matchup">
            				<li className="team team-top">MEME5<span className="votes">IMAGE</span></li>
            				<li className="team team-bottom">MEME6<span className="votes">IMAGE</span></li>
            			</ul>
            			<ul className="matchup">
            				<li className="team team-top">MEME7<span className="votes">IMAGE</span></li>
            				<li className="team team-bottom">MEME8<span className="votes">IMAGE</span></li>
            			</ul>
		            </div>

          		<div className="round round-two">
          			<div className="round-details">Round 2<br/></div>
          			<ul className="matchup">
          				<li className="team team-top">&nbsp;<span className="votes">&nbsp;</span></li>
          				<li className="team team-bottom">&nbsp;<span className="votes">&nbsp;</span></li>
          			</ul>
          			<ul className="matchup">
          				<li className="team team-top">&nbsp;<span className="votes">&nbsp;</span></li>
          				<li className="team team-bottom">&nbsp;<span className="votes">&nbsp;</span></li>
          			</ul>
          		</div>

          		<div className="round round-three">
          			<div className="round-details">Round 3<br/></div>
          			<ul className="matchup">
          				<li className="team team-top">&nbsp;<span className="votes">&nbsp;</span></li>
          				<li className="team team-bottom">&nbsp;<span className="votes">&nbsp;</span></li>
          			</ul>
          		    </div>
              </div>

          		<div className="final">
          			<div className="round-details">Championship <br/><span className="situation">Final War</span></div>
                <img src={trophy} width="100" height="150"/>
                <ul className ="matchup championship">
          				<li className="team team-top">&nbsp;<span className="votes">&nbsp;</span></li>
          				<li className="team team-bottom">&nbsp;<span className="votes">&nbsp;</span></li>
          			</ul>
          		</div>

            	<div className="split-right split-two">

            		<div className="round round-three">
            			<div className="round-details">Round 3<br/></div>
            			<ul className="matchup">
            				<li className="team team-top">&nbsp;<span className="votes">&nbsp;</span></li>
            				<li className="team team-bottom">&nbsp;<span className="votes">&nbsp;</span></li>
            			</ul>
            		</div>

            		<div className="round round-two">
            			<div className="round-details">Round 2<br/></div>
            			<ul className="matchup">
            				<li className="team team-top">&nbsp;<span className="votes">&nbsp;</span></li>
            				<li className="team team-bottom">&nbsp;<span className="votes">&nbsp;</span></li>
            			</ul>
            			<ul className="matchup">
            				<li className="team team-top">&nbsp;<span className="votes">&nbsp;</span></li>
            				<li className="team team-bottom">&nbsp;<span className="votes">&nbsp;</span></li>
            			</ul>

                </div>
             		<div className="round round-one current">
            			<div className="round-details">Round 1<br/></div>
              			<ul className="matchup">
              				<li className="team team-top">MEME9<span className="votes">IMAGE</span></li>
              				<li className="team team-bottom">MEME10<span className="votes">IMAGE</span></li>
              			</ul>
              			<ul className="matchup">
              				<li className="team team-top">MEME11<span className="votes">IMAGE</span></li>
              				<li className="team team-bottom">MEME12<span className="votes">IMAGE</span></li>
              			</ul>
              			<ul className="matchup">
              				<li className="team team-top">MEME13<span className="votes">IMAGE</span></li>
              				<li className="team team-bottom">MEME14<span className="votes">IMAGE</span></li>
              			</ul>
              			<ul className="matchup">
              				<li className="team team-top">MEME15<span className="votes">IMAGE</span></li>
              				<li className="team team-bottom">MEME16<span className="votes">IMAGE</span></li>
              			</ul>
          		    </div>
                </div>
              </div>
            </section>
        </div>

  )};
}

export default MemeBracket;

//Bracket of top 16/32/whatever most-voted memes that will face off against each other
<<<<<<< HEAD
import React, { Component } from 'react'
import '../App.css'
import trophy from '../images/trophy.png'

class MemeBracket extends Component {

//need to dynamically occupy the brackets.

  render() {
      return (
        <div>
          <body>
          	<section id="bracket">
          	<div class="container">
          	<div class="split split-one">

              <div class="round round-one current">
                <div class="round-details">Round 1<br/></div>
          			<ul class="matchup">
          				<li class="team team-top">MEME 1<span class="votes">IMAGE</span></li>
          				<li class="team team-bottom">MEME 2<span class="votes">IMAGE</span></li>
          			</ul>
          			<ul class="matchup">
          				<li class="team team-top">MEME3<span class="votes">IMAGE</span></li>
          				<li class="team team-bottom">MEME4<span class="votes">IMAGE</span></li>
          			</ul>
          			<ul class="matchup">
          				<li class="team team-top">MEME5<span class="votes">IMAGE</span></li>
          				<li class="team team-bottom">MEME6<span class="votes">IMAGE</span></li>
          			</ul>
          			<ul class="matchup">
          				<li class="team team-top">MEME7<span class="votes">IMAGE</span></li>
          				<li class="team team-bottom">MEME8<span class="votes">IMAGE</span></li>
          			</ul>
  		         </div>

          		<div class="round round-two">
          			<div class="round-details">Round 2<br/></div>
          			<ul class="matchup">
          				<li class="team team-top">&nbsp;<span class="votes">&nbsp;</span></li>
          				<li class="team team-bottom">&nbsp;<span class="votes">&nbsp;</span></li>
          			</ul>
          			<ul class="matchup">
          				<li class="team team-top">&nbsp;<span class="votes">&nbsp;</span></li>
          				<li class="team team-bottom">&nbsp;<span class="votes">&nbsp;</span></li>
          			</ul>
          		</div>

          		<div class="round round-three">
          			<div class="round-details">Round 3<br/></div>
          			<ul class="matchup">
          				<li class="team team-top">&nbsp;<span class="votes">&nbsp;</span></li>
          				<li class="team team-bottom">&nbsp;<span class="votes">&nbsp;</span></li>
          			</ul>
          		    </div>
              </div>

              		<div class="final">
              			<div class="round-details">Championship <br/><span class="situation">Final War</span></div>
                    <img src={trophy} width="100" height="150"/>
                    <ul class ="matchup championship">
              				<li class="team team-top">&nbsp;<span class="votes">&nbsp;</span></li>
              				<li class="team team-bottom">&nbsp;<span class="votes">&nbsp;</span></li>
              			</ul>
              		</div>

              	<div class="split-right split-two">

              		<div class="round round-three">
              			<div class="round-details">Round 3<br/></div>
              			<ul class="matchup">
              				<li class="team team-top">&nbsp;<span class="votes">&nbsp;</span></li>
              				<li class="team team-bottom">&nbsp;<span class="votes">&nbsp;</span></li>
              			</ul>
              		</div>

              		<div class="round round-two">
              			<div class="round-details">Round 2<br/></div>
              			<ul class="matchup">
              				<li class="team team-top">&nbsp;<span class="votes">&nbsp;</span></li>
              				<li class="team team-bottom">&nbsp;<span class="votes">&nbsp;</span></li>
              			</ul>
              			<ul class="matchup">
              				<li class="team team-top">&nbsp;<span class="votes">&nbsp;</span></li>
              				<li class="team team-bottom">&nbsp;<span class="votes">&nbsp;</span></li>
              			</ul>

                  </div>
               		<div class="round round-one current">
              			<div class="round-details">Round 1<br/></div>
              			<ul class="matchup">
              				<li class="team team-top">MEME9<span class="votes">IMAGE</span></li>
              				<li class="team team-bottom">MEME10<span class="votes">IMAGE</span></li>
              			</ul>
              			<ul class="matchup">
              				<li class="team team-top">MEME11<span class="votes">IMAGE</span></li>
              				<li class="team team-bottom">MEME12<span class="votes">IMAGE</span></li>
              			</ul>
              			<ul class="matchup">
              				<li class="team team-top">MEME13<span class="votes">IMAGE</span></li>
              				<li class="team team-bottom">MEME14<span class="votes">IMAGE</span></li>
              			</ul>
              			<ul class="matchup">
              				<li class="team team-top">MEME15<span class="votes">IMAGE</span></li>
              				<li class="team team-bottom">MEME16<span class="votes">IMAGE</span></li>
              			</ul>
              		    </div>
                      </div>
                      </div>
                  </section>
              	   </body>
                </div>
  )};
}

export default MemeBracket;
=======
export default MemeBracket
>>>>>>> noahv2

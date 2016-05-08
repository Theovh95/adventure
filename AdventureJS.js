var answer = "";
var answerDeath = "";
var answer2 = "";
var answer3 = "";
var answer4 = "";
var answer5 = "";

var answer7 = "";
var answer8 = "";
var answer9 = "";
var answer10 = "";
var answer11 = "";
var answer12 = "";
var answer13 = "";
var answer14 = "";
var answer15 = "";
var answer16 = "";

var answer17 = "";
var answer18 = "";
var answer19 = "";
var answer20 = "";
var answerDeath = "";
var answerDeath2 = "";

var answerDeath4 = "";
var answerDeath5 = "";
var answerDeath6 = "";
var answerDeath7 = "";
var answerDeath8 = "";
var answerDeath9 = "";
var answerDeath10 = "";
var answerDeath11 = "";
var answerDeath12 = "";
var answerDeath13 = "";
var answerDeath14 = "";
var answerDeath15 = "";
var answerDeath16 = "";


var answerOut = "";

alert("When prompted to type a path make sure to type letter from letter, it is case sensitive and no spaces... and remember if you fail just hit the start button again.");

//document.getElementById("story").innerHTML = "<h2>"You awake on a beach, with the sun glaring in youre eyes.\n" + "You are confused and disorianted do you go into the woods or\n" + "maybe follow this beach down way to search for help?"

function start(){




answer = prompt ("You awake on a beach, with the sun glaring in youre eyes.\n" +
 "You are confused and disorianted do you go into the woods or\n" +
  "maybe follow this beach down way to search for help? (Follow, or Nature)");
if (answer === "Follow") {
  answer2 = prompt ("You followed the beach, \n" +
  "and found nothing after about 30 minutes of exploring.\n" +
  "You did find the mouth of a river down the way a bit, \n" +
  "but now face a problem, you're exausted Should you find some shade\n" +
  "to hunker for awhile or keep exploring up the river?(Explore, or Hunker)");
} else if (answer === "Nature") {
  answer3 = prompt ("You decided to Retreat to the Woods, you stumble upon\n" +
  " a dead deer that is rotting, but the hide still looks useful\n" +
  "Do you take the hide?(Take or Leave)");
}

if (answer2 === "Explore"){
  answer4 = prompt ("You decide the best chance of finding someone or something\n" +
  "to help would be by going further up this river. You walk up a burn and surprised you see a\n" +
  "big moose grazing. Startled by you he jerks up into a defensive stature, you see him sizing you up.\n" +
  "Fast reflexes, and quick thinking you see a big rock sticking out of the raging river\n" +
  "Do you JUMP for the rock obviously wet with splashing water or RUN for the close woods? (Jump, Run)" );
} else if (answer2 === "Hunker"){
  answer5 = prompt ("You decided to rest to recouperate the energy you lost while searching.\n" +
  "You wander to a close patch of woods, you find an upturned tree with a natural divot in the ground\n" +
  "REST here or go up ahead to a distant outlook atop a ROCK structure? (Resting or Rock)");
} 

if (answer3 === "Take"){
  answerDeath = alert ("You start to skin the deer.. dropping your guard to do so you get ambushed by a\n" +
  "pack of wolves.");
} else if (answer3 === "Leave"){
  answer7 = prompt ("You shrug off the deer and the disgusting scent, luckily as you hear the rustling of\n" +
  "what must have been a dozen or so paws against the dead fall leaves just here for a moment then gone.\n You think its a good time to move along as you see a rocky\n plane of crumbled boulders with an interesting man looking statue\n almost looks as if someone carved it. Do to the rocky plane to look at the\n statue or remain in the woods for shelter?(Statue or Shelter)");
}

if (answer5 === "Rock"){
  answerDeath2 = alert ("You ventured too far, and died from exaustion....DEAD");
} else if (answer5 === "Resting"){
  answer8 = prompt("Maybe resting was a good idea you think as you lay your head down to\n begin a much needed nap, you wake up  many hours later with an eerie feeling that you are being watched.\n Do you Yell or Make a big fire?(Yell or Fire)");
}


 if (answer4 === "Run"){
  answerDeath4 = alert ("You dont want to risk it with the moose or the water,\n unfortunatly you try to run passed the moose and outrun him\n too the near woods. You find out he is much faster than you and much heavier...Dead.");
} else if (answer4 === "Jump"){
  answer9 = prompt ("You decide to rely on your corrdination and jump for the rock as you jump\n you succesfully make the gap, but slip on your butt and fell\n into the rushing water. Suprised you try to grab \nhold of anything you can, and have to make the decision to grab\n hold of a vine that looks flimsy or try to float your way to a floating log?(Log or Vine)");
}

if (answer8 === "Yell"){
  answer10 = prompt ("You did the right thing.. making a fire would have taken too long. You hear the rustling of leaves\n and decide that was the thing staring. Feeling more at ease do you\n move out, and quickly, to the vulcano looking mountain you\n saw a moment ago throught the woods or make a bonfire to feel secure?(Volcano or Bonfire)");
} else if (answer8 === "Fire"){
  answerDeath5 = alert ("You think what ever it is it would probably\n be a little scared if you had a roaring fire, so\n silently as possible you begin to make a fire and with success you\n find you need more wood to feed it as you sreach you\n are ambushed by the pack of wolves eyeing you..Dead.");
}

if (answer7 === "Statue"){
  answer11 = prompt ("You get to the statue, it was a long hall youre exausted.\n As you walk up you see the gaint mountain was infact a vulcano\n with darkness quickly approaching you have a decision Rest til the morning or Push on?(Rest or Push)");
} else if (answer7 === "Shelter"){
  answerDeath6 = alert ("you unfortunatly got too comfortable and were stocked\n and hunted by the same wolve that were watching you before.\nMaybe this was there territory and you were intruding. You died!");
}
if (answer11 === "Push"){
  answerDeath7 = alert("you can only push on for so long without resting,\n you discovered this the hard way and on the last treck\n up the vulcano took it all out of you. You realized this too\n late and are now stranded mid climb with no food or water..Dead");
} else if (answer11 === "Rest"){
  answer12 = prompt("Good choice on resting, you just hiked all th\n way across the island and now are beat. You rest, and peacfully\n awaken at dawn to the chirp of a distant bird. With the sun now showing\n everything around you, you now realize the statue must have at one point been\n created by some humans long ago. It is a cool statue, certinly not too important.\n Do you examine closer or start the long hike up the vulcano to get to higher ground? (Highground or Examine)");
}

if (answer12 === "Examine"){
  answer13 = prompt ("you decide to examine the statue more, and while doing\n so you notice little etchings that looked to be added after the long\n ago creation of the statue, you follow them around\n the back to where the legs would be. While doing this\n you discover a little body sized crack inbetween them.\n Do you stop examining or wriggle into the crack?(Stop or Wriggle)");
} else if (answer12 === "Highground"){
  answer14 = prompt ("You figure you can always go back onto the internet if you ever want to look at something like that again. So you continues the hike on this rugged terrain, while doing so you slip on a rock and seem to mess up your ankle quite bad. Do you roll back down or maybe stay here and wait out the pain?(Wait or Roll)");
}

if (answer14 === "Roll"){
  answer15 = prompt("You begin to plan the best route down for rolling,\n and notice there is almost a clear slide looking bedrock\n leading all the way down to the statue noticing there is no way to\n stop or slow yourself. Do you  roll regardless of the problem\nof not being able to stop or maybe look some more?(Look or Slide?)");
} else if (answer14 === "Wait"){
  answer16 = alert("It wasn't such a bad idea to wait it out. You begin\n to get comfortable and rest for awhile, when you are ready you\n pack everything up and continue on! With your foot still throbbing you wonder\n if this was the best choice. Youre too committed now and almost\n too the top, its begining to get dark and you can see the summit about 100 yards up.\n Do you Go for it or rest for the night?(Go or Night)");
}

if (answer16 === "Go"){
  answerDeath8 = alert("You ventured too far without rest and unfortunatly eventually\n ran out of energy to even go back down. You wither and die..");
} else if (answer16 === "Night"){
  answer17 = prompt ("you decide this was enough for one day and without\n even a thought you lay your head down and pass out from exaustion,\n when you awake you realize there is a storm brewing.. do you play with fate\n and continue the hike to maybe see civilization up top or run back down to the statue?(Fate or Down)");
}

if (answer17 === "Fate"){
  answerDeath9 = alert ("You decide to put your last effort into this climb\n in hope to see anything atop this mountain, as you reach the\n top you feel rain start to beat down and wet all the rocks.\n You get to the top in exaustion and break down as you look around 360\n degrees and notice there is nothing, but an island and ocean beyond. Everything starts\n to grow foggy as you think 'How the hell did I end up here?'");
} else if (answer17 === "Fall"){
  answerDeath10 = alert ("You begin to go back down, as you inch\n your way back down the rain begins to fall heavier and heavier.. you try and\n stay atop of the terrain but with the wet rocks it was begining\n to become scary.. you slip just as you got to the point of thinking that,\n and watch helplessly as you toumble down the rocks...Dead");
}

if (answer13 === "Stop"){
  answerDeath11 = alert ("You stop the examination, and figure its time to continue up the hill,  in hope to see anything atop this mountain, as you reach the\n top you feel rain start to beat down and wet all the rocks.\n You get to the top in exaustion and break down as you look around 360\n degrees and notice there is nothing, but an island and ocean beyond. Everything starts\n to grow foggy as you think 'How the hell did I end up here?' ");
} else if (answer13 === "Wriggle"){
  answer18 = prompt ("You begin to examine more closely, with what\n energy you have left you decide to wriggle into the seemingly\n endless crack. With your body all into the crack and only\n your butt sticking out, you start to feel trapped thinking this was a bad idea as you see a little bit of\n a clearing below without being able to see the bottom of where\n the clearing ends you can either force yourself all the way through and fall into the\n clearing of rocks or stay put and just let Fate take care of the rest?(Takefate or Falls)");
}

if (answer18 === "Takefate"){
  answerDeath12 = alert ("You dicide to do the one thing that you havent tried\n just let fate see if it will help, being stuck in a crack\n isnt that bad after all you think as you push the negitive thoughts away.\n This was the last thing you do, you are trapped and fate isnt on your side... dead");
}else if (answer18 === "Falls"){
  answer19 = prompt ("You go for it, you figure whats the worst that could happen,\n so you make yourslef as skinny as possibly and pop right through at an awkward angle,\n you hit the ground which was closer than expected. As you look around you notice youre in a fairly\n used tunnel and up ahead is a door.. with a light. Do you knock?(Knock or Explores)");
}

if (answer19 === "Explores"){
  answerDeath13 = alert ("You made it this far and at the sight of humanity you ran, unfortunatly you died soon after...Dead(Refresh)");
} else if (answer19 === "Knock"){
  answerOut = alert ("You are giddy at the sight of the door,\n but a little skittish as well as you walk up. You knock three times as it rings\n out through the tunnels, you hear footsteps getting closer and closer.\n As the door creeks open you see a man standing there as he exclaims\n 'OH, we have been expecting you!' You feel yourself get pale and feel sick. What is\n going on, you wonder as the man says something again. You're in shock from the whole situation,\n he notices how out of it you are as he talks again more clear. 'I just don't understand why you\n didnt wait for us on the beach, we told you we would be back in a half hour? Anyways come on inside we have food and shelter for you.'  ");
  alert("You survived adventure island!!");
}

if (answer9 === "Vine" || answer9 === "vine"){
  answerDeath14 = alert ("You reached out to grab the first thing you could think of,\n the vine holds you for a little bit until the rush of the water\n is just too much and snaps it. You start to float down the rushing river and\n cannot keep your head a float... Dead(Refresh)");
}else if (answer9 === "Log" || answer9 === "log"){
  answer20 = prompt ("you grab hold of the log, a surprisingly good makeshift raft.\n You begin to get your barrings as you get washed down the\n river on the log, do you get off or ride out to sea?(Getoff or Sea)");
}

if (answer20 === "Getoff" || answer20 ==="getoff"){
  answerDeath15 = alert("The water was rushing way to fast as you jump off to get to shore youre\n sucked down into the river and never see the light of day again... Dead(Refresh)");
} else if (answer20 === "sea" || answer20 === "Sea"){
  answerDeath16 = alert("You decide the best idea is to continue out to sea,\n because of the fact that the water is rushing much to fast for you\n to handle. You End up stuck out at sea with no other options but to\n wait..Dead(Refresh)");
}
if(answer10 === "Volcano"){
  answerDeath3 = alert("You went ahead and without a though started\n the long hike to the tall volcano, unfortunatly it was much further\n than anticipated and you died from exaustion");
} else if (answer10 === "Bonfire"){
  answerDeath17 = alert("You stayed in the area and decided\n you'd be comfortable enough to rest and start a fire,\n you were wrong and are hastily eaten up...Dead");
}

}
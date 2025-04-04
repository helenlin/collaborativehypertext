const scenes = [
    `BOB
  For relaxing times, make it Suntory Time.`,

    `CHARLOTTE
  Philosophy.

  BOB
  Oh, what do you do with that?
  
  CHARLOTTE
  I don't know, but I can think about it, a lot.`,
  
  `"ARE YOU HAVING A MID-TWENTIES CRISIS?
  ARE YOU FATIGUED?
  DO YOU HAVE NO IDEA WHERE YOUR CAREER IS GOING?
  DO YOU HATE MOST PEOPLE?"`,
    `CHARLOTTE
  Not really. How long are you here for?
  
  BOB
  I'm here for the week.
  
  CHARLOTTE
  Oh, good. Do you want to go to a party tonight with me and some friends who live here?
  
  BOB
  Ok.
  
  CHARLOTTE
  See you later.`,
    `
  I could feel at the time
  There was no way of knowing
  Fallen leaves in the night
  Who can say where they're blowing?
  As free as the wind
  Hopefully learning
  Why the sea on the tide
  Has no way of turning
  
  More than this
  You know there's nothing
  More than this
  Tell me one thing
  More than this
  Ooh, there's nothing
  
  It was fun for a while
  There was no way of knowing
  Like a dream in the night
  Who can say where we're going?
  No care in the world
  Maybe I'm learning
  Why the sea on the tide
  Has no way of turning`,
    `CHARLOTTE
  I just don't know what I'm supposed to be. I thought maybe I wanted to be a writer... but I hate what I write, and I tried taking pictures, but John's so good at that, and mine are so mediocre... and every girl goes through a photography phase, like horses, you know dumb pictures of your feet...`,
    `LYDIA (O.S.)
  Is this a bad time?
  
  BOB
  Uh, no.
  
  LYDIA (O.S.)
  (O.S.) It's really hard to reach you... Did you get the carpet samples? I like the burgundy.
  
  BOB
  Ok, whatever you think... I'm lost.
  
  LYDIA (O.S.)
  It's just carpet.
  
  BOB
  That's not what I'm talking about.
  
  LYDIA (O.S.)
  What are you talking about?
  
  BOB
  I don't know.
  
  LYDIA (O.S.)
  Is there anything I can do?
  
  BOB
  I don't know... I want to be more healthy. I want to eat better.
  
  LYDIA (O.S.)
  What?
  
  BOB
  You know, eat healthier.`,
    `BOB
  Hello?
  
  LYDIA (O.S.)
  Hello, Bob, it's me.
  
  BOB
  (can't hear)
  Hello?
  
  LYDIA (O.S.)
  It's Lydia, your wife.
  
  BOB
  I couldn't hear you. How are you?
  
  LYDIA
  (sighs)
  Fine. Is it going ok?
  
  BOB
  It's ok.
  
  LYDIA (O.S.)
  Do you want to-
  (garbled)
  
  BOB
  What?`,
    `BOB
  So, where'd you go today.
  
  CHARLOTTE
  Around.`,
    `CHARLOTTE
  That's it?
  
  The concierge tells him his car is here.
  
  CHARLOTTE
  You're leaving right now?
  
  BOB
  Yes.
  
  CHARLOTTE
  Well... have a good flight.
  
  BOB
  Thanks.
  
  CHARLOTTE
  (hurt)
  Ok, bye.`,
  
  `Charlotte watches Bob as he reaches his car, he turns and looks at her.
  
  She smiles at him, and is lost in the crowd.
  
  Bob gets into his car.`,
    `NORA
  해성! 나 나영이야... 기억나? / Hae Sung! This is Na Young... Do you remember me?
  
  HAE SUNG 
  와, 너다. / Woah, it's you. 
  
  NORA 
  와. / Woah.`,
    `HAE SUNG 
  어떻게 이렇게 다시 만나냐? / How are we meeting again like this? 
  
  NORA 
  난 너가 날 기억하는지도 몰랐어! 근데 진짜 장 난으로 널 찾아봤더니 너가 나를 찾고 있는거야. / I didn't even know that you remembered me! I just looked for you as a joke, then I saw that you'd been looking for me. 
  
  HAE SUNG 
  난 장난이 아니였는데. 난 정말 열심히 찾았어. 찾기 힘드니까 왠지 오기가 생겨서... 이름이 다 르네? / It wasn't a joke for me. I tried really hard to find you. I weirdly became more determined because it was so hard... by the way, you changed your name?`,
    `HAE SUNG 
  요즘도 잘 울어? / Do you still cry a lot? 
  
  NORA 
  아니. / No. 
  
  HAE SUNG 
  그래? 그땐 너 많이 울었는데.  / Really? You used to cry a lot back in those days.
  
  NORA 
  거의 매일 울었지. 내가 울때 너가 맨날 같이 있 어줬잖아. / Almost every day. You would always stay with me whenever I was crying. 
  
  HAE SUNG 
  이젠 왜 안 울어? 뉴욕에서는 울면 안돼? / Why don't you cry now? You can't cry in New York City?
  
  Beat.`,
    `HAE SUNG 
  들려? / Can you hear me?
  
  NORA 
  여보세요? / Hello?`,
    `NORA 
  There is a word in Korean: 인연 In-Yun. It means providence or fate, but it's specifically about relationships between people. I think it comes from Buddhism and reincarnation.
  
  It's an In-Yun if two strangers even walk by each other in the street and their clothes accidentally brush because it means there must have been something between them in their past lives.`,
    `1 2   Y E A R S   P A S S`,
    `Hae Sung turns to Nora, and they look at each other for the first time in twenty years.
  
  The two of them just stare for a moment, shocked. They both look like they're staring at a ghost.
  
  For a moment, we see the little Na Young smiling at Hae Sung at the art gallery, back when they were children. Blink and you miss it.
  
  Nora sees Hae Sung and realizes, fuck, he's here to see me.
  Hae Sung sees Nora and realizes, fuck, I'm here to see her.`,
    `HAE SUNG
  왜 싸워? / Why do you fight?
  
  Beat.
  
  NORA
  그냥. 나무 두개를 한 항아리에 심는거 같은거 야. 뿌리가 서로 자리를 찾아 가느라고. / Just because. It's like planting two trees in one pot. Our roots are finding their place.`,
    `NORA
  Are you mad?
  
  ARTHUR
  (yes)
  No.`,
    `ARTHUR
  What if you met someone else at the residency?
  
  NORA
  That's not how life works.
  
  ARTHUR
  Yeah, but wouldn't you be laying here with him?
  
  NORA
  This is my life. And I'm living it with you.
  
  ARTHUR
  Is this how you thought it would turn out?
  
  NORA
  This is where I ended up. This is where I'm supposed to be.`,
    `HAE SUNG
  니 남편이 좋은게 이렇게 아플지 몰랐어. / I didn't know that liking your husband would hurt this much.`,
    `HAE SUNG
  우리가 얘기를 그만하기로 한 시간 동안... 난 무지 보고싶었거든. 나 보고 싶었어? / When we stopped talking... I really missed you. Did you miss me?
  
  NORA
  그럼. / Of course.
  
  HAE SUNG
  (sharply) 신랑을 만났잖아. / But you met your husband then.
  
  NORA
  (defensively) 너도 여자친구 생겼잖아. / You met your ex-girlfriend then too.`,
    `HAE SUNG 
  근데 이번에 와서 확인한 사실은, 넌 너기 때문 에, 떠나가야 했어. 그리고 내가 널 좋아하는 이 유는, 니가 너 이기때문이야. 그니고 넌 누구냐 면, 떠나는 사람인거야. / But the truth I learned here is, you had to leave because you're you. And the reason I liked you is because you're you. And who you are is someone who leaves.`,
    `HAE SUNG
  아니면 어딘가를 가는 기차에 같히 앉아 있었던거 야. / Or maybe we were just sitting next to each other on the same train.
  
  NORA
  왜? / Why?
  
  HAE SUNG
  그냥 티켓이 옆자리여서. / Just because that's what our tickets said.`,
    `NORA
  그냥 어떤 아침에 나무가지에 앉은 새랑 그 나무 가지의 관계였을수도 있는거지. / Maybe we were just a bird and the branch it sat on one morning.`,
    `He feels both massive and small.`,
    `CELINE
  That's good you can have that attitude toward death. I think I am afraid of death twenty-four hours a day.`,
    `JESSE
  Think of it like this. Jump ahead ten, twenty years. Your marriage just doesn't have that same energy anymore. You start to blame your husband. You think of all the guys you've met and all the ones you never pursued and how things might have been different if you'd just picked up with one of them. Well, I'm one of them. You can consider this traveling back in time, to see what you are missing. See, this is really a big favor to both you and your future husband - it's a chance to see how you really haven't missed anything. That I'm just as boring and unmotivated as he is, hopefully more.`,
    `CELINE
  You know what this makes me think Of?
  
  JESSE
  What?
  
  CELINE
  All those people you briefly intersect with, maybe make eye contact with, and then pass by.
  
  JESSE
  Yes, we could have done that. Now it's like...
  
  CELINE
  No matter what happens, we have met.`,
    `CELINE
  Oh, here she is. This is the one I remember the most. She was thirteen when she died. That meant something to me because I was that age when I saw this. Now I'm ten years older and she's still...thirteen, I guess.`,
    `CELINE
  People can live their whole life as a lie. My grandmother was married to this man, and I always thought she had a very simple, uncomplicated love life. But she just confessed to me that she spent her life dreaming about another man she was always in love with. She just accepted her fate. I was so sad. But I also found it very beautiful that she had all those emotions I never thought she would have had.`,
    `CELINE
  Yes, I think so. I think it's because I've always had this feeling that I'm this very old woman, laying down, about to die, and her last thoughts are the remembrance of her youth and her life. I feel like my life is just her memories or something.`,
    `JESSE
  I went to this Quaker wedding once, and do you know how they do it? The couple kneels down in the middle of the church in front of everyone, and they stare at each other. Nobody speaks unless God moves them to say something - a blessing, a warning, nothing, whatever. And then after an hour of staring into each other's eyes, they're married.`,
    `HOMELESS POET
  (reads poem)
  Daydream delusion
  limousine eyelash
  Oh baby with your pretty face
      drop a tear in my
      wineglass
  Look at those big eyes on your face
      see what you mean to me
  Sweet cakes and milk shakes
      I'm a delusion angel
       I'm a fantasy parade
  I want you to know what I think
      don't want you to guess
       anymore
  You have no idea where I came from
      we have no idea where
       we're going
  Lodged in life
      like branches in a river
        flowing downstream
      caught in the current
  I'll carry you you carry me
      that's how it could be
        don't you know me
        don't you know me by now`,
    `JESSE
  See that guy? We'll never see him again. That was the one moment our lives intersect.`,
    `JESSE
  I feel like this is some dream world we're walking through.
  
  CELINE
  It's so weird. It's like our time together is just ours - it's our own creation. It's like, I'm in your dream and you're in mine.
  
  JESSE
  Yeah, what we're doing this whole night shouldn't officially be happening.
  
  CELINE
  Maybe that's why this feels so other-worldly.
  (a beat)
  But then, the morning comes and we turn into pumpkins.
  
  JESSE
  Ahh. I don't want to talk about the morning.
  
  CELINE
  But at this point I think you're supposed to produce the glass slipper and see if it fits.`,
    `CELINE
  It's like if you knew your relationship had to end in two years, there would be no room for fighting or wasted time. There could be more love and appreciation for one another. It's like, if everyone you met you knew was going to die at midnight, you would be a much more compassionate person.`,
    `CELINE
  You told me that our time together would someday make me happier with my future husband, but now I'll wonder even more.`,
    `CELINE
  I know. I think the train is about to leave.
  
  
  They look into each other's eyes. Jesse reaches out for Celine's hand and clasps it tightly. They smile, knowing that they've changed in unexpected ways, and then embrace tenderly for several moments. They part, and Celine turns suddenly and walks up the stairs to her train car. As she reaches the top step she hesitates, turns, and looks back at Jesse, who's still staring at her. He signals for her to hold on a second.`,
    `CELINE
  Good-bye.
  
  JESSE
  Bye.
  
  
  They part and Celine disappears into the train.
  
  Celine finds her way to a seat. Jesse gets his stuff out of his locker and begins walking. As her train slowly pulls out of the station, we hear the harpsichord and see a series of shots of many of the locations Celine and Jesse inhabited the night before. In the early-morning light these places are now somehow different. Even though there is little human presence at this time of the morning, the transformation has begun. We see Jesse getting situated on his bus to the airport. We then see the park where they danced, sang, and stared up at the sky. A very old lady walks slowly across the grass. Celine is settled on the train and reading. She looks up from her book and just stares out the window at the landscape going by.`
  ];

  const endings = [  `Back in the Presidential, alone, Bob leans against the little doily.  They drive off. He looks out the window, Bob's happy he's going home, he's happy he came to Tokyo.
  
    Bob's P.O.V.- Tokyo goes past his window.
    
    FADE TO BLACK:
    THE END`,
      `
    Hae Sung sits alone in the back seat as the uber drives away from Nora. This scene reflects the backseat of Na Young's Mom's car in their childhood, on their way home from the museum.
    He is in his own tiny box, looking outside the window, watching New York as it wakes up. He faintly smiles as the uber drives on, moving him through the strange city. He feels both massive and small.
    
    END OF FILM.`,
      `
    Celine is settled on the train and reading. She looks up from her book and just stares out the window at the landscape going by.
  
    FADE OUT.`
];

  

function randSceneText1() {
    return Math.floor(Math.random() * 40);
  }
    const sceneDiv = document.querySelector(".scene");
    const randomNumber = randSceneText1();
    const text = scenes[randomNumber];
    if (sceneDiv) {
      sceneDiv.innerHTML = text;
    }

    const div1 = document.getElementById('div1');
    if (div1) {
      div1.innerText = text;
    };

function randEndingText() {
    return Math.floor(Math.random() * 2);
    }
    const endingDiv = document.querySelector(".ending");
    const endingNumber = randEndingText();
    const ending = endings[endingNumber];
    if (endingDiv) {
        endingDiv.innerHTML = text;
    }

    const div3 = document.getElementById('ending');
    if (div3) {
        div3.innerText = text;
    };
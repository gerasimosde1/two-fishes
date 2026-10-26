// English (master language pack). Every other pack has the same keys.
(function(){
const L={code:'en',locale:'en-GB',label:'English',short:'EN'};
const ordn=n=>{const s=['th','st','nd','rd'],v=n%100;return n+(s[(v-20)%10]||s[v]||s[0]);};
L.hl=n=>`${ordn(n)} house`;
const list=a=>a.length<2?a.join(''):a.slice(0,-1).join(', ')+' and '+a[a.length-1];

L.signs=[
 {n:'Aries',key:'bold, pioneering, impulsive',how:'in a bold, pioneering way',body:'The first sign and the spark of spring. Aries acts first and thinks later, loves a challenge and goes straight for what it wants.',plus:'courage, honesty, energy, getting things started',minus:'impatience, temper, starting without finishing'},
 {n:'Taurus',key:'steady, sensual, loyal',how:'in a steady, sensual way',body:'Steady and grounded, Taurus builds slowly and enjoys life through the senses: food, touch, nature, beauty and comfort.',plus:'patience, loyalty, reliability, good taste',minus:'stubbornness, possessiveness, resisting change'},
 {n:'Gemini',key:'curious, witty, restless',how:'in a curious, playful way',body:'Quick and curious, Gemini wants to know a little about everything, loves conversation and needs variety.',plus:'wit, adaptability, communication, learning fast',minus:'restlessness, scattered focus, staying on the surface'},
 {n:'Cancer',key:'nurturing, protective, sensitive',how:'in a caring, protective way',body:'Cancer feels deeply and protects what it loves. Home, family and emotional safety come first.',plus:'care, intuition, memory, loyalty',minus:'moodiness, clinging, hiding in its shell'},
 {n:'Leo',key:'radiant, generous, proud',how:'in a warm, generous way',body:'Leo shines like the Sun that rules it: warm, creative and generous, it wants to express itself and be appreciated.',plus:'warmth, creativity, courage, big heart',minus:'pride, needing attention, drama'},
 {n:'Virgo',key:'precise, helpful, analytical',how:'in a careful, practical way',body:'Virgo notices details and wants to make things better. It finds meaning in being useful, skilled and healthy.',plus:'precision, helpfulness, analysis, modesty',minus:'worry, criticism, perfectionism'},
 {n:'Libra',key:'harmonious, charming, fair-minded',how:'in a gracious, balanced way',body:'Libra looks for balance, beauty and fairness, and comes alive through relationships and partnership.',plus:'diplomacy, charm, sense of justice, taste',minus:'indecision, people-pleasing, avoiding conflict'},
 {n:'Scorpio',key:'intense, private, transformative',how:'in an intense, deep way',body:'Scorpio goes deep. Intense and private, it wants truth, loyalty and emotional honesty, and it is transformed by crisis.',plus:'depth, loyalty, insight, resilience',minus:'jealousy, secrecy, holding grudges'},
 {n:'Sagittarius',key:'adventurous, honest, philosophical',how:'in an adventurous, open way',body:'Sagittarius is the explorer and philosopher, always looking for meaning, freedom and the bigger picture.',plus:'optimism, honesty, humour, vision',minus:'restlessness, bluntness, promising too much'},
 {n:'Capricorn',key:'ambitious, patient, responsible',how:'in a serious, ambitious way',body:'Capricorn climbs the mountain step by step. Serious and ambitious, it builds things that last and gets better with age.',plus:'discipline, responsibility, patience, ambition',minus:'coldness, pessimism, overworking'},
 {n:'Aquarius',key:'original, independent, humanitarian',how:'in an original, independent way',body:'Aquarius thinks differently. It values freedom, friendship and ideas that could make the world better for everyone.',plus:'originality, independence, fairness, vision',minus:'detachment, rebelliousness, fixed opinions'},
 {n:'Pisces',key:'dreamy, compassionate, intuitive',how:'in a dreamy, compassionate way',body:'The last sign holds a little of all the others. Pisces is sensitive, imaginative and compassionate, open to dreams, art and spirit.',plus:'empathy, imagination, intuition, kindness',minus:'escapism, confusion, weak boundaries'}
];
L.signs.forEach(s=>{s.inS='in '+s.n;});
L.signPM=[[["feelings that are quick, honest and over fast", "anger that flares before you have named it"], ["leading, starting and not waiting for permission", "rushing in, leaving things half-built"], ["fast instincts and saying it straight", "blurting first, thinking second"]], [["calm affection and a love of comfort that settles everyone nearby", "clinging to what feels safe, sulking quietly"], ["slow, steady effort that actually finishes", "digging in your heels when plans need to change"], ["practical common sense and a good ear for what is real", "being slow to update an opinion"]], [["a light touch with feelings: talking things through helps", "explaining a feeling instead of feeling it"], ["doing many things well and switching gears easily", "starting five things and finishing two"], ["quick, curious thinking and a gift for words", "overthinking, or skimming when you should dig"]], [["a deep, protective heart that remembers what matters", "taking things personally and retreating into your shell"], ["working hard for the people and places you love", "avoiding a fight by going indirect"], ["a mind that works through memory and gut feeling", "letting mood decide what seems true"]], [["warmth that lights up a room, with loyal affection", "needing to be noticed to feel loved"], ["confident, generous leadership with flair", "pride getting in the way of asking for help"], ["creative, bold ideas said with conviction", "dismissing advice that dents the ego"]], [["quiet, practical care shown through small acts", "worrying, and being hard on yourself"], ["careful craft and noticing what needs fixing", "perfectionism that stops you finishing"], ["sharp analysis and an eye for detail", "criticising when you only meant to help"]], [["tenderness, fairness and a talent for keeping the peace", "swallowing your own needs to avoid friction"], ["teamwork, tact and a good sense of timing", "dithering between two options for ages"], ["seeing both sides and weighing things up well", "sitting on the fence so nobody is upset"]], [["loyal, all-in feelings that go below the surface", "jealousy, secrets and long memories"], ["focused, relentless drive that does not quit", "all-or-nothing intensity and power struggles"], ["investigator's instincts that spot what is hidden", "suspicion, assuming the worst until proven otherwise"]], [["a generous, sunny heart that needs room to roam", "pulling away when things feel too tight"], ["big-picture courage and a willingness to try", "overpromising and under-planning"], ["honest, wide-ranging ideas and a love of learning", "saying the blunt thing without the soft landing"]], [["steady, reliable love that shows up and stays", "hiding feelings behind being busy and capable"], ["patient ambition and building things that last", "working too hard and calling it rest"], ["clear, strategic, long-range thinking", "being so practical that wonder gets squeezed out"]], [["friendship-first affection that respects your freedom", "keeping people at arm's length when it gets close"], ["original methods and standing up for a cause", "being stubborn about your way of doing it"], ["inventive, independent ideas ahead of their time", "being so detached that others feel unheard"]], [["tenderness that soaks up the mood of the room", "absorbing everyone's feelings and losing track of your own"], ["quiet, flexible persistence guided by instinct", "drifting when there is no clear shape to follow"], ["poetic, intuitive thinking that connects dots others miss", "fog: vague plans and putting off the decision"]]];
L.pmGroup={Moon:0,Venus:0,Chiron:0,Mars:1,Jupiter:1,Saturn:1,Mercury:2,Uranus:2,Neptune:2,Pluto:2};
L.signPMFor=(s,id)=>{const g=L.pmGroup[id],v=g==null?null:L.signPM[s][g];return v?{plus:v[0],minus:v[1]}:{plus:L.signs[s].plus,minus:L.signs[s].minus};};

L.planets={
 Sun:{n:'Sun',what:'identity',key:'identity, vitality, life purpose',tr:'{t} shines a light on {n}.',dur:'a few days',info:'Your core self: what makes you feel alive, your will and your purpose. Your Sun sign is the "star sign" everyone knows. Its house shows where you most want to shine.'},
 Moon:{n:'Moon',what:'emotions',key:'emotions, needs, instincts, comfort',tr:'{t} stirs the feelings around {n}.',dur:'a few hours',info:'Your emotional nature: what you need to feel safe, how you react by instinct and how you care for others. Its house shows where you look for comfort.'},
 Mercury:{n:'Mercury',what:'mind',key:'mind, communication, learning',tr:'{t} brings thoughts and conversations to {n}.',dur:'a few days',info:'How your mind works: thinking, speaking, writing, learning and everyday decisions.'},
 Venus:{n:'Venus',what:'love',key:'love, beauty, pleasure, values, money',tr:'{t} brings affection and ease to {n}.',dur:'a few days',info:'How and what you love: your style in relationships, what you find beautiful, what you value, and how you relate to money and pleasure.'},
 Mars:{n:'Mars',what:'drive',key:'drive, desire, courage, anger',tr:'{t} brings energy, heat or conflict to {n}.',dur:'a week or so',info:'Your drive: how you go after what you want, your energy, desire and courage, and how you get angry.'},
 Jupiter:{n:'Jupiter',what:'growth',key:'growth, luck, faith, generosity',tr:'{t} expands and opens up {n}.',dur:'several weeks to months',info:'Where life feels generous: growth, luck, optimism, teachers and faith. Where Jupiter sits, you are encouraged to grow.'},
 Saturn:{n:'Saturn',what:'structure',key:'structure, discipline, tests, time',tr:'{t} tests {n} and asks you to build something solid.',dur:'months, often in passes',info:'Where life asks for effort: discipline, limits, responsibility and fear. Saturn teaches slowly, but what you build here lasts.'},
 Uranus:{n:'Uranus',what:'change',key:'change, freedom, surprise, awakening',tr:'{t} shakes up and frees {n}.',dur:'about a year, in passes',info:'Where you need freedom and do things your own way: sudden change, originality, awakening. It moves slowly, so everyone born around your year shares its sign; its house is what makes it personal.'},
 Neptune:{n:'Neptune',what:'dreams',key:'dreams, intuition, compassion, illusion',tr:'{t} softens, inspires or blurs {n}.',dur:'one to two years',info:'Where you dream, idealise and feel connected to something bigger: art, spirituality and compassion, but also confusion and illusion. Its sign is generational; its house is personal.'},
 Pluto:{n:'Pluto',what:'power',key:'power, depth, transformation, rebirth',tr:'{t} slowly transforms {n}.',dur:'one to two years',info:'Where you meet power and deep transformation: endings that lead to rebirth. Its sign is generational; its house is personal.'},
 Node:{n:'North Node',short:'Node',what:'life direction',key:'life direction, the path of growth',tr:'{t} brings fated meetings around {n}.',dur:'several months',info:'The North Node points to your direction of growth in this life: qualities that feel unfamiliar but help you evolve. The opposite point, the South Node, is what already comes easily.'},
 Chiron:{n:'Chiron',what:'healing',key:'wounds, healing, wisdom gained through pain',tr:'{t} touches an old wound around {n} and invites healing.',dur:'several months to a year',info:'Chiron is the “wounded healer”: where you carry an old hurt or a feeling of not being enough, and where, by working with it, you become wise and able to help others. It is a small body between Saturn and Uranus and takes about 50 years to go round the zodiac.'},
 ASC:{n:'Ascendant',what:'self-image',key:'how you meet the world, your body, first impressions',info:'The Ascendant, or Rising sign, is the sign that was rising on the eastern horizon when you were born. It is your outer style, your body and the first impression you give. It sets out all twelve houses, which is why the exact birth time matters.'},
 MC:{n:'Midheaven',what:'calling',key:'career, reputation, public direction',info:'The Midheaven is the highest point of the chart at your birth. It shows your career direction, your public image and what you want to be known for.'}
};
const yourP=id=>'your '+L.planets[id].n;

L.houses=[
 {short:'self',key:'identity, body, appearance, new beginnings',body:'The 1st house begins at your Ascendant, the sign that was rising on the eastern horizon when you were born. It describes your body, your looks, your first reaction to life and the way people see you before they know you. Planets here show strongly in your personality.',q:'How do I come across? How do I start things?'},
 {short:'money',key:'income, possessions, self-worth',body:'The 2nd house is about what you own and what you value: the money you earn, your possessions, the talents you can live from, and your sense of self-worth. It shows how you build security and what makes you feel safe.',q:'How do I earn and spend? What do I value?'},
 {short:'communication',key:'thinking, siblings, neighbours, short trips, study',body:'The 3rd house rules your everyday mind: how you think, speak, write and learn. It also covers brothers and sisters, neighbours, your local area and short trips. It shows your style of communication.',q:'How do I think and talk? How do I get on with siblings?'},
 {short:'home',key:'family, roots, private life, the parent who nurtured you',body:'The 4th house begins at the IC, the lowest point of the chart. It is home, family, roots and the private self nobody else sees. It describes your childhood home, one parent (often the one who nurtured you) and what you need to feel emotionally safe. It also speaks about later life.',q:'What does home mean to me? Where do I belong?'},
 {short:'romance & creativity',key:'love affairs, play, children, self-expression, joy',body:'The 5th house is joy and self-expression: romance and dating, creativity, hobbies, games, children and anything you do purely for pleasure. It shows how you play, flirt and shine.',q:'What makes me happy? How do I love and create?'},
 {short:'work & health',key:'daily routines, the body’s care, service, pets',body:'The 6th house is daily life: work routines, colleagues, habits, health and how you care for your body. It also covers service, helping others, and pets. It shows how you organise your days and handle stress.',q:'What is my daily rhythm? How do I look after my health?'},
 {short:'partnerships',key:'marriage, close one-to-one bonds, open rivals',body:'The 7th house begins at the Descendant, opposite your Ascendant. It is about partners: marriage, committed relationships, business partners and open rivals. It often describes the kind of person you are drawn to, sometimes with qualities you have not yet shown yourself.',q:'Who do I attract? What do I need from a partner?'},
 {short:'intimacy & shared resources',key:'sex, trust, debts, inheritance, deep change',body:'The 8th house is about what you share deeply with others: intimacy and sex, trust, joint money, debts, taxes and inheritance. It is also the house of crisis, loss and rebirth, of psychology and hidden things. It shows how you deal with power and with letting go.',q:'How do I bond deeply? How do I get through big changes?'},
 {short:'travel & beliefs',key:'philosophy, higher learning, faith, long journeys',body:'The 9th house widens your world: long journeys, foreign countries and cultures, university and higher learning, philosophy, religion and beliefs. It shows what gives life meaning and how you search for truth. Studying astrology is a 9th house activity.',q:'What do I believe? Where do I want to explore?'},
 {short:'career',key:'vocation, status, public life, ambitions',body:'The 10th house begins at the Midheaven (MC), the top of the chart. It is your career, ambition, reputation and public role: what you are known for. It can also describe the parent who stood for authority and rules.',q:'What do I want to achieve? How does the world see my work?'},
 {short:'friends & hopes',key:'community, groups, networks, future dreams',body:'The 11th house is your community: friends, groups, social networks, causes you believe in, and your hopes for the future. It shows the people who share your ideals and the dreams you are working towards.',q:'Who are my people? What future do I hope for?'},
 {short:'inner world',key:'solitude, dreams, the unconscious, endings, spirituality',body:'The 12th house is the hidden side of life: the unconscious, dreams, solitude, rest, spirituality and endings. It covers places of retreat such as hospitals or quiet spaces, and things we hide even from ourselves. Planets here work quietly behind the scenes and grow strong through inner work.',q:'What do I need to let go of? Where do I find peace?'}
];
const hs=n=>L.houses[n-1].short;
const hp=n=>L.hprose?L.hprose[n-1]:hs(n);
const yourH=n=>'your '+L.hl(n);

L.aspects={
 conj:{n:'Conjunction',v:'conjunct',key:'The two energies merge and intensify each other.',angle:'0°: the planets sit together, usually in the same sign, so their energies blend into one.'},
 opp:{n:'Opposition',v:'opposite',key:'A pull between two sides that asks for balance, often played out through other people.',angle:'180°: the planets face each other across the chart, six signs apart, like the two ends of a see-saw.'},
 tri:{n:'Trine',v:'trine',key:'Natural flow, talent and support.',angle:'120°: four signs apart, usually in the same element, so they understand each other easily.'},
 sq:{n:'Square',v:'square',key:'Friction that pushes you to act and grow.',angle:'90°: three signs apart, in signs with the same modality but different elements, so they want different things.'},
 sext:{n:'Sextile',v:'sextile',key:'An easy opening that rewards a little effort.',angle:'60°: two signs apart, in friendly elements (fire with air, earth with water).'},
 qx:{n:'Quincunx',v:'quincunx',key:'An awkward fit that needs small, constant adjustments.',angle:'150°: five signs apart, in signs with nothing in common, so they have to keep adjusting.'}
};
L.el={fire:{n:'fire',info:'Fire signs (Aries, Leo, Sagittarius) are enthusiastic, spontaneous and inspiring.'},earth:{n:'earth',info:'Earth signs (Taurus, Virgo, Capricorn) are practical, patient and focused on the real, physical world.'},air:{n:'air',info:'Air signs (Gemini, Libra, Aquarius) live in ideas, conversation and relationships with people.'},water:{n:'water',info:'Water signs (Cancer, Scorpio, Pisces) live through feelings, intuition and empathy.'}};
L.mod={cardinal:{n:'cardinal',info:'Cardinal signs open each season, so they start things and take the lead.'},fixed:{n:'fixed',info:'Fixed signs sit in the middle of each season, so they hold steady, stay loyal and finish what they start.'},mutable:{n:'mutable',info:'Mutable signs close each season, so they adapt, change and prepare for what comes next.'}};
L.htype={angular:{n:'angular',info:'Angular houses (1, 4, 7, 10) start at the four angles of the chart. Planets here act strongly and visibly.'},succedent:{n:'succedent',info:'Succedent houses (2, 5, 8, 11) build up and hold on to what the angular houses start: money, joy, shared power and community.'},cadent:{n:'cadent',info:'Cadent houses (3, 6, 9, 12) are about learning, adjusting and preparing. Planets here work through the mind and through service.'}};
L.cats={
 love:{n:'Love',learn:'Love is read from the 5th house (romance, dating) and the 7th house (partners), and from Venus, Mars and the Moon.',adv:["Love is in a good mood, so say the nice thing out loud. Text them. Yes, that one.", "Love is on cruise control. Small, kind gestures beat grand speeches today.", "Feelings may clash today. Count to ten before replying, and don’t test anyone. Nobody has ever passed."]},
 work:{n:'Work & career',learn:'Work is read from the 10th house (career, reputation) and the 6th house (daily work), the Midheaven, Saturn and the Sun.',adv:["A good day to pitch, ask or show your work. The sky approves; your boss may vary.", "A plain work day. Clear the to-do list and enjoy the rare silence.", "Expect friction or delays. Double-check details and skip big decisions. It is a bad day, not a bad career."]},
 money:{n:'Money',learn:'Money is read from the 2nd house (what you earn and own) and the 8th house (shared money, debts), with Venus and Jupiter.',adv:["Good for planned purchases and negotiating. “Planned” is the key word.", "Nothing special with money. Stick to your budget and keep the cart on the website.", "Skip impulse buys, risky deals and lending money. The sky is not a financial advisor."]},
 energy:{n:'Energy & health',learn:'Energy and health are read from the 1st house (your body) and the 6th house (habits, health), the Ascendant, Mars and the Sun.',adv:["Energy is high. Move, exercise or start something. Use it before the sofa notices.", "Normal energy. Keep a steady pace and sleep well. Boring, but it works.", "You may feel tired or short-tempered. Rest, drink water and eat something before blaming the planets."]},
 mind:{n:'Mind & talks',learn:'Thinking and communication are read from the 3rd house (everyday mind, messages) and the 9th house (study, beliefs), with Mercury.',adv:["Clear thinking. Great for studying, writing and the conversation you keep postponing.", "Fine for everyday talks, errands and admin. Not poetry, but it gets done.", "Misunderstandings are likely. Re-read messages before sending, especially the funny ones."]},
 home:{n:'Home & family',learn:'Home and family are read from the 4th house (roots, home) and the Moon (care, belonging).',adv:["A lovely day for family, cooking and making your space cosy. Blankets are astrologically encouraged.", "A quiet day at home. Nothing is wrong, and that is a gift.", "Family tension is possible. Give people space, and don’t win the argument at the cost of dinner."]},
 social:{n:'Friends & social',learn:'Friends and social life are read from the 11th house (friends, groups) and the 5th house (fun), with Venus, Jupiter and Uranus.',adv:["Say yes to plans. Friends and groups bring good luck, and probably snacks.", "An ordinary social day. It still counts as having friends.", "Not everyone will be on your side today. Choose your company carefully, or choose your couch."]},
 inner:{n:'Inner world',learn:'Your inner and spiritual life is read from the 12th house (the unconscious, rest) and the 9th house (meaning), with Neptune, the Moon and Pluto.',adv:["Your intuition is strong. Meditate, journal and notice your dreams. Write them down before they evaporate.", "Take a little quiet time for yourself. Even five minutes counts.", "Old worries may surface. Be gentle with yourself, rest, and remember a mood is not a verdict."]}
};
L.advV={"love": [["Good winds for love. Say the warm thing before you talk yourself out of it.", "A soft day for hearts. Be the one who reaches out first, it costs very little.", "Affection comes easily today. Spend some of it on someone who would not expect it."], ["Steady and unremarkable, which is underrated. A small kindness will do more than a big gesture.", "Nothing dramatic in love. Listen well, ask one real question, leave the speeches at home.", "A middle-of-the-road day for the heart. Show up, be nice, call it a win."], ["Tender spots are close to the surface. Wait an hour before answering anything that stung.", "Misread tones are likely. Assume the kinder meaning first, and don't set tests for anyone.", "Love may feel prickly. Skip the big conversation if you can and keep it simple and warm."]], "work": [["Doors open easily today. Send the email, make the ask, put your name on the thing.", "A strong day to be seen. Pitch the idea you have been rehearsing in the shower.", "Momentum is on your side. Start the task that matters most and let the rest queue behind it."], ["An honest work day. Chip away at the list and don't hunt for glory.", "Routine carries the day. A tidy desk and a finished task are enough.", "Neither here nor there at work. A good day for admin and small wins."], ["Things may drag or snag. Check the details twice and leave big decisions for later.", "Friction at work is likely. Keep your replies short and your calendar light.", "A bumpy one. Don't take a delay as a verdict on your talent."]], "money": [["Money matters go smoothly. Good for a purchase you have already thought about.", "A fair day for negotiating or comparing prices. Plan first, then buy.", "Finances feel supported. Do the sensible thing you have been postponing."], ["Nothing special on the money front. Check your budget and leave it alone.", "Quiet for spending. A good day for a boring look at your accounts.", "Neutral for money. No wins, no scares, just the usual."], ["Hold back from impulse buys and shaky deals. Sleep on it.", "Not the day to lend, borrow or gamble. Your future self will thank you.", "Spending feels more tempting than wise. Close the shopping tab."]], "energy": [["Your batteries are full. Take the long walk, go to the class, clean the whole kitchen.", "Good vitality. Use it on something physical before it wanders off.", "You have a spring in your step. Make the most of it and drink some water anyway."], ["Ordinary energy. Pace yourself, eat properly and get to bed on time.", "Even and steady. Nothing to push, nothing to fear.", "A normal body day. Small habits do the work."], ["Energy may dip or tempers run short. Rest is a legitimate plan.", "You may be running on fumes. Eat, hydrate, slow down, then judge the world.", "Low tank today. Cancel one thing if you can."]], "mind": [["Your head is clear. Good for writing, studying and the talk you've been avoiding.", "Thoughts come easily today. Put them on paper while they behave.", "Sharp and curious. A good day to learn something or finally explain yourself."], ["Fine for errands, emails and everyday chat. Nothing profound is required.", "A plain thinking day. Let simple tasks be simple.", "Average mental weather. Get through the admin pile."], ["Wires may cross. Read messages twice, especially the ones you wrote.", "Be careful with words today, yours and other people's. Clarify before you assume.", "Easy to be misunderstood. Say it slowly or put it in writing."]], "home": [["A warm day for home and family. Cook something, light a candle, tidy a corner you love.", "Home feels like a refuge. Invite someone over or enjoy your own company.", "Good family energy. A phone call to someone who raised you may land well."], ["Quiet at home, which is its own blessing. Let it be quiet.", "A low-key day for the household. Laundry counts as self-care.", "Nothing is stirring at home. Enjoy the peace."], ["Family or housemates may be touchy. Give everyone room, you included.", "Domestic friction is possible. Pick your battles and keep dinner out of them.", "Home may feel crowded or tense. A walk around the block does wonders."]], "social": [["Social doors are open. Accept the invite, send the message, join the group chat.", "Good for friends and gatherings. Someone will be glad you came.", "People are on your side today. A good time to introduce yourself to someone."], ["An average social day. Your friendships are fine without any effort.", "Neutral for plans. Keep it casual.", "Nothing much going on with friends. A short check-in is plenty."], ["Group energy is off today. Choose your company or choose your sofa.", "Friends may be flaky or cranky. Don't take it as a rejection.", "Not the best day for crowds. A one-to-one beats a party."]], "inner": [["Intuition runs high. Journal, take a long bath, write down the odd dream.", "A good day to listen inward. Quiet time will tell you something useful.", "Your inner voice is clear. Make space for it, even for ten minutes."], ["A moment of quiet is enough. Sit with a cup of tea and no screen.", "Gentle inner weather. Pay attention to your mood without fixing it.", "A small pause helps today. Breathe, stretch, carry on."], ["Old worries may knock. Be kind to yourself and remember a mood is not a verdict.", "Heavy thoughts may visit. Let them pass through without a lecture.", "Your inner world is loud today. Rest, and talk to a friend if it helps."]]};
L.advPick=(c,tone,day)=>{const k=CATS_ORDER.indexOf(c),v=L.advV[c]&&L.advV[c][tone],i=(day+k*3+tone)%4;return !v||i===0?L.cats[c].adv[tone]:v[i-1];};
const CATS_ORDER=['love','work','money','energy','mind','home','social','inner'];
L.howAlt=[["boldly, with a lot of energy", "like someone first through the door"], ["slowly and with both feet on the ground", "patiently, through the senses"], ["with curiosity and a quick tongue", "lightly, always asking what is next"], ["gently, with a protective streak", "from the heart, close to home"], ["warmly and with some flair", "with generosity and a bit of showmanship"], ["carefully, noticing the details", "practically, with an eye for what could be better"], ["tactfully, with an eye on fairness", "gracefully, always weighing both sides"], ["intensely, going straight to the depths", "privately, and all in or not at all"], ["openly, with a love of the big picture", "freely, always looking at the horizon"], ["seriously, building step by step", "with discipline and a long view"], ["in your own original way", "independently, with an eye on the future"], ["softly, by feel and imagination", "dreamily, led by intuition"]];
L.signs.forEach((s,i)=>{s.howV=[s.how,...L.howAlt[i]];});
L.hw=(s,k)=>{const v=L.signs[s].howV,t=String(k);let h=0;for(let i=0;i<t.length;i++)h+=t.charCodeAt(i);return v[h%v.length];};
L.trV={"Sun": ["{t} puts the spotlight on {n}.", "{t} lights up {n} and makes it hard to ignore."], "Moon": ["{t} brings a wave of mood to {n}.", "{t} makes {n} feel more personal for a few hours."], "Mercury": ["{t} starts conversations around {n}.", "{t} gets {n} talking, texting and thinking."], "Venus": ["{t} sweetens things around {n}.", "{t} brings charm and a little ease to {n}."], "Mars": ["{t} adds heat and push to {n}.", "{t} stirs {n} into action, or into an argument."], "Jupiter": ["{t} widens the horizon around {n}.", "{t} gives {n} room to grow and a touch of luck."], "Saturn": ["{t} puts {n} under review and asks for real effort.", "{t} slows {n} down so you can build it properly."], "Uranus": ["{t} jolts {n} out of its routine.", "{t} brings surprises and a bit of freedom to {n}."], "Neptune": ["{t} wraps {n} in mist, inspiration or both.", "{t} softens the edges of {n}, so check the facts."], "Pluto": ["{t} digs deep into {n} and clears what is finished.", "{t} slowly rebuilds {n} from the roots."], "Node": ["{t} brings meaningful meetings around {n}.", "{t} nudges {n} toward where you are meant to grow."], "Chiron": ["{t} presses on an old tender spot around {n}, gently.", "{t} brings {n} an old hurt, and a chance to look after it."]};
L.groups={
 long:{t:'Long-term transits',d:'Jupiter, Saturn, Uranus, Neptune, Pluto and the Node move slowly, so they stay on one point for months or even years. They mark the big chapters and lessons of this time in your life.'},
 short:{t:'Short-term transits',d:'The Sun, Mercury, Venus and Mars pass a point in a few days or weeks. They bring moods, conversations, meetings and events, and often switch on the long-term themes.'},
 moon:{t:'Today’s Moon',d:'The Moon moves about 13° a day, so its aspects last only a few hours. They colour your mood and instincts.'}
};
L.signTime={Moon:'about 2½ days',Sun:'about 1 month',Mercury:'about 3 weeks',Venus:'about 4 weeks',Mars:'about 6 to 7 weeks',Jupiter:'about 1 year',Saturn:'about 2½ years',Uranus:'about 7 years',Neptune:'about 14 years',Pluto:'12 to 30 years'};
L.cycle={Moon:'about 27 days',Sun:'1 year',Mercury:'about 1 year',Venus:'about 1 year',Mars:'about 2 years',Jupiter:'about 12 years',Saturn:'about 29 years',Uranus:'about 84 years',Neptune:'about 165 years',Pluto:'about 248 years'};
L.levels={beginner:'Beginner',intermediate:'Intermediate',hard:'Hard',expert:'Expert'};
L.games={
 glyphs:{t:'Glyph Flash',d:'See a symbol, name the planet or sign.'},
 rulers:{t:'Who Rules?',d:'Match each sign with its ruling planet.'},
 elements:{t:'Elements & Modes',d:'Fire, earth, air, water; cardinal, fixed, mutable.'},
 houses:{t:'House Keys',d:'Learn what each of the twelve houses governs.'},
 aspects:{t:'Spot the Aspect',d:'Two planets, two degrees. Which aspect do they make?'},
 mine:{t:'My Own Chart',d:'Questions about your own placements, so you learn your chart by heart.'},
 timing:{t:'Transit Timing',d:'How long transits last, long-term or short-term, applying or separating.'},
 degrees:{t:'Degree Detective',d:'Convert 0–360° zodiac positions into sign and degree, and back again.'},
 aspectpro:{t:'Aspect Master',d:'Exact degrees, real orbs, out-of-sign aspects and the trap answer: no aspect at all.'},
 rulersmine:{t:'House Rulers',d:'Follow the chain in your own chart: which planet rules each house, and where it sits.'},
 combos:{t:'Read the Combo',d:'Put planet, sign and house together into a meaning, like a real astrologer.'},
 domains:{t:'What Rules What',d:'Which sign a planet rules, and which planet is about which theme.'},
 natural:{t:'Houses & Signs',d:'Each house mirrors a sign and its ruler: match sign, house and planet.'},
 whoswhere:{t:'Who Lives Where?',d:'Which of your planets sits in a given house of your own chart.'},
 dignity:{t:'At Home or Away?',d:'Home, detriment, exaltation and fall: where each planet is strong or struggles.'},
 mistakes:{t:'Practise my mistakes',d:''},
 exam:{t:'Master Exam',d:'15 mixed questions from every game, 20 seconds each. Run out of time and it counts as wrong.'}
};

L.retroInfo={"Chiron": "Wounds and healing. Old hurts and old patterns surface so you can look at them with kindly eyes. Good for therapy, forgiveness and self-compassion; not for pushing past what still hurts. Not a curse, just the bill for growing up.", "Mercury": "Thinking, talking, travel and tech. Plans slip and messages get crossed, so back up your files and re-read before sending. It will not end the world, it will just test your patience. Good for revising and reconnecting; bad for signing big things in a rush.", "Venus": "Love, money and taste. Old flames and old doubts about what you value come back. Review relationships and spending instead of starting new ones. Yes, that includes the ex: texting them is not a “review”.", "Mars": "Drive and anger. Energy runs low or turns inward, and pushing hard backfires. Rest, rethink the plan, and avoid fights over old issues; you will win none of them.", "Jupiter": "Growth and luck. Expansion is inner more than outer: re-examine your beliefs, goals and what \"enough\" means. Luck is not cancelled, only on slower delivery.", "Saturn": "Duty and structure. Time to check your foundations and the rules you live by, and to take back responsibility you gave away. Not fun, but it is the kind of work that pays off later.", "Uranus": "Change and freedom. The urge to break free works underground, as inner restlessness before an outer shake-up. You will want to quit everything at 3 a.m.; wait until morning.", "Neptune": "Dreams and intuition. Illusions thin out, so you see what was foggy. Good for honest looks at ideals and escapes. Disappointing, but accurate.", "Pluto": "Power and depth. Slow inner transformation: old fears, control and what you need to let go of. Heavy stuff, but nobody has to do it all in one day."};
const RI=id=>L.retroInfo[id]||'';
L.moonPhases=["New Moon", "Waxing Crescent", "First Quarter", "Waxing Gibbous", "Full Moon", "Waning Gibbous", "Last Quarter", "Waning Crescent"];
L.moonAdvice=["New Moon: a blank page. Set a small intention and resist the urge to redo your whole life.", "Waxing crescent: momentum builds. Take the first small steps; no heroics needed.", "First quarter: decision time. Something pushes back; push through, or admit it is the wrong door.", "Waxing gibbous: nearly there. Polish, adjust, and stop refreshing the page.", "Full Moon: emotions and energy peak. Celebrate, share, and don’t send messages at 2 a.m.", "Waning gibbous: give thanks and share what you learned. Everyone loves someone useful.", "Last quarter: let go of what isn’t working. Yes, that includes that one habit.", "Waning crescent: rest and recover before the next round. Sleep is a spiritual practice."];
L.returnInfo={"Jupiter": "Jupiter return (about every 12 years): a fresh cycle of growth, luck and belief. Good for new goals and travel.", "Saturn": "Saturn return (about every 29 years): the big coming-of-age. Time to build your life on solid ground and let go of what is not yours.", "Chiron": "Chiron return (about every 50 years): an old wound comes round again to be understood and finally healed.", "Node": "North Node return (about every 18.6 years): a reset of your life direction, with turning points that feel fated."};
L.progInfo={"Sun": "Your core chapter: the sign colouring who you are becoming. It changes sign only about every 30 years.", "Moon": "Your emotional chapter: the mood and needs of the last two and a half years. It changes sign about every 2½ years, so it marks clear eras of your life.", "Mercury": "How your mind and the way you communicate are developing.", "Venus": "How your love, values and taste are developing.", "Mars": "How your drive and desire are developing."};
L.ui={
 tapHint:"Tap anything with a dotted underline to see what it means in your chart.",exLink:"The link between them",exLands:"Where it lands",crossWhy:"Retrograde planets pass over the same degree up to three times: forward, back, and forward again. Each pass activates this part of your chart again: first the surprise, then the review, then the decision.",voidInfo:"The Moon is “void of course” in the hours before it changes sign, when it makes no more major aspects. Astrologers read this as a time when plans float without traction: good for rest, tidying and finishing things; poor for starting, signing or buying. Life goes on, so treat it as a gentle hint, not a rule.",moonWhat:"The Moon cycles from New to Full and back about every 29.5 days. Growing (waxing) phases favour starting and building; shrinking (waning) phases favour finishing, releasing and resting.",
 honestNote:"Honest note: transits describe themes and moods, not fixed outcomes. A “tough” day is a tough day, not a doom. Use this as a mirror, not a verdict. If the sky says avoid arguments and your landlord disagrees, trust your landlord.",
 shareBtn:"Share my big three",icsBtn:"Add retrogrades and moons to my calendar",icsNote:"Downloads a calendar file with the next two years of retrograde dates and New and Full Moons. Open it on your phone to add them, with a reminder each morning.",
 myNote:"My note for this day",notePh:"How did the day feel? Write it here…",noteSaved:"Saved",
 digHome:"Strong here: this planet is in a sign it rules, so it works easily.",digExalt:"Honoured here: this planet is exalted in this sign, like a welcome guest.",digDet:"Tricky here: this planet is in detriment, opposite the sign it rules, so it works with effort.",digFall:"Tender here: this planet is in its fall, opposite the sign where it is exalted, so it needs patience.",plainWords:"In plain words",
 segMatch:"Match",matchTitle:"Where your tides meet",matchNote:"Two charts side by side: where you flow, where you spark, and the small enchantments in between.",matchBig3:"The big three",matchAsp:"Strongest links",matchEase:"flows easily",matchTension:"creates spark and friction",matchFusion:"blends strongly",matchWith:"Compare with",
 matchLens:"Read it for",matchLensLove:"Love",matchLensFriends:"Friendship",matchLensWork:"Work",matchNew:"✧ Someone new…",matchUnsaved:"not saved",matchQuickTitle:"Who shall we read you with?",matchQuickNote:"A birth date is enough to begin. A birth time and place add houses and the Rising sign.",matchGo:"Read our stars",matchSave:"Keep in my charts",matchSaved:"Kept in your charts ✧",matchEdit:"Change details",matchCancel:"Never mind",matchErrDate:"Add a birth date first.",matchErrTime:"Add a birth time, or tick “I don’t know the time”.",
 matchScore:"Our match",matchDims:"Six sides of you two",matchStory:"The story of you two",matchDraw:"What draws you together",matchRub:"Where the current pulls",matchHeart:"The heart of it",matchNoRub:"No tense contact between your charts is tight enough to matter much. Lucky fish.",matchSigns:"Sign by sign",matchGood:"Where you flow",matchEdge:"Where you grow",matchComp:"Your relationship chart",matchCompNote:"Halfway between your two charts floats a third one: the relationship itself, with its own heart, feelings and style.",matchDays:"Your days together",matchDaysNote:"The sky over your relationship chart for the next two weeks. Taller pearls are kinder days.",matchBest:"Best days together",matchGentle:"Go gently on",matchDayNone:"A quiet sky for the two of you: nothing strong touches your relationship chart today.",matchLands:"Where you land in each other’s life",matchAll:"Every link between you",matchLinks:"What shapes it",matchNoLinks:"No close links here, so the sign mix sets the tone.",matchShare:"Share our match",matchTimeNote:"Without a birth time, houses and the Rising sign are left out, and the Moon may be a few degrees off.",matchHonest:"A gentle truth: compatibility shows themes, not a verdict. Any two people can make something lovely; the stars only point at where it flows and where it takes a little work.",matchScoreHow:"How the score works: every close link between your charts is sorted into one of six sides (chemistry, feelings, talk, joy, staying power, soul bond). Flowing links raise a side, tense ones lower it, though in chemistry and soul bond a little friction counts as heat. How well your key signs mix adds a little more. The big number weighs the six sides for what you picked: love, friendship or work.",
 segCycles:"Cycles",cycTitle:"Your big cycles",cycNote:"The slow planets come back to where they were at your birth. Each return opens a new chapter.",retNext:"Next",retLast:"Last",retNow:"Happening now",passes:"passes",age:"age",progTitle:"Your inner chapter (progressed chart)",progNote:"Progressions move your chart forward one day for every year of your life. They show the slow inner chapter you are in, beneath the daily transits.",progUntil:"until about",
 todayTitle:"Today in the sky",
 todayMore:"More about today’s sky",foldCal:"Your calendar",foldExplore:"Explore the sky",foldAhead:"Look ahead",
 segSigns:"Signs",segSky:"Sky now",segRetro:"Retrograde",fNow:"Now",fSoon:"Coming up",fBirth:"My birth chart",badgeBirth:"At birth",retroWhatQ:"What does retrograde mean?",rNoteNow:"Planets that are retrograde today, and how each one touches your chart. Tap a card to read more.",rNoteSoon:"The retrogrades coming over the next two years. Tap a card to read more.",rNoteBirth:"These planets were retrograde when you were born, so they work in a more personal, inward way. Tap a card to read more.",
 retroRulesH:"Houses it rules in your chart",retroHitsH:"What it crosses in your chart",retroHitsNote:"Each time it passes one of these points, that part of you is activated, often up to three times because of the back-and-forth.",retroNoHits:"It does not cross any major point of your chart this time.",retroNatalAspH:"Its links in your birth chart",
 calTitle:"Retrograde calendar",calNote:"When each planet from Mercury to Pluto turns retrograde over the next two years, which signs and houses of your chart it passes through, and how it touches you.",calNow:"Retrograde now",
 skyTitle:"Right now in the sky",skyNote:"Where every planet is at this moment, with the sign it is in and the house of your chart it passes through. It updates by itself as time goes on; use the buttons to move through the days.",skyLive:"Live",
 sub:'An almanac of your sky, past, present and to come',editBirth:'Edit birth details',language:'Language',
 tabChart:'Chart',tabTransits:'Transits',tabLearn:'Learn',tabMe:'Me',tabPlanets:"Planets",planetsTitle:"Planets in signs",planetsNote:"Every planet in your chart, lined up with the sign it sits in. Tap one to read what it means for you.",retroTitle:"Retrograde ℞",retroNatalH:"In your birth chart",retroNowH:"In the sky right now",retroNone:"None of your planets were retrograde at birth.",retroNoneNow:"No planets are retrograde today.",retroGuide:"<p>A planet is <b>retrograde</b> (℞) when, seen from Earth, it seems to move backwards through the sky. It is an illusion, like a train passing a slower train, but astrologers read it as that planet's energy turning inward: slower, more reflective, and about reviewing rather than starting.</p><ul class=\"ctx\"><li><span>Retrograde in your birth chart</span>That planet works in a more personal, inward way. It is not bad. It often means a gift you develop in your own time.</li><li><span>Retrograde now, in the sky</span>A time to review, redo and reconsider that planet's themes. The house it moves through shows which area of your life feels it.</li><li><span>Direct again</span>When the planet turns direct (moves forward), what was stuck starts to flow.</li></ul>",
 exampleBanner:'<b>This is an example chart.</b> Enter your own birth date, time and place to see your real sky.',enterBirth:'Enter my birth details',
 viewing:'Viewing',chooseChart:'Choose a chart',guideChart:'How to read your chart',legSoft:'trine / sextile',legHard:'square / opposition',legQx:'quincunx',
 tapAny:'Everything on the wheel opens: tap a planet, a sign or a house number.',placements:'Placements',aspectsInChart:'Aspects in your chart',
 tidesNote:"Ratings come from the transits to your birth chart on this day. They show moods and themes, not predictions. Tap a category to see why and learn the astrology behind it.",
 prevYear:'Previous year',prevMonth:'Previous month',nextMonth:'Next month',nextYear:'Next year',today:'Today',todayLow:'today',
 moonSignLeg:'Moon’s sign',flowing:'flowing',challenging:'challenging',conjOrSign:'conjunction or sign change',transitsFor:'Transits for',
 whatTransit:'What is a transit?',
 whatTransitHtml:'<p>The planets keep moving after you are born. A <b>transit</b> happens when a planet in today’s sky makes an aspect (an angle) to a planet or point in your birth chart. That wakes up the part of you, and the area of life, that natal planet stands for.</p><ul class="ctx"><li><span>Long-term transits: the chapters</span>Jupiter, Saturn, Uranus, Neptune and Pluto stay on one point for months, so they bring the big themes of a year.</li><li><span>Short-term transits: the days</span>The Sun, Mercury, Venus and Mars pass in days or weeks, bringing moods, conversations and events. The Moon changes sign every two to three days and colours your mood.</li><li><span>Applying and separating</span>Applying means the transit is still building towards exact. Separating means it has peaked and is fading.</li><li><span>The whole chart</span>Two Fishes also shows which of your houses the transiting planet is moving through, which houses the touched planet rules, and which other planets it is tied to, so you see the full story.</li></ul>',
 skyOn:'Sky on',m1:'−1 month',w1:'−1 week',d1:'−1 day',p1d:'+1 day',p1w:'+1 week',p1m:'+1 month',play:'Play ▸',pause:'Pause ❚❚',jumpDate:'Jump to date',moveTime:'Move through time',
 ago2:'2 years ago',ahead2:'2 years ahead',swipeHint:'Swipe the wheel left or right to move a day',outerRing:'outer ring: sky on this date',innerRing:'inner: your birth chart',
 activeTransits:'Active transits to your whole chart',activeNote:'Every planet, the Ascendant, the Midheaven and the North Node, with the houses each one touches.',
 lifeAreas:'Life areas lit up right now',lifeAreasNote:'Each house scores for transiting planets passing through it, for aspects to the planets inside it, and for aspects to the planet that rules it.',
 yearAhead:'The year ahead: slow transits',yearAheadNote:'Jupiter, Saturn, Uranus, Neptune, Pluto and the Node against every point in your chart. A circle marks the exact day. Tap a row to jump there.',
 learnIntro:'Learn the alphabet of astrology, then practise on your own chart. Pick a level.',
 install:'Install',savedCharts:'Saved charts',savedNote:'Add charts for friends, family or a partner, then switch between them. Charts are saved on this device.',addChart:'+ Add a new chart',
 birthNote:'The exact birth time and place set your Rising sign and houses. Your details stay on this device.',
 fName:'Name',fDate:'Birth date',fTime:'Birth time',fUnknown:'Time unknown',fPlace:'Birth place',fLat:'Latitude (N +, S −)',fLon:'Longitude (E +, W −)',fTz:'Time zone',fSys:'House system',sysWhole:'Whole Sign',sysEqual:'Equal',
 cancel:'Cancel',footer:'Tropical zodiac · geocentric positions via Astronomy Engine',close:'Close',back:'Back',details:'Details',
 ariaBiwheel:'Transits around your birth chart',ariaWheel:'Birth chart wheel',
 natalPoint:'Natal point',yourPlacement:'Your placement',atBest:'At its best',watchFor:'Watch for',type:'Type',housesItRules:'Houses it rules',chartRuler:'Your chart ruler',
 transitsNow:'Transits touching it now',applying:'applying',separating:'separating',nothingInOrb:'Nothing within orb today.',
 aspects:'Aspects',aspectsNote:'Aspects are angles between planets. They show which parts of you work together and which pull against each other.',noAspects:'No major aspects.',
 sign:'Sign',inYourChart:'In your chart',planetsHere:'Planets here',noneOfYours:'none of your planets',houseCusps:'House cusps',intercepted:'no house begins in this sign (it is intercepted)',itsRuler:'Its ruler',
 house:'House',questions:'Questions it answers:',planetsInside:'Planets inside.',more:'more',
 emptyHouse:'<b>No planets inside.</b> An empty house is not a bad sign. It simply means you read this area through the sign on its cusp and through its ruler.',
 passingNow:'Passing through now',noTransitHere:'No transiting planets in this house right now.',aspectInChart:'Aspect in your chart',orb:'orb',
 moonTransit:'<b>Moon transit.</b> It lasts only a few hours: a passing mood, not a life chapter.',
 longTermText:'<b>Long-term transit.</b> A slow planet, so this is a chapter of your life rather than a single day. You feel it building, peaking and fading.',
 shortTermText:'<b>Short-term transit.</b> A fast planet, so this is a few days of activity: an event, a mood or a conversation.',
 transitReading:'Transit · whole-chart reading',applyingLong:'applying (building)',separatingLong:'separating (fading)',
 whereHappening:'Where it’s happening',whatTouches:'What it touches',visitorHouses:'The visitor’s own houses',chainRulership:'Chain of rulership',ripple:'Ripple through natal aspects',
 aspectsToChart:'Aspects to your chart',noAspectsToday:'No aspects within orb today.',timeUnknown:'time unknown',
 sunSign:'Sun sign',moonSign:'Moon sign',risingSign:'Rising sign',point:'Point',degree:'Degree',
 placidusFallback:'Placidus can’t be drawn at this latitude, so Equal houses are shown.',
 timeUnknownNote:'Birth time unknown: the Moon may be a few degrees off, and the Rising sign and houses are only a noon placeholder.',
 noneInOrb:'None in orb on this date.',noTransits:'No transits within orb on this date.',outOfOrb:'That transit is out of orb on this date.',
 todaysTides:'Your Daily Horoscope',theTides:'Your Horoscope for This Day',why:'Why this score',tidesWhat:'<b>What is this?</b> The planets keep moving, and each day they pass over different parts of <i>your</i> birth chart. These are called transits. Below, that is turned into a simple forecast of the day for eight areas of life.',tidesLegend:'<span class="stars">★★★★★</span> flowing, a good day for it · <span class="stars">★★★</span> ordinary · <span class="stars">★</span> take it slow. Tap any row to see why.',tidesTap:'Tap for why',calmArea:'No transits touch this part of your chart today, so it stays calm.',learn:'Learn:',
 learnTail:'Flowing aspects (trine, sextile) help; tense ones (square, opposition) challenge.',comeBack:'Come back tomorrow',exact:'exact',
 yourDay:'Your day',noExact:'No transit becomes exact on this day. The wheel and list below show everything still in orb.',
 selectedDate:'selected date',noSlow:'No slow transits in orb during this window.',hAbbr:'H',
 optLong:'Long-term (months to years)',optShort:'Short-term (days to weeks)',optApplying:'Applying (building up)',optSeparating:'Separating (fading)',noAspect:'No major aspect',
 notPlayed:'Not played yet',correct:'Correct.',seeScore:'See score',nextQ:'Next question',backGames:'Back to games',
 msgHigh:'Superb. You know this by heart.',msgMid:'Good work. One more round will lock it in.',msgLow:'A good start. Every round teaches the pattern.',playAgain:'Play again',
 otherCity:'Other (enter coordinates)',viewingBadge:'viewing',edit:'Edit',delConfirm:'Tap again to delete',del:'Delete',newChart:'New chart',editPrefix:'Edit: ',addChartBtn:'Add chart',save:'Save changes',
 errDate:'Add a birth date.',errTime:'Add a birth time, or tick “Time unknown”.',errLatLon:'Latitude and longitude must be numbers.',errTz:'Time zone not recognised. Use a name like Europe/Athens, or UTC+2.',
 installHtml:'<b>Put Two Fishes on your home screen.</b> It opens full screen like any other app and works offline.',
 installIos:'<b>Put Two Fishes on your home screen.</b> In Safari tap the Share button, then <b>Add to Home Screen</b>. It opens full screen and works offline.',
 installOther:'<b>Put Two Fishes on your home screen.</b> Open your browser menu and choose <b>Add to Home screen</b> or <b>Install app</b>.',
 libFailTitle:'The star tables didn’t load',libFail:'The astronomy library could not be reached. Check your connection and reload the page.',
 myChart:'My chart',chart:'Chart',
 logoQuips:["Two fishes, one sun, zero sense of direction. Very Pisces.", "The sun says hi. It has been up since about 4.6 billion years ago.", "Mercury is not retrograde right now. Probably. Check the Planets tab before blaming it.", "Fun fact: the fishes are tied together by a cord, so neither can swim off without the other.", "I am a logo, not an oracle. Tap a planet for the real stuff.", "Pisces season lasts a month. Pisces feelings last considerably longer.", "Drink some water. That one isn't astrology, it's just good advice.", "The stars incline, they do not compel. That line is 800 years old and still true.", "You tapped the sun. Bold. Very fire-sign of you.", "Somewhere a Virgo is reading this and correcting the grammar."]
};

L.f={
 who:(name,me)=>name?{n:name,s:name,p:name+'’s',pl:false}:me?{n:'you',s:'you',p:'your',pl:true}:{n:'them',s:'they',p:'their',pl:true},
 synPair:(A,B)=>`${cap(A.n)} & ${B.n}`,
 synOpen:(arch,A,B,top,low)=>`<b>“${arch}”</b> is what the stars would call ${A.n} and ${B.n}: strongest in ${top.toLowerCase()}, with room to grow in ${low.toLowerCase()}.`,
 synSub:(top,low)=>`Strongest in ${top.toLowerCase()} · growing in ${low.toLowerCase()}`,
 synDayLine:(t,a,c,txt)=>`${L.planets[t].n} ${L.aspects[a].v} the relationship’s ${L.syn.compRole[c]}: ${txt}.`,
 synCompH:(id,s)=>`The relationship’s ${L.syn.compRole[id]} ${L.signs[s].inS}`,
 synComp:{Mercury:s=>`You talk and decide together ${L.signs[s].how}.`,Venus:s=>`Together you love ${L.signs[s].how}.`,Mars:s=>`As a team you act ${L.signs[s].how}.`,ASC:s=>`Others see the two of you as ${L.signs[s].key}.`},
 synLand:(A,B,id,h)=>`${cap(A.p)} ${L.planets[id].n} → ${B.p} ${L.hl(h)}`,
 synLandH:(A,B)=>`${cap(A.p)} planets in ${B.p} houses`,
 synShare:(pair,pct,arch)=>`${pair}: ${pct}% · “${arch}” ✧ Two Fishes`,
 icsStart:n=>`Start of ${n} retrograde`,icsEnd:n=>`End of ${n} retrograde`,icsMoon:(k,s)=>`${k}: ${s}`,
 mistakesCta:n=>`Practise my mistakes (${n})`,practiceStreak:n=>`${n}-day practice streak`,
 aspMeaning:(a,b,c)=>`${cap(L.planets[a].what)} and ${L.planets[b].what} ${c==='soft'?'support each other easily':c==='hard'?'pull in different directions, so you grow by balancing them':'work together as one force'}.`,
 voidMoon:(t,s)=>`The Moon is void of course until ${t}, when it enters ${s}. A good time to rest and finish things, not to start new ones.`,moonNext:(a,p,t)=>`Next Moon aspect: ${a} · ${p}, at ${t}.`,
 retroEnds:n=>`Ends in ${n>=60?Math.round(n/30.4)+' months':n+(n===1?' day':' days')}`,retroStarts:n=>`Starts in ${n>=60?Math.round(n/30.4)+' months':n+(n===1?' day':' days')}`,
 retroPeriod:(id,h1,h2)=>`${RI(id)} For you this touches: ${L.houses[h1-1].short}${h2!==h1?' → '+L.houses[h2-1].short:''}.`,
 retroNatal:(id,s,h)=>`${RI(id)} In your chart this shows up in: ${L.houses[h-1].short}, ${L.hw(s,id)}.`,
 retroNow:(id,s,h,end)=>`${end?`Turns direct around <b>${end}</b>. `:''}${RI(id)} For you this touches: ${L.houses[h-1].short}.`,
 transitTitle:(t,a,n)=>`${L.planets[t].n} ${L.aspects[a].v} ${yourP(n)}`,
 dispHome:(id,s)=>`${L.planets[id].n} is at home in ${L.signs[s].n}, the sign it rules, so it acts with extra strength.`,
 disp:(s,r,rs,rh)=>`${L.signs[s].n} is ruled by ${L.planets[r].n}, which sits in ${L.signs[rs].n} in ${yourH(rh)}. So this placement takes its orders from there, and the story of ${hp(rh)} colours how it plays out.`,
 cuspOf:h=>`cusp of the ${L.hl(h)}`,
 howRead:(id,s,h)=>`<b>How to read it.</b> The planet is <i>what</i>: ${L.planets[id].what}. The sign is <i>how</i>: ${L.hw(s,id)}. The house is <i>where</i>: in ${hs(h)}.`,
 houseHeading:(h,isAngle)=>`${isAngle?'Opens':'In'} ${yourH(h)}`,
 rulesPara:(id,rules,h)=>{const o=rules.filter(r=>r!==h),own=o.length<rules.length;return (own?`${L.planets[id].n} rules the house it sits in, so it is fully in charge of ${hp(h)}, with nobody to report to.`:'')+(o.length?`${own?' It also rules':L.planets[id].n+' rules'} ${o.length>1?'your '+list(o.map(r=>L.hl(r)+' ('+hs(r)+')')):yourH(o[0])+' ('+hs(o[0])+')'}. A planet carries the themes of the houses it rules into the house where it sits, so ${list(o.map(hp))} ${o.length>1?'are':'is'} tied up with ${hp(h)} in your life.`:'');},
 retro:id=>`<b>℞ Retrograde.</b> Seen from Earth, ${L.planets[id].n} looked as if it were moving backwards when you were born. Its energy tends to turn inward: more reflective, slower to show, often very personal.`,
 chartRuler:(r,rs,rh)=>`The planet that rules your Rising sign is your chart ruler: <b>${L.planets[r].n}</b>, in ${L.signs[rs].n} in ${yourH(rh)}. It is like the captain of your chart, so whatever touches ${L.planets[r].n} touches you personally.`,
 ruledBy:r=>`ruled by ${L.planets[r[0]].n}${r[1]?` (modern) and ${L.planets[r[1]].n} (traditional)`:''}`,
 signCusps:(i,c)=>`${L.signs[i].n} begins ${c.length>1?'your '+list(c.map(L.hl)):yourH(c[0])}, so you meet ${list(c.map(hs))} ${L.hw(i,c.join())}`,
 houseTitle:n=>`The ${L.hl(n)}: ${hs(n)}`,
 beginsAt:(d,s)=>`begins at ${d} ${L.signs[s].n}`,
 yourHouseTitle:n=>`Your ${L.hl(n)}`,
 cuspPara:(n,s)=>`<b>${L.signs[s].n} on the cusp.</b> You approach ${hs(n)} ${L.hw(s,n)}. ${L.signs[s].body}`,
 planetInHouse:(id,n)=>`${L.planets[id].n} brings ${L.planets[id].key.split(', ').slice(0,2).join(' and ')} into ${hs(n)}.`,
 rulerPara:(r,rh,n)=>`<b>Its ruler, ${L.planets[r].n}.</b> ${L.planets[r].n} rules this house and sits in ${yourH(rh)}. ${rh===n?'It sits in its own house, which makes this area strong and self-directed.':`So ${hs(n)} is linked with ${hs(rh)} in your life.`}`,
 naturalSign:i=>`Its natural sign is ${L.signs[i].n}.`,
 orbExplain:o=>`The orb (${o}) is how far it is from exact. The smaller the orb, the stronger you feel it.`,
 aspectLife:(h1,h2,a,b,cls)=>`In your life this links <b>${hs(h1)}</b> with <b>${hs(h2)}</b>. Your ${L.planets[a].what} and your ${L.planets[b].what} ${cls==='soft'?'support each other':cls==='hard'?'push against each other, which creates tension and growth':cls==='neu'?'work as one':'need constant small adjustments'}.`,
 inOrb:(s,e,days,ex)=>`In orb from <b>${s}</b> to <b>${e}</b>, about ${days>60?Math.round(days/30.4)+' months':days+' days'}.${ex.length?` Exact on ${ex.join(', ')}.`:''}${ex.length>1?' It is exact more than once because the planet turns retrograde and crosses the point again.':''}`,
 tr:(t,n)=>{const v=[L.planets[t].tr,...(L.trV[t]||[])],k=(t+n).split('').reduce((a,c)=>a+c.charCodeAt(0),0);return v[k%v.length].replace('{t}',L.planets[t].n).replace('{n}',yourP(n));},
 lasts:t=>`This kind of transit lasts ${L.planets[t].dur}.`,
 whereHappening:(t,s,h)=>`Transiting ${L.planets[t].n} is in ${L.signs[s].n}, moving through ${yourH(h)}: ${L.houses[h-1].key}.`,
 touchAngle:h=>h===1?`Your Ascendant opens the 1st house: ${L.houses[0].key}.`:`Your Midheaven opens the 10th house: ${L.houses[9].key}.`,
 touchNatal:(n,h)=>`${L.planets[n].n} (${L.planets[n].key}) sits in ${yourH(h)}: ${L.houses[h-1].key}.`,
 nRules:(n,r)=>`${cap(yourP(n))} rules ${list(r.map(x=>'the '+L.hl(x)+' ('+hs(x)+')'))}, so those areas feel this too.`,
 tRules:(t,r)=>`${L.planets[t].n} rules ${list(r.map(x=>'the '+L.hl(x)+' ('+hs(x)+')'))} in your chart, so those themes arrive with it.`,
 ripple:(n,arr)=>`${cap(yourP(n))} is tied by birth to ${arr.join(', ')}, so those planets are stirred as well.`,
 skyOnDate:d=>`In the sky on ${d}`,
 transiting:id=>`Transiting ${L.planets[id].n}`,
 inYourHouse:h=>`in ${yourH(h)}`,
 transitPassing:(id,h,r)=>`${L.planets[id].n} (${L.planets[id].key}) is passing through ${yourH(h)}: ${L.houses[h-1].key}.${r.length?` In your chart it rules ${list(r.map(x=>'the '+L.hl(x)))}.`:''}`,
 transitRowSub:(th,nh,r)=>`${L.hl(th)} → natal ${L.hl(nh)}${r.length?' · rules '+r.map(ordn).join(', '):''}`,
 guideChart:(pl,vs,vh,ms,mh)=>`<p>A birth chart is a map of the sky at the moment you were born, seen from where you were born. It has four ingredients:</p>
  <ul class="ctx"><li><span>Planets are the what</span>Ten energies inside you: ${pl}.</li>
  <li><span>Signs are the how</span>The twelve signs around the outer ring give each planet its style. Each sign belongs to an element (fire, earth, air, water) and a modality (cardinal, fixed, mutable).</li>
  <li><span>Houses are the where</span>The twelve numbered slices are areas of life, counted anticlockwise from your Ascendant (AC, on the left). Houses depend on your birth time and place.</li>
  <li><span>Aspects are conversations</span>The lines in the middle join planets at meaningful angles. Teal lines flow easily; pink lines create tension that pushes growth.</li></ul>
  <div class="explain"><b>Putting it together.</b> Your Venus is in ${L.signs[vs].n} in the ${L.hl(vh)}: love and pleasure (what), expressed ${L.signs[vs].how} (how), in ${hs(vh)} (where). Your Moon is in ${L.signs[ms].n} in the ${L.hl(mh)}: your feelings move ${L.signs[ms].how} and find comfort in ${hs(mh)}.</div>
  <p class="note">Tap any planet, sign or house number on the wheel to read about it.</p>`,
 tidesSummary:(best,care,ms,mh,g)=>`${best.length?`<b>Smooth sailing for</b> ${list(best)}. `:'A balanced day: no fireworks, no disasters. '}${care.length?`<b>Choppier waters:</b> ${list(care)}, so go gently there. `:''}<span class="muted">The Moon, the fast one that sets the daily mood, is in ${L.signs[ms].n} <span class="gl">${g}</span>, lighting up ${yourH(mh)} (${hs(mh)}).</span>`,
 whyLine:(pos,t,n,h)=>`${pos?'A friendly angle':'A tense angle'}: today’s ${L.planets[t].n} (${L.planets[t].what}) is touching ${yourP(n)} (${L.planets[n].what}), which sits in ${yourH(h)}.`,
 moonHere:h=>`The Moon is passing through ${yourH(h)}, which puts feelings on this area.`,
 streak:n=>`${n} days in a row`,
 enters:(id,s)=>`${L.planets[id].n} enters ${L.signs[s].n}`,
 nowMoving:h=>`Now moving through ${yourH(h)} (${hs(h)}).`,
 turns:(id,r)=>`${L.planets[id].n} turns ${r?'retrograde':'direct'}`,
 stationRetro:id=>`${L.planets[id].n} seems to move backward for a while: a time to review matters of ${L.planets[id].what}.`,
 stationDirect:id=>`${L.planets[id].n} moves forward again, and what it held up starts to move.`,
 rel:d=>d===0?'today':d>0?`in ${d} day${d>1?'s':''}`:`${-d} day${d<-1?'s':''} ago`,
 calMoon:(s,h,g)=>`Moon in ${L.signs[s].n} <span class="gl">${g}</span>, in ${yourH(h)}. Feelings move ${L.hw(s,h)}, focused on ${hs(h)}.`,
 best:(s,t)=>`Best: ${s} / ${t}`,
 qHead:(i,N,s,st)=>`Question ${i} of ${N} · score ${s}${st>1?' · streak '+st:''}`,
 timesUp:a=>`Time’s up. It’s ${a}.`,
 notQuite:a=>`Not quite. It’s ${a}.`,
 longestStreak:(n,nb)=>`Longest streak: ${n}${nb?' · new best!':''}`
};
/* deeper reading: what it is like when a house is active, and how each planet acts */
L.hdeep=[
 "Activity here reshapes how you show up: your body, your style, the first impression you make and how you start things. In real life it looks like a new look, a change of direction, people reacting to you differently, or the moment you stop shrinking yourself.",
 "This is about earned security: income, what you charge, what you own and what you tell yourself you are worth. Expect questions like 'what is enough?', changes in how money comes and goes, and a re-ranking of what you truly value against what you were taught to value.",
 "The everyday mind and your surroundings: conversations, writing, paperwork, siblings, neighbours, short trips and what you are learning. It often shows up as a busy inbox, one crucial talk, a course, or a decision made from information rather than instinct.",
 "The foundation under everything: home, family, the parent who raised you and your private emotional base. Activity here can mean a move, renovations, family events or old childhood patterns resurfacing, and it asks what 'safe' really means to you now.",
 "Pleasure and risk in the open: romance, creativity, play, children and being seen for what you enjoy. Look for new crushes, projects made for love rather than money, and a test of whether you let yourself have fun without justifying it.",
 "The maintenance layer: routines, workload, health habits, colleagues, pets and being useful. Problems here are small and cumulative, so this is where overwork, a body asking for attention or a better system becomes obvious.",
 "Everything mirrored through one-to-one bonds: partners, close collaborators, clients and open rivals. Beyond who you attract, it shows what you project onto others and disown in yourself, so it often arrives as a relationship milestone, a negotiation or an uncomfortable mirror.",
 "The shared and the hidden: other people's money (joint accounts, loans, debts, taxes, inheritance), sexual and emotional intimacy, and whatever you refuse to look at. It is the house of thresholds: trust tested, power dynamics, grief, and the psychological kind of death and rebirth where an old version of you ends. It is usually less dramatic than it sounds, but it never does shallow.",
 "The meaning layer: long-distance travel, higher study, teaching, publishing, law, faith and the worldview you steer by. Activity here asks whether your beliefs still fit your life, and it tends to arrive as a trip, a course, or a meeting with a very different culture or teacher.",
 "Your public standing: career, ambition, reputation, authority and the visible results of your effort. Expect visibility, a promotion or a rethink of direction, and questions about what you want to be known for, plus the parent or figure who modelled success.",
 "Your people and your future: friendships, groups, networks, audiences, causes and long-term hopes. It often shows who truly belongs in your circle, which dreams are still alive, and where you add to something bigger than yourself.",
 "The backstage: solitude, rest, the unconscious, secrets, hospitals and retreats, and endings that need to finish before a new cycle can start. Things move quietly here and are often understood only afterwards; what you avoid tends to surface as dreams, fatigue or self-sabotage until you face it."
];
L.pmode={
 "Sun": "The Sun spotlights: whatever it touches becomes central to your sense of self and gets noticed, so you are asked to act on purpose rather than on autopilot.",
 "Moon": "The Moon makes things emotional and immediate: mood, needs and instincts colour everything for a while and reveal what you need in order to feel secure.",
 "Mercury": "Mercury brings information and talk: thinking, deals, messages, decisions, and the need to make sense of things out loud or on paper.",
 "Venus": "Venus smooths and attracts: it softens, invites pleasure and connection, and raises questions about what you value and what you will accept.",
 "Mars": "Mars pushes: it brings drive, heat, urgency and sometimes conflict, and rewards decisive action over endless deliberating.",
 "Jupiter": "Jupiter amplifies and opens: opportunity, optimism and growth, with the risk of overpromising or taking on too much.",
 "Saturn": "Saturn audits and restructures: it asks what is real, sustainable and yours to carry, removes what is not, and rewards patient work.",
 "Uranus": "Uranus disrupts in order to free: sudden changes, restlessness and breakthroughs that break a pattern you had outgrown.",
 "Neptune": "Neptune dissolves boundaries: inspiration, compassion and intuition, but also fog, idealisation and avoidance, so double-check the facts.",
 "Pluto": "Pluto excavates and transforms: it brings power issues, obsession and the end of what has run its course, in slow waves rather than one event.",
 "Node": "The Node brings fated-feeling meetings and choices that point to your direction of growth, and asks you to step out of the old comfort zone.",
 "Chiron": "Chiron touches a tender spot: an old wound or insecurity surfaces so it can be understood and, over time, turned into wisdom you can share."
};
L.f.deepIn=(id,h)=>`${L.pmode[id]||''} ${L.hdeep[h-1]}`.trim();

const cap=s=>s[0].toUpperCase()+s.slice(1);

L.q={
 planetSignQ:id=>`Which sign has ${L.planets[id].n} as its ruler?`,
 planetThemeQ:id=>`Which planet is about ${L.planets[id].key}?`,
 planetThemeWhy:id=>`${L.planets[id].n} is about ${L.planets[id].key}.`,
 houseSignQ:n=>`Which sign naturally goes with this house: ${L.hl(n)}?`,
 signHouseQ:i=>`Which house naturally goes with this sign: ${L.signs[i].n}?`,
 housePlanetQ:n=>`Which planet naturally rules this house: ${L.hl(n)}?`,
 houseSignWhy:(n,s)=>`The houses mirror the signs in order: ${L.hl(n)} ↔ ${L.signs[s].n}. ${cap(L.hl(n))}: ${L.houses[n-1].key}.`,
 housePlanetWhy:(n,s,r)=>`The houses mirror the signs in order: ${L.hl(n)} ↔ ${L.signs[s].n}, which is ruled by ${L.planets[r].n}. So ${L.planets[r].n} is the natural ruler of the ${L.hl(n)}.`,
 whichPlanetInHouse:n=>`Which planet is in ${yourH(n)} (${L.houses[n-1].short})?`,
 dignityQ:(id,k)=>`${L.planets[id].n}: ${{home:'which sign is its home (domicile), where it is strongest?',detriment:'in which sign is it in detriment, opposite its home, where it struggles?',exalt:'in which sign is it exalted, like an honoured guest?',fall:'in which sign is it in fall, opposite its exaltation?'}[k]}`,
 dignityWhy:(id,k,list)=>`${L.planets[id].n}: ${list}. ${{home:'At home a planet expresses itself easily and strongly.',detriment:'In detriment a planet sits opposite its home: it works, but with effort and awkwardness.',exalt:'When exalted a planet is like an honoured guest: its best qualities are celebrated.',fall:'In fall a planet sits opposite its exaltation: its qualities are harder to show.'}[k]}`,
 whichPlanet:()=>'Which planet is this?',
 whichSign:()=>'Which sign is this?',
 whoRules:i=>`Which planet rules ${L.signs[i].n}?`,
 whoRulesWhy:(i,r)=>`${L.signs[i].n} is ruled by ${L.planets[r[0]].n}${r[1]?`, with ${L.planets[r[1]].n} as its traditional ruler`:''}.`,
 whatElement:i=>`What element is ${L.signs[i].n}?`,
 elementWhy:(i,e)=>`${L.signs[i].n} is a ${L.el[e].n} sign. ${L.el[e].info}`,
 whatMode:i=>`What modality is ${L.signs[i].n}?`,
 modeWhy:(i,m)=>`${L.signs[i].n} is ${L.mod[m].n}. ${L.mod[m].info}`,
 whichHouseRules:n=>`Which house rules ${L.houses[n-1].key.split(', ').slice(0,2).join(' and ')}?`,
 houseAbout:n=>`What is the ${L.hl(n)} mainly about?`,
 spotWhy:(s,a,ang)=>`They are about ${s}° apart, which is a ${L.aspects[a].n.toLowerCase()} (${ang}°). Tip: count the signs between them. 2 signs is a sextile, 3 a square, 4 a trine, 6 an opposition.`,
 yourRising:()=>'What is your Rising sign?',
 yourRisingWhy:(d,s)=>`Your Ascendant is at ${d} ${L.signs[s].n}: ${L.signs[s].key}.`,
 chartRulerQ:s=>`Your Rising sign is ${L.signs[s].n}. Which planet is your chart ruler?`,
 chartRulerWhy:(s,r,rs,rh)=>`${L.signs[s].n} is ruled by ${L.planets[r].n}, so ${L.planets[r].n} is your chart ruler. It sits in ${L.signs[rs].n} in ${yourH(rh)}.`,
 yourHouseQ:id=>`Which house is ${yourP(id)} in?`,
 yourHouseWhy:(id,h)=>`${cap(yourP(id))} is in the ${L.hl(h)}: ${L.houses[h-1].key}.`,
 yourSignQ:id=>`Which sign is ${yourP(id)} in?`,
 yourSignWhy:(id,d,s,r)=>`${cap(yourP(id))} is at ${d} ${L.signs[s].n}${r?', retrograde':''}. ${L.planets[id].n} is about ${L.planets[id].key}; ${L.signs[s].n} makes it ${L.signs[s].key}.`,
 stayQ:id=>`About how long does ${L.planets[id].n} stay in one sign?`,
 stayWhy:id=>`${L.planets[id].n} spends ${L.signTime[id]} in each sign and takes ${L.cycle[id]} to go round the whole zodiac. The slower the planet, the longer its transits last.`,
 cycleQ:id=>`How long does ${L.planets[id].n} take to travel once around the whole zodiac?`,
 cycleWhy:id=>`${L.planets[id].n} takes ${L.cycle[id]}. That is why a "${L.planets[id].n} return" (back where it was at your birth) happens about that often.`,
 longShortQ:id=>`Is a transit of ${L.planets[id].n} long-term or short-term?`,
 longShortWhy:(id,isL)=>`${L.planets[id].n} takes ${L.cycle[id]} to circle the zodiac, so ${isL?'it stays on each point for months and marks a chapter of life':'it passes each point within days and brings moods and events'}.`,
 applyingQ:(pl,td,z,r,tg,nd)=>`Transiting ${L.planets[pl].n} is at ${td}° ${L.signs[z].n}, moving ${r?'retrograde (backwards)':'forwards'}. ${cap(yourP(tg))} is at ${nd}° ${L.signs[z].n}. Is this conjunction applying or separating?`,
 applyingWhy:(pl,tg,b,r,app)=>`${L.planets[pl].n} is ${b?'before':'past'} ${yourP(tg)} and moving ${r?'backwards':'forwards'}, so it is getting ${app?'closer: applying':'further away: separating'}. Transits are usually felt most strongly while applying.`,
 degSignQ:Lg=>`A planet sits at <b>${Lg}°</b> of the zodiac, counting from 0° Aries. Which sign is it in?`,
 degSignWhy:(Lg,d,z)=>`Each sign is 30° wide. ${Lg} ÷ 30 = ${Math.floor(Lg/30)} whole signs with ${d}° left over, so it is ${d}° of sign number ${z+1}: ${L.signs[z].n}.`,
 degAbsQ:(d,z)=>`Where is <b>${d}° ${L.signs[z].n}</b> in absolute zodiac degrees (0–360°)?`,
 degAbsWhy:(d,z,Lg)=>`${L.signs[z].n} is sign number ${z+1}, so it starts at ${z}×30 = ${z*30}°. Add ${d}° and you get ${Lg}°.`,
 whichAspectIfAny:()=>'Which aspect, if any?',
 aspectProWhy:(dist,a,o,allowed,oos)=>`They are ${dist}° apart. ${a?`That is within orb of a ${L.aspects[a].n.toLowerCase()} (allowed orb ±${allowed}°), off by ${o}.`:'That is not within orb of any aspect. The orbs used here: conjunction and opposition ±8°, square and trine ±7°, sextile ±5°, quincunx ±2.5°.'}${oos?' Careful: the signs alone suggest something else. This is an out-of-sign aspect, so always check the degrees.':''}`,
 houseRulerQ:(n,s)=>`Your ${L.hl(n)} (${hs(n)}) begins in ${L.signs[s].n}. Which planet rules it?`,
 houseRulerWhy:(n,s,r)=>`${L.signs[s].n} is ruled by ${L.planets[r].n}, so ${L.planets[r].n} rules ${yourH(n)}. To read ${hs(n)}, look at ${L.planets[r].n}'s sign, house and aspects.`,
 rulerWhereQ:(r,n)=>`${L.planets[r].n} rules ${yourH(n)} (${hs(n)}). Which house is ${L.planets[r].n} in?`,
 rulerWhereWhy:(r,n,h)=>`${L.planets[r].n} sits in ${yourH(h)}, so ${hs(n)} ${h===n?'is strong and self-contained':'is linked with '+hs(h)} in your life. Astrologers write this as "ruler of ${n} in ${h}".`,
 comboHouse:(p,h)=>`${L.planets[p].what} in ${hs(h)}`,
 comboHouseQ:(p,n)=>`What does ${L.planets[p].n} in the ${L.hl(n)} mostly describe?`,
 comboHouseWhy:(p,n)=>`${L.planets[p].n} is about ${L.planets[p].key}. The ${L.hl(n)} is ${L.houses[n-1].key}. Planet = what, house = where.`,
 comboSign:(p,z)=>`${L.planets[p].what}, expressed ${L.signs[z].how}`,
 comboSignQ:(p,z,g)=>`Which phrase best fits ${L.planets[p].n} in ${L.signs[z].n} <span class="gl">${g}</span>?`,
 comboSignWhy:(p,z)=>`${L.planets[p].n} is about ${L.planets[p].key}. ${L.signs[z].n} is ${L.signs[z].key}. Planet = what, sign = how.`
};
/* ---------- guided tour: "Your cosmic potential" (full-screen, swipeable) ---------- */
L.tour={
 ch:[
  {t:'Your cosmic potential',s:'A slow walk through your whole chart',i:''},
  {t:'The shape of your chart',s:'Where the weight sits',i:'Before anyone reads a single planet, an old-school astrologer squints at the whole wheel, the way you would look at a house from the street before going in. Where the planets crowd together, which element feeds them and which half of the sky they lean towards already tell you what kind of life this chart was built for.'},
  {t:'Who runs your chart',s:'The loudest voices in the room',i:'Every chart is a committee, and like every committee it has two or three members who talk the most. A planet gets louder when it sits on an angle, lives in its own sign, rules your Rising sign or is wired to lots of others. These are the planets you will keep bumping into, whether you read your horoscope or not.'},
  {t:'Sun, Moon and Rising',s:'The core trio',i:'The Sun is who you are becoming, the Moon is what you need when nobody is watching, and the Rising sign is the front door. Most people know their Sun sign. The interesting bits live in the gaps between the three, where they disagree.'},
  {t:'How the energy flows',s:'Rulers, relays and the quiet boss',i:'Every planet stands in a sign that belongs to another planet, so it reports to that planet, which reports to another, like an office hierarchy nobody drew. Follow the chain and you find who really steers the chart. It is rarely the one you would guess.'},
  {t:'Mind, love and drive',s:'Mercury, Venus and Mars',i:'Your everyday tools: how you think, what you fall for and how you go after things. They move fast, so they describe your style more than your destiny. They are also the planets your friends recognise first.'},
  {t:'Growth and the long work',s:'Jupiter and Saturn',i:'Jupiter is where life says yes too easily, Saturn is where it says not yet. One gives you gifts, the other makes you earn them, and by your forties you usually discover that Saturn\'s gifts were the ones that lasted.'},
  {t:'The slow forces',s:'Uranus, Neptune and Pluto',i:'These stay in one sign for years, so you share their sign with everyone in your school year. What is yours alone is the house: the room in your life where your generation\'s storm actually lands.'},
  {t:'Direction and healing',s:'The Nodes and Chiron',i:'The South Node is the comfortable sofa, the North Node is the door you keep walking past. Chiron is the sore spot that, oddly, becomes the thing people come to you for. None of these are fate. They are more like a recurring dream with a point to make.'},
  {t:'Your inner conversations',s:'Aspects and patterns',i:'Aspects are conversations between the parts of you, some friendly, some loud. The tightest ones are the loudest. Sometimes several lock into a shape, and then the shape becomes a personality trait of its own.'},
  {t:'Finer details',s:'Older techniques, applied to your chart',i:'Traditional astrology looked at things like whether you were born by day or by night, which planets were burnt by the Sun\'s glare, which ones were living in a foreign sign. They add a lot to the reading.'},
  {t:'Your life-area map',s:'Where your potential gathers',i:'Add up the weight of every planet by the area of life it sits in and you get a rough map. High peaks are where life keeps knocking. Low ground is quieter and easier, not empty: plenty of happy people have nothing at all in the 7th house and a perfectly nice marriage.'},
  {t:'Putting it together',s:'Gifts, growing edges and questions',i:'The short version, with the usual small print: a chart shows what you are equipped for, not what will happen. Think of it as the instruments in the band. You still choose the song.'}],
 aside:[
  '',
  'Look at the overall shape first, details later.',
  'The strongest planet is not always a comfortable one.',
  'If your Sun, Moon and Rising pull in different directions, that is normal. Most people are mixed.',
  'The final dispositor is the planet the others lead back to. Read its sign and house closely.',
  'Fast planets change sign within weeks, so people born a month apart can have very different charts.',
  'Saturn lessons usually make more sense in hindsight.',
  'Pluto stays in a sign for years, so its house matters more than its sign.',
  'The North Node direction often feels awkward at first.',
  'The tighter the orb, the stronger the aspect.',
  'Sect, dignity and the Sun\'s glare are old techniques that still add a lot.',
  'An empty house still matters. Look at the planet that rules it.',
  ''],
 pot:{
  Sun:'The potential: to live from this sign on purpose, so that your life reflects what you care about rather than what is easiest for everyone else.',
  Moon:'The potential: knowing exactly what soothes you and what drains you, and arranging your life around it without apologising.',
  ASC:'The potential: a presence people recognise. Once you stop managing the first impression, the way you arrive becomes your signature.',
  Mercury:'The potential: a voice that is unmistakably yours, a way of understanding and explaining things that others learn from.',
  Venus:'The potential: knowing what you really love, and building relationships and a life that match it instead of what looks good on paper.',
  Mars:'The potential: clean, committed action. Knowing what you want, going for it directly, and saying a clear no without a three-paragraph apology.',
  Jupiter:'The potential: trust. This is where saying yes to a bigger life tends to pay off, as long as the promises stay realistic.',
  Saturn:'The potential: mastery. This is where early difficulty, worked through honestly, turns into real authority and skills nobody can take away.',
  Uranus:'The potential: originality. This is where you are allowed to break the pattern and where being the odd one out becomes the point.',
  Neptune:'The potential: imagination and compassion. You sense what others miss, as long as you stay grounded enough to do something with it.',
  Pluto:'The potential: regeneration. You can face what is buried and come out with real power rather than the need for control.',
  Node:'The potential: a chosen direction. The more you practise the unfamiliar here, the more your life starts to feel like your own idea.',
  Chiron:'The potential: earned wisdom. The tender spot, once understood, becomes the place where other people trust you most.'},
 ask:{
  Sun:'What would I do this month if nobody were marking it?',
  Moon:'What did I need as a child that I could give myself now, for free?',
  ASC:'Which part of my first impression is armour, and which part is actually me?',
  Mercury:'What do I keep not saying, and what would it cost to say it kindly?',
  Venus:'What do I truly enjoy, as opposed to what I think I should enjoy?',
  Mars:'What am I angry about that is really asking for a boundary?',
  Jupiter:'Where would I say yes to something larger, if I trusted it?',
  Saturn:'Which small commitment, kept for a whole year, would change the most?',
  Uranus:'Which rule do I follow only because nobody ever told me I could stop?',
  Neptune:'What am I idealising, and what is the plain fact underneath?',
  Pluto:'What am I still holding that has already ended?',
  Node:'What is one small, slightly awkward step in this direction I could take this week?',
  Chiron:'Which old hurt could I treat with the kindness I would give a friend?'},
 elDom:{
  fire:'You run on enthusiasm, courage and momentum, like a match that would rather be lit than kept in the box. Your gift is starting things and getting others moving; the stretch is patience, listening and finishing.',
  earth:'You run on what is real, useful and steady. Your gift is turning ideas into something you can hold; the stretch is flexibility, play and trusting what cannot be measured.',
  air:'You run on ideas, conversation and perspective. Your gift is linking people and concepts; the stretch is staying with feelings and the body long enough to act on them.',
  water:'You run on feeling, intuition and bonds. You read rooms the way other people read menus. Your gift is depth and empathy; the stretch is boundaries, and not taking on everybody else\'s weather as your own.'},
 elLack:{
  fire:'Fire is thin in your chart, so spontaneity and self-promotion may need a deliberate push. Treat courage as a muscle, not a mood.',
  earth:'Earth is thin in your chart, so routines, money and the body may need conscious attention. Small, boring habits help you more than big plans.',
  air:'Air is thin in your chart, so stepping back and putting things into words can take effort. Talking it through or writing it down helps more than you would expect.',
  water:'Water is thin in your chart, so feelings may be easier to analyse than to feel. Make room for quiet, for music, for being moved.'},
 modDom:{
  cardinal:'Mostly cardinal: you are built to start and lead. Beginnings come easily; staying once the novelty wears off is harder.',
  fixed:'Mostly fixed: you are built to sustain and deepen. Loyalty and stamina are your strengths, and stubbornness is the bill.',
  mutable:'Mostly mutable: you are built to adapt and translate. Flexibility is your gift; the risk is never quite choosing, and calling it being open-minded.'},
 hemi:{
  upper:'Most of your planets sit above the horizon (houses 7 to 12), so your life leans outward, towards other people, the public and the wider world. You find out who you are through contact, and sometimes through collision.',
  lower:'Most of your planets sit below the horizon (houses 1 to 6), so your life leans towards the personal: body, home, routines and the inner world. You build from the inside out, and you may bloom later than your louder friends.',
  east:'Your planets lean east (houses 10 to 3): you are self-starting, you set the pace and make your own luck.',
  west:'Your planets lean west (houses 4 to 9): you respond, adapt and grow through other people, timing and circumstance. Not passive, just very good at reading the room before moving.',
  even:'Your planets are spread fairly evenly, so you can move between inner and outer, leading and following, without a strong default.'},
 phase:[
  {n:'New',d:'Seed. You were born at a beginning, so you are here to start things that did not exist before. Instinct goes first and clarity arrives later; trust the first move and fix it on the way.'},
  {n:'Crescent',d:'Breaking through. You push against old family or cultural patterns to make room for your own. Determination under pressure is your signature, and it gets much easier the day you stop asking permission.'},
  {n:'First quarter',d:'Crisis in action. You grow by deciding and building, and you are restless until you do. Friction does not mean you are on the wrong road.'},
  {n:'Gibbous',d:'The refiner. You analyse, adjust and improve, and you are rarely completely satisfied, which makes you brilliant at fine-tuning and slightly hard to please. Sometimes good enough really is good enough.'},
  {n:'Full',d:'Full Moon born: Sun and Moon face each other, so you see both sides of nearly everything, and you often understand yourself through other people. There is a pull between head and heart, and integration is the life work.'},
  {n:'Disseminating',d:'The sharer. You digest experience and pass it on, a natural teacher, storyteller or translator. You feel most alive when something you learned the hard way saves someone else the trouble.'},
  {n:'Last quarter',d:'Reorientation. You question inherited beliefs and build your own. Letting go of a worldview is part of your pattern, and so is the freedom that comes after.'},
  {n:'Balsamic',d:'Born in the dark of the Moon, just before a new one. An old-soul feel: you close cycles and clear the ground for what comes next. Intuitive, future-facing, and in genuine need of rest.'}],
 why:{angular:'sits on an angle of your chart',ruler:'rules your Rising sign',home:'is in a sign it rules',exalt:'is exalted',wired:'is wired to many other points',lum:'is one of the two lights',stel:'is part of a crowd in one sign'},
 whyMore:{
  angular:'Planets on the angles (houses 1, 4, 7 and 10) are like actors standing at the front of the stage: whatever they do, people notice.',
  ruler:'The ruler of your Rising sign stands in for you. When it is happy, you feel it in your body; when it is under pressure, so are you.',
  home:'A planet in its own sign is like someone cooking in their own kitchen: no need to look for anything.',
  exalt:'An exalted planet is treated like an honoured guest, so it puts on its best clothes.',
  wired:'A planet with many aspects is a switchboard: pull on it and half the chart lights up.',
  lum:'The Sun and Moon are the two lights, so they always matter, whatever else is going on.',
  stel:'A crowd of planets in one sign makes that sign a second Sun sign in all but name.'},
 pat:{
  grandTrine:{n:'Grand trine',d:'Three planets in an easy triangle. Talent that runs without effort, which can also mean comfort without growth. It works best when you point it at something on purpose.'},
  tsq:{n:'T-square',d:'Two planets in opposition, both squared by a third. A pressure cooker with a valve: the focal planet is where the tension finally gets released through action, so it is often the busiest part of your life.'},
  grandCross:{n:'Grand cross',d:'Four planets locked in squares and oppositions. Tension in four directions at once, which makes for tough, resourceful people who can juggle demands that would flatten anyone else.'},
  yod:{n:'Yod',d:'Two planets in a friendly sextile, both awkwardly angled to a third. Astrologers call it the finger of fate, which is dramatic. In practice the focal planet keeps needing adjustment, and life has a habit of turning around it.'},
  stellium:{n:'Stellium',d:'Three or more planets in one sign: a strong focus on that sign\'s way of doing things. A real strength, with a blind spot next to it.'}},
 dom:[
  {n:'Self and presence',s:'Self',d:'How you show up, your body and your independence.'},
  {n:'Security and roots',s:'Roots',d:'Money, possessions, home and family.'},
  {n:'Mind and meaning',s:'Mind',d:'Learning, communication, beliefs and travel.'},
  {n:'Joy and creativity',s:'Joy',d:'Romance, play and making things for the love of it.'},
  {n:'Work and calling',s:'Work',d:'Daily work, health habits, career and reputation.'},
  {n:'Partnership',s:'Partners',d:'Close one-to-one bonds.'},
  {n:'Depth and inner life',s:'Depth',d:'Intimacy, shared resources, the unconscious and healing.'},
  {n:'Community and future',s:'Circle',d:'Friends, groups and hopes.'}],
 houseAsk:[
  'How do I want to show up in my own life?',
  'What makes me feel secure, and what is that actually worth to me?',
  'What do I want to learn, say or write next?',
  'What does home need to be for me to really rest there?',
  'What do I do purely for joy, with no excuse?',
  'Which daily habit would make my days kinder to my body?',
  'What do I want from a partner, and what do I bring?',
  'What am I ready to share more deeply, or to let go of?',
  'What do I believe now that I did not believe five years ago?',
  'What do I want to be known for?',
  'Who are my people, and what future are we building?',
  'What do I need to let go of, or rest from?']
};
Object.assign(L.ui,{tourTitle:'Your cosmic potential',tourPromo:'A slow, full-screen walk through your whole chart: where the weight sits, which planet leads, some older techniques, and what you are good at.',tourStart:'Open the journey',tourResume:'Continue the journey',tourNext:'Next',tourBack:'Back',tourDone:'Finish',tourClose:'Close',tourSwipe:'Swipe or tap Next',tourAsk:'Ask yourself:',tourGifts:'Where you are supported',tourEdges:'Where you are asked to stretch',tourQs:'Questions to sit with',tourSun:'Your purpose',tourSat:'Your long work',tourNode:'Your direction',tourMoon:'Your needs',tourStel:'Crowded houses',tourEmpty:'Quiet houses',tourPotNote:'Potential is not prediction: this is what the chart equips you for, not what will happen. For entertainment and learning.',tourNoGifts:'No very tight smooth aspects, so your support comes more from effort than from ease.',tourNoEdges:'No very tight tense aspects, which means fewer internal arguments.',tourTime:'Houses depend on your exact birth time, so treat the house readings as approximate.',tourHouseMap:'Planets in your houses',tourElements:'Elements',tourModes:'Styles',tourHalves:'Which half of the sky',tourVolume:'Chart volume',tourPhase:'Your lunar phase at birth',tourReceptions:'Planets that swap places',tourNoRecept:'No planets are swapping places by sign, so each works more on its own terms.',tourChain:'The relay',tourWeb:'Your aspect web',tourWebNote:'Planets sit where they are on your wheel. Teal lines flow, pink lines push.',tourPatterns:'Patterns in your chart',tourNoPatterns:'No classic aspect patterns, so your chart works through single conversations rather than one big shape.',tourTight:'Tightest conversations',tourMap:'Life-area map',tourStrong:'Strongest areas',tourQuiet:'Quieter areas',tourAspectsOf:'Its closest aspects',tourSummary:'Your chart in one paragraph',tourTry:'Try this week'});
Object.assign(L.f,{
 tourStep:(i,n)=>`${i} of ${n}`,
 tourCover:(n,m)=>`${n}`,
 tourBalance:(el,mod)=>`<b>Dominant element: ${L.el[el].n}.</b> ${L.tour.elDom[el]}<br><br><b>Dominant style: ${L.mod[mod].n}.</b> ${L.tour.modDom[mod]}`,
 tourLack:el=>`<b>Least represented: ${L.el[el].n}.</b> ${L.tour.elLack[el]}`,
 tourCrowd:(h,ids)=>`${cap(yourH(h))} (${hs(h)}) holds ${list(ids.map(x=>L.planets[x].n))}: a main stage of your life.`,
 tourEmptyH:hs2=>`No planets in ${list(hs2.map(h=>L.hl(h)+' ('+hs(h)+')'))}. Not a gap: those areas are run through their ruling planets, and they tend to be quieter, less effortful parts of life.`,
 tourSouth:(s,h)=>`The South Node is in ${L.signs[s].n} in ${yourH(h)}: what comes easily and may feel like a comfortable habit. Draw on it, but do not hide in it.`,
 tourNorth:(s,h)=>`The North Node is in ${L.signs[s].n} in ${yourH(h)}: growth comes from approaching matters of ${hs(h)} ${L.hw(s,'N'+h)}.`,
 tourAspect:(a,b,asp,orb)=>`${L.planets[a].n} ${L.aspects[asp].v} ${L.planets[b].n} (orb ${orb})`,
 tourGift:(a,b)=>`${cap(yourP(a))} and ${yourP(b)} cooperate easily: treat this as a talent, and use it deliberately instead of assuming everyone has it.`,
 tourEdge:(a,b)=>`${cap(yourP(a))} and ${yourP(b)} pull in different directions: this is where effort, humour and patience pay off the most.`,
 tourQ:(who,h,q)=>`<b>${who}, ${yourH(h)}:</b> ${q}`,
 tourWhy:(id,rs)=>`${L.planets[id].n} ${list(rs.map(r=>L.tour.why[r]))}.`,
 tourPhaseLine:(k,deg)=>`<b>${L.tour.phase[k].n} Moon</b> (${Math.round(deg)}° between your Sun and Moon). ${L.tour.phase[k].d}`,
 tourRecept:(a,as,b,bs)=>`${L.planets[a].n} is in ${L.signs[as].n}, ruled by ${L.planets[b].n}, and ${L.planets[b].n} is in ${L.signs[bs].n}, ruled by ${L.planets[a].n}. They have swapped places, so they back each other up like friends who lend each other a house.`,
 tourFinal:r=>`Following the rulers around the chart, everything ends up with ${L.planets[r].n}, which sits in a sign it rules. That makes ${L.planets[r].n} the final dispositor: the quiet boss of the chart, so whatever strengthens it strengthens you.`,
 tourNoFinal:()=>`The rulers do not all lead to one planet, so your chart has several centres of gravity rather than a single boss. That is a more collaborative, sometimes more conflicted, arrangement.`,
 tourChainLine:(a,sa,r,rs,rh)=>`${L.planets[a].n} in ${L.signs[sa].n} hands over to ${L.planets[r].n} in ${L.signs[rs].n} (${hs(rh)}).`,
 tourPattern:(type,ids,apex)=>`<b>${L.tour.pat[type].n}: ${list(ids.map(x=>L.planets[x].n))}.</b> ${L.tour.pat[type].d}${apex?` Focal planet: ${L.planets[apex].n}.`:''}`,
 tourStellium:(s,ids)=>`<b>${L.tour.pat.stellium.n} in ${L.signs[s].n}: ${list(ids.map(x=>L.planets[x].n))}.</b> ${L.tour.pat.stellium.d}`,
 tourDomStrong:a=>`Your potential gathers most around ${list(a)}.`,
 tourDomQuiet:a=>`Quieter, and so less effortful: ${list(a)}.`,
 tourSummaryP:(ss,sh,ms,mh,rs,sath,ns,nh)=>{const P=n=>L.hprose[n-1];return `If I had to describe your chart to a stranger in one breath: a ${L.signs[ss].n} Sun who comes alive through ${P(sh)}, with a ${L.signs[ms].n} Moon that needs ${P(mh)} to feel at home, behind a ${L.signs[rs].n} front door. Saturn, your slow and patient teacher, works on you through ${P(sath)}, and the North Node keeps nudging you towards ${P(nh)}, ${L.signs[ns].how}. None of that is a prediction. It is a description of the instrument. You still get to choose the music.`;}
});
/* interface additions (English only for now; Greek and Italian fall back to these) */
Object.assign(L.ui,{
 jumpAria:'Jump to a section',jumpToday:'Today',jumpForecast:'Horoscope',jumpWeek:'Week',jumpCal:'Calendar',jumpMoon:'Moon month',jumpExplore:'Explore',jumpAhead:'Ahead',
 weekTitle:'Your week ahead',weekNote:'Each bar is the overall mood of the day. Top symbol: the area that flows best. Bottom: where to go gently. Tap a day to read its horoscope.',
 moonMonth:'The Moon this month',moonMonthNote:'The next 30 days of Moon phases and sign changes, and which part of your chart each one lights up. Tap any line.',
 dailyTitle:'Today’s piece of you',dailyMore:'Read the whole thing →',
 favAdd:'Save this reading',favRemove:'Remove from saved',favTitle:'Saved readings',favNote:'Tap the ☆ at the top of any explanation to keep it here.',favEmpty:'Nothing saved yet. Your favourite readings will wait for you here.',
 search:'Search',searchPh:'Venus, 7th house, love, Leo…',searchHint:'Start typing, or try one of these:',searchNone:'Nothing found. Try a planet, a sign, a house number, or a word like love, work or money.',
 kPlacement:'Your placement',kSign:'Sign',kHouse:'House',kAspect:'Aspect in your chart',kGuide:'Guide',kPlace:'Go to',
 textSize:'Text size',tsS:'Small',tsM:'Normal',tsL:'Large',tsXL:'Larger'
});
Object.assign(L.f,{
 glance:(b,bs,c,cs)=>`<b>Best:</b> ${b} <span class="stars">${bs}</span> · <b>Go gently:</b> ${c} <span class="stars">${cs}</span>`,
 glanceEven:()=>'An even day: no area stands out, for better or worse.',
 moonIngress:(s,h)=>`Moon enters ${L.signs[s].n} · ${yourH(h)}`,
 moonPhaseRow:(k,s,h)=>`${L.moonPhases[k]} in ${L.signs[s].n} · ${yourH(h)}`,
 moonPhaseIn:(k,s,h)=>{const S=L.signs[s].n,H=yourH(h),P=hp(h);return {
  0:`A New Moon in ${S} falls in ${H}, the part of your chart about ${P}. It is a quiet reset there: a good fortnight to start one small thing, not ten big ones.`,
  2:`The First Quarter Moon in ${S} sits in ${H} (${P}). Halfway up the hill: whatever you started at the New Moon wants a push now, or an honest rethink.`,
  4:`A Full Moon in ${S} lights up ${H}, so ${P} comes into full view. Things there may peak, finish or get emotional. Notice what you see; it is a moment, not a verdict.`,
  6:`The Last Quarter Moon in ${S} sits in ${H} (${P}). Time to clear the decks: finish, tidy and let go of what did not work before the next New Moon.`}[k]||'';}
});
Object.assign(L.q,{
 readSignQ:(id,s)=>`Your ${L.planets[id].n} is in ${L.signs[s].n}. Which reading is about yours?`,
 readHouseQ:(id,h)=>`Your ${L.planets[id].n} sits in ${yourH(h)}. Which reading fits?`,
 readWhy:(id,where,full)=>`That is your ${L.planets[id].n} in ${where}. The whole reading: ${full}`
});
L.games.readmine={t:'Read My Chart',d:'Real readings of your own placements, mixed with readings of other signs and houses. Pick the one that is about you.'};
/* harder games (English only for now) */
const nth=k=>['first','second','third'][k];
Object.assign(L.games,{
 sect:{t:'Day or Night?',d:'Sect: day and night charts, the helper and the troublemaker that swap sides, and which light is in charge.'},
 moonphase:{t:'Phase Finder',d:'From two degrees, name the Moon’s phase. From a phase, find the Moon’s sign.'},
 transithouse:{t:'Where Does It Land?',d:'Drop a slow transit into your own houses, or into whole-sign houses. The cusps are the trap.'},
 decans:{t:'Decan Rulers',d:'The Chaldean faces: which planet rules each ten degrees, your own placements included.'},
 patterns:{t:'Pattern Hunter',d:'Grand Trines, T-squares, Yods, Kites, and the almost-patterns that never quite close.'},
 profections:{t:'Lord of the Year',d:'Annual profections: count the houses by age and find who runs the year, yours included.'},
 mirrors:{t:'Mirror Degrees',d:'Antiscia and contra-antiscia: flip a degree across the solstice or equinox axis.'},
 chain:{t:'Dispositor Chain',d:'Follow your planets up their chain of rulers, two steps or all the way to the top.'},
 sudden:{t:'Sudden Death',d:'Hard and expert questions, 15 seconds each. One wrong answer and it’s over. How far can you go?'}
});
Object.assign(L.q,{
 optDay:()=>'Day chart',optNight:()=>'Night chart',
 sectHouseQ:n=>`The Sun sits in the ${L.hl(n)}. Is this a day chart or a night chart?`,
 sectHouseWhy:(n,d)=>`Houses 7 to 12 are above the horizon, houses 1 to 6 below it. The Sun in the ${L.hl(n)} is ${d?'above the horizon, so this birth happened in daylight: a day chart':'below the horizon, so this birth happened after sunset or before sunrise: a night chart'}. Sect quietly decides which planets behave themselves.`,
 sectMineQ:()=>'Is your own chart a day chart or a night chart?',
 sectMineWhy:(n,d)=>`Your Sun is in the ${L.hl(n)}, ${d?'above the horizon: a day chart. The Sun leads, Jupiter is your kindest helper, and Mars is the one to keep an eye on.':'below the horizon: a night chart. The Moon leads, Venus is your kindest helper, and Saturn is the one that weighs heaviest.'}`,
 sectRoleQ:(k,d)=>`In a ${d?'day':'night'} chart, which planet is ${{benefic:'the benefic of sect (the strongest helper)',malefic:'the malefic contrary to sect (the hardest-hitting one)',light:'the sect light (the one in charge)'}[k]}?`,
 sectRoleWhy:(k,d,id)=>`${L.planets[id].n}. By day the team is the Sun, Jupiter and Saturn; by night it is the Moon, Venus and Mars. ${{benefic:`A benefic on the winning team helps most, so by ${d?'day that is Jupiter':'night that is Venus'}.`,malefic:`A malefic on its own team behaves; the one on the other team is the rough one. By ${d?'day Mars runs hot with nothing to cool it':'night Saturn turns cold with nothing to warm it'}.`,light:`The sect light is simply the light of the hour: ${d?'the Sun by day':'the Moon by night'}.`}[k]}`,
 phaseQ:(s,m)=>`The Sun is at ${s} and the Moon at ${m}. Which phase is the Moon in?`,
 phaseWhy:(a,k)=>`Count forwards from the Sun to the Moon: about ${a}°. Each phase sits around a 45° mark: 0° New, 45° Waxing Crescent, 90° First Quarter, 135° Waxing Gibbous, 180° Full, then 225°, 270° and 315° on the way back down. So this is the ${L.moonPhases[k]}.`,
 phaseSignQ:(ph,s)=>`It is the ${ph} and the Sun is at ${s}. Which sign is the Moon in?`,
 phaseSignWhy:(k,z,m)=>{const S=L.signs[z].n,M=L.signs[m].n;return {0:`At a New Moon the Moon sits right on top of the Sun, so it is in ${S} too.`,2:`At the First Quarter the Moon is 90° ahead of the Sun: three signs on from ${S}, so ${M}.`,4:`At a Full Moon the Moon is opposite the Sun: six signs on from ${S}, so ${M}.`,6:`At the Last Quarter the Moon is 90° behind the Sun: three signs back from ${S}, so ${M}.`}[k];},
 wholeHouseQ:(id,pos,R)=>`Someone has ${L.signs[R].n} Rising and uses whole-sign houses. Transiting ${L.planets[id].n} is at ${pos}. Which of their houses is that?`,
 wholeHouseWhy:(R,z,n)=>`In whole-sign houses the Rising sign is the whole 1st house, and each sign after it is the next house. ${L.signs[z].n} is ${n===1?'the Rising sign itself':`${n-1} sign${n>2?'s':''} after ${L.signs[R].n}`}, so it is the ${L.hl(n)}. Degrees don’t matter here, which is half the charm.`,
 myHouseQ:(id,pos)=>`Transiting ${L.planets[id].n} reaches ${pos}. Which of your houses is it in?`,
 myHouseWhy:(n,a,b)=>`Your ${L.hl(n)} starts at ${a} and runs until the next cusp at ${b}, so the transit lands there. Near a cusp, check the exact degree: one degree can move a whole year of Saturn into the next room.`,
 decanQ:(pos,who)=>who?`Your ${L.planets[who].n} is at ${pos}. Which planet rules its decan (Chaldean face)?`:`Which planet rules the decan (Chaldean face) at ${pos}?`,
 decanWhy:(z,dk,r,first)=>`${L.signs[z].n} opens with a ${L.planets[first].n} decan, and the faces then follow the Chaldean order Mars → Sun → Venus → Mercury → Moon → Saturn → Jupiter, ten degrees each. This is the ${nth(dk)} decan: ${L.planets[r].n}. Shortcut: the first decans walk through the week. Aries starts on Mars (Tuesday), Taurus on Mercury (Wednesday), Gemini on Jupiter (Thursday), Cancer on Venus (Friday), and so on.`,
 patternQ:()=>'Which pattern do these planets make? Pick the fullest shape.',
 patNames:{gt:'Grand Trine',tsq:'T-square',gx:'Grand Cross',yod:'Yod (Finger of God)',kite:'Kite',rect:'Mystic Rectangle',stel:'Stellium',none:'No pattern: the shape doesn’t close'},
 patternWhy:(k,base,d1,d2)=>({gt:'Three planets about 120° apart, each trine the other two: a closed loop of ease. Gifted, and sometimes too comfortable to bother.',
  tsq:'Two planets in opposition, with a third square to both. The planet at the tip takes the pressure and becomes the engine of the chart.',
  gx:'Four planets in two oppositions, all square to each other. There are four T-squares inside it, but the full cross wins. Tension in every direction, and remarkable stamina.',
  yod:'Two planets sextile each other, both quincunx (150°) a third. The planet at the tip is the "finger": always being asked to adjust. Yods need tight orbs, so check the degrees.',
  kite:'A Grand Trine with a fourth planet opposite one corner and sextile the other two. The opposition gives the easy trine somewhere to fly.',
  rect:'Two oppositions joined by sextiles and trines into a rectangle. Tension with its own built-in ways to calm down.',
  stel:'Four planets packed into one sign. That sign and its house get a crowd, and the rest of the chart tends to orbit around it.',
  none:`It looks like a ${base==='gt'?'Grand Trine':'T-square'}, but one planet is off: it sits ${d1}° and ${d2}° from the others, too far for either aspect to hold. Almost-patterns are the classic trap, so always check the orbs.`}[k]),
 profHouseQ:(R,age,mine)=>mine?`You are ${age} this year. Counting annual profections from your ${L.signs[R].n} Rising, which house is your year?`:`Someone with ${L.signs[R].n} Rising turns ${age}. Using annual profections, which house is their year?`,
 profLordQ:(R,age,mine)=>mine?`You are ${age} this year. With ${L.signs[R].n} Rising, who is your Lord of the Year (annual profections, traditional rulers)?`:`Someone with ${L.signs[R].n} Rising turns ${age}. Who is their Lord of the Year (annual profections, traditional rulers)?`,
 profWhy:(R,age,n,z,lord,h)=>`Each birthday moves the year one house on: age 0 is the 1st house, 1 the 2nd, and every 12 years you are back in the 1st. ${age%12===0?`${age} is a multiple of 12`:age>12?`${age} is ${age-age%12} + ${age%12}`:`${age} is ${age} step${age===1?'':'s'} on`}, so it is the ${L.hl(n)}, which in a ${L.signs[R].n}-Rising chart is ${L.signs[z].n}. Its traditional ruler, ${L.planets[lord].n}, is the Lord of the Year${h?`. Yours sits in your ${L.hl(h)}, so that part of life gets a lot of airtime this year`:''}. Watch its transits closely all year.`,
 mirrorQ:(pos,c)=>c?`What is the contra-antiscion of ${pos}?`:`What is the antiscion (mirror degree) of ${pos}?`,
 mirrorWhy:(c,z,mz,d,md)=>`${c?'Contra-antiscia mirror the zodiac across the Aries–Libra axis, the equinoxes.':'Antiscia mirror the zodiac across the Cancer–Capricorn axis, the solstices: two points the same distance from a solstice get the same length of daylight.'} ${L.signs[z].n} pairs with ${L.signs[mz].n}, and the degree flips: ${d}° becomes 30 − ${d} = ${md}°. Two planets on each other’s mirror degree act a bit like a secret conjunction.`,
 chainQ:(id,s)=>`Your ${L.planets[id].n} is in ${L.signs[s].n}. Go two steps up the chain: the ruler of ${L.signs[s].n}, then the ruler of the sign that planet sits in. Where do you land?`,
 chainWhy:(id,s,r1,s1,r2)=>{const P=x=>(['Sun','Moon'].includes(x)?'the ':'')+L.planets[x].n,Y=`your ${L.planets[id].n}`;
  if(r1===id)return `${cap(Y)} is at home in ${L.signs[s].n}, so the chain stops right there: it answers to no one but itself.`;
  return `${cap(Y)} in ${L.signs[s].n} answers to ${P(r1)}. Your ${L.planets[r1].n} is in ${L.signs[s1].n}, which answers to ${P(r2)}. `+(r2===id?`So the chain loops straight back to ${Y}: the two sit in each other’s signs (a mutual reception) and run things as a pair.`:`So ${P(r2)} is ${Y}’s boss’s boss: whatever happens to it ripples down the chain.`);},
 finalQ:()=>'Follow every planet in your chart up its chain of rulers. Do they all end at one final dispositor? Which?',
 noFinal:()=>'No single final dispositor',
 finalWhy:id=>id?`Every chain in your chart ends at ${L.planets[id].n}, the one planet sitting in its own sign. A final dispositor is the chart’s quiet manager: in the end, everything reports to it.`:`The chains in your chart don’t all end at one planet: they loop between planets, or split between more than one planet at home. No single boss, so the power is shared. Plenty of fine charts work this way.`,
 suddenMsg:n=>n>=15?`${n} in a row. That is astrologer-with-a-waiting-list territory.`:n>=8?`${n} in a row. Properly impressive.`:n>=3?`${n} in a row. A good warm-up; the stars are patient.`:`${n} in a row. Everyone falls at the first fence sometimes. Again?`,
 suddenBest:n=>`Best run: ${n}`
});
/* eclipses, Lord of the Year, backup (English only for now) */
const EK={solar:'Solar',lunar:'Lunar'},ET={total:'Total ',annular:'Annular ',partial:'Partial ',penumbral:'Penumbral ',hybrid:'Hybrid '};
L.eclType={
 total:'A total eclipse: the full blackout. These tend to be the ones people remember a year later.',
 annular:'An annular eclipse: the Moon is a little too far away to cover the Sun, so a ring of fire is left around the edge. A new start with something still glowing from the old one.',
 hybrid:'A hybrid eclipse: total in some places and a ring of fire in others. The sky could not make up its mind, which is a mood in itself.',
 partial:'A partial eclipse: only a bite out of the light. Quieter, but not nothing: it still marks the spot.',
 penumbral:'A penumbral eclipse: the Moon only brushes Earth’s outer shadow, and most people would not notice it looking up. A soft one, more of a sigh than a slammed door.'};
L.eclPt={
 Sun:'An eclipse on your Sun is one of the big ones. It tends to show up as a question about who you are becoming, often through a change in role, direction or the people who see you shine.',
 Moon:'On your Moon, it reaches into your private weather: home, family, the body, what makes you feel safe. Feelings you have been politely ignoring tend to ask for a seat at the table.',
 Mercury:'On your Mercury, watch the conversations, contracts, studies and plans. A decision you have been circling usually gets made, one way or another.',
 Venus:'On your Venus, love, money and what you find beautiful all get a review. Relationships can start, end or quietly change their terms. Not a time to panic-buy anything, including a person.',
 Mars:'On your Mars, energy runs high and patience runs low. Good for a brave move you have prepared; less good for one you thought of at midnight.',
 Jupiter:'On your Jupiter, a door can open: a teacher, a trip, a chance to grow. The usual Jupiter warning applies: more is not always better.',
 Saturn:'On your Saturn, it touches your commitments and your sense of what you owe. Something long-term gets real, finished or rebuilt on better foundations.',
 Uranus:'On your Uranus, expect the unexpected, a little more than usual. A sudden itch for freedom or a change of plan tends to arrive with it.',
 Neptune:'On your Neptune, the line between intuition and wishful thinking gets thin. Lovely for art and spiritual life; read the small print on everything else.',
 Pluto:'On your Pluto, it digs. Power, control and deep loyalties come up for honest inspection. Slow to show, and usually worth it.',
 Node:'On your nodes, it is a fated-feeling eclipse: the kind that seems to nudge you back onto your own path. People and events arrive with a strange sense of timing.',
 Chiron:'On your Chiron, an old sore spot can flare, and with it a real chance to treat it kindly. Healing here tends to come through helping, or being helped.',
 ASC:'On your Ascendant, it is about you, visibly: your body, look, presence and how you start things. People often change something about themselves around eclipses on the Rising degree.',
 MC:'On your Midheaven, career and public life are in play: a new role, a goal finished, a shift in what you want to be known for.'};
L.lordYear={
 Sun:'A Sun year asks you to be seen. Recognition, confidence and questions of purpose come forward, and so do the people who want you to stay small. Whatever the Sun is doing in the sky this year is your weather vane.',
 Moon:'A Moon year runs on feeling and on the body. Home, family, mothering and moods all move faster than usual, because the Moon itself does. Little things matter more this year, so look after them.',
 Mercury:'A Mercury year is busy in the head and on the phone: learning, writing, deals, siblings, errands. Its retrogrades this year are worth marking in the calendar, for re-dos rather than disasters.',
 Venus:'A Venus year is about what you love and how you are loved: relationships, beauty, pleasure, and money as a form of comfort. It is a good year to make life prettier, and to notice what you actually value.',
 Mars:'A Mars year turns the heat up. More drive, more decisions, more friction. It rewards courage and hard training, and punishes rushing. Choose your fights, then fight them well.',
 Jupiter:'A Jupiter year opens things up: travel, study, teachers, faith, luck. The danger is only too much: too many yeses, too much on the plate. Say yes to the ones that make you larger, not just busier.',
 Saturn:'A Saturn year is a building year. Responsibilities, structure, maybe some loneliness; also real, lasting results for steady effort. It is less fun than a Jupiter year and pays out for longer.'};
Object.assign(L.ui,{
 jumpEclipse:'Eclipses',jumpYear:'Your year',
 eclTitle:'Eclipses for you',eclNote:'Eclipses come in seasons, two or three at a time, roughly every six months. Each one lands in a part of your chart and keeps working on it for months. Tap any eclipse to see what it touches.',
 eclEyebrow:'Eclipse',eclPast:'still echoing',eclTouches:'It lands on',eclNone:'It does not land right on one of your planets, so it works on the life area as a whole.',
 eclSeason:'Eclipse season',eclBorn:'The eclipse before you were born',eclBornNote:'Some astrologers read the last solar eclipse before birth as a quiet theme for your whole life. A footnote, not a headline, and a lovely one.',
 eclTiming:'Eclipses are slow-release. Their effects are said to unfold over about six months, and often show up when a later New or Full Moon, or a planet, crosses the same degree. The old advice is to watch on the day itself rather than launch something big.',
 yearTitle:'Your year',yearNeedsTime:'The Lord of the Year is counted from your Rising sign, so it needs a birth time. Add one on the Me tab to see your year.',
 yearLordNow:'Where your Lord of the Year is now',yearWakes:'Also waking up this year',yearRetro:'Its retrogrades this year',yearMore:'How the year is counted',
 yearHow:'This is annual profection, an old technique: each birthday moves your year one house on, starting from the 1st house at birth, so every twelve years you are back where you began. The planet that rules that house’s sign is the Lord of the Year: its condition in your chart and its movements in the sky colour the whole year.',
 backupTitle:'Backup',backupNote:'Your charts, saved readings, notes and streaks live only on this phone. Save a backup file now and then (to Files, iCloud or an email to yourself), and you can bring everything back on a new phone.',
 backupSave:'Save a backup',backupLoad:'Restore from a backup',backupSaved:'Backup ready. Keep it somewhere safe.',backupBad:'That file does not look like a Two Fishes backup.',
 backupConfirm:'Restore this backup? It replaces your charts, saved readings and notes on this phone with the ones in the file.'
});
Object.assign(L.f,{
 eclName:(k,t,s)=>`${ET[t]||''}${EK[k]} Eclipse in ${L.signs[s].n}`,
 eclRow:(k,t,s,h)=>`${ET[t]||''}${EK[k]} Eclipse in ${L.signs[s].n} · ${yourH(h)}`,
 eclLead:(k,s,h)=>k==='solar'?`A Solar Eclipse is a New Moon with the lights switched off. This one, in ${L.signs[s].n}, falls in ${yourH(h)}, the part of your chart about ${hp(h)}. Something new wants to start there, often before you feel ready, and often through events rather than plans.`:`A Lunar Eclipse is a Full Moon with extra voltage. This one, in ${L.signs[s].n}, lights up ${yourH(h)}, so ${hp(h)} comes into full view. Something there reaches a turning point, finishes, or finally gets said out loud.`,
 eclHit:(id,opp,deg)=>`${opp?'Across from':'Right on'} your ${L.planets[id].n} (${deg})`,
 eclSeason:(a,b)=>a===b?`This season works on ${yourH(a)}: ${hp(a)}.`:(b-a+12)%12===6?`This season works the line between ${yourH(a)} and ${yourH(b)}: ${hp(a)} on one side, ${hp(b)} on the other. Eclipses come back to the same pair of houses for about a year and a half, so the story has chapters.`:`This season works on ${yourH(a)} and ${yourH(b)}: ${hp(a)}, and ${hp(b)}. Your houses are not all the same size, so the two eclipses land a little off-opposite in your chart.`,
 eclSoon:(k,d,h)=>`${EK[k]} eclipse ${d===0?'today':d===1?'tomorrow':d<0?`${-d} day${d===-1?'':'s'} ago`:`in ${d} days`} · ${yourH(h)}`,
 eclBornLine:(k,t,s,h)=>`${ET[t]||''}${EK[k]} Eclipse in ${L.signs[s].n}, ${yourH(h)}: ${hp(h)} is one of the quiet threads of your life.`,
 yearHead:(n,id)=>`${n===8||n===11?'An':'A'} ${L.hl(n)} year, run by ${['Sun','Moon'].includes(id)?'the ':''}${L.planets[id].n}`,
 yearDates:(a,b,age)=>`Age ${age}, from your birthday on ${a} to ${b}.`,
 yearSign:(n,z)=>`This year your chart turns to its ${L.signs[z].n} house, the part about ${hp(n)}.`,
 yearNatal:(id,s,h)=>`In your birth chart ${['Sun','Moon'].includes(id)?'the ':''}${L.planets[id].n} sits in ${L.signs[s].n}, in ${yourH(h)}, so a lot of this year’s business tends to come through ${hp(h)}.`,
 yearSky:(id,s,h,r)=>`Right now ${['Sun','Moon'].includes(id)?'the ':''}${L.planets[id].n} is in ${L.signs[s].n}, moving through ${yourH(h)}${r?', and retrograde: a good time to review this year’s plans rather than add to them':''}.`,
 yearWakesLine:(ids,z)=>`Your ${list(ids.map(x=>L.planets[x].n))} ${ids.length>1?'live':'lives'} in ${L.signs[z].n}, the sign of the year, so ${ids.length>1?'they get':'it gets'} extra airtime too.`
});
(window.TF_LANGS=window.TF_LANGS||{}).en=L;
})();

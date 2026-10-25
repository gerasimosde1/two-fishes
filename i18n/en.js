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
 love:{n:'Love',learn:'Love is read from the 5th house (romance, dating) and the 7th house (partners), and from Venus, Mars and the Moon.',adv:['A warm, open day for love. Say what you feel, plan a date or reach out to someone.','A steady day in love. Small, kind gestures count more than big talks.','Feelings can clash today. Listen before you react, and don’t test the other person.']},
 work:{n:'Work & career',learn:'Work is read from the 10th house (career, reputation) and the 6th house (daily work), the Midheaven, Saturn and the Sun.',adv:['Good day to pitch ideas, ask for something or show your work.','A routine work day. Clear your to-do list and keep going.','Expect friction or delays. Double-check details and don’t force big decisions.']},
 money:{n:'Money',learn:'Money is read from the 2nd house (what you earn and own) and the 8th house (shared money, debts), with Venus and Jupiter.',adv:['Favourable for planned purchases, negotiating or earning.','Nothing special with money. Stick to your budget.','Avoid impulse buys, risky deals and lending money today.']},
 energy:{n:'Energy & health',learn:'Energy and health are read from the 1st house (your body) and the 6th house (habits, health), the Ascendant, Mars and the Sun.',adv:['Energy is high. Move, exercise, start something new.','Normal energy. Keep a steady pace and sleep well.','You may feel tired or irritable. Rest, drink water and don’t overdo it.']},
 mind:{n:'Mind & talks',learn:'Thinking and communication are read from the 3rd house (everyday mind, messages) and the 9th house (study, beliefs), with Mercury.',adv:['Clear thinking. Great for studying, writing and important conversations.','Fine for everyday talks, errands and admin.','Misunderstandings are likely. Re-read messages before you send them.']},
 home:{n:'Home & family',learn:'Home and family are read from the 4th house (roots, home) and the Moon (care, belonging).',adv:['A lovely day for family, cooking and making your space cosy.','A quiet day at home.','Family tension is possible. Give people some space.']},
 social:{n:'Friends & social',learn:'Friends and social life are read from the 11th house (friends, groups) and the 5th house (fun), with Venus, Jupiter and Uranus.',adv:['Say yes to plans. Friends and groups bring good luck.','An ordinary social day.','Not everyone will be on your side today. Choose your company carefully.']},
 inner:{n:'Inner world',learn:'Your inner and spiritual life is read from the 12th house (the unconscious, rest) and the 9th house (meaning), with Neptune, the Moon and Pluto.',adv:['Your intuition is strong. Meditate, journal and notice your dreams.','Take a little quiet time for yourself.','Old worries may come up. Be gentle with yourself and rest.']}
};
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
 exam:{t:'Master Exam',d:'15 mixed questions from every game, 20 seconds each. Run out of time and it counts as wrong.'}
};

L.retroInfo={"Mercury": "Thinking, talking, travel and tech. Plans slip, messages get crossed. Good for re-reading, revising and reconnecting; bad for signing big things in a rush.", "Venus": "Love, money and taste. Old flames and old questions about what you value come back. Review relationships and spending rather than starting new ones.", "Mars": "Drive and anger. Energy runs low or turns inward, and pushing hard backfires. Rest, rethink the plan, and avoid fights over old issues.", "Jupiter": "Growth and luck. Expansion is inner more than outer: re-examine your beliefs, goals and what \"enough\" means.", "Saturn": "Duty and structure. Time to check your foundations and the rules you live by, and to take back responsibility you gave away.", "Uranus": "Change and freedom. The urge to break free works underground, as inner restlessness before an outer shake-up.", "Neptune": "Dreams and intuition. Illusions thin out, so you see what was foggy. Good for honest looks at ideals and escapes.", "Pluto": "Power and depth. Slow inner transformation: old fears, control and what you need to let go of."};
const RI=id=>L.retroInfo[id]||'';
L.ui={
 sub:'An almanac of your sky, past, present and to come',editBirth:'Edit birth details',language:'Language',
 tabChart:'Chart',tabTransits:'Transits',tabLearn:'Learn',tabMe:'Me',tabPlanets:"Planets",planetsTitle:"Planets in signs",planetsNote:"Every planet in your chart, lined up with the sign it sits in. Tap one to read more on the Chart tab.",retroTitle:"Retrograde ℞",retroNatalH:"In your birth chart",retroNowH:"In the sky right now",retroNone:"None of your planets were retrograde at birth.",retroNoneNow:"No planets are retrograde today.",retroGuide:"<p>A planet is <b>retrograde</b> (℞) when, seen from Earth, it seems to move backwards through the sky. It is an illusion, like a train passing a slower train, but astrologers read it as that planet's energy turning inward: slower, more reflective, and about reviewing rather than starting.</p><ul class=\"ctx\"><li><span>Retrograde in your birth chart</span>That planet works in a more personal, inward way. It is not bad. It often means a gift you develop in your own time.</li><li><span>Retrograde now, in the sky</span>A time to review, redo and reconsider that planet's themes. The house it moves through shows which area of your life feels it.</li><li><span>Direct again</span>When the planet turns direct (moves forward), what was stuck starts to flow.</li></ul>",
 exampleBanner:'<b>This is an example chart.</b> Enter your own birth date, time and place to see your real sky.',enterBirth:'Enter my birth details',
 viewing:'Viewing',chooseChart:'Choose a chart',guideChart:'How to read your chart',legSoft:'trine / sextile',legHard:'square / opposition',legQx:'quincunx',
 tapAny:'Tap any planet, sign or house number.',placements:'Placements',aspectsInChart:'Aspects in your chart',
 tidesNote:'Ratings come from the transits to your birth chart on this day. Tap a category to see why and learn the astrology behind it.',
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
 cancel:'Cancel',footer:'Tropical zodiac · geocentric positions via Astronomy Engine',close:'Close',details:'Details',
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
 todaysTides:'Today’s Tides',theTides:'The Tides',why:'Why',calmArea:'No transits touch this part of your chart today, so it stays calm.',learn:'Learn:',
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
 myChart:'My chart',chart:'Chart'
};

L.f={
 retroNatal:(id,s,h)=>`${RI(id)} In your chart this shows up in: ${L.houses[h-1].short}, ${L.signs[s].how}.`,
 retroNow:(id,s,h,end)=>`${end?`Turns direct around <b>${end}</b>. `:''}${RI(id)} For you this touches: ${L.houses[h-1].short}.`,
 transitTitle:(t,a,n)=>`${L.planets[t].n} ${L.aspects[a].v} ${yourP(n)}`,
 dispHome:(id,s)=>`${L.planets[id].n} is at home in ${L.signs[s].n}, the sign it rules, so it acts with extra strength.`,
 disp:(s,r,rs,rh)=>`${L.signs[s].n} is ruled by ${L.planets[r].n}, which sits in ${L.signs[rs].n} in ${yourH(rh)}, so ${hs(rh)} colours how this placement plays out.`,
 cuspOf:h=>`cusp of the ${L.hl(h)}`,
 howRead:(id,s,h)=>`<b>How to read it.</b> The planet is <i>what</i>: ${L.planets[id].what}. The sign is <i>how</i>: ${L.signs[s].how}. The house is <i>where</i>: in ${hs(h)}.`,
 houseHeading:(h,isAngle)=>`${isAngle?'Opens':'In'} ${yourH(h)}`,
 rulesPara:(id,rules,h)=>`${L.planets[id].n} rules ${rules.length>1?'your '+list(rules.map(r=>L.hl(r)+' ('+hs(r)+')')):yourH(rules[0])+' ('+hs(rules[0])+')'}. A planet carries the themes of the houses it rules into the house where it sits, so ${list(rules.map(hs))} ${rules.length>1?'are':'is'} linked with ${hs(h)} in your life.`,
 retro:id=>`<b>℞ Retrograde.</b> Seen from Earth, ${L.planets[id].n} looked as if it were moving backwards when you were born. Its energy tends to turn inward: more reflective, slower to show, often very personal.`,
 chartRuler:(r,rs,rh)=>`The planet that rules your Rising sign is your chart ruler: <b>${L.planets[r].n}</b>, in ${L.signs[rs].n} in ${yourH(rh)}. It is like the captain of your chart, so whatever touches ${L.planets[r].n} touches you personally.`,
 ruledBy:r=>`ruled by ${L.planets[r[0]].n}${r[1]?` (modern) and ${L.planets[r[1]].n} (traditional)`:''}`,
 signCusps:(i,c)=>`${L.signs[i].n} begins ${c.length>1?'your '+list(c.map(L.hl)):yourH(c[0])}, so you meet ${list(c.map(hs))} ${L.signs[i].how}`,
 houseTitle:n=>`The ${L.hl(n)}: ${hs(n)}`,
 beginsAt:(d,s)=>`begins at ${d} ${L.signs[s].n}`,
 yourHouseTitle:n=>`Your ${L.hl(n)}`,
 cuspPara:(n,s)=>`<b>${L.signs[s].n} on the cusp.</b> You approach ${hs(n)} ${L.signs[s].how}. ${L.signs[s].body}`,
 planetInHouse:(id,n)=>`${L.planets[id].n} brings ${L.planets[id].key.split(', ').slice(0,2).join(' and ')} into ${hs(n)}.`,
 rulerPara:(r,rh,n)=>`<b>Its ruler, ${L.planets[r].n}.</b> ${L.planets[r].n} rules this house and sits in ${yourH(rh)}. ${rh===n?'It sits in its own house, which makes this area strong and self-directed.':`So ${hs(n)} is linked with ${hs(rh)} in your life.`}`,
 naturalSign:i=>`Its natural sign is ${L.signs[i].n}.`,
 orbExplain:o=>`The orb (${o}) is how far it is from exact. The smaller the orb, the stronger you feel it.`,
 aspectLife:(h1,h2,a,b,cls)=>`In your life this links <b>${hs(h1)}</b> with <b>${hs(h2)}</b>. Your ${L.planets[a].what} and your ${L.planets[b].what} ${cls==='soft'?'support each other':cls==='hard'?'push against each other, which creates tension and growth':cls==='neu'?'work as one':'need constant small adjustments'}.`,
 inOrb:(s,e,days,ex)=>`In orb from <b>${s}</b> to <b>${e}</b>, about ${days>60?Math.round(days/30.4)+' months':days+' days'}.${ex.length?` Exact on ${ex.join(', ')}.`:''}${ex.length>1?' It is exact more than once because the planet turns retrograde and crosses the point again.':''}`,
 tr:(t,n)=>L.planets[t].tr.replace('{t}',L.planets[t].n).replace('{n}',yourP(n)),
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
 tidesSummary:(best,care,ms,mh,g)=>`${best.length?`<b>Best for</b> ${list(best)}. `:'A balanced day with no big highs. '}${care.length?`<b>Take care with</b> ${list(care)}. `:''}<span class="muted">The Moon is in ${L.signs[ms].n} <span class="gl">${g}</span>, lighting up ${yourH(mh)} (${hs(mh)}).</span>`,
 whyLine:(pos,t,n,h)=>`${pos?'Helps':'Challenges'}: ${L.planets[t].n} (${L.planets[t].what}) meets ${yourP(n)} (${L.planets[n].what}, ${L.hl(h)}).`,
 moonHere:h=>`The Moon is passing through ${yourH(h)}, which puts feelings on this area.`,
 streak:n=>`${n} days in a row`,
 enters:(id,s)=>`${L.planets[id].n} enters ${L.signs[s].n}`,
 nowMoving:h=>`Now moving through ${yourH(h)} (${hs(h)}).`,
 turns:(id,r)=>`${L.planets[id].n} turns ${r?'retrograde':'direct'}`,
 stationRetro:id=>`${L.planets[id].n} seems to move backward for a while: a time to review matters of ${L.planets[id].what}.`,
 stationDirect:id=>`${L.planets[id].n} moves forward again, and what it held up starts to move.`,
 rel:d=>d===0?'today':d>0?`in ${d} day${d>1?'s':''}`:`${-d} day${d<-1?'s':''} ago`,
 calMoon:(s,h,g)=>`Moon in ${L.signs[s].n} <span class="gl">${g}</span>, in ${yourH(h)}. Feelings move ${L.signs[s].how}, focused on ${hs(h)}.`,
 best:(s,t)=>`Best: ${s} / ${t}`,
 qHead:(i,N,s,st)=>`Question ${i} of ${N} · score ${s}${st>1?' · streak '+st:''}`,
 timesUp:a=>`Time’s up. It’s ${a}.`,
 notQuite:a=>`Not quite. It’s ${a}.`,
 longestStreak:(n,nb)=>`Longest streak: ${n}${nb?' · new best!':''}`
};
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
(window.TF_LANGS=window.TF_LANGS||{}).en=L;
})();

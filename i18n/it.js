// Italiano. Same keys as en.js.
(function(){
const L={code:'it',locale:'it-IT',label:'Italiano',short:'IT'};
const cap=s=>s?s[0].toUpperCase()+s.slice(1):s;
const list=a=>a.length<2?a.join(''):a.slice(0,-1).join(', ')+' e '+a[a.length-1];
L.hl=n=>`${n}ª casa`;
const V=n=>n===8||n===11;
const la=n=>V(n)?`l’${n}ª`:`la ${n}ª`, nella=n=>V(n)?`nell’${n}ª`:`nella ${n}ª`, della=n=>V(n)?`dell’${n}ª`:`della ${n}ª`;
const yourH=n=>`la tua ${n}ª casa`;
const inYourH=n=>`nella tua ${n}ª casa`;
const area=n=>`«${L.houses[n-1].short.toLowerCase()}»`;
const areaA=ns=>ns.length>1?`le aree ${list(ns.map(area))}`:`l’area ${area(ns[0])}`;
const houseList=r=>list(r.map(x=>`${la(x)} casa (${L.houses[x-1].short.toLowerCase()})`));

L.signs=[
 {n:'Ariete',art:'l’Ariete',gen:'dell’Ariete',key:'audacia, spirito pionieristico, impulsività',how:'in modo audace e pionieristico',body:'Il primo segno, la scintilla della primavera. L’Ariete prima agisce e poi pensa, ama le sfide e va dritto verso ciò che vuole.',plus:'coraggio, sincerità, energia, iniziativa',minus:'impazienza, collera, comincia senza finire'},
 {n:'Toro',art:'il Toro',gen:'del Toro',key:'stabilità, sensualità, lealtà',how:'in modo stabile e sensuale',body:'Solido e con i piedi per terra, il Toro costruisce lentamente e gode la vita attraverso i sensi: cibo, contatto, natura, bellezza e comodità.',plus:'pazienza, lealtà, affidabilità, buon gusto',minus:'testardaggine, possessività, resistenza al cambiamento'},
 {n:'Gemelli',art:'i Gemelli',gen:'dei Gemelli',key:'curiosità, arguzia, irrequietezza',how:'in modo curioso e giocoso',body:'Veloci e curiosi, i Gemelli vogliono sapere un po’ di tutto, adorano conversare e hanno bisogno di varietà.',plus:'arguzia, adattabilità, comunicazione, apprendimento rapido',minus:'irrequietezza, distrazione, superficialità'},
 {n:'Cancro',art:'il Cancro',gen:'del Cancro',key:'cura, protezione, sensibilità',how:'in modo affettuoso e protettivo',body:'Il Cancro sente profondamente e protegge ciò che ama. Casa, famiglia e sicurezza emotiva vengono prima di tutto.',plus:'cura, intuito, memoria, lealtà',minus:'lunaticità, attaccamento, chiusura nel guscio'},
 {n:'Leone',art:'il Leone',gen:'del Leone',key:'splendore, generosità, orgoglio',how:'in modo caloroso e generoso',body:'Il Leone brilla come il Sole che lo governa: caloroso, creativo e generoso, vuole esprimersi ed essere apprezzato.',plus:'calore, creatività, coraggio, grande cuore',minus:'orgoglio, bisogno di attenzione, drammaticità'},
 {n:'Vergine',art:'la Vergine',gen:'della Vergine',key:'precisione, disponibilità, analisi',how:'in modo attento e pratico',body:'La Vergine nota i dettagli e vuole migliorare le cose. Trova senso nell’essere utile, capace e in salute.',plus:'precisione, disponibilità, analisi, modestia',minus:'ansia, critica, perfezionismo'},
 {n:'Bilancia',art:'la Bilancia',gen:'della Bilancia',key:'armonia, fascino, senso di giustizia',how:'in modo garbato ed equilibrato',body:'La Bilancia cerca equilibrio, bellezza e giustizia, e prende vita attraverso le relazioni e la collaborazione.',plus:'diplomazia, fascino, senso della giustizia, gusto',minus:'indecisione, voglia di piacere a tutti, fuga dai conflitti'},
 {n:'Scorpione',art:'lo Scorpione',gen:'dello Scorpione',key:'intensità, riservatezza, trasformazione',how:'in modo intenso e profondo',body:'Lo Scorpione va in profondità. Intenso e riservato, vuole verità, lealtà e sincerità emotiva, e si trasforma attraverso le crisi.',plus:'profondità, lealtà, intuizione, resilienza',minus:'gelosia, segretezza, rancore'},
 {n:'Sagittario',art:'il Sagittario',gen:'del Sagittario',key:'avventura, sincerità, filosofia',how:'in modo avventuroso e aperto',body:'Il Sagittario è l’esploratore e il filosofo, sempre in cerca di senso, libertà e del quadro generale.',plus:'ottimismo, sincerità, umorismo, visione',minus:'irrequietezza, schiettezza eccessiva, promesse esagerate'},
 {n:'Capricorno',art:'il Capricorno',gen:'del Capricorno',key:'ambizione, pazienza, responsabilità',how:'in modo serio e ambizioso',body:'Il Capricorno sale la montagna passo dopo passo. Serio e ambizioso, costruisce cose che durano e migliora con gli anni.',plus:'disciplina, responsabilità, pazienza, ambizione',minus:'freddezza, pessimismo, troppo lavoro'},
 {n:'Acquario',art:'l’Acquario',gen:'dell’Acquario',key:'originalità, indipendenza, umanitarismo',how:'in modo originale e indipendente',body:'L’Acquario pensa in modo diverso. Apprezza la libertà, l’amicizia e le idee che possono rendere il mondo migliore per tutti.',plus:'originalità, indipendenza, equità, visione',minus:'distacco, ribellione, idee rigide'},
 {n:'Pesci',art:'i Pesci',gen:'dei Pesci',key:'sogno, compassione, intuito',how:'in modo sognante e compassionevole',body:'L’ultimo segno porta un po’ di tutti gli altri. I Pesci sono sensibili, pieni di immaginazione e compassione, aperti ai sogni, all’arte e allo spirito.',plus:'empatia, immaginazione, intuito, gentilezza',minus:'fuga dalla realtà, confusione, confini deboli'}
];
L.signs.forEach(s=>{s.inS='in '+s.n;});

L.planets={
 Sun:{n:'Sole',art:'il Sole',your:'il tuo Sole',what:'identità',key:'identità, vitalità, scopo nella vita',tr:'{t} illumina {n}.',dur:'pochi giorni',info:'Il tuo io più profondo: ciò che ti fa sentire viva o vivo, la tua volontà e il tuo scopo. Il segno solare è il «segno zodiacale» che tutti conoscono. La sua casa mostra dove vuoi brillare di più.'},
 Moon:{n:'Luna',art:'la Luna',your:'la tua Luna',what:'emozioni',key:'emozioni, bisogni, istinto, conforto',tr:'{t} smuove le emozioni legate a {n}.',dur:'poche ore',info:'La tua natura emotiva: ciò di cui hai bisogno per sentirti al sicuro, come reagisci d’istinto e come ti prendi cura degli altri. La sua casa mostra dove cerchi conforto.'},
 Mercury:{n:'Mercurio',art:'Mercurio',your:'il tuo Mercurio',what:'mente',key:'mente, comunicazione, apprendimento',tr:'{t} porta pensieri e conversazioni su {n}.',dur:'pochi giorni',info:'Come funziona la tua mente: pensare, parlare, scrivere, imparare e le decisioni di ogni giorno.'},
 Venus:{n:'Venere',art:'Venere',your:'la tua Venere',what:'amore',key:'amore, bellezza, piacere, valori, denaro',tr:'{t} addolcisce {n} e porta armonia.',dur:'pochi giorni',info:'Come e cosa ami: il tuo stile nelle relazioni, ciò che trovi bello, ciò a cui dai valore e il tuo rapporto con il denaro e il piacere.'},
 Mars:{n:'Marte',art:'Marte',your:'il tuo Marte',what:'grinta',key:'grinta, desiderio, coraggio, rabbia',tr:'{t} accende {n} con energia, calore o conflitto.',dur:'circa una settimana',info:'La tua grinta: come insegui ciò che vuoi, la tua energia, il desiderio e il coraggio, e come ti arrabbi.'},
 Jupiter:{n:'Giove',art:'Giove',your:'il tuo Giove',what:'crescita',key:'crescita, fortuna, fede, generosità',tr:'{t} espande e apre {n}.',dur:'da alcune settimane a qualche mese',info:'Dove la vita è generosa: crescita, fortuna, ottimismo, maestri e fede. Dove si trova Giove, sei incoraggiata o incoraggiato a crescere.'},
 Saturn:{n:'Saturno',art:'Saturno',your:'il tuo Saturno',what:'struttura',key:'struttura, disciplina, prove, tempo',tr:'{t} mette alla prova {n} e ti chiede di costruire qualcosa di solido.',dur:'mesi, spesso in più passaggi',info:'Dove la vita chiede impegno: disciplina, limiti, responsabilità e paure. Saturno insegna lentamente, ma ciò che costruisci qui dura.'},
 Uranus:{n:'Urano',art:'Urano',your:'il tuo Urano',what:'cambiamento',key:'cambiamento, libertà, sorpresa, risveglio',tr:'{t} scuote e libera {n}.',dur:'circa un anno, in più passaggi',info:'Dove hai bisogno di libertà e fai le cose a modo tuo: cambiamenti improvvisi, originalità, risveglio. Si muove lentamente, quindi chi è nato intorno al tuo anno ha lo stesso segno; è la casa a renderlo personale.'},
 Neptune:{n:'Nettuno',art:'Nettuno',your:'il tuo Nettuno',what:'sogni',key:'sogni, intuito, compassione, illusione',tr:'{t} ammorbidisce, ispira o confonde {n}.',dur:'da uno a due anni',info:'Dove sogni, idealizzi e ti senti legata o legato a qualcosa di più grande: arte, spiritualità e compassione, ma anche confusione e illusione. Il segno è generazionale; la casa è personale.'},
 Pluto:{n:'Plutone',art:'Plutone',your:'il tuo Plutone',what:'potere',key:'potere, profondità, trasformazione, rinascita',tr:'{t} trasforma lentamente {n}.',dur:'da uno a due anni',info:'Dove incontri il potere e la trasformazione profonda: finali che portano a una rinascita. Il segno è generazionale; la casa è personale.'},
 Node:{n:'Nodo Nord',short:'Nodo',art:'il Nodo Nord',your:'il tuo Nodo Nord',what:'direzione di vita',key:'direzione di vita, il cammino di crescita',tr:'{t} porta incontri importanti legati a {n}.',dur:'diversi mesi',info:'Il Nodo Nord indica la tua direzione di crescita in questa vita: qualità che sembrano poco familiari ma ti aiutano a evolvere. Il punto opposto, il Nodo Sud, è ciò che ti viene già facile.'},
 Chiron:{n:'Chirone',short:'Chirone',art:'Chirone',your:'il tuo Chirone',what:'guarigione',key:'ferite, guarigione, saggezza nata dal dolore',tr:'{t} tocca una vecchia ferita legata a {n} e invita a guarire.',dur:'da diversi mesi a un anno',info:'Chirone è il «guaritore ferito»: dove porti una vecchia ferita o la sensazione di non bastare e dove, lavorandoci, diventi saggio e capace di aiutare gli altri. È un piccolo corpo fra Saturno e Urano e impiega circa 50 anni a percorrere lo zodiaco.'},
 ASC:{n:'Ascendente',art:'l’Ascendente',your:'il tuo Ascendente',what:'immagine di sé',key:'come incontri il mondo, il tuo corpo, la prima impressione',info:'L’Ascendente è il segno che sorgeva all’orizzonte orientale nel momento della tua nascita. È il tuo stile esteriore, il tuo corpo e la prima impressione che dai. Definisce tutte e dodici le case, per questo l’ora esatta di nascita conta.'},
 MC:{n:'Medio Cielo',art:'il Medio Cielo',your:'il tuo Medio Cielo',what:'vocazione',key:'carriera, reputazione, direzione pubblica',info:'Il Medio Cielo è il punto più alto del tema alla tua nascita. Mostra la direzione della tua carriera, la tua immagine pubblica e ciò per cui vuoi essere conosciuta o conosciuto.'}
};
const P=id=>L.planets[id];

L.houses=[
 {short:'Sé',acc:'la propria persona',key:'identità, corpo, aspetto, nuovi inizi',body:'La 1ª casa comincia dal tuo Ascendente, il segno che sorgeva all’orizzonte orientale quando sei nata o nato. Descrive il tuo corpo, il tuo aspetto, la tua prima reazione alla vita e il modo in cui gli altri ti vedono prima di conoscerti. I pianeti qui si vedono molto nella tua personalità.',q:'Come appaio agli altri? Come comincio le cose?'},
 {short:'Denaro',acc:'il denaro',key:'guadagni, beni, autostima',body:'La 2ª casa riguarda ciò che possiedi e ciò a cui dai valore: il denaro che guadagni, i tuoi beni, i talenti con cui puoi vivere e il senso del tuo valore. Mostra come costruisci sicurezza e cosa ti fa sentire tranquilla o tranquillo.',q:'Come guadagno e come spendo? A cosa do valore?'},
 {short:'Comunicazione',acc:'la comunicazione',key:'pensiero, fratelli e sorelle, vicini, brevi viaggi, studio',body:'La 3ª casa governa la mente di tutti i giorni: come pensi, parli, scrivi e impari. Riguarda anche fratelli e sorelle, i vicini, il tuo quartiere e i brevi viaggi. Mostra il tuo stile di comunicazione.',q:'Come penso e come parlo? Come va con fratelli e sorelle?'},
 {short:'Casa',acc:'la casa',key:'famiglia, radici, vita privata, il genitore che si è preso cura di te',body:'La 4ª casa comincia dal Fondo Cielo (IC), il punto più basso del tema. È la casa, la famiglia, le radici e la parte privata di te che nessuno vede. Descrive la casa dell’infanzia, un genitore (spesso quello che si è preso cura di te) e ciò di cui hai bisogno per sentirti al sicuro emotivamente. Parla anche degli ultimi anni della vita.',q:'Cosa significa casa per me? Dove sento di appartenere?'},
 {short:'Amore & creatività',acc:'l’amore e la creatività',key:'storie d’amore, gioco, figli, espressione di sé, gioia',body:'La 5ª casa è la gioia e l’espressione di sé: amore e appuntamenti, creatività, hobby, giochi, figli e tutto ciò che fai solo per piacere. Mostra come giochi, flirti e brilli.',q:'Cosa mi dà gioia? Come amo e come creo?'},
 {short:'Lavoro & salute',acc:'il lavoro quotidiano e la salute',key:'routine quotidiana, cura del corpo, servizio, animali domestici',body:'La 6ª casa è la vita di ogni giorno: routine di lavoro, colleghi, abitudini, salute e come ti prendi cura del corpo. Riguarda anche il servizio, l’aiuto agli altri e gli animali domestici. Mostra come organizzi le giornate e gestisci lo stress.',q:'Qual è il mio ritmo quotidiano? Come mi prendo cura della salute?'},
 {short:'Relazioni',acc:'le relazioni',key:'matrimonio, legami stretti, rivali dichiarati',body:'La 7ª casa comincia dal Discendente, opposto al tuo Ascendente. Riguarda i partner: matrimonio, relazioni stabili, soci e rivali dichiarati. Spesso descrive il tipo di persona che ti attrae, a volte con qualità che non hai ancora espresso tu.',q:'Chi attraggo? Di cosa ho bisogno da un partner?'},
 {short:'Intimità & risorse condivise',acc:'l’intimità e le risorse condivise',key:'sessualità, fiducia, debiti, eredità, cambiamenti profondi',body:'L’8ª casa riguarda ciò che condividi in profondità con gli altri: intimità e sessualità, fiducia, denaro in comune, debiti, tasse ed eredità. È anche la casa della crisi, della perdita e della rinascita, della psicologia e delle cose nascoste. Mostra come gestisci il potere e il lasciar andare.',q:'Come mi lego in profondità? Come attraverso i grandi cambiamenti?'},
 {short:'Viaggi & credenze',acc:'i viaggi e le credenze',key:'filosofia, studi superiori, fede, lunghi viaggi',body:'La 9ª casa allarga il tuo mondo: lunghi viaggi, paesi e culture straniere, università e studi superiori, filosofia, religione e convinzioni. Mostra cosa dà senso alla vita e come cerchi la verità. Studiare astrologia è un’attività della 9ª casa.',q:'In cosa credo? Cosa voglio esplorare?'},
 {short:'Carriera',acc:'la carriera',key:'vocazione, posizione sociale, vita pubblica, ambizioni',body:'La 10ª casa comincia dal Medio Cielo (MC), la cima del tema. È la carriera, l’ambizione, la reputazione e il tuo ruolo pubblico: ciò per cui sei conosciuta o conosciuto. Può descrivere anche il genitore che rappresentava l’autorità e le regole.',q:'Cosa voglio realizzare? Come vede il mondo il mio lavoro?'},
 {short:'Amici & speranze',acc:'gli amici e le speranze',key:'comunità, gruppi, reti, sogni per il futuro',body:'L’11ª casa è la tua comunità: amici, gruppi, reti sociali, cause in cui credi e le tue speranze per il futuro. Mostra le persone che condividono i tuoi ideali e i sogni per cui lavori.',q:'Chi sono le mie persone? Che futuro spero?'},
 {short:'Mondo interiore',acc:'il mondo interiore',key:'solitudine, sogni, inconscio, finali, spiritualità',body:'La 12ª casa è il lato nascosto della vita: l’inconscio, i sogni, la solitudine, il riposo, la spiritualità e i finali. Riguarda luoghi di ritiro come ospedali o rifugi tranquilli, e cose che nascondiamo perfino a noi stessi. I pianeti qui lavorano in silenzio dietro le quinte e si rafforzano con il lavoro interiore.',q:'Cosa devo lasciar andare? Dove trovo pace?'}
];

L.aspects={
 conj:{n:'Congiunzione',v:'in congiunzione con',key:'Le due energie si fondono e si rafforzano a vicenda.',angle:'0°: i pianeti stanno insieme, di solito nello stesso segno, così le loro energie diventano una.'},
 opp:{n:'Opposizione',v:'in opposizione con',key:'Una tensione tra due lati che chiede equilibrio, spesso vissuta attraverso altre persone.',angle:'180°: i pianeti si guardano da lati opposti del tema, a sei segni di distanza, come le due estremità di un’altalena.'},
 tri:{n:'Trigono',v:'in trigono con',key:'Flusso naturale, talento e sostegno.',angle:'120°: quattro segni di distanza, di solito nello stesso elemento, così si capiscono facilmente.'},
 sq:{n:'Quadratura',v:'in quadratura con',key:'Un attrito che ti spinge ad agire e a crescere.',angle:'90°: tre segni di distanza, in segni con la stessa modalità ma elementi diversi, così vogliono cose diverse.'},
 sext:{n:'Sestile',v:'in sestile con',key:'Un’apertura facile che premia un piccolo sforzo.',angle:'60°: due segni di distanza, in elementi amici (fuoco con aria, terra con acqua).'},
 qx:{n:'Quinconce',v:'in quinconce con',key:'Un accostamento scomodo che richiede piccoli aggiustamenti continui.',angle:'150°: cinque segni di distanza, in segni senza nulla in comune, così devono adattarsi di continuo.'}
};
L.el={fire:{n:'fuoco',info:'I segni di fuoco (Ariete, Leone, Sagittario) sono entusiasti, spontanei e trascinanti.'},earth:{n:'terra',info:'I segni di terra (Toro, Vergine, Capricorno) sono pratici, pazienti e concentrati sul mondo reale e concreto.'},air:{n:'aria',info:'I segni d’aria (Gemelli, Bilancia, Acquario) vivono di idee, conversazioni e relazioni con le persone.'},water:{n:'acqua',info:'I segni d’acqua (Cancro, Scorpione, Pesci) vivono attraverso emozioni, intuito ed empatia.'}};
L.mod={cardinal:{n:'cardinale',info:'I segni cardinali aprono ogni stagione, quindi avviano le cose e prendono l’iniziativa.'},fixed:{n:'fisso',info:'I segni fissi stanno nel mezzo di ogni stagione, quindi restano saldi, leali e portano a termine ciò che iniziano.'},mutable:{n:'mobile',info:'I segni mobili chiudono ogni stagione, quindi si adattano, cambiano e preparano ciò che viene dopo.'}};
L.htype={angular:{n:'angolare',info:'Le case angolari (1, 4, 7, 10) iniziano dai quattro angoli del tema. I pianeti qui agiscono in modo forte e visibile.'},succedent:{n:'succedente',info:'Le case succedenti (2, 5, 8, 11) costruiscono e conservano ciò che le angolari avviano: denaro, gioia, potere condiviso e comunità.'},cadent:{n:'cadente',info:'Le case cadenti (3, 6, 9, 12) riguardano l’apprendimento, l’adattamento e la preparazione. I pianeti qui lavorano attraverso la mente e il servizio.'}};
L.cats={
 love:{n:'Amore',learn:'L’amore si legge dalla 5ª casa (romanticismo, appuntamenti) e dalla 7ª casa (partner), e da Venere, Marte e la Luna.',adv:['Una giornata calda e aperta per l’amore. Di’ ciò che senti, organizza un appuntamento o scrivi a qualcuno.','Una giornata tranquilla in amore. I piccoli gesti gentili contano più dei grandi discorsi.','Oggi i sentimenti possono scontrarsi. Ascolta prima di reagire e non mettere alla prova l’altra persona.']},
 work:{n:'Lavoro & carriera',learn:'Il lavoro si legge dalla 10ª casa (carriera, reputazione) e dalla 6ª casa (lavoro quotidiano), dal Medio Cielo, da Saturno e dal Sole.',adv:['Buona giornata per proporre idee, chiedere qualcosa o mostrare il tuo lavoro.','Una giornata di lavoro di routine. Smaltisci le cose da fare e vai avanti.','Possibili attriti o ritardi. Controlla bene i dettagli e non forzare le grandi decisioni.']},
 money:{n:'Denaro',learn:'Il denaro si legge dalla 2ª casa (ciò che guadagni e possiedi) e dall’8ª casa (denaro condiviso, debiti), con Venere e Giove.',adv:['Favorevole per acquisti programmati, trattative o guadagni.','Niente di speciale con il denaro. Rispetta il tuo budget.','Evita acquisti d’impulso, affari rischiosi e prestiti oggi.']},
 energy:{n:'Energia & salute',learn:'Energia e salute si leggono dalla 1ª casa (il tuo corpo) e dalla 6ª casa (abitudini, salute), dall’Ascendente, da Marte e dal Sole.',adv:['L’energia è alta. Muoviti, fai sport, inizia qualcosa di nuovo.','Energia nella norma. Mantieni un ritmo regolare e dormi bene.','Potresti sentirti stanca o stanco, o irritabile. Riposa, bevi acqua e non esagerare.']},
 mind:{n:'Mente & parole',learn:'Pensiero e comunicazione si leggono dalla 3ª casa (mente quotidiana, messaggi) e dalla 9ª casa (studio, convinzioni), con Mercurio.',adv:['Mente lucida. Ottimo per studiare, scrivere e fare conversazioni importanti.','Va bene per chiacchiere, commissioni e burocrazia.','Fraintendimenti probabili. Rileggi i messaggi prima di inviarli.']},
 home:{n:'Casa & famiglia',learn:'Casa e famiglia si leggono dalla 4ª casa (radici, casa) e dalla Luna (cura, appartenenza).',adv:['Una bella giornata per la famiglia, per cucinare e rendere accogliente il tuo spazio.','Una giornata tranquilla a casa.','Possibili tensioni in famiglia. Lascia un po’ di spazio agli altri.']},
 social:{n:'Amici & vita sociale',learn:'Amici e vita sociale si leggono dall’11ª casa (amici, gruppi) e dalla 5ª casa (divertimento), con Venere, Giove e Urano.',adv:['Di’ di sì agli inviti. Amici e gruppi portano fortuna.','Una giornata sociale normale.','Oggi non tutti saranno dalla tua parte. Scegli con cura la tua compagnia.']},
 inner:{n:'Mondo interiore',learn:'La vita interiore e spirituale si legge dalla 12ª casa (inconscio, riposo) e dalla 9ª casa (senso), con Nettuno, la Luna e Plutone.',adv:['Il tuo intuito è forte. Medita, scrivi un diario e fai caso ai sogni.','Prenditi un po’ di tempo tranquillo per te.','Vecchie preoccupazioni possono riaffiorare. Sii gentile con te stessa o te stesso e riposa.']}
};
L.groups={
 long:{t:'Transiti a lungo termine',d:'Giove, Saturno, Urano, Nettuno, Plutone e il Nodo si muovono lentamente, quindi restano su un punto per mesi o anche anni. Segnano i grandi capitoli e le lezioni di questo periodo della tua vita.'},
 short:{t:'Transiti a breve termine',d:'Il Sole, Mercurio, Venere e Marte passano su un punto in pochi giorni o settimane. Portano stati d’animo, conversazioni, incontri ed eventi, e spesso «accendono» i temi a lungo termine.'},
 moon:{t:'La Luna di oggi',d:'La Luna si muove di circa 13° al giorno, quindi i suoi aspetti durano solo poche ore. Colorano il tuo umore e il tuo istinto.'}
};
L.signTime={Moon:'circa 2 giorni e mezzo',Sun:'circa 1 mese',Mercury:'circa 3 settimane',Venus:'circa 4 settimane',Mars:'circa 6-7 settimane',Jupiter:'circa 1 anno',Saturn:'circa 2 anni e mezzo',Uranus:'circa 7 anni',Neptune:'circa 14 anni',Pluto:'da 12 a 30 anni'};
L.cycle={Moon:'circa 27 giorni',Sun:'1 anno',Mercury:'circa 1 anno',Venus:'circa 1 anno',Mars:'circa 2 anni',Jupiter:'circa 12 anni',Saturn:'circa 29 anni',Uranus:'circa 84 anni',Neptune:'circa 165 anni',Pluto:'circa 248 anni'};
L.levels={beginner:'Principianti',intermediate:'Intermedio',hard:'Difficile',expert:'Esperti'};
L.games={
 glyphs:{t:'Simboli lampo',d:'Guarda un simbolo e indovina il pianeta o il segno.'},
 rulers:{t:'Chi governa?',d:'Abbina ogni segno al suo pianeta governatore.'},
 elements:{t:'Elementi & modalità',d:'Fuoco, terra, aria, acqua; cardinale, fisso, mobile.'},
 houses:{t:'Le chiavi delle case',d:'Impara cosa governa ciascuna delle dodici case.'},
 aspects:{t:'Trova l’aspetto',d:'Due pianeti, due gradi. Che aspetto formano?'},
 mine:{t:'Il mio tema',d:'Domande sulle tue posizioni, per imparare il tuo tema a memoria.'},
 timing:{t:'I tempi dei transiti',d:'Quanto durano i transiti, a lungo o breve termine, applicativi o separativi.'},
 degrees:{t:'Detective dei gradi',d:'Converti le posizioni da 0 a 360° in segno e grado, e viceversa.'},
 aspectpro:{t:'Maestro degli aspetti',d:'Gradi esatti, orbite reali, aspetti fuori segno e la risposta trappola: nessun aspetto.'},
 rulersmine:{t:'Governatori delle case',d:'Segui la catena nel tuo tema: quale pianeta governa ogni casa e dove si trova.'},
 combos:{t:'Leggi la combinazione',d:'Unisci pianeta, segno e casa in un significato, come si fa nella vera astrologia.'},
 domains:{t:'Chi governa cosa',d:'Quale segno governa un pianeta e quale pianeta riguarda quale tema.'},
 natural:{t:'Case e segni',d:'Ogni casa rispecchia un segno e il suo governatore: abbina segno, casa e pianeta.'},
 whoswhere:{t:'Chi abita dove?',d:'Quale dei tuoi pianeti si trova in una certa casa del tuo tema.'},
 dignity:{t:'A casa o fuori casa?',d:'Domicilio, esilio, esaltazione e caduta: dove ogni pianeta è forte o fatica.'},
 exam:{t:'Grande esame',d:'15 domande miste da tutti i giochi, 20 secondi ciascuna. Se finisce il tempo, conta come sbagliata.'}
};

L.retroInfo={"Chiron": "Ferite e guarigione. Vecchie ferite e vecchi schemi riaffiorano perché tu possa guardarli con gentilezza. Utile per terapia, perdono e autocompassione; meno per forzare ciò che fa ancora male.", "Mercury": "Pensiero, parola, viaggi e tecnologia. I piani slittano e i messaggi si confondono. Ottimo per rileggere, correggere e riallacciare i contatti; meglio non firmare cose importanti di fretta.", "Venus": "Amore, denaro e gusto. Tornano vecchie fiamme e vecchie domande su ciò che conta per te. Rivedi relazioni e spese invece di iniziarne di nuove.", "Mars": "Energia e rabbia. La forza cala o si rivolge all'interno e spingere troppo si ritorce contro. Riposa, ripensa il piano ed evita litigi su vecchie questioni.", "Jupiter": "Crescita e fortuna. L'espansione è più interiore che esteriore: riesamina convinzioni, obiettivi e cosa significa «abbastanza».", "Saturn": "Dovere e struttura. È il momento di controllare le fondamenta e le regole con cui vivi e di riprenderti le responsabilità che avevi ceduto.", "Uranus": "Cambiamento e libertà. La spinta a liberarti lavora sotto traccia, come inquietudine interiore prima di una scossa esterna.", "Neptune": "Sogni e intuizione. Le illusioni si diradano e vedi ciò che era nebbioso. Utile per guardare con onestà ideali e fughe.", "Pluto": "Potere e profondità. Lenta trasformazione interiore: vecchie paure, controllo e ciò che devi lasciare andare."};
const RI=id=>L.retroInfo[id]||'';
L.moonPhases=["Luna nuova", "Luna crescente", "Primo quarto", "Gibbosa crescente", "Luna piena", "Gibbosa calante", "Ultimo quarto", "Luna calante"];
L.moonAdvice=["Quiete e novità: fissa le intenzioni e pianta semi.", "Lo slancio cresce: fai i primi piccoli passi.", "Momento di decidere: supera i primi ostacoli.", "Rifinisci e aggiusta: ci sei quasi, continua a curare i dettagli.", "Energia ed emozioni al massimo: festeggia, condividi, nota cosa è maturo.", "Ringrazia e condividi ciò che hai imparato.", "Lascia andare: rilascia ciò che non funziona più.", "Riposa e recupera prima del prossimo ciclo."];
L.returnInfo={"Jupiter": "Ritorno di Giove (ogni circa 12 anni): un nuovo ciclo di crescita, fortuna e fiducia. Ottimo per nuovi obiettivi e viaggi.", "Saturn": "Ritorno di Saturno (ogni circa 29 anni): il grande passaggio all’età adulta. È il momento di costruire la vita su basi solide e lasciare ciò che non ti appartiene.", "Chiron": "Ritorno di Chirone (ogni circa 50 anni): una vecchia ferita torna per essere compresa e finalmente guarita.", "Node": "Ritorno del Nodo Nord (ogni circa 18,6 anni): un riavvio della direzione di vita, con svolte che sembrano destino."};
L.progInfo={"Sun": "Il tuo capitolo centrale: il segno che colora chi stai diventando. Cambia segno solo ogni circa 30 anni.", "Moon": "Il tuo capitolo emotivo: l’umore e i bisogni degli ultimi due anni e mezzo. Cambia segno ogni circa 2 anni e mezzo, quindi segna epoche chiare della tua vita.", "Mercury": "Come si sviluppano la tua mente e il tuo modo di comunicare.", "Venus": "Come si sviluppano il tuo amore, i tuoi valori e il tuo gusto.", "Mars": "Come si sviluppano la tua energia e il tuo desiderio."};
L.ui={
 digHome:"Forte qui: questo pianeta è in un segno che governa, quindi lavora con facilità.",digExalt:"Onorato qui: questo pianeta è in esaltazione in questo segno, come un ospite gradito.",digDet:"Delicato qui: questo pianeta è in esilio, opposto al segno che governa, quindi lavora con fatica.",digFall:"Fragile qui: questo pianeta è in caduta, opposto al segno dove è esaltato, quindi chiede pazienza.",plainWords:"In parole semplici",
 segMatch:"Confronto",matchTitle:"Confronta con un altro tema",matchNote:"Confronta due temi: dove scorrono, dove scintillano e dove ciascuno entra nella vita dell’altro.",matchNone:"Aggiungi un secondo tema nella scheda Profilo per confrontare.",matchBig3:"I tre grandi",matchAsp:"I legami più forti",matchHouses:"Dove cade ciascuno nel tema dell’altro",matchEase:"scorre facile",matchTension:"crea scintille e attrito",matchFusion:"si fonde con forza",matchSumEase:"Per lo più fluido: le cose vengono naturali.",matchSumMix:"Un mix di facilità e scintille.",matchSumSpark:"Molte scintille e attrito: eccitante, ma chiede pazienza.",matchWith:"Confronta con",
 segCycles:"Cicli",cycTitle:"I tuoi grandi cicli",cycNote:"I pianeti lenti tornano dove si trovavano alla tua nascita. Ogni ritorno apre un nuovo capitolo.",retNext:"Prossimo",retLast:"Ultimo",retNow:"In corso ora",passes:"passaggi",age:"età",progTitle:"Il tuo capitolo interiore (tema progredito)",progNote:"Le progressioni fanno avanzare il tuo tema di un giorno per ogni anno di vita. Mostrano il lento capitolo interiore che vivi, sotto i transiti di ogni giorno.",progUntil:"fino a circa",
 todayTitle:"Oggi nel cielo",
 segSigns:"Segni",segSky:"Cielo ora",segRetro:"Retrogradi",fNow:"Adesso",fSoon:"In arrivo",fBirth:"Il mio tema",badgeBirth:"Alla nascita",retroWhatQ:"Cosa significa retrogrado?",rNoteNow:"I pianeti retrogradi oggi e come ciascuno tocca il tuo tema. Tocca una scheda per leggere di più.",rNoteSoon:"Le retrogradazioni in arrivo nei prossimi due anni. Tocca una scheda per leggere di più.",rNoteBirth:"Questi pianeti erano retrogradi alla tua nascita, quindi agiscono in modo più personale e interiore. Tocca una scheda per leggere di più.",
 retroRulesH:"Case che governa nel tuo tema",retroHitsH:"Cosa attraversa nel tuo tema",retroHitsNote:"Ogni volta che passa su uno di questi punti, quella parte di te si attiva, spesso fino a tre volte per via dell’andirivieni.",retroNoHits:"Questa volta non attraversa nessun punto importante del tuo tema.",retroNatalAspH:"I suoi legami nel tuo tema natale",
 calTitle:"Calendario delle retrogradazioni",calNote:"Quando ogni pianeta, da Mercurio a Plutone, diventa retrogrado nei prossimi due anni, in quali segni e case del tuo tema passa e come ti tocca.",calNow:"Retrogrado ora",
 skyTitle:"Adesso nel cielo",skyNote:"Dove si trova ogni pianeta in questo momento, con il segno in cui è e la casa del tuo tema che sta attraversando. Si aggiorna da solo col passare del tempo; usa i pulsanti per spostarti tra i giorni.",skyLive:"Dal vivo",
 sub:'Un almanacco del tuo cielo, ieri, oggi e domani',editBirth:'Dati di nascita',language:'Lingua',
 tabChart:'Tema',tabTransits:'Transiti',tabLearn:'Impara',tabMe:'Profilo',tabPlanets:"Pianeti",planetsTitle:"Pianeti nei segni",planetsNote:"Tutti i pianeti del tuo tema, in fila con il segno in cui si trovano. Tocca un pianeta per leggerne di più nella scheda Tema.",retroTitle:"Retrogradazione ℞",retroNatalH:"Nel tuo tema natale",retroNowH:"Nel cielo adesso",retroNone:"Nessuno dei tuoi pianeti era retrogrado alla nascita.",retroNoneNow:"Oggi nessun pianeta è retrogrado.",retroGuide:"<p>Un pianeta è <b>retrogrado</b> (℞) quando, visto dalla Terra, sembra muoversi all'indietro nel cielo. È un'illusione ottica, come un treno che ne supera uno più lento, ma in astrologia si legge come l'energia di quel pianeta che si rivolge all'interno: più lenta, più riflessiva, adatta a rivedere più che a iniziare.</p><ul class=\"ctx\"><li><span>Retrogrado nel tema natale</span>Quel pianeta agisce in modo più personale e interiore. Non è un male: spesso è un dono che sviluppi coi tuoi tempi.</li><li><span>Retrogrado ora, nel cielo</span>Un periodo per rivedere, rifare e ripensare i temi di quel pianeta. La casa che attraversa mostra quale area della tua vita lo sente.</li><li><span>Di nuovo diretto</span>Quando il pianeta torna diretto (avanza), ciò che era bloccato ricomincia a scorrere.</li></ul>",
 exampleBanner:'<b>Questo è un tema di esempio.</b> Inserisci data, ora e luogo di nascita per vedere il tuo vero cielo.',enterBirth:'Inserisci i dati di nascita',
 viewing:'Tema:',chooseChart:'Scegli un tema',guideChart:'Come leggere il tuo tema',legSoft:'trigono / sestile',legHard:'quadratura / opposizione',legQx:'quinconce',
 tapAny:'Tocca un pianeta, un segno o il numero di una casa.',placements:'Posizioni',aspectsInChart:'Gli aspetti del tuo tema',
 tidesNote:'Le valutazioni derivano dai transiti sul tuo tema natale in questo giorno. Tocca una categoria per scoprire il perché e imparare l’astrologia che c’è dietro.',
 prevYear:'Anno precedente',prevMonth:'Mese precedente',nextMonth:'Mese successivo',nextYear:'Anno successivo',today:'Oggi',todayLow:'oggi',
 moonSignLeg:'segno della Luna',flowing:'armonici',challenging:'tesi',conjOrSign:'congiunzione o cambio di segno',transitsFor:'Transiti per:',
 whatTransit:'Che cos’è un transito?',
 whatTransitHtml:'<p>I pianeti continuano a muoversi dopo la tua nascita. Un <b>transito</b> avviene quando un pianeta del cielo di oggi forma un aspetto (un angolo) con un pianeta o un punto del tuo tema natale. Questo risveglia la parte di te, e l’area della vita, che quel pianeta natale rappresenta.</p><ul class="ctx"><li><span>Transiti a lungo termine: i capitoli</span>Giove, Saturno, Urano, Nettuno e Plutone restano su un punto per mesi, quindi portano i grandi temi di un anno.</li><li><span>Transiti a breve termine: i giorni</span>Il Sole, Mercurio, Venere e Marte passano in giorni o settimane, portando stati d’animo, conversazioni ed eventi. La Luna cambia segno ogni due giorni e mezzo circa e colora il tuo umore.</li><li><span>Applicativo e separativo</span>Applicativo significa che il transito si sta ancora avvicinando all’esattezza. Separativo significa che ha raggiunto il culmine e si sta affievolendo.</li><li><span>Tutto il tema</span>Two Fishes mostra anche in quale casa passa il pianeta in transito, quali case governa il pianeta natale toccato e a quali altri pianeti è legato, così vedi tutta la storia.</li></ul>',
 skyOn:'Il cielo del',m1:'−1 mese',w1:'−1 settimana',d1:'−1 giorno',p1d:'+1 giorno',p1w:'+1 settimana',p1m:'+1 mese',play:'Avvia ▸',pause:'Pausa ❚❚',jumpDate:'Vai a una data',moveTime:'Muoviti nel tempo',
 ago2:'2 anni fa',ahead2:'tra 2 anni',swipeHint:'Scorri la ruota a sinistra o a destra per cambiare giorno',outerRing:'anello esterno: il cielo di questa data',innerRing:'interno: il tuo tema natale',
 activeTransits:'Transiti attivi su tutto il tuo tema',activeNote:'Ogni pianeta, l’Ascendente, il Medio Cielo e il Nodo Nord, con le case che ciascuno tocca.',
 lifeAreas:'Le aree della vita illuminate ora',lifeAreasNote:'Ogni casa riceve punti per i pianeti in transito che la attraversano, per gli aspetti ai pianeti al suo interno e per gli aspetti al pianeta che la governa.',
 yearAhead:'L’anno che viene: transiti lenti',yearAheadNote:'Giove, Saturno, Urano, Nettuno, Plutone e il Nodo rispetto a ogni punto del tuo tema. Il cerchio indica il giorno esatto. Tocca una riga per andarci.',
 learnIntro:'Impara l’alfabeto dell’astrologia, poi esercitati sul tuo tema. Scegli un livello.',
 install:'Installa',savedCharts:'Temi salvati',savedNote:'Aggiungi i temi di amici, familiari o del partner e passa dall’uno all’altro. I temi restano salvati su questo dispositivo.',addChart:'+ Nuovo tema',
 birthNote:'L’ora e il luogo esatti di nascita determinano l’Ascendente e le case. I tuoi dati restano su questo dispositivo.',
 fName:'Nome',fDate:'Data di nascita',fTime:'Ora di nascita',fUnknown:'Ora sconosciuta',fPlace:'Luogo di nascita',fLat:'Latitudine (N +, S −)',fLon:'Longitudine (E +, O −)',fTz:'Fuso orario',fSys:'Sistema di case',sysWhole:'Segni interi',sysEqual:'Case uguali',
 cancel:'Annulla',footer:'Zodiaco tropicale · posizioni geocentriche con Astronomy Engine',close:'Chiudi',details:'Dettagli',
 ariaBiwheel:'Transiti intorno al tuo tema natale',ariaWheel:'Ruota del tema natale',
 natalPoint:'Punto natale',yourPlacement:'La tua posizione',atBest:'Al meglio',watchFor:'Attenzione a',type:'Tipo',housesItRules:'Case che governa',chartRuler:'Il governatore del tuo tema',
 transitsNow:'Transiti che lo toccano ora',applying:'applicativo',separating:'separativo',nothingInOrb:'Nulla entro l’orbita oggi.',
 aspects:'Aspetti',aspectsNote:'Gli aspetti sono angoli tra i pianeti. Mostrano quali parti di te collaborano e quali tirano in direzioni opposte.',noAspects:'Nessun aspetto maggiore.',
 sign:'Segno',inYourChart:'Nel tuo tema',planetsHere:'Pianeti qui',noneOfYours:'nessuno dei tuoi pianeti',houseCusps:'Cuspidi delle case',intercepted:'nessuna casa comincia in questo segno (è intercettato)',itsRuler:'Il suo governatore',
 house:'Casa',questions:'Domande a cui risponde:',planetsInside:'Pianeti all’interno.',more:'altro',
 emptyHouse:'<b>Nessun pianeta all’interno.</b> Una casa vuota non è un brutto segno. Significa solo che quest’area si legge attraverso il segno sulla cuspide e il suo governatore.',
 passingNow:'In transito ora',noTransitHere:'Nessun pianeta in transito in questa casa al momento.',aspectInChart:'Aspetto nel tuo tema',orb:'orbita',
 moonTransit:'<b>Transito della Luna.</b> Dura solo poche ore: uno stato d’animo passeggero, non un capitolo di vita.',
 longTermText:'<b>Transito a lungo termine.</b> Un pianeta lento, quindi è un capitolo della tua vita più che un singolo giorno. Lo senti crescere, culminare e affievolirsi.',
 shortTermText:'<b>Transito a breve termine.</b> Un pianeta veloce, quindi sono pochi giorni di movimento: un evento, uno stato d’animo o una conversazione.',
 transitReading:'Transito · lettura di tutto il tema',applyingLong:'applicativo (in crescita)',separatingLong:'separativo (in calo)',
 whereHappening:'Dove succede',whatTouches:'Cosa tocca',visitorHouses:'Le case del «visitatore»',chainRulership:'Catena dei governatori',ripple:'L’onda sugli aspetti natali',
 aspectsToChart:'Aspetti al tuo tema',noAspectsToday:'Nessun aspetto entro l’orbita oggi.',timeUnknown:'ora sconosciuta',
 sunSign:'Segno solare',moonSign:'Segno lunare',risingSign:'Ascendente',point:'Punto',degree:'Grado',
 placidusFallback:'Placidus non si può calcolare a questa latitudine, quindi vengono mostrate case uguali.',
 timeUnknownNote:'Ora di nascita sconosciuta: la Luna potrebbe differire di qualche grado, e Ascendente e case sono solo indicativi (calcolati per mezzogiorno).',
 noneInOrb:'Nessuno entro l’orbita in questa data.',noTransits:'Nessun transito entro l’orbita in questa data.',outOfOrb:'Questo transito è fuori orbita in questa data.',
 todaysTides:'Le Maree di Oggi',theTides:'Le Maree',why:'Perché',calmArea:'Nessun transito tocca questa parte del tuo tema oggi, quindi resta tranquilla.',learn:'Impara:',
 learnTail:'Gli aspetti armonici (trigono, sestile) aiutano; quelli tesi (quadratura, opposizione) mettono alla prova.',comeBack:'Torna domani',exact:'esatto',
 yourDay:'La tua giornata',noExact:'Nessun transito diventa esatto in questo giorno. La ruota e l’elenco qui sotto mostrano tutto ciò che è ancora entro l’orbita.',
 selectedDate:'data scelta',noSlow:'Nessun transito lento entro l’orbita in questo periodo.',hAbbr:'C',
 optLong:'A lungo termine (mesi o anni)',optShort:'A breve termine (giorni o settimane)',optApplying:'Applicativo (si avvicina)',optSeparating:'Separativo (si allontana)',noAspect:'Nessun aspetto maggiore',
 notPlayed:'Non ancora giocato',correct:'Giusto!',seeScore:'Vedi il punteggio',nextQ:'Prossima domanda',backGames:'Torna ai giochi',
 msgHigh:'Splendido. Lo sai a memoria.',msgMid:'Bel lavoro. Un altro giro e lo fissi.',msgLow:'Un buon inizio. Ogni giro ti insegna lo schema.',playAgain:'Gioca ancora',
 otherCity:'Altro (inserisci le coordinate)',viewingBadge:'aperto',edit:'Modifica',delConfirm:'Tocca di nuovo per eliminare',del:'Elimina',newChart:'Nuovo tema',editPrefix:'Modifica: ',addChartBtn:'Aggiungi tema',save:'Salva',
 errDate:'Inserisci una data di nascita.',errTime:'Inserisci l’ora di nascita oppure spunta «Ora sconosciuta».',errLatLon:'Latitudine e longitudine devono essere numeri.',errTz:'Fuso orario non riconosciuto. Scrivi per esempio Europe/Rome oppure UTC+1.',
 installHtml:'<b>Metti Two Fishes nella schermata Home.</b> Si apre a schermo intero come qualsiasi app e funziona anche offline.',
 installIos:'<b>Metti Two Fishes nella schermata Home.</b> In Safari tocca il pulsante Condividi, poi <b>Aggiungi alla schermata Home</b>. Si apre a schermo intero e funziona offline.',
 installOther:'<b>Metti Two Fishes nella schermata Home.</b> Apri il menu del browser e scegli <b>Aggiungi a schermata Home</b> o <b>Installa app</b>.',
 libFailTitle:'Le tavole astronomiche non si sono caricate',libFail:'Impossibile raggiungere la libreria astronomica. Controlla la connessione e ricarica la pagina.',
 myChart:'Il mio tema',chart:'Tema'
};

L.f={
 aspMeaning:(a,b,c)=>`${cap(L.planets[a].what)} e ${L.planets[b].what} ${c==='soft'?'si sostengono con facilità':c==='hard'?'tirano in direzioni diverse, quindi cresci trovando equilibrio':'lavorano insieme come un’unica forza'}.`,
 voidMoon:(t,s)=>`La Luna è fuori corso fino a ${t}, quando entra in ${s}. Buon momento per riposare e concludere, non per iniziare cose nuove.`,moonNext:(a,p,t)=>`Prossimo aspetto della Luna: ${a} · ${p}, alle ${t}.`,
 retroEnds:n=>`Finisce tra ${n>=60?Math.round(n/30.4)+' mesi':n+(n===1?' giorno':' giorni')}`,retroStarts:n=>`Inizia tra ${n>=60?Math.round(n/30.4)+' mesi':n+(n===1?' giorno':' giorni')}`,
 retroPeriod:(id,h1,h2)=>`${RI(id)} Per te riguarda: ${L.houses[h1-1].short}${h2!==h1?' → '+L.houses[h2-1].short:''}.`,
 retroNatal:(id,s,h)=>`${RI(id)} Nel tuo tema si manifesta in: ${L.houses[h-1].short}, ${L.signs[s].how}.`,
 retroNow:(id,s,h,end)=>`${end?`Torna diretto verso il <b>${end}</b>. `:''}${RI(id)} Per te riguarda: ${L.houses[h-1].short}.`,
 transitTitle:(t,a,n)=>`${P(t).n} ${L.aspects[a].v} ${P(n).your}`,
 dispHome:(id,s)=>`${cap(P(id).art)} si trova ${L.signs[s].inS}, il segno che governa, quindi agisce con una forza in più.`,
 disp:(s,r,rs,rh)=>`Il governatore ${L.signs[s].gen} è ${P(r).art}, che si trova ${L.signs[rs].inS} ${inYourH(rh)}, quindi l’area ${area(rh)} colora il modo in cui si esprime questa posizione.`,
 cuspOf:h=>`cuspide ${della(h)} casa`,
 howRead:(id,s,h)=>`<b>Come leggerlo.</b> Il pianeta è il <i>cosa</i>: ${P(id).what}. Il segno è il <i>come</i>: ${L.signs[s].how}. La casa è il <i>dove</i>: nell’area ${area(h)}.`,
 houseHeading:(h,isAngle)=>isAngle?`Apre ${yourH(h)}`:cap(inYourH(h)),
 rulesPara:(id,r,h)=>`${cap(P(id).art)} governa ${houseList(r)}. Un pianeta porta i temi delle case che governa nella casa in cui si trova, quindi ${areaA(r)} ${r.length>1?'sono collegate':'è collegata'} all’area ${area(h)} nella tua vita.`,
 retro:id=>`<b>℞ Moto retrogrado.</b> Vista dalla Terra, questa energia (${P(id).n}) sembrava muoversi all’indietro quando sei nata o nato. Tende a rivolgersi verso l’interno: più riflessiva, più lenta a mostrarsi, spesso molto personale.`,
 chartRuler:(r,rs,rh)=>`Il pianeta che governa il tuo Ascendente è il governatore del tuo tema: <b>${P(r).n}</b>, ${L.signs[rs].inS} ${inYourH(rh)}. È come il capitano del tuo tema, quindi tutto ciò che tocca ${P(r).art} tocca te personalmente.`,
 ruledBy:r=>`governatore: ${P(r[0]).n}${r[1]?` (moderno) e ${P(r[1]).n} (tradizionale)`:''}`,
 signCusps:(i,c)=>`qui comincia ${c.length>1?'la '+list(c.map(x=>x+'ª'))+' casa':la(c[0])+' casa'}, quindi affronti ${areaA(c)} ${L.signs[i].how}`,
 houseTitle:n=>`${cap(L.hl(n))}: ${L.houses[n-1].short}`,
 beginsAt:(d,s)=>`comincia a ${d} ${L.signs[s].gen}`,
 yourHouseTitle:n=>`La tua ${n}ª casa`,
 cuspPara:(n,s)=>`<b>${L.signs[s].n} sulla cuspide.</b> Affronti l’area ${area(n)} ${L.signs[s].how}. ${L.signs[s].body}`,
 planetInHouse:(id,n)=>`${cap(P(id).art)} porta ${P(id).key.split(', ').slice(0,2).join(' e ')} nell’area ${area(n)}.`,
 rulerPara:(r,rh,n)=>`<b>Il suo governatore: ${P(r).n}.</b> ${cap(P(r).art)} governa questa casa e si trova ${inYourH(rh)}. ${rh===n?'Si trova nella casa che governa, il che rende quest’area forte e autonoma.':`Così l’area ${area(n)} è collegata all’area ${area(rh)} nella tua vita.`}`,
 naturalSign:i=>`Il segno naturale di questa casa è ${L.signs[i].art}.`,
 orbExplain:o=>`L’orbita (${o}) indica quanto manca all’aspetto esatto. Più è piccola, più lo senti forte.`,
 aspectLife:(h1,h2,a,b,cls)=>`Nella tua vita questo collega l’area <b>${area(h1)}</b> con l’area <b>${area(h2)}</b>. La tua parte «${P(a).what}» e la tua parte «${P(b).what}» ${cls==='soft'?'si sostengono a vicenda':cls==='hard'?'si spingono a vicenda, creando tensione e crescita':cls==='neu'?'lavorano come una sola':'hanno bisogno di continui piccoli aggiustamenti'}.`,
 inOrb:(s,e,days,ex)=>{const m=Math.round(days/30.4);return `Entro l’orbita dal <b>${s}</b> al <b>${e}</b>, circa ${days>60?m+(m===1?' mese':' mesi'):days+(days===1?' giorno':' giorni')}.${ex.length?` Esatto: ${ex.join(', ')}.`:''}${ex.length>1?' È esatto più di una volta perché il pianeta va in moto retrogrado e ripassa sul punto.':''}`;},
 tr:(t,n)=>P(t).tr.replace('{t}',cap(P(t).art)).replace('{n}',P(n).your),
 lasts:t=>`Un transito di questo tipo dura ${P(t).dur}.`,
 whereHappening:(t,s,h)=>`${cap(P(t).art)} ora si trova ${L.signs[s].inS} e attraversa ${yourH(h)}: ${L.houses[h-1].key}.`,
 touchAngle:h=>h===1?`Il tuo Ascendente apre la 1ª casa: ${L.houses[0].key}.`:`Il tuo Medio Cielo apre la 10ª casa: ${L.houses[9].key}.`,
 touchNatal:(n,h)=>`${cap(P(n).your)} (${P(n).key}) si trova ${inYourH(h)}: ${L.houses[h-1].key}.`,
 nRules:(n,r)=>`${cap(P(n).your)} governa ${houseList(r)}, quindi anche queste aree ne risentono.`,
 tRules:(t,r)=>`Nel tuo tema ${P(t).art} governa ${houseList(r)}, quindi questi temi arrivano insieme al transito.`,
 ripple:(n,arr)=>`${cap(P(n).your)} è legato dalla nascita a: ${arr.join(', ')}, quindi anche questi pianeti vengono smossi.`,
 skyOnDate:d=>`Il cielo del ${d}`,
 transiting:id=>`${P(id).n} in transito`,
 inYourHouse:h=>inYourH(h),
 transitPassing:(id,h,r)=>`${cap(P(id).art)} (${P(id).key}) attraversa ${yourH(h)}: ${L.houses[h-1].key}.${r.length?` Nel tuo tema governa ${list(r.map(x=>`${la(x)} casa`))}.`:''}`,
 transitRowSub:(th,nh,r)=>`${L.hl(th)} → ${L.hl(nh)} natale${r.length?' · governa '+r.map(x=>x+'ª').join(', '):''}`,
 guideChart:(pl,vs,vh,ms,mh)=>`<p>Il tema natale è una mappa del cielo nel momento in cui sei nata o nato, visto dal luogo di nascita. Ha quattro ingredienti:</p>
  <ul class="ctx"><li><span>I pianeti sono il «cosa»</span>Dieci energie dentro di te: ${pl}.</li>
  <li><span>I segni sono il «come»</span>I dodici segni sull’anello esterno danno a ogni pianeta il suo stile. Ogni segno appartiene a un elemento (fuoco, terra, aria, acqua) e a una modalità (cardinale, fisso, mobile).</li>
  <li><span>Le case sono il «dove»</span>Le dodici fette numerate sono aree della vita, contate in senso antiorario dal tuo Ascendente (AC, a sinistra). Le case dipendono dall’ora e dal luogo di nascita.</li>
  <li><span>Gli aspetti sono conversazioni</span>Le linee al centro uniscono i pianeti con angoli significativi. Le linee turchesi scorrono facili; quelle rosa creano una tensione che spinge a crescere.</li></ul>
  <div class="explain"><b>Tutto insieme.</b> La tua Venere è ${L.signs[vs].inS} ${nella(vh)} casa: amore e piacere (cosa), espressi ${L.signs[vs].how} (come), nell’area ${area(vh)} (dove). La tua Luna è ${L.signs[ms].inS} ${nella(mh)} casa: le tue emozioni si muovono ${L.signs[ms].how} e trovano conforto nell’area ${area(mh)}.</div>
  <p class="note">Tocca un pianeta, un segno o il numero di una casa sulla ruota per leggerne il significato.</p>`,
 tidesSummary:(best,care,ms,mh,g)=>`${best.length?`<b>Ideale per:</b> ${list(best)}. `:'Una giornata equilibrata, senza grandi picchi. '}${care.length?`<b>Attenzione a:</b> ${list(care)}. `:''}<span class="muted">La Luna è ${L.signs[ms].inS} <span class="gl">${g}</span> e illumina ${yourH(mh)} (${L.houses[mh-1].short.toLowerCase()}).</span>`,
 whyLine:(pos,t,n,h)=>`${pos?'Aiuta':'Mette alla prova'}: ${P(t).n} (${P(t).what}) incontra ${P(n).your} (${P(n).what}, ${L.hl(h)}).`,
 moonHere:h=>`La Luna attraversa ${yourH(h)} e porta le emozioni in quest’area.`,
 streak:n=>`${n} giorni di fila`,
 enters:(id,s)=>`${cap(P(id).art)} entra ${L.signs[s].inS}`,
 nowMoving:h=>`Ora attraversa ${yourH(h)} (${L.houses[h-1].short.toLowerCase()}).`,
 turns:(id,r)=>`${cap(P(id).art)} diventa ${r?'retrogrado':'diretto'}`,
 stationRetro:id=>`${cap(P(id).art)} sembra muoversi all’indietro per un po’: un momento per rivedere i temi legati a «${P(id).what}».`,
 stationDirect:id=>`${cap(P(id).art)} riprende ad andare avanti, e ciò che era bloccato ricomincia a muoversi.`,
 rel:d=>d===0?'oggi':d>0?`tra ${d} ${d>1?'giorni':'giorno'}`:`${-d} ${d<-1?'giorni':'giorno'} fa`,
 calMoon:(s,h,g)=>`Luna ${L.signs[s].inS} <span class="gl">${g}</span>, ${inYourH(h)}. Le emozioni si muovono ${L.signs[s].how}, concentrate sull’area ${area(h)}.`,
 best:(s,t)=>`Record: ${s} / ${t}`,
 qHead:(i,N,s,st)=>`Domanda ${i} di ${N} · punteggio ${s}${st>1?' · serie '+st:''}`,
 timesUp:a=>`Tempo scaduto. La risposta giusta: ${a}.`,
 notQuite:a=>`Non proprio. La risposta giusta: ${a}.`,
 longestStreak:(n,nb)=>`Serie più lunga: ${n}${nb?' · nuovo record!':''}`
};

L.q={
 planetSignQ:id=>`Quale segno ha ${P(id).art} come governatore?`,
 planetThemeQ:id=>`Quale pianeta riguarda ${P(id).key}?`,
 planetThemeWhy:id=>`${cap(P(id).art)} riguarda ${P(id).key}.`,
 houseSignQ:n=>`Quale segno corrisponde per natura a questa casa: ${L.hl(n)}?`,
 signHouseQ:i=>`Quale casa corrisponde per natura a questo segno: ${L.signs[i].n}?`,
 housePlanetQ:n=>`Quale pianeta governa per natura questa casa: ${L.hl(n)}?`,
 houseSignWhy:(n,s)=>`Le case rispecchiano i segni in ordine: ${L.hl(n)} ↔ ${L.signs[s].n}. ${cap(L.hl(n))}: ${L.houses[n-1].key}.`,
 housePlanetWhy:(n,s,r)=>`Le case rispecchiano i segni in ordine: ${L.hl(n)} ↔ ${L.signs[s].n}, il cui governatore è ${P(r).art}. Quindi ${P(r).art} è il governatore naturale di questa casa.`,
 whichPlanetInHouse:n=>`Quale pianeta si trova ${inYourH(n)} (${L.houses[n-1].short.toLowerCase()})?`,
 dignityQ:(id,k)=>`${P(id).n}: ${{home:'quale segno è la sua casa (domicilio), dove è più forte?',detriment:'in quale segno è in esilio, opposto alla sua casa, dove fatica?',exalt:'in quale segno è in esaltazione, come un ospite d’onore?',fall:'in quale segno è in caduta, opposto alla sua esaltazione?'}[k]}`,
 dignityWhy:(id,k,list)=>`${P(id).n}: ${list}. ${{home:'A casa un pianeta si esprime con facilità e forza.',detriment:'In esilio un pianeta è opposto alla sua casa: funziona, ma con fatica e goffaggine.',exalt:'In esaltazione un pianeta è come un ospite d’onore: le sue qualità migliori sono celebrate.',fall:'In caduta un pianeta è opposto alla sua esaltazione: le sue qualità faticano a emergere.'}[k]}`,
 whichPlanet:()=>'Quale pianeta è questo?',
 whichSign:()=>'Quale segno è questo?',
 whoRules:i=>`Quale pianeta governa ${L.signs[i].art}?`,
 whoRulesWhy:(i,r)=>`Il governatore ${L.signs[i].gen} è ${P(r[0]).art}${r[1]?`, con ${P(r[1]).art} come governatore tradizionale`:''}.`,
 whatElement:i=>`A quale elemento appartiene ${L.signs[i].art}?`,
 elementWhy:(i,e)=>`${cap(L.signs[i].art)} è un segno di ${L.el[e].n}. ${L.el[e].info}`,
 whatMode:i=>`Qual è la modalità ${L.signs[i].gen}?`,
 modeWhy:(i,m)=>`${cap(L.signs[i].art)} è un segno ${L.mod[m].n}. ${L.mod[m].info}`,
 whichHouseRules:n=>`Quale casa riguarda ${L.houses[n-1].key.split(', ').slice(0,2).join(' e ')}?`,
 houseAbout:n=>`Di cosa parla soprattutto ${la(n)} casa?`,
 spotWhy:(s,a,ang)=>`Distano circa ${s}°, cioè una ${L.aspects[a].n.toLowerCase()} (${ang}°). Consiglio: conta i segni tra loro. 2 segni = sestile, 3 = quadratura, 4 = trigono, 6 = opposizione.`,
 yourRising:()=>'Qual è il tuo Ascendente?',
 yourRisingWhy:(d,s)=>`Il tuo Ascendente è a ${d} ${L.signs[s].gen}: ${L.signs[s].key}.`,
 chartRulerQ:s=>`Il tuo Ascendente è ${L.signs[s].inS}. Quale pianeta governa il tuo tema?`,
 chartRulerWhy:(s,r,rs,rh)=>`Il governatore ${L.signs[s].gen} è ${P(r).art}, quindi ${P(r).art} governa il tuo tema. Si trova ${L.signs[rs].inS} ${inYourH(rh)}.`,
 yourHouseQ:id=>`In quale casa si trova ${P(id).your}?`,
 yourHouseWhy:(id,h)=>`${cap(P(id).your)} si trova ${nella(h)} casa: ${L.houses[h-1].key}.`,
 yourSignQ:id=>`In quale segno si trova ${P(id).your}?`,
 yourSignWhy:(id,d,s,r)=>`${cap(P(id).your)} è a ${d} ${L.signs[s].gen}${r?' (retrogrado)':''}. ${cap(P(id).art)} riguarda ${P(id).key}; ${L.signs[s].art} aggiunge ${L.signs[s].key}.`,
 stayQ:id=>`Più o meno quanto resta ${P(id).art} in un segno?`,
 stayWhy:id=>`${cap(P(id).art)} resta ${L.signTime[id]} in ogni segno e impiega ${L.cycle[id]} per fare il giro dello zodiaco. Più il pianeta è lento, più durano i suoi transiti.`,
 cycleQ:id=>`Quanto impiega ${P(id).art} a fare un giro completo dello zodiaco?`,
 cycleWhy:id=>`${cap(P(id).art)} impiega ${L.cycle[id]}. Per questo il «ritorno» alla posizione della tua nascita avviene più o meno con questa frequenza.`,
 longShortQ:id=>`Un transito di ${P(id).n} è a lungo o a breve termine?`,
 longShortWhy:(id,isL)=>`${cap(P(id).art)} impiega ${L.cycle[id]} per girare lo zodiaco, quindi ${isL?'resta su ogni punto per mesi e segna un capitolo della vita':'passa su ogni punto in pochi giorni e porta stati d’animo ed eventi'}.`,
 applyingQ:(pl,td,z,r,tg,nd)=>`${P(pl).n} in transito è a ${td}° ${L.signs[z].gen}, in moto ${r?'retrogrado (all’indietro)':'diretto (in avanti)'}. ${cap(P(tg).your)} è a ${nd}° ${L.signs[z].gen}. Questa congiunzione è applicativa o separativa?`,
 applyingWhy:(pl,tg,b,r,app)=>`${cap(P(pl).art)} è ${b?'prima di':'oltre'} ${P(tg).your} e si muove ${r?'all’indietro':'in avanti'}, quindi ${app?'si avvicina: l’aspetto è applicativo':'si allontana: l’aspetto è separativo'}. I transiti di solito si sentono di più mentre si avvicinano.`,
 degSignQ:Lg=>`Un pianeta si trova a <b>${Lg}°</b> dello zodiaco, contando da 0° Ariete. In quale segno è?`,
 degSignWhy:(Lg,d,z)=>`Ogni segno è largo 30°. ${Lg} ÷ 30 = ${Math.floor(Lg/30)} segni interi con ${d}° di resto, quindi è a ${d}° del segno numero ${z+1}: ${L.signs[z].n}.`,
 degAbsQ:(d,z)=>`Dove si trova <b>${d}° ${L.signs[z].gen}</b> in gradi assoluti dello zodiaco (0–360°)?`,
 degAbsWhy:(d,z,Lg)=>`${cap(L.signs[z].art)} è il segno numero ${z+1}, quindi comincia a ${z}×30 = ${z*30}°. Aggiungi ${d}° e ottieni ${Lg}°.`,
 whichAspectIfAny:()=>'Quale aspetto, se c’è?',
 aspectProWhy:(dist,a,o,allowed,oos)=>`Distano ${dist}°. ${a?`È entro l’orbita di una ${L.aspects[a].n.toLowerCase()} (orbita ammessa ±${allowed}°), con uno scarto di ${o}.`:'Non è entro l’orbita di nessun aspetto. Le orbite usate qui: congiunzione e opposizione ±8°, quadratura e trigono ±7°, sestile ±5°, quinconce ±2,5°.'}${oos?' Attenzione: i segni da soli suggeriscono altro. È un aspetto fuori segno, quindi controlla sempre i gradi.':''}`,
 houseRulerQ:(n,s)=>`La tua ${n}ª casa (${L.houses[n-1].short.toLowerCase()}) comincia ${L.signs[s].inS}. Quale pianeta la governa?`,
 houseRulerWhy:(n,s,r)=>`Il governatore ${L.signs[s].gen} è ${P(r).art}, quindi ${P(r).art} governa ${yourH(n)}. Per leggere l’area ${area(n)}, guarda segno, casa e aspetti di questo pianeta.`,
 rulerWhereQ:(r,n)=>`${cap(P(r).art)} governa ${yourH(n)} (${L.houses[n-1].short.toLowerCase()}). In quale casa si trova?`,
 rulerWhereWhy:(r,n,h)=>`${cap(P(r).art)} si trova ${inYourH(h)}, quindi l’area ${area(n)} ${h===n?'è forte e autonoma':'è collegata all’area '+area(h)} nella tua vita. Gli astrologi lo scrivono «governatore della ${n} nella ${h}».`,
 comboHouse:(p,h)=>`${P(p).what} attraverso ${L.houses[h-1].acc}`,
 comboHouseQ:(p,n)=>`Cosa descrive soprattutto ${P(p).art} ${nella(n)} casa?`,
 comboHouseWhy:(p,n)=>`${cap(P(p).art)} riguarda ${P(p).key}. ${cap(la(n))} casa riguarda ${L.houses[n-1].key}. Pianeta = cosa, casa = dove.`,
 comboSign:(p,z)=>`${P(p).what}, ${L.signs[z].how}`,
 comboSignQ:(p,z,g)=>`Quale frase descrive meglio ${P(p).art} ${L.signs[z].inS} <span class="gl">${g}</span>?`,
 comboSignWhy:(p,z)=>`${cap(P(p).art)} riguarda ${P(p).key}. ${cap(L.signs[z].art)} aggiunge ${L.signs[z].key}. Pianeta = cosa, segno = come.`
};
(window.TF_LANGS=window.TF_LANGS||{}).it=L;
})();

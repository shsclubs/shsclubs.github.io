/**
 * all current categories:
 * Academic
 * Cultural and Identity
 * Performing Arts
 * Visual Arts
 * Literature
 * Social Change
 * Public Speaking
 * Leadership
 * Pre-professional
 * Athletic
 * Entertainment
 * Miscellaneous
 */

const clubList = [
  {
    name: "American Civil Liberties Union",
    nick: "ACLU",
    meetingdays: "Mondays",
    type1: "SocialChange",
    type2: "",
    mtg: "m",
    morning: "",
    desc: "Essentially the club is to spread awareness on issues that relate to laws under the constitution, and how to enforce equality in this day and age.",
    adv: "Ms. Murphy",
    stucon: "Faryal Qadri (sqadri2024@sharonschools.net)",
    loc: 2308
  },
  {
    name: "American Heart Association",
    nick: "AHA",
    meetingdays: "Thursdays",
    type1: "Health",
    type2: "",
    mtg: "h",
    morning: "",
    desc: "We are a chapter which is a part of the global American Heart Association organization and we raise awareness for heart issues and inform people about the heart. We also fundraise and volunteer.",
    adv: "Mr. Christansen",
    stucon:
      "Aishu Saravanan (asaravanan2025@sharonschools.net), Sahana Bharadwaj (sbharadwaj2025@sharonschools.net), Shruti Senthil (ssenthil@sharonschools.net)",
    loc: "Breakout Room"
  },
  {
    name: "Anti-Defamation League",
    nick: "ADL Club",
    meetingdays: "Tuesdays",
    type1: "SocialChange",
    type2: "",
    mtg: "t",
    morning: "",
    desc: "A club dedicated to stop hate. We organize panels and other events dedicated to stopping hate.",
    adv: "Ms. Garr, Ms. Macoritto",
    stucon:
      "Ilan Yampolsky (iyampolsky2024@sharonschools.net), Daniel Liverant (dliverant2024@sharonschools.net)",
    loc: 2407
  },
  {
    name: "Art Club",
    nick: "Art Club",
    meetingdays: "Wednesdays",
    type1: "Visual",
    type2: "",
    mtg: "w",
    morning: "",
    desc: "In this club we create a collective art piece based on the annual theme that a local museum provides and we get to showcase our creation in that museum at the end of the year!",
    adv: "Mr. Schifone",
    stucon:
      "Giovana Batista (gbatista2024@sharonschools.net), Maria Abramyan (mabramyan2024@sharonschools.net)",
    loc: "Art Room"
  },
  {
    name: "Asian Student Union",
    nick: "ASU",
    meetingdays: "Mondays",
    type1: "Culture",
    type2: "SocialChange",
    mtg: "m",
    morning: "",
    desc: "ASU is a place where we spread awareness and celebrate different heritages and cultures through food, games, and more!",
    adv: "Dr. Cho",
    stucon: "Joanna Wei (jwei2025@sharonschools.net)",
    loc: 2502
  },
  {
    name: "Black Student Union",
    nick: "BSU",
    meetingdays: "Fridays (ACES)",
    type1: "Culture",
    type2: "SocialChange",
    mtg: "f",
    morning: 1,
    desc: "We hope to develop an expansive network and platform that empowers our community, but also promotes solidarity beyond the doors of Sharon High.",
    adv: "Mr. Wilson, Ms. Moore",
    stucon:
      "Rayandinie Pierre-Louis (rpierrelouis2024@sharonschools.net),  Karina Mason (kmason2024@sharonschools.net), Serena Bien-Aime (sbienaime2025@sharonschools.net)",
    loc: "METCO Lounge Area"
  },
  {
    name: "Books & Bagels",
    nick: "Books & Bagels",
    meetingdays: "Friday morning",
    type1: "Humanities",
    type2: "",
    mtg: "f",
    morning: "",
    desc: "We read and discuss books (chosen by members) with a breakfast of bagels! We also offer volunteer opportunities through the library and are planning on hosting occasional movie nights!",
    adv: "Ms. Kerr",
    stucon:
      "Emily Whitney (ewhitney2024@sharonschools.net), Maddie Zimbalist (mzimbalist@sharonschools.net)",
    loc: 2411
  },
  {
    name: "Boxing Club",
    nick: "Boxing Club",
    meetingdays: "Tuesdays",
    type1: "Athletic",
    type2: "",
    mtg: "t",
    morning: "",
    desc: "In Boxing Club, we do boxing to practice self-defense, improve mental health, empower ourselves, and feel healthy in all aspects",
    adv: "Mr. Schifone",
    stucon: "CP Pototsky (cpototsky2024@gmail.com)",
    loc: 1512
  },
  {
    name: "Breast Cancer Awareness Club",
    nick: "BCAC",
    meetingdays: "Mondays",
    type1: "Health",
    type2: "",
    mtg: "m",
    morning: "",
    desc: "In this club together as a community we raise awareness for Breast Cancer and gather money doing bake sales for organizations that support and help cancer research.",
    adv: "Dr. Cho",
    stucon:
      "Selena Zheng (zheng2024@sharonschools.net), Himany Patidar (hpatidar2024@sharon.schools.net)",
    loc: 2502
  },
  {
    name: "Care4Kiddos",
    nick: "Care4Kiddos",
    meetingdays: "Tuesdays",
    type1: "SocialChange",
    type2: "",
    mtg: "t",
    morning: "",
    desc: "Dedicated to fight against domestic abuse",
    adv: "Not Listed",
    stucon:
      "Antara Padwal (apadwal2026@sharonschools.net), Lynn El Abyad (lelabyad2026@sharonschools.net)",
    loc: "TBD"
  },
  {
    name: "Chemistry Club",
    nick: "Chem Club",
    meetingdays: "Every other Monday",
    type1: "STEM",
    type2: "",
    mtg: "m",
    morning: "",
    desc: "In Chemistry Club, we will learn about topics not taught in high school chemistry, study for the USNCO exam, and conduct fun experiments!",
    adv: "Ms. Das",
    stucon:
      "Ayelet Yablon (ayablon2025@sharonschools.net), Jacob Katz (jkatz2025@sharonschools.net)",
    loc: 2301
  },
  {
    name: "Children Helping Children",
    nick: "Children Helping Children",
    meetingdays: "First Tuesday of each month",
    type1: "SocialChange",
    type2: "",
    mtg: "t",
    morning: "",
    desc: "Join Children Helping Children to gain volunteer opportunities, increase awareness of pressing children's issues, and fundraise for various charities. Together, we're not just raising funds – we're raising spirits!",
    adv: "Ms. Jolicoeur",
    stucon:
      "Matilda Seibert (mseibert2025@sharonschools.net), Sydney Hyppolite (shyppolite2025@sharonschools.net), Brenda Ribeiro-Freitas (bribeirofreitas2026@sharonschools.net)",
    loc: "2411 or 2400s Breakout Room"
  },
  {
    name: "Chinese Yo-Yo Club",
    nick: "Chinese Yo-Yo",
    meetingdays: "Tuesdays",
    type1: "Culture",
    type2: "Performing",
    mtg: "t",
    morning: "",
    desc: "We help club members of any skill level to learn how to use the Chinese Yo-Yo, or to add to their existing skills. We also prepare a routine for a performance, but club members are not required to attend a performance if they do not want to.",
    adv: "Ms. Ding",
    stucon: "Alan Zhang (azhang2024@sharonschools.net)",
    loc: 1407
  },
  {
    name: "Class Planning Board of 2024",
    nick: "Class of '24",
    meetingdays: "Not Listed",
    type1: "Leadership",
    type2: "",
    mtg: "o",
    morning: "",
    desc: "Class Planning Boards plan events for their grade.",
    adv: "Ms. Jolicouer",
    stucon: "Jack Maron (jmaron2024@sharonschools.net)",
    loc: 2411
  },
  {
    name: "Class Planning Board of 2025",
    nick: "Class of '25",
    meetingdays: "Not Listed",
    type1: "Leadership",
    type2: "",
    mtg: "o",
    morning: "",
    desc: "Class Planning Boards plan events for their grade.",
    adv: "Ms. Smith",
    stucon: "Rohith Raghavan (rraghavan2025@sharonschools.net)",
    loc: 2409
  },
  {
    name: "Class Planning Board of 2026",
    nick: "Class of '26",
    meetingdays: "Not Listed",
    type1: "Leadership",
    type2: "",
    mtg: "o",
    morning: "",
    desc: "Class Planning Boards plan events for their grade.",
    adv: "Not Listed",
    stucon: "Not Listed",
    loc: "Not Listed"
  },
  {
    name: "Class Planning Board of 2027",
    nick: "Class of '27",
    meetingdays: "Not Listed",
    type1: "Leadership",
    type2: "",
    mtg: "o",
    morning: "",
    desc: "Class Planning Boards plan events for their grade.",
    adv: "Not Listed",
    stucon: "Not Listed",
    loc: "Not Listed"
  },
  {
    name: "Computer Science Club",
    nick: "CS Club",
    meetingdays: "Thursdays",
    type1: "STEM",
    type2: "",
    mtg: "h",
    morning: "",
    desc: "In this club we do a wide variety of computer science related activities including teaching the basics of coding, making fun projects, and competing in coding competitions.",
    adv: "Ms. McCullough",
    stucon: "Dylan Liu (dliu2024@sharonschools.net)",
    loc: 2408
  },
  {
    name: "Crime Club",
    nick: "Crime Club",
    meetingdays: "Thursdays",
    type1: "Entertainment",
    type2: "",
    mtg: "h",
    morning: "",
    desc: "Be your own detective by solving hyper real cases and learning about the criminal injustice system",
    adv: "Ms. Ding",
    stucon:
      "Caitlyn Oh (coh@sharonschools.net), Anastasia Starovotov (astarovoytov@sharonschools.net)",
    loc: 1407
  },
  {
    name: "Culinary Club",
    nick: "Culinary Club",
    meetingdays: "Thursdays",
    type1: "Culture",
    type2: "",
    mtg: "h",
    morning: "",
    desc: "Learning about the food of diverse cultures, sharing recipes, and learning new cooking skills and techniques.",
    adv: "Ms. Collins",
    stucon: "Sy Uong (suong2025@sharonschools.net)",
    loc: 1510
  },
  {
    name: "Cybersecurity",
    nick: "Cybersecurity",
    meetingdays: "Fridays",
    type1: "STEM",
    type2: "",
    mtg: "f",
    morning: "",
    desc: "The club consists of learning how to manage, secure and operate virtual computers. The club is open to anyone, no matter their skill level or amount of experience with computers. We participate in competitions such as CyberPatriot and CyberDiscord and try to fix cybersecurity vulnerabilities to the best of our extent.",
    adv: "Mr. Charest",
    stucon:
      "Gabrielle Sufrin (gsufrin2024@sharonschool.net), Anna Voronova (avoronova2024@sharonschools.net), Thomas Ha (tha2026@sharonschools.net), Jenny Sand (jsand2025@sharonschools.net)",
    loc: 1410
  },
  {
    name: "Debate",
    nick: "Debate",
    meetingdays: "Mondays, Wednesday, (optional) Fridays",
    type1: "Leadership",
    type2: "",
    mtg: "o",
    morning: "",
    desc: "Debate holds meetings on Mondays, Wednesdays, and (optional meetings) on Fridays from 3-4PM. We train public speaking skills and give you the tools to succeed at high-level competitions.",
    adv: "Ms. Jolicouer",
    stucon:
      "Aadi Kaul (akaul2024@sharonschools.net), Daniel Liverent (dliverent2024@sharonschools.net), Aman Siddiqi (asiddiqi2024@sharonschools.net), Michael Brakaj (mbrakaj2024@sharonschools.net)",
    loc: 2411
  },
  {
    name: "DECA",
    nick: "DECA",
    meetingdays: "Wednesdays",
    type1: "Pre-Professional",
    type2: "",
    mtg: "w",
    morning: "",
    desc: "DECA prepares emerging leaders and entrepreneurs in marketing, finance, hospitality and management in high schools and colleges around the globe.",
    adv: "Mr. Bys, Ms. DeLuca",
    stucon:
      "Alisha Mehta (amehta2024@sharonschools.net), Jared Marcus (jmarcus2024@sharonschools.net)",
    loc: "1404 or the Cafeteria"
  },
  {
    name: "Desi Club",
    nick: "Desi Club",
    meetingdays: "Wednesdays",
    type1: "Culture",
    type2: "",
    mtg: "w",
    morning: "",
    desc: "Exploration of Culture and Identity of students having ties to Indian, Pakistani, Nepalese, Sri Lankan and Kolkata culture.",
    adv: "Mr. Balan",
    stucon: "Not Listed",
    loc: 2302
  },
  {
    name: "Doodle Club",
    nick: "Doodle Club",
    meetingdays: "Mondays",
    type1: "Visual",
    type2: "",
    mtg: "m",
    morning: "",
    desc: "Looking for a relaxing club after school? Join our club to meet Doodlers of all levels! This year, we are working towards a volunteer project for teaching art history for kids and wish to create many more projects with your help! Have fun and de-stress in room 2511 on Mondays right after school!",
    adv: "Ms. Kendall",
    stucon:
      "Charlotte Choi (cchoi2025@sharonschools.net), Lana Luo (lluo2025@sharonschools.net)",
    loc: 2511
  },
  {
    name: "Dungeons & Dragons Club",
    nick: "D&D",
    meetingdays: "Mondays",
    type1: "Entertainment",
    type2: "",
    mtg: "m",
    morning: "",
    desc: "A club for both experienced player and newcomers alike to come together and plaY Dungeons & Dragons.",
    adv: "Mr. Gorman",
    stucon:
      "Philippe Desanges (pdesanges2024@sharonschools.net), Jacob Zinno (jzinno2024@sharonschools.net)",
    loc: 1301
  },
  {
    name: "Environmental Club",
    nick: "Environmental Club",
    meetingdays: "Mondays",
    type1: "SocialChange",
    type2: "",
    mtg: "m",
    morning: "",
    desc: "A low commitment club that hosts fundraisers and fun events like movie nights that lead up to our end of the year tree planting ceremony with the town of Sharon!",
    adv: "Ms. Burke",
    stucon:
      "Avani Pai (apai2024@sharonschools.net) and BV Rakietan (brakietan2024@sharonschools.net)",
    loc: 2276
  },
  {
    name: "Euphony",
    nick: "Euphony",
    meetingdays: "Wednesdays",
    type1: "Visual",
    type2: "Humanities",
    mtg: "w",
    morning: "",
    desc: "Euphony Magazine is SHS's student-run art and literary magazine. We meet on Wednesdays to chat, drink tea, and review submissions. We're always looking for more student editors, so if that interests you, feel free to pop into room 1409!",
    adv: "Ms. Pokaski",
    stucon:
      "Annika Amrhein (aamrhein2024@sharonschools.net), Lana Luo (lluo2025@sharonschools.net)",
    loc: 1409
  },
  {
    name: "Financial Literacy Club",
    nick: "Financial Lit",
    meetingdays: "Thursdays",
    type1: "Pre-Professional",
    type2: "",
    mtg: "h",
    morning: "",
    desc: "At the Sharon Financial Literacy Club, our mission is to teach students how to manage their personal finances, which is becoming an increasingly important and difficult task.",
    adv: "Sra. Theberge",
    stucon:
      "Sava Kassev (skassev2025@sharonschools.net), Tim Broughton (tbroughton2025@sharonschools.net)",
    loc: 1306
  },
  {
    name: "Game Dev Club",
    nick: "Game Dev Club",
    meetingdays: "Wednesdays",
    type1: "Visual",
    type2: "",
    mtg: "w",
    morning: "",
    desc: "The Game Dev Club is a club for aspiring game developers, artists, and programmers of any level who wish to improve their skills and recieve experience in the field of game-making.",
    adv: "Mr. Kamocsay",
    stucon:
      "Soyun Lee (solee2026@sharonschools.net), Leah Danilkovas (ldanilkovas2026@sharonschools.net)",
    loc: 1264
  },
  {
    name: "Gender Sexuality Alliance",
    nick: "GSA",
    meetingdays: "Thursdays",
    type1: "Culture",
    type2: "",
    mtg: "h",
    morning: "",
    desc: "Safe space for people in the LGBTQ+ community and allies",
    adv: "Ms. Cohen",
    stucon: "Cassidy Morrison (cmorrison2025@sharonschools.net)",
    loc: 1509
  },
  {
    name: "Girls Learn International",
    nick: "GLI",
    meetingdays: "Wednesdays",
    type1: "SocialChange",
    type2: "",
    mtg: "w",
    morning: "",
    desc: "GLI informs and advocates for the basic human right of girls' education through collaboration with organizations around the world.",
    adv: "Ms. Harding",
    stucon:
      "Shreya Gorrepati (sgorrepati2024@sharonschools.net), Apurva Varigonda (avarigonda2024@sharonschools.net)",
    loc: 1408
  },
  {
    name: "Girls Who Code",
    nick: "GWC",
    meetingdays: "Thursdays",
    type1: "STEM",
    type2: "SocialChange",
    mtg: "h",
    morning: "",
    desc: "Girls Who Code provides a safe space for girls/nonbinary people to learn to code and raise awareness about the gender gap in tech.",
    adv: "Ms. Newman, Mr. Scarelli-Smith",
    stucon:
      "Apurva Varigonda (avarigonda2024@sharonschools.net), Daniela Yablon (dyablon2025@sharonschools.net)",
    loc: "Library"
  },
  {
    name: "Hearts and Crafts",
    nick: "Hearts & Crafts",
    meetingdays: "Thursdays",
    type1: "Visual",
    type2: "SocialChange",
    mtg: "t",
    morning: "",
    desc: "Hearts and Crafts works to help our community by creating, selling, and donating crafts to raise funds and awareness for local charities and community organizations.",
    adv: "Mr. Schifone",
    stucon:
      "Allie Bishop-Mote (abishop-mote2026@sharonschools.net), Soyun Lee (solee2026@sharonschools.net)",
    loc: 1500
  },
  {
    name: "Hispanic Latino Student Union",
    nick: "HLSU",
    meetingdays: "Wednesdays",
    type1: "Culture",
    type2: "",
    mtg: "w",
    morning: "",
    desc: "A unión of the Hispanics and Latinos of the SHS community.",
    adv: "Sra. Magnan",
    stucon: "Melissa Roche (mroche2026@sharonschools.net)",
    loc: 1502
  },
  {
    name: "History of Food Club",
    nick: "History of Food",
    meetingdays: "Not Decided",
    type1: "Misc",
    type2: "",
    mtg: "o",
    morning: "",
    desc: "A bi-monthly club that meets to enjoy a meal and then learn about the origins of it.",
    adv: "Ms. Feldman",
    stucon: "Aaron Faktorovich (afaktorovich2025@sharonschools.net)",
    loc: "TBD"
  },
  {
    name: "History Team",
    nick: "History Team",
    meetingdays: "Not Decided",
    type1: "Humanities",
    type2: "",
    mtg: "o",
    morning: "",
    desc: "A club that competes in history based competitions such as History Bee/Bowl and National History Day.",
    adv: "Not Listed",
    stucon:
      "Hyoseo Park (hpark2025@sharonschools.net), Aaron Faktorovich (afaktorovich2025@sharonschools.net)",
    loc: "TBD"
  },
  {
    name: "Homeless Help",
    nick: "Homeless Help",
    meetingdays: "Mondays",
    type1: "SocialChange",
    type2: "",
    mtg: "m",
    morning: "",
    desc: "The Homeless Help Club will be used to engage with other students through volunteering and fundraising for the homeless and people in need. By joining this club, you can positively influence others' lives and assist more people and earn volunteer hours.",
    adv: "Dr. Valverde",
    stucon:
      "Eddie Kim (ekim2025@sharonschools.net), Eric Li (eli2025@sharonschools.net), Devin Barker (dbarker2025@sharonschools.net), Pranesh Sivakumar (psivakumar2025@sharonschools.net)",
    loc: 2304
  },
  {
    name: "HOSA (Health Occupations Students of America)",
    nick: "HOSA",
    meetingdays: "Wednesdays",
    type1: "Health",
    type2: "Pre-Professional",
    mtg: "w",
    morning: "",
    desc: "HOSA (Health Occupations Students of America) is a national student-led organization, whose mission is to promote career opportunities in the health industry and to enhance the delivery of quality healthcare to all people. In addition, HOSA provides opportunities for medical innovation projects and ideas, which can be presented at competitions!",
    adv: "Ms. Bhalekar",
    stucon:
      "Neha Busannagari (nbusannagari2025@sharonschools.net), Chloe Muzio (cmuzio2025@sharonschools.net), Ayelet Yablon (ayablon2025@sharonschools.net), Sahana Bharadwaj (sbharadwaj2025@sharonschools.net), Marcus Myers (mmyers2026@sharonschools.net), Brenden Wen (bwen2025@sharonschools.net), Chloe Chung (cchung2025@sharonschools.net)",
    loc: 2501
  },
  {
    name: "Jewish Student Union",
    nick: "JSU",
    meetingdays: "2x a month on Wednesdays",
    type1: "Culture",
    type2: "",
    mtg: "w",
    morning: "",
    desc: "Jewish Student Union is a club where Jewish students, or students interested in learning about Judaism, can come together and make friends, participate in activities, and create a community.",
    adv: "Ms. Jolicoeur",
    stucon:
      "Ellie Hefetz (ehefetz2024@sharonschools.net), Gabrielle Sufrin (gsufrin2024@sharonschools.net)",
    loc: 2411
  },
  {
    name: "Key Club",
    nick: "Key Club",
    meetingdays: "Every other Friday morning",
    type1: "SocialChange",
    type2: "",
    mtg: "f",
    morning: 1,
    desc: "Key Club is the oldest and largest international student-led organization that provides its members with opportunities to serve their community, build character, and develop leadership. Members have the opportunity to go to DECON, a district convention, where Key Club members can attend workshops, learn more leadership skills, and meet Key Clubbers across the state for 2 days!",
    adv: "Ms. Jolicoeur",
    stucon:
      "Emily Zhang (ezhang2025@sharonschools.net), Victoria Henry (vhenry2025@sharonschools.net), Sophie Hu (shu2025@sharonschools.net)",
    loc: 2411
  },
  {
    name: "Latin Club",
    nick: "Latin Club",
    meetingdays: "Tuesdays",
    type1: "Humanities",
    type2: "",
    mtg: "t",
    morning: "",
    desc: "Whether Latin students or not, anyone interested in ancient Roman history, culture, and mythology is welcome!",
    adv: "Ms. McCullough",
    stucon: "Abigail Lonergan (alonergan2026@sharonschools.net)",
    loc: 2408
  },
  {
    name: "Magic: The Gathering Club",
    nick: "Magic: The Gathering!",
    meetingdays: "Wednesdays, Fridays",
    type1: "Entertainment",
    type2: "",
    mtg: "o",
    morning: "",
    desc: "Socialize and connect with others while having fun and developing your strategy and critical thinking skills by playing Magic: The Gathering!",
    adv: "Mr. Gorman",
    stucon: "Dante Gorostovich (dgorostovich2025@sharonschools.net)",
    loc: 1301
  },
  {
    name: "Marsengold Yearbook",
    nick: "Yearbook",
    meetingdays: "Mondays",
    type1: "Visual",
    type2: "",
    mtg: "m",
    morning: "",
    desc: "Yearbook documents the happenings of the student body every year.  Students who join yearbook participate at their comfort level and ability to participate.  The number one thing to remember is that you do what you say you will do.",
    adv: "Ms. Garr",
    stucon: "Avital Gerts (agerts2025@sharonschools.net)",
    loc: 1506
  },
  {
    name: "Math Magazine: Eagle's √–1",
    nick: "Eagle's √–1",
    meetingdays: "First Monday of each month",
    type1: "STEM",
    type2: "",
    mtg: "o",
    morning: "",
    desc: "The Eagle's sqrt(-1) is SHS's Math Magazine, featuring topics from non-Euclidean geometry to quaternions to influential women in STEM.",
    adv: "Mr. VanVaerenewyck",
    stucon:
      "Daniela Yablon (dyablon2025@sharonschools.net), Ayelet Yablon (ayablon2025@sharonschools.net), Apurva Varigonda (avarigonda2024@sharonschools.net)",
    loc: "Zoom"
  },
  {
    name: "Math Team",
    nick: "Math Team",
    meetingdays: "2x a month",
    type1: "STEM",
    type2: "",
    mtg: "o",
    morning: "",
    desc: "Math Team competes in various high school math tournaments and leagues such as GBML, SMML, and HMMT. Over the past year, we've placed 1st in Southeastern Massachusetts Math League and 2nd at states.",
    adv: "Ms. Sin",
    stucon:
      "Apurva Varigonda (avarigonda2024@sharonschools.net), Shreyes Balaji (sbalaji2024@sharonschools.net)",
    loc: 2409
  },
  {
    name: "Mock Trial",
    nick: "Mock Trial",
    meetingdays: "Mondays, Tuesdays, (optional) Wednesdays, Thursdays",
    type1: "Pre-Professional",
    type2: "",
    mtg: "o",
    morning: "",
    desc: "Calling all legal eagles! Mock trial is a competition team in which members recreate all the elements of a real-world trial. Whether being a direct or cross attorney, or acting as a witness, we have a place for you on our team! Come to learn the workings of the legal system, improve your public and improvisational speaking skills, and enjoy our snacks!",
    adv: "Ms. Perkins",
    stucon:
      "Nasiba Alikulova (nalikulova2025@sharonschools.net), Samah Hamid (shamid2024@sharonschools.net), Anthony Wu (awu2024@sharonschools.net)",
    loc: 2504
  },
  {
    name: "Model UN",
    nick: "MUN",
    meetingdays: "Thursdays",
    type1: "Leadership",
    type2: "",
    mtg: "h",
    morning: "",
    desc: "Collaborative debate over real-world topics. Fun and casual, MUN has whatever intensity you desire!",
    adv: "Ms. Malcolm",
    stucon:
      "Annika Amreihn (aamrhein2024@sharonschools.net), Hettie Van Dyke (hvandyke2024@sharonschools.net)",
    loc: 2307
  },
  {
    name: "Muslim Student Association",
    nick: "MSA",
    meetingdays: "Tuesdays",
    type1: "Culture",
    type2: "SocialChange",
    mtg: "t",
    morning: "",
    desc: "We are a club focused on creating a space for Muslim students and staff at SHS. Beyond that, our club also work to fundraise, host events, donate to charity, and raise awareness for causes involving Muslims.",
    adv: "Mr. Banno, Ms. Pokaski",
    stucon:
      "Ashaz Chowdhury (achowdhury2024@sharonschools.net), Samah Hamid (shamid2024@sharonschools.net), Zobia Imam (zimam2024@sharonschools.net), Rania Khan (rkhan2024@sharonschools.net), Faryal Qadri (sqadri2024@sharonschools.net)",
    loc: 1311
  },
  {
    name: "National Honor Society",
    nick: "NHS",
    meetingdays: "Varies",
    type1: "Leadership",
    type2: "",
    mtg: "o",
    morning: "",
    desc: "NHS recognizes students who are exemplary in the four pillars of service, character, leadership, and scholarship",
    adv: "Ms. McCullough",
    stucon: "Ilan Yampolsky (iyampolsky2024@sharonschools.net)",
    loc: "Cafeteria"
  },
  {
    name: "Navigating High School",
    nick: "Navigating HS",
    meetingdays: "Every other Thursday",
    type1: "Leadership",
    type2: "",
    mtg: "h",
    morning: "",
    desc: "A club where seniors share their advice, knowledge, and experiences to underclassmen in order to teach them how to navigate and succeed in high school and make the most out of it.",
    adv: "Mrs. Feldman",
    stucon:
      "Isabella Zelenchuk (izelenchuk2024@sharonschools.net), Gabriella Zelenchuk (gzelenchuk2024@sharonschools.net)",
    loc: 1307
  },
  {
    name: "Neuron Club",
    nick: "Neuron Club",
    meetingdays: "Wednesdays",
    type1: "Health",
    type2: "STEM",
    mtg: "w",
    morning: "",
    desc: "Are you fascinated by the intricate networks of neurons that power our thoughts, emotions, and actions? Do you want to explore the frontiers of neuroscience, psychology, and artificial intelligence? Look no further!  Our Neuron Club is a vibrant community of curious minds, dedicated to understanding the remarkable world of neurons and their role in shaping human cognition and behavior.",
    adv: "Mr. Snow",
    stucon:
      "Neha Busannagari (nbusannagari2025@sharonschools.net), Ayelet Yablon (ayablon2025@sharonschools.net), Chloe Muzio (cmuzio2025@sharonschools.net)",
    loc: 1401
  },
  {
    name: "Philanthropy Club",
    nick: "Philanthropy",
    meetingdays: "Every 2nd, 3rd, 4th Friday each month",
    type1: "SocialChange",
    type2: "",
    mtg: "f",
    morning: "",
    desc: "A club for knowing how to make a real impact, helping and learning about targeted communities, volunteer hours, sweet snacks, and a chill time!",
    adv: "Mr. Kamocsay",
    stucon:
      "Jacklyn Leybovich (jleybovich2025@sharonschools.net), Marena Chen (mchen2025@sharonschools.net), Shruthi Senthil (ssenthil2025@sharonschools.net)",
    loc: 1264
  },
  {
    name: "Photography Club",
    nick: "Photography",
    meetingdays: "Thursdays",
    type1: "Visual",
    type2: "",
    mtg: "h",
    morning: "",
    desc: "By joining this club, you'll have access to a community of photographers who can offer feedback and support on your work, as well as provide opportunities to collaborate on projects and share resources. Our latest project has been working with darkroom photography! We're taking photos with film cameras and developing them ourselves!",
    adv: "Mr. Van Beckum",
    stucon: "Nishka Joshi (njoshi2024@sharonschools.net)",
    loc: 2245
  },
  {
    name: "Physics Club",
    nick: "Physics Club",
    meetingdays: "Mondays",
    type1: "STEM",
    type2: "",
    mtg: "m",
    morning: "",
    desc: "We tackle challenging physics concepts to prepare for the F=ma exam, and help with physics homework!",
    adv: "Ms. Das",
    stucon:
      "Daniela Yablon (dyablon2025@sharonschools.net), Northey Cao (ncao2025@sharonschools.net)",
    loc: 2302
  },
  {
    name: "Pitch Please",
    nick: "Pitch Please",
    meetingdays: "Not Decided",
    type1: "Performing",
    type2: "",
    mtg: "o",
    morning: "",
    desc: "Pitch Please is a student led acapella club that sings fun acapella arrangements, and is a way for kids to participate in music and singing other than choir. We want kids to be excited about signing songs they enjoy, and performing at local performances such as the choir concerts and Theatre fundraisers.",
    adv: "Ms. Glenister",
    stucon:
      "Sammi Grosshandler (sgrosshandler2025@sharonschools.net), Liam Becker (lbecker2024@sharonschools.net)",
    loc: "Choir Room"
  },
  {
    name: "Pretty Tough: Girls Empowered",
    nick: "Pretty Tough",
    meetingdays: "Mondays",
    type1: "SocialChange",
    type2: "",
    mtg: "m",
    morning: "",
    desc: "A club that raises awareness about women's issues around the world and that holds open mics for girls to share their experiences as women.",
    adv: "Ms. Byrne",
    stucon:
      "Isabella Zelenchuk (izelenchuk2024@sharonschools.net), Gabriella Zelenchuk (gzelenchuk2024@sharonschools.net), Allison Bishop-Mote (abishop-mote2026@sharonschools.net), Caitlyn Oh (coh2025@sharonschools.net), Shruthi Senthil (ssenthil2025@sharonschools.net)",
    loc: 1501
  },
  {
    name: "Radio Club",
    nick: "Radio Club",
    meetingdays: "Thursdays",
    type1: "Performing",
    type2: "",
    mtg: "h",
    morning: "",
    desc: "Radio Club is a club mainly focused on audio production and event planning. We organize Concerts, Open Mics, Karaoke Nights, and we also help with audio during school dances, town events, and Pep Rallies",
    adv: "Mr. Tessier, Mr. Bys",
    stucon: "Patrick Blaney (pblaney2024@sharonschools.net)",
    loc: 2221
  },
  {
    name: "Red Cross Club",
    nick: "Red Cross",
    meetingdays: "Wednesdays",
    type1: "Health",
    type2: "",
    mtg: "w",
    morning: "",
    desc: "Sharon's Red Cross Club operates as an extension of the American Red Cross, empowering students to make a difference through service projects with a focus on biology to develop life saving and leadership skills.",
    adv: "Ms. Jolicoeur",
    stucon: "Shalu David (sdavid2026@sharonschools.net)",
    loc: 2412
  },
  {
    name: "Save a Child's Heart Club",
    nick: "SACH",
    meetingdays: "2x a month on Fridays",
    type1: "Health",
    type2: "",
    mtg: "f",
    morning: "",
    desc: "we want to raise money to help kids with heart defects have a better life.",
    adv: "Sra. Silipo",
    stucon:
      "Lacey Ronkin (lronkin2025@sharonschools.net), Jordan Burt (jburt@sharonschools.net)",
    loc: 1408
  },
  {
    name: "Science Olympiad",
    nick: "Sci Oly",
    meetingdays: "Tuesdays, (optional) Thursdays",
    type1: "STEM",
    type2: "",
    mtg: "t",
    morning: "",
    desc: "If you are a science nerd, you should join the SHS Science Olympiad! As a part of the club, you will work throughout the year to participate in numerous competitions. Some events you can prepare for include knowledge events, lab events, and engineering events. The test-based knowledge events require research, learning, organization, recalling, or finding information quickly to answer questions.",
    adv: "Ms. Das, Ms. Byrne",
    stucon:
      "Anna Voronova (avoronova2024@sharonschools.net), Bianca Danila (bdanila2024@sharonschools.net), Shreya Kalavur (skalavur2024@sharonschools.net), Michelle Bahhady (mbahhady2024@sharonschools.net), Ayelet Yablon (ayablon2025@sharonschools.net), Emily Zhang (ezhang2025@sharonschools.net)",
    loc: "STEAM Room or 2302"
  },
  {
    name: "Science Quiz Bowl",
    nick: "SQB",
    meetingdays: "Mondays",
    type1: "STEM",
    type2: "",
    mtg: "m",
    morning: "",
    desc: "School team that prepares for the NSB and its associated quiz bowl format invitationals",
    adv: "Mr. Buckley",
    stucon:
      "Omar Kannachankudy (okannachankudy2025@sharonschools.net), Mihir Kulkarni (mkulkarni2025@sharonschools.net)",
    loc: 2401
  },
  {
    name: "Serving for Sharon",
    nick: "Serving 4 Sharon",
    meetingdays: "Wednesdays",
    type1: "SocialChange",
    type2: "",
    mtg: "w",
    morning: "",
    desc: "Serving for Sharon aims to connect volunteers with local volunteer opportunities in a fun and positive environment.",
    adv: "Mr. Sanborn",
    stucon:
      "Chloe Allaire (callaire2025@sharonschools.net), Amaya Zibrak (azibrak2025@sharonschools.net)",
    loc: 2410
  },
  {
    name: "Sharon High School Theatre Company",
    nick: "SHSTC",
    meetingdays: "Varies",
    type1: "Performing",
    type2: "",
    mtg: "o",
    morning: "",
    desc: "SHSTC is a place for students to discover and develop a love for the arts. We put on around three productions a year and welcome new members. Whether you are interested in performing, building sets, or creating lights and sound -- we are happy to find a place for you!",
    adv: "Ms. Dussault, Mr. Narcotta",
    stucon:
      "Sadie Dussault (sdussault2024@sharonschools.net), Ena Bordman (ebordman2025@sharonschools.net)",
    loc: "Auditorium or STEAM Room"
  },
  {
    name: "Sharon Math and Science Tournament",
    nick: "SMST",
    meetingdays: "Fridays",
    type1: "STEM",
    type2: "",
    mtg: "f",
    morning: "",
    desc: "The SMST (Sharon Math and Science Tournament) Club helps make and run a tournament for SMS and other middle schools. Whether you want to work on math, science, or make a cool lab presentation, you can help out in any way and have fun with other sciency people!",
    adv: "Ms. Bhalekar",
    stucon:
      "Devin Barker (dbarker2025@sharonschools.net), Namitha Devulapalli (ndevulapalli2025@sharonschools.net)",
    loc: 2501
  },
  {
    name: "Slavic Cultural Club",
    nick: "Slavic Club",
    meetingdays: "Mondays",
    type1: "Culture",
    type2: "",
    mtg: "m",
    morning: "",
    desc: "Become a part of our passionate community and embrace the exhilarating essence of Slavic culture! Enjoy engaging activities such as the дурак card game, celebrate Slavic holidays like Новый Год, raise money for Ukraine through bake sales, and more!",
    adv: "Ms. Macoritto",
    stucon:
      "Anna Voronova (avoronova2024@sharonschools.net), David Mitkov (dmitkov2025@sharonschools.net), Maksim Straus (mstraus2025@sharonschools.net)",
    loc: 2407
  },
  {
    name: "Soda Club",
    nick: "SODA",
    meetingdays: "Thursdays",
    type1: "Health",
    type2: "",
    mtg: "h",
    morning: "",
    desc: "The SODA club raises awareness about organ donation, as well as registers students to become organ donors.",
    adv: "Ms. Jolicouer",
    stucon: "Kiran Koster (kkoster2025@sharonschools.net)",
    loc: "Foyer"
  },
  {
    name: "Spanish Volunteer Club",
    nick: "Spanish Volunteer",
    meetingdays: "Tuesdays",
    type1: "SocialChange",
    type2: "",
    mtg: "t",
    morning: "",
    desc: "We volunteer at Casa Myrna which is a Spanish shelter. We also plan to help out other unfortunate spanish communities/shelters within this upcoming year",
    adv: "Sra. May",
    stucon:
      "Karina Mason (kmason2024@sharonschools.net), Isabella Melpiagno (imelpiagno2024@sharonschools.net)",
    loc: 2509
  },
  {
    name: "Speech",
    nick: "Speech",
    meetingdays: "Mondays, Fridays",
    type1: "Leadership",
    type2: "",
    mtg: "o",
    morning: "",
    desc: "Speech is a great opportunity to enhance your public speaking skills in both a casual and competitive manner. Join our meetings to not only practice improvisational, emotional, and informational speaking, but also compete in the Massachusetts Speech & Debate League! Step outside of your comfort zone to become a better public speaker, and reap its benefits in all areas of your life!",
    adv: "Ms. Jolicoeur",
    stucon: "Nasiba Alikulova (nalikulova2025@sharonschools.net)",
    loc: 2411
  },
  {
    name: "STEM2Schools",
    nick: "STEM2Schools",
    meetingdays: "Every other Tuesday",
    type1: "STEM",
    type2: "",
    mtg: "t",
    morning: "",
    desc: "We are a STEM Research Journal that allows members to contribute reasearch writing in any STEM field they are interested in. We hold an end of the year presentation with guest speakers and go on STEM related field trips.",
    adv: "Ms. Nitschke",
    stucon:
      "Shreya Gorrepati (sgorrepati2024@sharonschools.net), Zach Posternak (zposternak2024@sharonschools.net)",
    loc: 1501
  },
  {
    name: "Student Council",
    nick: "StuCo",
    meetingdays: "Tuesdays",
    type1: "Leadership",
    type2: "",
    mtg: "t",
    morning: "",
    desc: "Student Council plans pep rallies and other events.",
    adv: "Ms. Jolicouer",
    stucon:
      "Alisha Mehta (amehta@sharonschools.net), Annika Amrhein (aamrhein2024@sharonschools.net)",
    loc: 2411
  },
  {
    name: "Student Mentors",
    nick: "Student Mentors",
    meetingdays: "As Needed",
    type1: "Leadership",
    type2: "",
    mtg: "o",
    morning: "",
    desc: "Student Mentors club has SHS students go to the middle school not only to inform the 8th graders about High School but to also teach about how to be a bystander and a leader in our Sharon community.",
    adv: "Ms. Fugazot, Ms. McLaughlin",
    stucon:
      "Sarah Fishman (sfishman2024@sharonschools.net), Ava Jacobson (ajacobson2025@sharonschools.net)",
    loc: "Counseling Suite"
  },
  {
    name: "Team Rival",
    nick: "Team Rival",
    meetingdays: "Wednesdays, Once a month on Thursday (ACES)",
    type1: "SocialChange",
    type2: "",
    mtg: "h",
    morning: 1,
    desc: "Team Rival is a program run by the Norfolk County District Attorney's Office with the goal to train peer leaders, and decrease the number of car accidents due to distracted or impaired teen drivers. Team Rival presents yearly challenges designed to reach out to high school students throughout the county with the goal of spreading awareness and encouraging safety.",
    adv: "Ms. d'Entremont, Ms. Ford-Mills",
    stucon:
      "Allie Bishop-Mote (abishop-mote2026@sharonschools.net), Callie Weader (cweader2025@sharonschools.net)",
    loc: "Counseling Suite"
  },
  {
    name: "The Talon",
    nick: "The Talon",
    meetingdays: "Tuesdays",
    type1: "Humanities",
    type2: "",
    mtg: "t",
    morning: "",
    desc: "Sharon High School's student-run Newspaper.",
    adv: "Ms. Ayotte",
    stucon:
      "Amoli Deshpande (adeshpande2026@sharonschools.net), Devin Barker (dbarker2025@sharonschools.net), Julian Hoemke (jhoemke2026@sharonschools.net)",
    loc: 2406
  },
  {
    name: "Tri-M Music Honor Society",
    nick: "Tri-M",
    meetingdays: "First Thursday of each month",
    type1: "Performing",
    type2: "",
    mtg: "h",
    morning: 1,
    desc: "Tri-M is a place for people wanting to better their music engagement, be a leader in the music community, and further their passion and commitment to the arts.",
    adv: "Mr. McGee",
    stucon:
      "Sadie Dussault (sdussault2024@sharonschools.net), Brendon Wen (bwen2025@sharonschools.net)",
    loc: "Auditorium"
  },
  {
    name: "Website Development Club",
    nick: "Web Dev Club",
    meetingdays: "Wednesdays",
    type1: "STEM",
    type2: "Pre-Professional",
    mtg: "w",
    morning: "",
    desc: "The Website Development Club is a community or organization dedicated to fostering skills and knowledge related to website creation and design. It typically brings together individuals with an interest in web development, ranging from beginners to experienced professionals.",
    adv: "Ms. Jolicoeur",
    stucon: "Yash Ponnaganti (yponnaganti2025@sharonschools.net)",
    loc: 2411
  },
  {
    name: "World Language National Honor Society",
    nick: "WLNHS",
    meetingdays: "Varies",
    type1: "Culture",
    type2: "",
    mtg: "o",
    morning: "",
    desc: "WLNHS raises awareness about different world cultures.",
    adv: "Sr. Brillant",
    stucon: "Zach Posternak (zposternak2024@sharonschools.net)",
    loc: "Zoom"
  },
  {
    name: "Young Women's Leadership Development Initiative",
    nick: "Y We LeaD",
    meetingdays: "Mondays",
    type1: "Leadership",
    type2: "SocialChange",
    mtg: "m",
    morning: "",
    desc: "Join Y We LeaD, the Young Women's Leadership Development Initiative, to promote women's leadership and develop your leadership skills! We led the Equal Pay Day Campaign last year and a trivia-style class meeting to educate about gender inequality in leadership. During meetings, we did leadership activities, elevator speeches, read, and watched Ted Talks. Come to room 1504 after school Mondays. All are welcome.",
    adv: "Mme O'Meara",
    stucon: "Annika Amrhein (aamrhein2024@sharonschools.net)",
    loc: 1504
  },
  {
    name: "Youth Investing",
    nick: "Youth Investing",
    meetingdays: "Wednesdays",
    type1: "Pre-Professional",
    type2: "",
    mtg: "w",
    morning: "",
    desc: "Learn the fundamentals of investing, business making, budgeting, and decision-making in our club. Explore strategies to grow your wealth and secure your financial future.",
    adv: "Mr. Sanborn",
    stucon:
      "Gaurav Gopakumar Nair (gnair2025@sharonschools.net), Ruhan Sah (rsah2025@sharonschools.net)",
    loc: 2410
  }
];

export default clubList;

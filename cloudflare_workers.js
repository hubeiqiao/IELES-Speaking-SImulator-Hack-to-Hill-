addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request, event));
});

const topics = [
  {
    "number": "Topic 1: Bikes",
    "questions": [
        "Did you have a bike when you were young?",
        "Do you have a bike now?",
        "Do you often ride a bike now?",
        "Are bikes popular in China?",
        "Did you ride a bike when you were little?"
    ]
},
{
    "number": "Topic 2: Coins",
    "questions": [
        "Do you often carry coins with you?",
        "Have you ever collected coins?",
        "Is it convenient to use coins?",
        "Do you use coins in your daily life?",
        "Did you use coins as a child?"
    ]
},
{
    "number": "Topic 3: Roads and streets",
    "questions": [
        "Are the roads and streets in the area where you live busy?",
        "How do people cross the road in the city where you live?",
        "What is the condition of the roads in your city like?",
        "Do you think the roads in your city need improvement?",
        "Are there any famous roads or streets in your country?"
    ]
},
{
    "number": "Topic 4: Laughing",
    "questions": [
        "Do you enjoy watching interesting and funny movies?",
        "Do you think you are a funny person?",
        "Are you a person who often makes others laugh?",
        "Do you always laugh at funny things?",
        "When was the last time you laughed?"
    ]
},
{
    "number": "Topic 5: Fishing",
    "questions": [
        "Is fishing popular in your country?",
        "Do you like eating fish?",
        "Do you like fishing?",
        "Did you ever go fishing when you were a child?"
    ]
},
{
    "number": "Topic 6: Teachers",
    "questions": [
        "Do you have a favourite teacher?",
        "In what way has your favourite teacher helped you?",
        "Do you have a teacher from your past that you still remember?",
        "Are you still in touch with your primary school teachers?",
        "Do you want to be a teacher in the future?"
    ]
},
{
    "number": "Topic 7: Place of work/study",
    "questions": [
        "Do you prefer to study at home or in a library?",
        "What is your favourite place to study?",
        "What part of your school do you like the most?",
        "Do you prefer to work at home or in the workplace?",
        "Do you prefer to work alone or in a group?"
    ]
},
{
    "number": "Topic 8: Perfume",
    "questions": [
        "Do you like perfume?",
        "Do you use perfume?",
        "Where do you spray perfume?",
        "Do you send perfume to others as a gift?",
        "Do you spend a lot of money on buying perfume?"
    ]
},
{
    "number": "Topic 9: Good view",
    "questions": [
        "What is the view like around the place where you live?",
        "Have you seen an unforgettable and beautiful view or scenery?",
        "Would you take photos when you see a good view?",
        "What is your favourite place? Why?"
    ]
},
{
    "number": "Topic 10: Teamwork",
    "questions": [
        "Do you like teamwork?",
        "Have you teamed up with someone else before?",
        "What do you learn from working in a team?",
        "What do you dislike about teamwork?"
    ]
},
{
    "number": "Topic 11: Meet new friends/people",
    "questions": [
        "Do you like making friends?",
        "Did you make a lot of friends when you were a child?",
        "Have you made any new friends recently?",
        "What do you often talk about with your new friends?",
        "Do you like meeting new people?",
        "Where can you meet new people?",
        "Do you enjoy talking to new people?",
        "Do you meet new people more often now than in the past?"
    ]
},
{
    "number": "Topic 12: Sharing",
    "questions": [
        "Did your parents teach you to share when you were a child?",
        "What kind of things do you like to share with others?",
        "What kind of things are not suitable for sharing?",
        "Do you have anything to share with others recently?"
    ]
},
{
    "number": "Topic 13: Language",
    "questions": [
        "What languages can you speak?",
        "What languages would you like to learn in the future?",
        "How do you learn a foreign language?",
        "How are languages taught and learned in your school?",
        "What kinds of difficulties would you have if you want to learn a new language?"
    ]
},
{
    "number": "Topic 14: Pen & Pencil",
    "questions": [
        "Do you usually use a pen or a pencil?",
        "Which do you use more often? Pen or pencil?",
        "When was the last time you bought a pen or pencil?",
        "What do you think if someone gives you a pen or pencil as a present?"
    ]
},
{
    "number": "Topic 15: Happy things",
    "questions": [
        "Is there anything that has made you feel happy lately?",
        "What made you happy when you were little?",
        "What do you think will make you feel happy in the future?",
        "When do you feel happy at work? Why?",
        "Do you feel happy when buying new things?",
        "Do you think people are happy when buying new things?"
    ]
},
{
    "number": "Topic 16: T-shirt",
    "questions": [
        "Do you like wearing T-shirts?",
        "How often do you wear T-shirts?",
        "Do you like T-shirts with pictures or prints?",
        "Do you think older people who wear T-shirts are fashionable?",
        "Would you buy T-shirts as souvenirs on vacation?",
        "Did you often wear T-shirts when you were a child?"
    ]
},
{
    "number": "Topic 17: Number",
    "questions": [
        "What's your favorite number?",
        "Are you good at remembering phone numbers?",
        "Do you usually use numbers?",
        "Are you good at math?",
        "Do numbers matter to you?"
    ]
},
{
    "number": "Topic 18: Relax",
    "questions": [
        "What would you do to relax?",
        "Do you think doing sports is a good way to relax?",
        "Do you think vacation is a good time to relax?",
        "Do you think students need more relaxing time?",
        "What kinds of places or environments would make you feel relaxed?",
        "Does listening to music make you feel relaxed?",
        "Do you often feel relaxed?",
        "Are you a cool-headed person?"
    ]
},
{
    "number": "Topic 19: Breakfast",
    "questions": [
        "What do you usually eat for breakfast?",
        "Do you think breakfast is important?",
        "Are there any differences between the mornings of your childhood and now?",
        "Would you like to change your morning routine?"
    ]
},
{
    "number": "Topic 20: Internet",
    "questions": [
        "When did you start using the internet?",
        "How often do you go online?",
        "How does the internet influence people?",
        "Do you think you spend too much time online?",
        "What would you do without the internet?"
    ]
},
{
    "number": "Topic 21: News",
    "questions": [
        "Are you interested in news?",
        "How do you usually find news?",
        "How do your friends get news?",
        "Have you read the news this morning?",
        "Do you often talk with your friends about the news?"
    ]
},
{
    "number": "Topic 22: Science",
    "questions": [
        "Do you like science?",
        "When did you start to learn about science?",
        "Which science subject is interesting to you?",
        "What kinds of interesting things have you done with science?",
        "Do you like watching science TV programs?",
        "Do Chinese people often visit science museums?"
    ]
},
{
    "number": "Topic 23: E-books and paper books",
    "questions": [
        "Which do you prefer, e-books or paper books?",
        "What do you usually read online?",
        "Will you read more online in the future?",
        "Do you think paper books will disappear in the future?"
    ]
},
{
    "number": "Topic 24: Daily routine",
    "questions": [
        "What is your daily study routine?",
        "Have you ever changed your routine?",
        "Do you think it is important to have a daily routine for your study?",
        "What part of your day do you like best?"
    ]
},
{
    "number": "Topic 25: Doing sports",
    "questions": [
        "What sports do you like?",
        "Where did you learn how to do it?",
        "Did you do some sports when you were young?",
        "Do you think students need more exercise?",
        "Do you know any schoolmates who are good at sports?",
        "Do you think it is important for people to exercise?",
        "Should schools encourage young students to take more physical exercise?"
    ]
},
{
    "number": "Topic 26: Exciting activities",
    "questions": [
        "Have you ever tried any exciting activities?",
        "What do you think were exciting activities when you were a child?",
        "Has anything exciting happened to you recently?",
        "Would you like to try scuba diving and rock climbing?"
    ]
},
{
    "number": "Topic 27: Schools and workplaces",
    "questions": [
        "Where is your school?",
        "Do you like your school?",
        "Do you think your school is a good place to study?",
        "What is the environment like at your school?",
        "What do you think could be improved in your school?",
        "How important is interest in study?",
        "Which subject do you find challenging?",
        "Do you like your job?",
        "Do you currently have a good work environment?",
        "What do you think could be improved at your workplace?",
        "Have you ever thought about changing jobs?",
        "What do you think would be challenging when you start working in the future?",
        "Is there a place in your company that makes you feel relaxed?",
        "What are the advantages of a company having a relaxation room?",
        "How do you go to work?",
        "How do you go to school?"
    ]
},
{
    "number": "Topic 28: Holidays",
    "questions": [
        "Where did you go for your last holiday?",
        "Do you like holidays? Why?",
        "Which public holiday do you like best?",
        "What do you do on holidays?",
        "Do you like to spend your day at home?",
        "Do you prefer a leisurely or a busy holiday?",
        "Would you prefer an exciting holiday or a peaceful holiday?"
    ]
},
{
    "number": "Topic 29: Childhood memory",
    "questions": [
        "What did you enjoy doing as a child?",
        "Did you enjoy your childhood?",
        "What are your best childhood memories?",
        "Do you think it is better for children to grow up in the city or in the countryside?",
        "Where did you go to play as a child?",
        "Who did you like to play with as a child?"
    ]
},
{
    "number": "Topic 30: Morning routines",
    "questions": [
        "What do you do in the mornings?",
        "Is breakfast important?",
        "What is your morning routine?",
        "Do you like to get up early in the morning?"
    ]
},
{
    "number": "Topic 31: Staying at home",
    "questions": [
        "Are you a person who likes to stay at home?",
        "What do you do when you stay at home?",
        "What is your favourite place at home?",
        "What did you often do at home as a child?",
        "Would you like to stay at home a lot in the future?",
        "What do you like to do in your free time when you're at home?"
    ]
},
{
    "number": "Topic 32: Challenges",
    "questions": [
        "What subject do you think is the most challenging at school?",
        "Do you like to challenge yourself?",
        "Do you like to live a life that has a lot of challenges?",
        "How do you usually deal with challenges in daily life?"
    ]
},
{
    "number": "Topic 33: Plants",
    "questions": [
        "Do you keep plants at home?",
        "What plant did you grow when you were young?",
        "Do you know anything about growing a plant?",
        "Do Chinese people send plants as gifts?"
    ]
},
{
    "number": "Topic 34: Social media",
    "questions": [
        "When did you start using social media?",
        "Do you think you spend too much time on social media?",
        "Do your friends use social media?",
        "What do people often do on social media?"
    ]
},
{
    "number": "Topic 35: Films",
    "questions": [
        "What films do you like?",
        "Did you often watch films when you were a child?",
        "Did you ever go to the cinema alone as a child?",
        "Do you often go to the cinema with your friends?",
        "Do you think going to the cinema is a good way to spend time with friends?",
        "How often do you watch films?",
        "Do you prefer to watch films at home or in the cinema?"
    ]
},
{
    "number": "Topic 36: Music/Musical instruments",
    "questions": [
        "Have you ever learned to play a musical instrument?",
        "What musical instruments do you enjoy listening to the most?",
        "Do you think children should learn to play an instrument at school?",
        "Do you think music education is important to children?",
        "Do a lot of people like music?",
        "Do schools in your country have music lessons?"
    ]
},
{
    "number": "Topic 37: The city you live in",
    "questions": [
        "What city do you live in?",
        "Do you like this city? Why?",
        "How long have you lived in this city?",
        "Are there big changes in this city?",
        "Is this city your permanent residence?",
        "Are there people of different ages living in this city?",
        "Are the people friendly in the city?",
        "Is the city friendly to children and old people?",
        "Do you often see your neighbors?",
        "What's the weather like where you live?",
        "Would you recommend your city to others?"
    ]
},
{
    "number": "Topic 38: Work or studies",
    "questions": [
        "What subjects are you studying?",
        "Do you like your subject?",
        "Why did you choose to study that subject?",
        "Do you think that your subject is popular in your country?",
        "Do you have any plans for your studies in the next five years?",
        "What are the benefits of being your age?",
        "Do you want to change your major?",
        "Do you prefer to study in the mornings or in the afternoons?",
        "How much time do you spend on your studies each week?",
        "Are you looking forward to working?",
        "What technology do you use when you study?",
        "What changes would you like to see in your school?",
        "What work do you do?",
        "Why did you choose to do that type of work (or that job)?",
        "Do you like your job?",
        "What requirements did you need to meet to get your current job?",
        "Do you have any plans for your work in the next five years?",
        "What do you think is the most important at the moment?",
        "Do you want to change to another job?",
        "Do you miss being a student?",
        "What technology do you use at work?",
        "Who helps you the most? And how?"
    ]
},
{
    "number": "Topic 39: Home/accommodation",
    "questions": [
        "What kind of house or apartment do you want to live in in the future?",
        "Are the transport facilities to your home very good?",
        "Do you prefer living in a house or an apartment?",
        "Please describe the room you live in.",
        "What part of your home do you like the most?",
        "How long have you lived there?",
        "Do you plan to live there for a long time?",
        "What’s the difference between where you are living now and where you have lived in the past?",
        "Can you describe the place where you live?",
        "What room does your family spend most of the time in?",
        "What's your favorite room in your apartment or house?",
        "What makes you feel pleasant in your home?",
        "Do you think it is important to live in a comfortable environment?",
        "Do you live in an apartment or a house?",
        "Who do you live with?",
        "What do you usually do in your apartment?",
        "What kinds of accommodation do you live in?"
    ]
},
{
    "number": "Topic 40: Hometown",
    "questions": [
        "Where is your hometown?",
        "Is that a big city or a small place?",
        "Please describe your hometown a little.",
        "How long have you been living there?",
        "Do you think you will continue living there for a long time?",
        "Do you like your hometown?",
        "Do you like living there?",
        "What do you like (most) about your hometown?",
        "Is there anything you dislike about it?",
        "What's your hometown famous for?",
        "Did you learn about the history of your hometown at school?",
        "Are there many young people in your hometown?",
        "Is your hometown a good place for young people to pursue their careers?"
    ]
},
{
    "number": "Topic 41: The area you live in",
    "questions": [
        "Do you like the area that you live in?",
        "Where do you like to go in that area?",
        "Do you know any famous people in your area?",
        "What are some changes in the area recently?",
        "Do you know any of your neighbors?",
        "Are the people in your neighborhood nice and friendly?",
        "Do you live in a noisy or a quiet area?"
    ]
},
  {
    "number": "Topic 42",
    "questions": [
      "Part 2: Describe an online video in which you learned something new. You should say: - When and where you watched it - What it was - Why you watched it - And explain what you have learned from it",
      "Part 3: What kinds of videos are most popular in your country? Are there many people who watch online videos a lot? Do you think people spend too much time watching short videos? Why? Why are so many young people obsessed with short videos? What are the advantages of online learning? Do you think online learning will replace face-to-face learning?"
    ]
  },
  {
    "number": "Topic 43",
    "questions": [
      "Part 2: Describe something you did in your study/work that has made you feel confident. You should say: - When and where it happened - What you did - Why it made you feel confident - And explain how you felt about it",
      "Part 3: How can a person become more confident? What can teachers do to help their students become more confident? How can teachers help their students become more confident by rewarding them for studying? What can teachers do to make studying more interesting? Do you think that children of confident parents are also confident? Why do so many people lack confidence these days?"
    ]
  },
  {
    "number": "Topic 44",
    "questions": [
      "Part 2: Describe a person who has strong opinions. You should say: - Who this person is - How you knew him/her - What kinds of strong opinions this person has - And explain why you think he/she is a person who has strong opinions",
      "Part 3: What do young people have strong opinions about? What do old people have strong opinions about? Are there many young people who have strong opinions in our lives? Which is more important, listening to others or persuading others? Do you think we should only say something after thinking it through? Do you think it is good to have strong opinions?"
    ]
  },
  {
    "number": "Topic 45",
    "questions": [
      "Part 2: Describe a time when you answered a phone call from someone you didn't know in a public place. You should say: - When and where it happened - Who called you - What he/she said - How you responded - And explain how you felt about the experience",
      "Part 3: Do most people mind others talking on the phone in public places? What are the differences between sitting next to someone who talks on the phone and sitting next to people who talk to each other while traveling by train? Why do some people not care about their actions in public? Should parents teach their children to behave well in public? Is it acceptable to talk on the phone in public? Should people be banned from talking loudly in public places?"
    ]
  },
  {
    "number": "Topic 46",
    "questions": [
      "Part 2: Describe an old friend you had lost touch with and got in contact with again. You should say: - Who he/she is - How you knew each other - Why you lost contact - How you got in contact again - And explain how you felt after getting in contact again",
      "Part 3: Is it better to have a lot of friends than just a few friends? Would having just a few friends limit your horizons? Do you think you are good at maintaining good relationships with others? Why do old friends lose touch with each other? Why do people need to make new friends? Why do we have to give up some old friends?"
    ]
  },
  {
    "number": "Topic 47",
    "questions": [
      "Part 2: Describe a cultural place that you would like to learn the culture there (e.g. a library, museum, theatre). You should say: - Where it is - How you knew this place - What it is like - And explain why you would like to learn the culture there",
      "Part 3: How does the internet affect culture? How is a culture formed? What kind of culture is popular among young people? How do young people learn about different cultures? Which is more important in terms of culture, literature or music? Does the culture of the past have an impact on today's culture?"
    ]
  },
    {
      "number": "Topic 48",
      "questions": [
        "Part 2: Describe a person from whom others like to ask for advice. You should say: - Who this person is - Why people like to ask for his/her advice - What kind of advice he/she often gives - And explain how you feel about the person",
        "Part 3: Do you follow the advice of your family members? Who should people ask for advice on big issues, family members or friends? Do people often ask for advice from professional people, like a lawyer? Why do some people like to ask others for advice on almost everything? Do you think the advice parents give their children is always good? Are professional consultancy services expensive in your country?"
      ]
    },
    {
      "number": "Topic 49",
      "questions": [
        "Part 2: Describe a crowded place you went to. You should say: - Where it was - When you went there - Who you went there with - What you did there - And how you felt about it",
        "Part 3: Which cities are overcrowded in your country? Will there be more or less green space in cities in the future? Will people use bikes more or less in cities in the future? Why do people go to crowded places? Do you think there are some people who enjoy crowded places? Do you think it is a good trend to have more big cities?"
      ]
    },
    {
      "number": "Topic 50",
      "questions": [
        "Part 2: Describe an ideal and perfect place where you would like to stay (e.g., a house, an apartment). You should say: - Where it would be - What it would look like - What special features it would have - Whether it would be big or small - And explain why it would be an ideal place for you",
        "Part 3: What are apartments like in your country? Why are apartments popular in some places while not in other places? What would people normally consider when they rent or buy a house or an apartment? Do different people have different preferences for houses or apartments? Why do some people choose to live in the city center? What do you think buildings will be like in the future?"
      ]
    },
    {
      "number": "Topic 51",
      "questions": [
        "Part 2: Describe a movie you watched and enjoyed recently. You should say: - When and where you watched it - Who you watched it with - What it was about - And explain why you watched this movie",
        "Part 3: What kinds of movies do you think are successful in your country? What are the factors that make a successful movie? Do people prefer to watch domestic movies or foreign movies? Do you think only well-known directors can create the best movies? Do successful movies need well-known actors or actresses in leading roles? Why do people prefer to watch movies in the cinema?"
      ]
    },
    {
      "number": "Topic 52",
      "questions": [
        "Part 2: Describe an occasion when you helped a family member/relative with something. You should say: - When it happened - Who you helped - How you helped - And explain how you felt about the experience",
        "Part 3: How can children help their parents at home? Should parents always help their children with everything? What can children learn by helping others? Should parents reward their children when they help others? Do neighbors often help each other in your country? How do people know that their neighbors might need help?"
      ]
    },
    {
      "number": "Topic 53",
      "questions": [
        "Part 2: Describe a person you know who has chosen a career in the medical field (e.g., a doctor, a nurse). You should say: - Who he/she is - What he/she does - Why he/she chose this career - And explain how you feel about him/her",
        "Part 3: Do you think doctors and nurses are very important? Who plays a more important role, doctors or nurses? Do you think that doctors and nurses are not paid enough? Do you think it is necessary to learn first aid skills? What are the differences between the work of a doctor and a nurse? Can a hospital function effectively without nurses?"
      ]
    },
      {
        "number": "Topic 54",
        "questions": [
          "Part 2: Describe a time when you lost an important and valuable item. You should say: - When and where it happened - What it was - How important and valuable it was - How you lost it - And explain how you felt about the experience",
          "Part 3: What are some common items that people tend to lose easily? What are the reasons why people often misplace or lose things? What do people often do after losing things? What should parents do to teach their children not to lose things? Are there any good ways to remind us not to forget or lose things?"
        ]
      },
      {
        "number": "Topic 55",
        "questions": [
          "Part 2: Describe a prize you have received recently (e.g., money, something valuable, a medal). You should say: - What it was - When you received it - What you did to receive it - And explain how you felt about it",
          "Part 3: Do you think competition is all about the prize? Why should we set prizes for competitions? What prizes should schools set for students? What criteria should be set for students to win a particular prize? Why do many companies offer prizes to their customers?"
        ]
      },
      {
        "number": "Topic 56",
        "questions": [
          "Part 2: Describe a challenge you faced that you thought was rather difficult. You should say: - What it was - When and where you faced it - Why you thought it was a difficult challenge - And explain how you felt at the time",
          "Part 3: What do children often do when they face a challenge? Is it easy for children to overcome a challenge? Do most people choose to face a challenge alone or with others? What activities do you think would make children feel challenged? What challenges would people face when learning new sports?"
        ]
      },
      {
        "number": "Topic 57",
        "questions": [
          "Part 2: Describe a person who likes to read a lot. You should say: - Who this person is - How you knew him/her - What he/she likes to read - And explain why you think he/she likes to read a lot",
          "Part 3: Why are many people so keen on reading? Do you think parents should help their children develop the reading habit from an early age? Is reading for fun or for work? What reading topics are popular in your country? What are the differences between paper books and movies? Do you think people of all ages need to read?"
        ]
      },
      {
        "number": "Topic 58",
        "questions": [
          "Part 2: Describe a person who likes to make things by hand (e.g., toys, furniture). You should say: - Who this person is - What he/she makes - Why he/she likes to make things by hand - And explain how you feel about the person",
          "Part 3: Are traditional handicrafts important to tourism? What are the benefits for students to learn to make things by hand? Why do many children like to make things by hand? Are there any traditional handicrafts in your hometown? Is it reasonable to charge a high price for handmade things? How does modern technology change the handicraft industry?"
        ]
      },
      {
        "number": "Topic 59",
        "questions": [
          "Part 2: Describe a place in your hometown/city that is different from other places and that you enjoy visiting with your parents/friends. You should say: - Where it is - What it is like - What you often do there - Who you often go there with - And explain why you think it is different",
          "Part 3: What are the differences between big cities and small cities? Where do people in your hometown like to go? What are the differences between the places young people like to go and the places old people like to go? What do young people like to do in their leisure time?"
        ]
      },
        {
          "number": "Topic 60",
          "questions": [
            "Part 2: Describe a public park or garden you have been to. You should say: - Where it is - What it is like - How often you go there - What you do there - And explain how you feel about it",
            "Part 3: Is it necessary to have public parks in cities? What facilities are needed in a park? What are the differences between a garden and a natural area? Why do people like to visit tourist attractions? What tourist attractions are popular in China? How can we encourage young people to go to parks more often?"
          ]
        },
        {
          "number": "Topic 61",
          "questions": [
            "Part 2: Describe your favorite food at a traditional festival or special event in your country. You should say: - What it is - At which festival/event you eat it - How it is made - And explain why you like it",
            "Part 3: Do people in your country grow plants at home? What plants can people grow in cities? Are there any difficulties when people grow plants in cities? Do most people prefer vegetables bought from the supermarket or grown at home? Why do people like to have a big meal at traditional festivals or big events? Is it bad behavior for people to look at their phones during a meal?"
          ]
        },
        {
          "number": "Topic 62",
          "questions": [
            "Part 2: Describe someone else's room you enjoy spending time in. You should say: - When you visited there - Whose room it is - What it is like - What you can do in it - And explain why you enjoy spending time there",
            "Part 3: Do you like to invite your friends to your home? Do most people visit other people's houses during the Spring Festival? Why do people often take gifts with them when they visit others’ homes? What are the most enjoyable parts of having a meal together with your family? Who likes to stay at home more, young people or old people? Do you think old people will be able to keep up with the pace of technology in 50 years?"
          ]
        },
        {
          "number": "Topic 63",
          "questions": [
            "Part 2: Describe a place where people can see a lot of wildlife (e.g., animals, birds, insects). You should say: - Where it is - What kinds of wildlife people can see there - Whether people like to go there - And explain how you feel about it",
            "Part 3: Why are most children interested in wild animals? Should parents take their children to the zoo to see wild animals? Are wild animals easy to spot in your country? Are there many wildlife documentaries produced in your country? What impacts does only seeing wild animals in zoos have on children’s understanding of these animals? Which is the better way to see wildlife, watching documentaries or going into the wild?"
          ]
        },
        {
          "number": "Topic 64",
          "questions": [
            "Part 2: Describe a time when you received good service in a shop/store. You should say: - Where the shop is - When you went to the shop - What service you received from the staff - And explain how you felt about the service",
            "Part 3: Why are shopping malls so popular in China? What are the advantages and disadvantages of shopping in small shops? Why do some people not like shopping in small shops? What are the differences between online shopping and in-store shopping? What are the advantages and disadvantages of shopping online? Can consumption drive economic growth?"
          ]
        },
        {
          "number": "Topic 65",
          "questions": [
            "Part 2: Describe an old person you know who has had an interesting life. You should say: - Who this person is - Where he/she lives - What he/she has done in his/her life - And explain how you feel about him/her",
            "Part 3: What do old people often do in their daily lives? Why do some people live with old people? Can old people and their grandchildren learn from each other when they live together? What are the benefits of elderly people living alone? Do old people prefer to stay at home or go outside? Why? Do you think old people’s life will improve with the development of technology?"
          ]
        },
        {
          "number": "Topic 66",
          "questions": [
            "Part 2: Describe a place (city/town) that is good for people to live in. You should say: - Where it is - How you knew this place - What it is like - And explain why it is better than other places to live in",
            "Part 3: What are the differences between cities and towns? What has happened to towns and villages in recent years in your country? What are the differences between big cities and small ones? What factors will contribute to whether a place is good to live in or not? What are the major changes that have happened in your city? How different is life in the countryside to life in the city?"
          ]
        },
        {
          "number": "Topic 67",
          "questions": [
            "Part 2: Describe a person who likes to buy goods with low prices. You should say: - Who this person is - What this person likes to buy - Where this person likes to buy things - And explain why this person likes cheap goods",
            "Part 3: What are the differences between shopping in a shopping mall and in a street market? Which is more commonly visited in China, shopping malls or street markets? Is advertising important? What are the disadvantages of shopping in a street market? How do you buy cheap products? Do you think things are more expensive in big shopping malls?"
          ]
        },
        {
          "number": "Topic 68",
          "questions": [
            "Part 2: Describe an important plant in your country. You should say: - What it is - Where you see it - What it looks like - And explain why it is important",
            "Part 3: What are the features of living in the countryside? Should schools teach children how to grow plants? Why do some people prefer to live in the countryside? Have new kinds of plants been grown in your city recently? Why do some people like to keep plants at home? Are there many trees in your city?"
          ]
        },
        {
          "number": "Topic 69",
          "questions": [
            "Part 2: Describe a historical building you have been to. You should say: - Where it is - What it looks like - What it is used for now - What you learned there - And how you felt about this historical building",
            "Part 3: Why do people visit historical buildings? Do Chinese people like to visit historical buildings? Do most people agree to the government’s funding to protect historical buildings? Is it necessary to protect historical buildings? What factors do people often consider when buying a house or an apartment? What are the differences between today’s houses and those in the past?"
          ]
        },
        {
          "number": "Topic 70",
          "questions": [
            "Part 2: Describe a person who thinks music is important and enjoys music. You should say: - Who this person is - How you knew him/her - What music he/she likes - Why he/she thinks music is important - And explain how you feel about him/her",
            "Part 3: What do you think about playing music for children in class? Why do many teachers incorporate music into the classroom? Do you think there are any advantages to a shop with music playing? Would people’s shopping behavior be affected in a shop with music? What do you think would be the effect of background music in a film? Why are musical movies so popular?"
          ]
        },
        {
          "number": "Topic 71",
          "questions": [
            "Part 2: Describe an occasion you wore the best clothes. You should say: - When it was - What you wore - Why you wore it - And how you felt about it",
            "Part 3: Do you think people need to wear formally in the workplace? Why do some people like to wear traditional clothes? Will traditional clothes disappear in the future? Do old people change their style of dressing? Why do some people like to wear expensive clothes? Who would wear formal clothes more often, young people or old people?"
          ]
        },
        {
          "number": "Topic 72",
          "questions": [
            "Part 2: Describe an indoor or outdoor place where it is easy for you to study. You should say: - Where it is - What it is like - When you go there - What you study there - And explain why you would like to study in this place",
            "Part 3: Do you like to learn on your own or with others? What’s the difference between learning face-to-face with teachers and learning by yourself? Do you prefer to study at home or study in other places? What are the benefits of gaining work experience while studying? Do most people like to study in a noisy place? What are the advantages and disadvantages of studying with other people?"
          ]
        },
        {
          "number": "Topic 73",
          "questions": [
            "Part 2: Describe a time when you missed or were late for an important meeting/event. You should say: - When it happened - What happened - Why you missed/were late for it - And explain how you felt about this experience",
            "Part 3: Are you a punctual person? Do you think it is important to be on time? Do you always avoid being late? Why are people often late for meetings or appointments? Are people in your country often late for meetings? Do you think people are born with time management skills or they can develop them?"
          ]
        },
        {
          "number": "Topic 74",
          "questions": [
            "Part 2: Describe a place you have been to where things are expensive. You should say: - Where the place is - What the place is like - Why you went there - What you bought there - And explain why you think things are expensive there",
            "Part 3: Why do some people still use cash? Will the payment be paperless in the future? What do you think of the view that time is as important as money? Is it more important to choose a job with a high salary or with more time off? How important is it to have a variety of payment options? Why are things more expensive in some places than in others?"
          ]
        },
        {
          "number": "Topic 75",
          "questions": [
            "Part 2: Describe a special meal that someone made for you. You should say: - Who did it - When and how he/she cooked - What and why he/she cooked for you - And explain how you felt about the meal",
            "Part 3: Should students learn to cook at school? Do you think people’s eating habits would change as they get older? Do people in your country like to learn to cook from TV programmes? What kinds of fast food are popular in China? Are there any people who wouldn’t eat meat for their whole lives? What do you think about vegetarians?"
          ]
        },
        {
          "number": "Topic 76",
          "questions": [
            "Part 2: Describe something you own that you want to replace. You should say: - What it is - Where it is - How you got it - And explain why you want to replace it",
            "Part 3: Does consumption have any impact on the environment? Why do people always want to buy new things to replace old ones? Why do you think some people replace things more often than others? Why do young people change things more often than old people? Why do some people like to buy expensive things? Why do some people prefer to buy things in the supermarket rather than online?"
          ]
        },
        {
          "number": "Topic 77",
          "questions": [
            "Part 2: Describe a new law you would like to introduce in your country. You should say: - What law it is - What changes this law brings - Whether this new law will be popular - How you came up with the new law - And explain how you feel about this new law",
            "Part 3: What rules should students follow at school? Do people in your country usually obey the law? What kinds of behavior are considered as good behavior? Do you think children can learn about the law outside of school? What are the benefits for people to obey rules? How can parents teach children to obey rules?"
          ]
        },
        {
          "number": "Topic 78",
          "questions": [
            "Part 2: Describe an enjoyable journey by public transport. You should say: - Where you went - Who you were with - What you did - And how you felt about it",
            "Part 3: Why do people choose to travel by public transport? Why do more and more people like to travel by plane? Do you think offering free public transport will solve traffic problems in the city? What are the disadvantages of traveling by public transport? What do you think are the cheapest and most expensive means of transport? What are the difficulties that commuters face during rush hours?"
          ]
        },
        {
          "number": "Topic 79",
          "questions": [
            "Part 2: Describe a time when someone gave you something that you really wanted. You should say: - What it was - When you received it - Who gave it to you - And explain why you wanted it so much",
            "Part 3: Should employees have their own goals? How should bosses reward employees? What kinds of gifts do young people like to receive as rewards? How should children spend their allowance money? Why do people like shopping more now than in the past? Do you think shopping is good for a country's economy?"
          ]
        },
        {
          "number": "Topic 80",
          "questions": [
            "Part 2: Describe a person who you are happy to know. You should say: - Who this person is - How you know this person - What he or she is like - And explain why you are happy to know him/her",
            "Part 3: How can children feel happy? What’s the difference between adults’ and children’s happiness? Do you think everyone shares a similar definition of happiness? Some people say that living in a happy city is boring. What do you think? Which do you think is more important in the workplace, happiness or high salaries? How can companies improve employee happiness?"
          ]
        },
        {
          "number": "Topic 81",
          "questions": [
            "Part 2: Describe an interesting place you have been to with a friend. You should say: - What and where the place is - Who you went with - When you went there - What you did there - And explain why you think it is interesting",
            "Part 3: Why do people need friends? How do you communicate with friends? Why don’t some people like to socialize? Can talking with people improve social skills? Does technology help people communicate better with others? Do you prefer to go out with a group of friends or just with a few close friends?"
          ]
        },
        {
          "number": "Topic 82",
          "questions": [
            "Part 2: Describe an interesting old person you have met. You should say: - Who this person is - When/where you met this person - What you did with this person - And explain why you think this person is interesting",
            "Part 3: Do you think old people and young people can share interests? What can old people teach young people? Is it easy for young people and old people to make friends with each other? Are there benefits when one person is interested in another person? Why? Do you think people are more selfish or self-centered now than in the past? What benefits can people get if they are self-centered?"
          ]
        },
        {
          "number": "Topic 83",
          "questions": [
            "Part 2: Describe a person who encouraged you to achieve your goal. You should say: - Who the person is - How he/she encouraged you - What goal you achieved - And explain how you feel about this person",
            "Part 3: Do you think children are more likely to achieve their goals if they are encouraged? What should parents do if their children don’t want to study? Who do you think should set goals for children? Who plays a more important role in children’s education, parents or teachers? Is money the only motivation for people to work hard? Which is more important, competition or cooperation?"
          ]
        },
        {
          "number": "Topic 84",
          "questions": [
            "Part 2: Describe a tourist attraction that very few people visit but you think is interesting. You should say: - What the place is - What people can see there - Why only very few people visit there - And explain why you think it is interesting",
            "Part 3: Why do people visit tourist attractions? What makes a tourist attraction famous? Do local people like to visit local tourist attractions? Do you think tourism causes environmental damage? How can people prevent the environmental damage caused by tourism? Should all tourist attractions be free to the public?"
          ]
        },
        {
          "number": "Topic 85",
          "questions": [
            "Part 2: Describe a place where you have taken photos more than once. You should say: - Where the place is - When you took the photos - What special features the photos taken there have - And explain why you have been there more than once to take photos",
            "Part 3: Do you like to take photos? Where do people often like to take photos? Who would like to take photos more often, young people or older people? Would you pay a lot of money to hire a photographer? Do you think being a photographer is a good job? On what occasions do people need formal photos?"
          ]
        },
        {
          "number": "Topic 86",
          "questions": [
            "Part 2: Describe a noisy place you have been to. You should say: - Where it is - When you went there - What you did there - And explain why you feel it’s a noisy place",
            "Part 3: Do you think it is good for children to make noise? Should children not be allowed to make noise under any circumstances? What kinds of noises are there in our life? Which area is exposed to noise more, the city or the countryside? How would people usually respond to noises in your country? How can people consider others' feelings when chatting in public?"
          ]
        },
        {
          "number": "Topic 87",
          "questions": [
            "Part 2: Describe a risk you took that you thought would lead to a terrible result but ended up with a positive result. You should say: - When you took the risk - Why you took the risk - How it went - And explain how you felt about it",
            "Part 3: How should parents teach their children what a risk is? What risks should parents tell their children to avoid? Why do some people like to watch risk-taking movies? What kinds of sports are dangerous but exciting? Why do some people enjoy dangerous sports? Who is more interested in taking risks, the young or the old?"
          ]
        },
        {
          "number": "Topic 88",
          "questions": [
            "Part 2: Describe a natural place (e.g. parks, mountains). You should say: - Where this place is - How you knew this place - What it is like - And explain why you like to visit it",
            "Part 3: What kind of people like to visit natural places? What are the differences between a natural place and a city? Do you think that going to the park is the only way to get close to nature? What can people gain from going to natural places? Are there any wild animals in the city? Do you think it is a good idea to let animals stay in local parks for people to see?"
          ]
        },
        {
          "number": "Topic 89",
          "questions": [
            "Part 2: Describe someone (a famous person) that is a role model for young people. You should say: - Who he/she is - How you knew him/her - What he/she has done - And explain why he/she can be a role model for young people",
            "Part 3: What kinds of people are likely to be the role models for teenagers? Is it important for children to have a role model? Are there any differences between today’s famous people and those of the past? What qualities do famous people have? What kinds of people are likely to become famous? Do people tend to choose the best people as their role model?"
          ]
        },
        {
          "number": "Topic 90",
          "questions": [
            "Part 2: Describe a picture/photograph of you that you like. You should say: - Where it was taken/drawn - When it was taken/drawn - Who took/drew it - And explain how you felt about it",
            "Part 3: Why do people take photos? What do people use to take photos these days, cameras or phones? Is it difficult for people to learn how to take good photos? How do people keep their photos? What photos do people often hang on the wall at home? Is it necessary for students to learn art?"
          ]
        },
        {
          "number": "Topic 91",
          "questions": [
            "Part 2: Describe a sport you watched and would like to try. You should say: - When and where you watched it - Why you watched it - Who you watched it with - Whether you will do it in the future - And explain how you felt about it",
            "Part 3: Why do many people like to buy expensive sportswear for playing ball games? What kinds of sports games do young and old people like to watch in your country? Why do so many people like to watch sports games? Do you think that international sports games are for money? Many advertisers like to use sports stars endorsements. What do you think are the reasons? Do you think sportsmen would use the sports gears promoted in the commercials?"
          ]
        },
        {
          "number": "Topic 92",
          "questions": [
            "Part 2: Describe a party that you enjoyed. You should say: - When and where the party was held - Who attended the party - What kind of party it was - What you did in the party - And explain why you enjoyed this party",
            "Part 3: Why do people like parties? Why do some people not like going to parties? Do you think those who tend to stay at home are less healthy than those who often attend parties? Do you think music and dancing are a must at a party? What would you do if you were disturbed by a neighbour’s party? What are the differences between holding a party at home and in a public place?"
          ]
        },
        {
          "number": "Topic 93",
          "questions": [
            "Part 2: Describe someone you know who made a good decision recently. You should say: - Who he/she is - When he/she made the decision - What decision he/she made - Why it was a good decision - And explain how you felt about the decision",
            "Part 3: Should parents make decisions for their children? Do you think parents are the best people to make decisions about their children’s education? At what age do you think children can be allowed to make decisions by themselves? Why do most children find it difficult to make decisions? Should parents interfere in children's decision-making? How should parents help their children make decisions?"
          ]
        }
];

function selectRandomTopics(part, numTopics) {
  let selectedTopics = [];
  let partTopics = [];

  if (part === 1) {
    partTopics = topics.slice(0, 41);
    while (selectedTopics.length < numTopics) {
      const randomIndex = Math.floor(Math.random() * partTopics.length);
      selectedTopics.push(partTopics.splice(randomIndex, 1)[0]);
    }
  } else if (part === 2 || part === 3) {
    partTopics = topics.slice(42, 93);
    const randomIndex = Math.floor(Math.random() * partTopics.length);
    selectedTopics.push(partTopics[randomIndex]);
  }

  return selectedTopics.map(topic => ({ number: topic.number, questions: topic.questions }));
}

async function handleRequest(request) {
  const url = new URL(request.url);
  const part = parseInt(url.searchParams.get('part') || '0'); // Default to '0' for all parts
  const num = url.searchParams.get('num');

  // Extract API key from headers
  const apiKey = request.headers.get('x-api-key');
  const storedApiKey = API_KEY;  // Access the secret

  if (!apiKey || apiKey !== storedApiKey) {
    return new Response('Unauthorized', { status: 401 });
  }

  let response = "";

  if (part === 1 || part === 0) {
    const numTopicsPart1 = part === 1 && num ? parseInt(num) : 3; // Default to 3 topics for Part 1
    const topicsPart1 = selectRandomTopics(1, numTopicsPart1);
    topicsPart1.forEach(topic => {
      response += `Part 1 Topics: ${topic.number}\nQuestions:\n${topic.questions.join("\n")}\n\n`;
    });
  }
  if (part === 2 || part === 3 || part === 0) {
    const numTopicsPart2and3 = 1; // Always 1 topic for Part 2 and 3
    const topicPart2and3 = selectRandomTopics(2, numTopicsPart2and3); // Same topic for Part 2 and 3
    topicPart2and3.forEach(topic => {
      response += `Part 2&3 Topic: ${topic.number}\nQuestions:\n${topic.questions.join("\n")}\n\n`;
    });
  }

  return new Response(response, {
    headers: { 'content-type': 'text/plain' },
  });
}
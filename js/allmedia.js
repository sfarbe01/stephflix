var currentmedia = [];
/*
var currensort = null;
var currenttype = null;
var currentplatform = null;
*/

var media = [

  //TV//
   {
    "name": "ArrestedDevelopment",
    "posterImage": "images/arrested.jpg",
    "movieTitle": "Arrested Development",
    "rtRating": 93,
    "myRating": 7,
    "genre": "Comedy",
    "synopsis": "A successful family man worries that his four children are losing touch with black culture because they are growing up in an affluent, mostly white neighborhood.",
    "recommendations": "If you like this watch...",
    "myreview": "If there is one thing you should know about this show it's that there is ALWAYS money in the banana stand. If Hell is other people then Arrested Development is the closest thing to Hell available to stream. The absurd antics of the Bluthe family and the ways in which their varying levels of stupidity and solipsism constantly frustrate one another makes for a enjoyable half hour of television. This show has no shortage of reusable one-liners and characters you'll come to appreciate more and more with every passing season. Except the Netflix season, you can afford to skip that.",
    "platform": "Netflix",
    "URL": "https://www.netflix.com/title/70140358",
    "cast": "",
    "type": "TVseen",
    "releasedate": 2014
  },
   {
    "name": "Black-ish",
    "posterImage": "images/blackish.jpg",
    "movieTitle": "Black-ish",
    "rtRating": 93,
    "myRating": 8,
    "genre": "Comedy",
    "synopsis": "A successful family man worries that his four children are losing touch with black culture because they are growing up in an affluent, mostly white neighborhood.",
    "recommendations": "If you like this watch...",
    "myreview": "TESTINGSSSSS",
    "platform": "Hulu",
    "URL": "https://www.hulu.com/blackish",
    "cast": "",
    "type": "TVseen",
    "releasedate": 2014
  },
    {
    "name": "Bojack",
    "posterImage": "images/bojack.jpg",
    "movieTitle": "Bojack Horseman",
    "tags": "",
    "rtRating": 86,
    "myRating": 10,
    "synopsis": "A former sitcom star attempts to restart his career. This star also happens to be a cartoon horse.",
    "myreview": "Back in the 90s, BoJack was in a very famous TV show and he's been trying to recapture that fame ever since. If you ever find yourself feeling an existential crisis coming on, BoJack Horseman is the perfect place to feel understood. A depressed washed-up horse actor living in LA hates himself, everyone in his life, and well, everything that isn't bourbon. Though easily written off because it is a cartoon, the show intimately (and with terrifying accuracy) describes how it feels to be depressed when things appear sunny and cheerful on the outside. To a fault, BoJack explores how depression neagtively influences the way we see and treat ourselves, those we love, and those we try to push away. This dark comedy wouldn't be as enjoyable to watch without the sharp, constant wit that drives the series and its title character forward (and sometimes very far backwards). Look for puns on every street corner and everytime BoJack opens his mouth. To be sure that none of his humor goes to waste, BoJack will often end a laugh-less punchline by asking, 'too smart for the room?' ",
    "recommendations": "",
    "platform": "Netflix",
    "URL": "https://www.netflix.com/title/70300800",
    "type": "TVseen",
    "releasedate": 2014
  },
  {
    "name": "Catastrophe",
    "posterImage": "images/catastrophe.jpg",
    "movieTitle": "Catastrophe",
    "tags": "strong female lead, uplifting, ",
    "rtRating": 98,
    "myRating": 8.5,
    "synopsis": "Rob Delaney and Sharon Horgan write and star in this R-rated comedy about a one-week stand between a Boston ad exec and a London schoolteacher that leads to an accidental pregnancy. When Rob moves to the UK to help figure things out, cultures clash and hormones flare as these two realize they don't know the first thing about each other. -- (C) AMAZON",
    "review": "",
    "recommendations": "",
    "platform": "Amazon Prime",
    "type": "TVseen",
    "releasedate": 2015
  },
  {
    "name": "Community",
    "posterImage": "images/community.jpg",
    "movieTitle": "Community",
    "tags": "strong female lead, uplifting, ",
    "rtRating": 86,
    "myRating": 7,
    "synopsis": "A comedy series about an oddball group of students attending a community college in Colorado.",
    "review": "",
    "recommendations": "If you like this watch...",
    "platform": "Hulu",
    "type": "TVseen",
    "releasedate": 2009
  },
  {
    "name": "Crashing",
    "posterImage": "images/crashing.jpg",
    "movieTitle": "Crashing",
    "tags": "strong female lead, uplifting, ",
    "rtRating": 0,
    "myRating": 7.5,
    "synopsis": "A new comedy series following the lives of six 20- and 30-somethings living together as property guardians of a large, disused hospital.",
    "review": "",
    "recommendations": "If you like this watch...",
    "platform": "Netflix",
    "type": "TVseen",
    "releasedate": 2016
  },
  {
    "name": "Difficultpeople",
    "posterImage": "images/difficultpeople.jpg",
    "movieTitle": "Difficult People",
    "tags": "",
    "rtRating": 92,
    "myRating": 8.5,
    "synopsis": "This comedy series zeros in on two irreverent, people-hating best friends in New York City.",
    "review": "",
    "recommendations": "If you like this watch...",
    "platform": "Hulu",
    "type": "TVseen",
    "releasedate": 2015
  },
    {
    "name": "Flaked",
    "posterImage": "images/flaked.jpg",
    "movieTitle": "Flaked",
    "tags": "strong female lead, uplifting, ",
    "rtRating": 42,
    "myRating": 5,
    "synopsis": "A self-appointed ''guru'' named Chip falls for the object of his best friend's desire.",
    "review": "This is the place where I say something eloquent and profound in an attempt to convince you that you too should see this wonderful movie!",
    "recommendations": "If you like this watch...",
    "platform": "Netflix",
    "type": "TVseen",
    "releasedate": 2016
  },
  {
    "name": "Fleabag",
    "posterImage": "images/fleabag.jpg",
    "movieTitle": "Fleabag",
    "tags": "strong female lead, uplifting, ",
    "rtRating": 100,
    "myRating": 8,
    "synopsis": "A sexually-liberated, irritable woman navigates modern life in London in this comedy. Based on Phoebe Waller-Bridge's play of the same name.",
    "review": "This is the place where I say something eloquent and profound in an attempt to convince you that you too should see this wonderful movie!",
    "recommendations": "If you like this watch...",
    "platform": "Amazon Prime",
    "type": "TVseen",
    "releasedate": 2016
  },
  {
    "name": "Girls",
    "posterImage": "images/girls.jpg",
    "movieTitle": "Girls",
    "tags": "strong female lead, uplifting, ",
    "rtRating": 89,
    "myRating": 10,
    "synopsis": "A comedy about twentysomething women navigating their way through life in New York.",
    "myreview": "Where to begin? When I sat down to watch the Pilot of Girls (after my friend Katie begged mericilessly for months and then finally just turned it on and insisted we start watching together), neither of us moved from the floor of my parents bedroom for five hours. Dunham's writing and portrayal of the post-graduate bumbling millenial female struggle so accurately identitifed the questions I asked myself then and continue to think about now. From finding and losing love to finding a meaningful career to making and losing friends in a new city, Dunham does it all. Though furstratingly cyclical, the arcs are these characters are poignantly realistic and you'll root for them against all odds. The story that this show tells is further heightened by the incredible soundtrack adding another layer of depth and complexity to the myriad of dysfunctional relationships we have the privilege of witnessing. Whether or not you find yourself dancing on your own, check out this complex story of the modern feminist and female empowerment.",
    "platform": "HBO Go",
    "type": "TVseen",
    "releasedate": 2012
  },
  {
    "name": "Easy",
    "posterImage": "images/easy.jpg",
    "movieTitle": "Easy",
    "tags": "strong female lead, uplifting, ",
    "rtRating": 94,
    "myRating": 9.5,
    "synopsis": "Season 1 features eight vignettes that follow the complicated, loosely connected lives of young Chicagoans in their twenties and thirties as they tackle love, sex and self-improvement.",
    "review": "",
    "recommendations": "",
    "platform": "Netflix",
    "type": "TVseen",
    "releasedate": 2016
  },
  {
    "name": "Grace and frankie",
    "posterImage": "images/graceandfrankie.jpg",
    "movieTitle": "Grace and Frankie",
    "tags": "strong female lead, uplifting, ",
    "rtRating": 81,
    "myRating": 8.5,
    "synopsis": "Two nemeses become bonded jilted wives after their husbands reveal they have been having an affair with each other since the 1990s and now plan to get married.",
    "review": "",
    "recommendations": "If you like this watch...",
    "platform": "Netflix",
    "type": "TVseen",
    "releasedate": 2015
  },
  {
    "name": "Happyendings",
    "posterImage": "images/happyendings.jpg",
    "movieTitle": "Happy Endings",
    "tags": "strong female lead, uplifting, ",
    "rtRating": 67,
    "myRating": 7.5,
    "synopsis": "A sitcom about the complications arising among friends of a seemingly perfect couple who break up.",
    "review": "This is the place where I say something eloquent and profound in an attempt to convince you that you too should see this wonderful movie!",
    "recommendations": "If you like this watch...",
    "platform": "Hulu",
    "type": "TVseen",
    "releasedate": 2011
  },
  {
    "name": "highmeaintenance",
    "posterImage": "images/highmaintenance.jpg",
    "movieTitle": "High Maintenance",
    "tags": "strong female lead, uplifting, ",
    "rtRating": 94,
    "myRating": 9.5,
    "synopsis": "The show follows the adventurous life of a nameless marijuana delivery man played by Ben Sinclair, who's simply referred to as the Guy.",
    "review": "",
    "recommendations": "If you like this watch...",
    "platform": "HBO Go",
    "type": "TVseen",
    "releasedate": 2016
  },
  {
    "name": "Insecure",
    "posterImage": "images/insecure.jpg",
    "movieTitle": "Insecure",
    "tags": "strong female lead, uplifting, ",
    "rtRating": 100,
    "myRating": 10,
    "synopsis": "Two black women who are best friends navigate the pitfalls of their personal and professional lives in south Los Angeles.",
    "myreview": "This is the place where I say something eloquent and profound in an attempt to convince you that you too should see this wonderful movie!",
    "recommendations": "If you like this watch...",
    "platform": "HBO Go",
    "type": "TVseen",
    "releasedate": 2016
  },
  {
    "name": "Love",
    "posterImage": "images/love.jpg",
    "movieTitle": "Love",
    "tags": "strong female lead, uplifting, ",
    "rtRating": 91,
    "myRating": 6,
    "synopsis": "Love follows nice guy Gus (Paul Rust) and brazen wild-child Mickey (Gillian Jacobs) as they navigate the exhilarations and humiliations of intimacy, commitment, love and other things they were hoping to avoid. Love is an unflinching, hilarious and excruciatingly honest take on modern relationships. Love is created, written and executive produced by Judd Apatow, Paul Rust.",
    "review": "",
    "recommendations": "If you like this watch...",
    "platform": "Netflix",
    "type": "TVseen",
    "releasedate": 2016
  },
  {
    "name": "Janethevirgin",
    "posterImage": "images/janethevirgin.jpg",
    "movieTitle": "Jane the Virgin",
    "tags": "strong female lead, uplifting, ",
    "rtRating": 100,
    "myRating": 8,
    "synopsis": "A comedy-drama following a chaste young woman who is accidentally impregnated via artificial insemination as she struggles to inform her devoutly religious family and make the right choices concerning the child. Based on the telenovela 'Juana la virgen.'",
    "review": "Jane the Virgin excels in in ability to laugh at itself. JtV poked fun at the telenovela genre while following all of the same tropes. The show stays relevant and somehow always manages to pique my interest. The #narrator will be your favorite character.",
    "platform": "Netflix",
    "type": "TVseen",
    "releasedate": 2014
  },
  {
    "name": "Masterofnone",
    "posterImage": "images/masterofnone.jpg",
    "movieTitle": "Master of None",
    "tags": "strong female lead, uplifting, ",
    "rtRating": 100,
    "myRating": 10,
    "synopsis": "Comedy following the personal and professional challenges that face a 30-year-old New York actor, whose trials range from the immigrant experience to what pasta he should eat for dinner.",
    "review": "Watch.The.Thanksgiving.Episode.NOW.",
    "recommendations": "If you like this watch...",
    "platform": "Netflix",
    "type": "TVseen",
    "releasedate": 2015
  },
   {
    "name": "Modernfamily",
    "posterImage": "images/modernfamily.jpg",
    "movieTitle": "Modern Family",
    "tags": "strong female lead, uplifting, ",
    "rtRating": 86,
    "myRating": 8,
    "synopsis": "Synopsis of movie goes here.",
    "review": "This is the place where I say something eloquent and profound in an attempt to convince you that you too should see this wonderful movie!",
    "recommendations": "If you like this watch...",
    "platform": "Hulu",
    "type": "TVseen",
    "releasedate": 2009
  },
  {
    "name": "Mozartinthejungle",
    "posterImage": "images/mozartinthejungle.jpg",
    "movieTitle": "Mozart in the Jungle",
    "tags": "strong female lead, uplifting, ",
    "rtRating": 92,
    "myRating": 7.5,
    "synopsis": "What happens behind the curtains at the symphony is just as captivating as what happens on stage. -- (C) Amazon",
    "review": "This is the place where I say something eloquent and profound in an attempt to convince you that you too should see this wonderful movie!",
    "recommendations": "If you like this watch...",
    "platform": "Amazon Prime",
    "type": "TVseen",
    "releasedate": 2014
  },
  {
    "name": "Newgirl",
    "posterImage": "images/newgirl.jpg",
    "movieTitle": "New Girl",
    "tags": "strong female lead, uplifting, ",
    "rtRating": 93,
    "myRating": 7,
    "synopsis": "Sitcom centered on Jess Day, a sweet but naive twentysomething, who shares a loft with three single men.",
    "review": "",
    "recommendations": "",
    "platform": "Netflix, Hulu",
    "type": "TVseen",
    "releasedate": 2011
  },
  {
    "name": "Orangeisthenewblack",
    "posterImage": "images/oitnb.jpg",
    "movieTitle": "Orange is the New Black",
    "tags": "strong female lead, uplifting, ",
    "rtRating": 98,
    "myRating": 9.5,
    "synopsis": "A New York woman struggles to adjust to life in a federal prison.",
    "review": "",
    "recommendations": "",
    "platform": "Netflix",
    "type": "TVseen",
    "releasedate": 2013
  },
  {
    "name": "Parenthood",
    "posterImage": "images/parenthood.jpg",
    "movieTitle": "Parenthood",
    "tags": "strong female lead, uplifting, ",
    "rtRating": 90,
    "myRating": 9.5,
    "synopsis": "A comedy-drama following a large and imperfect family as they tackle the challenges of raising kids and starting over after setbacks. Based on the hit 1989 film.",
    "review": "",
    "recommendations": "",
    "platform": "Netflix",
    "type": "TVseen",
    "releasedate": 2010
  },
  {
    "name": "Parksandrec",
    "posterImage": "images/parksandrec.jpg",
    "movieTitle": "Parks and Recreation",
    "tags": "strong female lead, uplifting, ",
    "rtRating": 90,
    "myRating": 10,
    "synopsis": "A mockumentary following the inner workings of the Parks and Recreation Department of Pawnee, Ind. From the creators of 'The Office.'",
    "review": "",
    "recommendations": "",
    "platform": "Netflix",
    "type": "TVseen",
    "releasedate": 2009
  },
  {
    "name": "sixfeetunder",
    "posterImage": "images/sixfeetunder.jpg",
    "movieTitle": "Six Feet Under",
    "tags": "strong female lead, uplifting, ",
    "rtRating": 100,
    "myRating": 10,
    "synopsis": "Life---and death---at a family-owned funeral home in Los Angeles plays out in this provocative, at times macabre series created by Oscar-winning screenwriter Alan Ball (`American Beauty'). A recipient of several Emmys, it's a compelling, superbly acted drama laced with considerable wit and poignancy. Each episode begins with a fresh corpse (including the clan's patriarch in the premiere), which usually has something to do with the ongoing dysfunction in and around the Fisher household.",
    "review": "If I could give this more than a 10 I would",
    "recommendations": "",
    "platform": "HBO Go,",
    "type": "TVseen",
    "releasedate": 2001
  },
  {
    "name": "Strangerthings",
    "posterImage": "images/strangerthings.jpg",
    "movieTitle": "Stranger Things",
    "tags": "strong female lead, uplifting, ",
    "rtRating": 95,
    "myRating": 9,
    "synopsis": "A love letter to the '80s classics that captivated a generation, Stranger Things is set in 1983 Indiana, where a young boy vanishes into thin air. As friends, family and local police search for answers, they are drawn into an extraordinary mystery involving top-secret government experiments, terrifying supernatural forces and one very strange little girl.",
    "review": "",
    "recommendations": "",
    "platform": "Netflix",
    "type": "TVseen",
    "releasedate": 2016
  },
  {
    "name": "Thegoodplace",
    "posterImage": "images/thegoodplace.jpg",
    "movieTitle": "The Good Place",
    "tags": "strong female lead, uplifting, ",
    "rtRating": 90,
    "myRating": 8,
    "synopsis": "A New Jersey woman enters the afterlife and tries to become a better person and make amends for past bad behavior in this comedy.",
    "review": "This is the place where I say something eloquent and profound in an attempt to convince you that you too should see this wonderful movie!",
    "recommendations": "",
    "platform": "Hulu",
    "type": "TVseen",
    "releasedate": 2016
  },
  {
    "name": "Theoffice",
    "posterImage": "images/theoffice.jpg",
    "movieTitle": "The Office",
    "tags": "strong female lead, uplifting, ",
    "rtRating": 88,
    "myRating": 10,
    "synopsis": "Based on the award-winning British comedy of the same name, this acclaimed sitcom is told through the lenses of a documentary film crew and filled with gossip, pranks, romance and general foolishness at Dunder-Mifflin Paper Co. in Scranton, Pennsylvania. If you've ever hated your boss, your job or both, then you'll love this show.",
    "review": "This is the place where I say something eloquent and profound in an attempt to convince you that you too should see this wonderful movie!",
    "recommendations": "If you like this watch...",
    "platform": "Netflix",
    "type": "TVseen",
    "releasedate": 2005
  },
  {
    "name": "Unbreakablekimmy",
    "posterImage": "images/unbreakablekimmy.jpg",
    "movieTitle": "Unbreakable Kimmy Schmidt",
    "tags": "strong female lead, uplifting, ",
    "rtRating": 96,
    "myRating": 8,
    "synopsis": "A woman who lived in a cult for 15 years starts life anew in New York City in this comedy series.",
    "review": "This is the place where I say something eloquent and profound in an attempt to convince you that you too should see this wonderful movie!",
    "recommendations": "If you like this watch...",
    "platform": "Netflix",
    "type": "TVseen",
    "releasedate": 2015
  },
  {
    "name": "Transparent",
    "posterImage": "images/transparent.jpg",
    "movieTitle": "Transparent",
    "tags": "strong female lead, uplifting, ",
    "rtRating": 98,
    "myRating": 10,
    "synopsis": "Following the goings-on of a dysfunctional Los Angeles family.",
    "review": "This is the place where I say something eloquent and profound in an attempt to convince you that you too should see this wonderful movie!",
    "recommendations": "If you like this watch...",
    "platform": "Amazon Prime",
    "type": "TVseen",
    "releasedate": 2014
  },
  {
    "name": "Unitedstatesoftara",
    "posterImage": "images/unitedstatesoftara.jpg",
    "movieTitle": "United States of Tara",
    "tags": "strong female lead, uplifting, ",
    "rtRating": 75,
    "myRating": 10,
    "synopsis": "Misadventures of a housewife with a personality disorder and a dysfunctional family.",
    "review": "This is the place where I say something eloquent and profound in an attempt to convince you that you too should see this wonderful movie!",
    "recommendations": "If you like this watch...",
    "platform": "Hulu",
    "type": "TVseen",
    "releasedate": 2009
  },
  {
    "name": "Weeds",
    "posterImage": "images/weeds.jpg",
    "movieTitle": "Weeds",
    "tags": "strong female lead, uplifting, ",
    "rtRating": 77,
    "myRating": 9,
    "synopsis": "A suburban California widow deals pot to make ends meet after the unexpected death of her husband.",
    "review": "This is the place where I say something eloquent and profound in an attempt to convince you that you too should see this wonderful movie!",
    "recommendations": "If you like this watch...",
    "platform": "Netflix",
    "type": "TVseen",
    "releasedate": 2005
  },

  //TV Queue//
 {
    "name": "GoT",
    "posterImage": "images/got.jpg",
    "movieTitle": "Game of Thrones",
    "rtRating": 95,
    "myRating": 0,
    "genre": "Fantasy",
    "synopsis": "Nine noble families fight for control over the mythical lands of Westeros, while a forgotten race returns after being dormant for thousands of years.",
    "recommendations": "",
    "stephflixViewedTV": "No",
    "platform": "HBO Go",
    "cast": "",
    "type": "TVqueue",
    "releasedate": 2011
  },
  {
    "name": "Biglittelies",
    "posterImage": "images/biglittlelies.jpg",
    "movieTitle": "Big Little Lies",
    "rtRating": 92,
    "myRating": 0,
    "genre": "Drama",
    "stephflixViewedTV": "No",
    "synopsis": "All is not what it seems in this dark comedy set in an idyllic seaside California town, where success, affluence and privilege are slowly but surely undone by secrets, rivalries, deception and murder. Nicole Kidman, Reese Witherspoon and Shailene Woodley star.",
    "recommendations": "If you like this watch...",
    "platform": "HBO Go",
    "cast": "",
    "type": "TVqueue",
    "releasedate": 2017
  }, 
  {
    "name": "Atlanta",
    "posterImage": "images/atlanta.jpg",
    "movieTitle": "Atlanta",
    "rtRating": 100,
    "myRating": 0,
    "genre": "Comedy",
    "stephflixViewedTV": "No",
    "synopsis": "In Season 1 of this comedy series, two cousins try to work their way up through the Atlanta hip hop scene.",
    "recommendations": "If you like this watch...",
    "platform": "FX",
    "cast": "",
    "type": "TVqueue",
    "releasedate": 2016,
    "src": "www.youtube.com/embed/YE7VzlLtp-4"
  },
  {
    "name": "Empire",
    "posterImage": "images/empire.jpg",
    "movieTitle": "Empire",
    "stephflixViewedTV": "No",
    "rtRating": 86,
    "myRating": 0,
    "genre": "Drama",
    "synopsis": "A music mogul plans for the future of his empire as his three sons and his ex-wife battle each other to become the next heir apparent to the hip-hop throne.",
    "recommendations": "If you like this watch...",
    "platform": "Hulu",
    "URL": "https://www.hulu.com/empire",
    "cast": "",
    "type": "TVqueue",
    "releasedate": 2015
  },
  {
    "name": "Legion",
    "posterImage": "images/legion.jpg",
    "movieTitle": "Legion",
    "stephflixViewedTV": "No",
    "rtRating": 90,
    "myRating": 0,
    "genre": "Action, Drama, Sci-Fi",
    "synopsis": "Legion follows the story of David Haller, a troubled young man who may be more than human. Since he was a teenager, David has struggled with mental illness. Diagnosed as schizophrenic, David has been in and out of psychiatric hospitals for years. But after a strange encounter with a fellow patient, he's confronted with the possibility that the voices he hears and the visions he sees might be real.",
    "recommendations": "If you like this watch...",
    "platform": "Hulu",
    "cast": "",
    "type": "TVqueue",
    "releasedate": 2017
  },
  {
    "name": "Madmen",
    "posterImage": "images/madmen.jpg",
    "movieTitle": "Mad Men",
    "stephflixViewedTV": "No",
    "rtRating": 94,
    "myRating": 0,
    "genre": "Drama",
    "synopsis": "A look at the high-powered world of advertising in 1960s New York City, from the boardroom to the bedroom.",
    "recommendations": "If you like this watch...",
    "platform": "Netflix",
    "cast": "",
    "type": "TVqueue",
    "releasedate": 2007
  },

//Movies Seen//
 {
    "name": "AUnitedKingdom",
    "posterImage": "images/unitedkingdom.jpg",
    "movieTitle": "A United Kingdom",
    "tags": "",
    "rtRating": 83,
    "synopsis": "A UNITED KINGDOM is based on extraordinary true events. In 1947, Seretse Khama, the King of Botswana, met Ruth Williams, a London office worker. They were a perfect match, yet their proposed marriage was challenged not only by their families but by the British and South African governments. The latter had recently introduced the policy of apartheid and found the notion of a biracial couple ruling a neighboring country intolerable. South Africa threatened the British: either thwart the couple or be denied access to South African uranium and gold and face the risk of South Africa invading Botswana.",
    "dateofrelease": "",
    "platform": "",
    "cast": "",
    "myRating": 5,
    "type": "Movieseen",
    "releasedate": 2017
  },
{
    "name": "AMonsterCalls",
    "posterImage": "images/monstercalls.jpg",
    "movieTitle": "A Monster Calls",
    "tags": "",
    "rtRating": 87,
    "myRating": 7.5,
    "synopsis": "A visually spectacular drama from director J.A. Bayona ('The Impossible'). 12-year-old Conor (Lewis MacDougall), dealing with his mother's (Felicity Jones) illness, a less-than-sympathetic grandmother (Sigourney Weaver), and bullying classmates, finds a most unlikely ally when a Monster appears at his bedroom window. Ancient, wild, and relentless, the Monster guides Conor on a journey of courage, faith, and truth. Toby Kebbell plays Conor's father, and Liam Neeson stars in performance-capture and voiceover as the nocturnally visiting Monster of the title.",
    "dateofrelease": "",
    "platform": "",
    "cast": "",
    "type": "Movieseen",
    "releasedate": 2017
  },
  {
    "name": "Landline",
    "posterImage": "images/landline.jpg",
    "movieTitle": "Landline",
    "tags": "strong female lead, uplifting, ",
    "rtRating": 71,
    "myRating": 9.5,
    "synopsis": "When two sisters suspect their father (John Turturro) may be having an affair, it sends them into a tailspin that reveals cracks in the family façade. For the first time, older sister Dana (Jenny Slate), recently engaged and struggling with her own fidelity, finds herself bonding with her wild teenage sister Ali (Abby Quinn). The two try to uncover the truth without tipping off their mother (Edie Falco) and discover the messy reality of love and sex in the process. Set in 1990s Manhattan, Landline is a warm, insightful and comedic drama about a family united by secrets and lies, co-written and directed by Gillian Robespierre (Obvious Child).",
    "dateofrelease": "July 21, 2017",
    "recommendations": "If you like this watch...",
    "review": "Gillian Robiespierre and Jenny Slate are back at it in this 90s comedy. Dana, the protagonist, unapologetically and humorously questions monogamy and what it truly means to be happy in life and in a relationship. This heartfelt comedy honestly explores romantic and familial relationships through 90s nostalgia.",
    "platform": "",
    "cast": "Jenny Slate, Jay Duplass",
    "type": "Movie",
    "releasedate": 2017
  },
   {
    "name": "Ladybird",
    "posterImage": "images/ladybird.jpg",
    "movieTitle": "Ladybird",
    "tags": "strong female lead, uplifting, ",
    "rtRating": 100,
    "myRating": 10,
    "synopsis": "In the early 2000s, an artistically-inclined seventeen year-old comes of age in Sacramento, California.",
    "dateofrelease": "July 21, 2017",
    "recommendations": "If you like this watch...",
    "review": "Gillian Robiespierre and Jenny Slate are back at it in this 90s comedy. Dana, the protagonist, unapologetically and humorously questions monogamy and what it truly means to be happy in life and in a relationship. This heartfelt comedy honestly explores romantic and familial relationships through 90s nostalgia.",
    "platform": "Theaters",
    "URL": "https://www.fandango.com/",
    "cast": "Jenny Slate, Jay Duplass",
    "type": "Movieseen",
    "releasedate": 2017
  },
    {
    "name": "Threebillboards",
    "posterImage": "images/threebillboards.jpg",
    "movieTitle": "Three Billboards Outside Ebbing, Missouri",
    "tags": "strong female lead, uplifting, ",
    "rtRating": 94,
    "myRating": 9.5,
    "synopsis": "When two sisters suspect their father (John Turturro) may be having an affair, it sends them into a tailspin that reveals cracks in the family façade. For the first time, older sister Dana (Jenny Slate), recently engaged and struggling with her own fidelity, finds herself bonding with her wild teenage sister Ali (Abby Quinn). The two try to uncover the truth without tipping off their mother (Edie Falco) and discover the messy reality of love and sex in the process. Set in 1990s Manhattan, Landline is a warm, insightful and comedic drama about a family united by secrets and lies, co-written and directed by Gillian Robespierre (Obvious Child).",
    "dateofrelease": "July 21, 2017",
    "recommendations": "If you like this watch...",
    "review": "Gillian Robiespierre and Jenny Slate are back at it in this 90s comedy. Dana, the protagonist, unapologetically and humorously questions monogamy and what it truly means to be happy in life and in a relationship. This heartfelt comedy honestly explores romantic and familial relationships through 90s nostalgia.",
    "platform": "",
    "cast": "Jenny Slate, Jay Duplass",
    "type": "Movieseen",
    "releasedate": 2017
  },
   {
    "name": "TheBigSick",
    "posterImage": "images/bigsick.jpg",
    "movieTitle": "The Big Sick",
    "tags": "strong female lead, uplifting, ",
    "rtRating": 97,
    "synopsis": "Based on the real-life courtship between Kumail Nanjiani and Emily V. Gordon, THE BIG SICK tells the story of Pakistan-born aspiring comedian Kumail (Nanjiani), who connects with grad student Emily (Kazan) after one of his standup sets. However, what they thought would be just a one-night stand blossoms into the real thing, which complicates the life that is expected of Kumail by his traditional Muslim parents. When Emily is beset with a mystery illness, it forces Kumail to navigate the medical crisis with her parents, Beth and Terry (Holly Hunter and Ray Romano) who he's never met, while dealing with the emotional tug-of-war between his family and his heart. THE BIG SICK is directed by Michael Showalter (HELLO MY NAME IS DORIS) and producer by Judd Apatow (TRAINWRECK, THIS IS 40) and Barry Mendel (TRAINWRECK, THE ROYAL TENENBAUMS).",
    "dateofrelease": "July 21, 2017",
    "recommendations": "If you like this watch...",
    "platform": "",
    "cast": "Jenny Slate, Jay Duplass",
    "type": "Movieseen",
    "releasedate": 2017
  },
   {
    "name": "BattleofSexes",
    "posterImage": "images/battlesexes.jpg",
    "movieTitle": "Battle of the Sexes",
    "tags": "",
    "rtRating": 0,
     "myRating": 9,
    "synopsis": "The electrifying 1973 tennis match between World number one Billie Jean King and ex-champ and serial hustler Bobby Riggs was billed as THE BATTLE OF THE SEXES and became the most watched televised sports event of all time. The match caught the zeitgeist and sparked a global conversation on gender equality, spurring on the feminist movement. Trapped in the media glare, King and Riggs were on opposites sides of a binary argument, but off-court each was fighting more personal and complex battles. With a supportive husband urging her to fight the Establishment for equal pay, the fiercely private King was also struggling to come to terms with her own sexuality, while Riggs gambled his legacy and reputation in a bid to relive the glories of his past. Together, Billie and Bobby served up a cultural spectacle that resonated far beyond the tennis courts and animated the discussions between men and women in bedrooms and boardrooms around the world.",
    "dateofrelease": "",
    "platform": "",
    "cast": "",
    "type": "Movieseen",
    "releasedate": 2017
  },
  {
    "name": "BandAid",
    "posterImage": "images/bandaid.jpg",
    "movieTitle": "Band Aid",
    "tags": "",
    "rtRating": 83,
    "myRating": 8,
    "synopsis": "Band Aid, the refreshingly raw, real, and hilarious feature debut from Zoe Lister-Jones, is the story of a couple, Anna (Zoe Lister-Jones) and Ben (Adam Pally), who can't stop fighting. Advised by their therapist to try and work through their grief unconventionally, they are reminded of their shared love of music. In a last-ditch effort to save their marriage, they decide to turn all their fights into song, and with the help of their neighbor Dave (Fred Armisen), they start a band. A story of love, loss, and rock and roll, Band Aid is a witty and perceptive view of modern love, with some seriously catchy pop hooks to boot.",
    "dateofrelease": "",
    "platform": "",
    "cast": "Adam Pally",
    "type": "Movieseen",
    "releasedate": 2017
  },
    {
    "name": "Callmebyyourname",
    "posterImage": "images/callmebyyourname.jpg",
    "movieTitle": "Call Me By Your Name",
    "stephflixViewedMovie": "No",
    "tags": "",
    "rtRating": 100,
    "synopsis": "It's the summer of 1983, in the north of Italy, and Elio Perlman, (Timothée Chalamet) a 17-year-old American-Italian boy spends his days in his family's 17th century villa lazily transcribing music and flirting with his friend Marzia (Esther Garrel). One day Oliver, (Armie Hammer) a charming, 24-year-old American scholar working on his doctorate arrives as the annual summer intern tasked with helping Elio's father (Michael Stuhlbarg), an eminent professor specializing in Greco-Roman culture. Amidst the sun-drenched splendor of this sensual setting, Elio and Oliver discover the heady beauty of awakening desire over the course of a summer that will alter their lives forever.",
    "dateofrelease": "",
    "platform": "",
    "cast": "",
    "type": "Moviequeue",
    "releasedate": 2017
  },
    {
    "name": "20thCenturyWomen",
    "posterImage": "images/20thcwomen.jpg",
    "movieTitle": "20th Century Women",
    "tags": "strong female lead, uplifting, ",
    "rtRating": 98,
    "myRating": 10,
    "synopsis": "Synopsis of movie goes here.",
    "review": "This is the place where I say something eloquent and profound in an attempt to convince you that you too should see this wonderful movie!",
    "recommendations": "If you like this watch...",
    "platform": "",
    "type": "Movieseen",
    "releasedate": 2017
  },
  {
    "name": "Elle",
    "posterImage": "images/elle.jpg",
    "movieTitle": "Elle",
    "tags": "strong female lead, psychological thriller",
    "rtRating": 98,
    "myRating": 10,
    "synopsis": "Synopsis of movie goes here.",
    "review": "This is the place where I say something eloquent and profound in an attempt to convince you that you too should see this wonderful movie!",
    "recommendations": "If you like this watch...",
    "platform": "",
    "type": "Movieseen",
    "releasedate": 2017,
    "src": "https://www.youtube.com/embed/gM96ne-XiH0"
  },
  {
    "name": "ManchesterbytheSea",
    "posterImage": "images/mansea.jpg",
    "movieTitle": "Manchester By the Sea",
    "tags": "sad",
    "rtRating": 98,
    "myRating": 9,
    "synopsis": "Synopsis of movie goes here.",
    "review": "This is the place where I say something eloquent and profound in an attempt to convince you that you too should see this wonderful movie!",
    "recommendations": "If you like this watch...",
    "platform": "",
    "type": "Movieseen",
    "releasedate": 2016
    
  },
  {
    "name": "13th",
    "posterImage": "images/13th.jpg",
    "movieTitle": "13th",
    "tags": "",
    "rtRating": 97,
    "myRating": 9.5,
    "synopsis": "Synopsis of movie goes here.",
    "review": "This is the place where I say something eloquent and profound in an attempt to convince you that you too should see this wonderful movie!",
    "recommendations": "If you like this watch...",
    "platform": "",
    "type": "Movieseen",
    "releasedate": 2016
  },
  {
    "name": "Arrival",
    "posterImage": "images/arrival.jpg",
    "movieTitle": "Arrival",
    "tags": "",
    "rtRating": 94,
    "myRating": 8.5,
    "synopsis": "Synopsis of movie goes here.",
    "review": "This is the place where I say something eloquent and profound in an attempt to convince you that you too should see this wonderful movie!",
    "recommendations": "If you like this watch...",
    "platform": "",
    "type": "Movieseen",
    "releasedate": 2003
  },
  {
    "name": "CaptainFantastic",
    "posterImage": "images/capfan.jpg",
    "movieTitle": "Captain Fantastic",
    "tags": "",
    "rtRating": 83,
    "myRating": 7.5,
    "synopsis": "Synopsis of movie goes here.",
    "review": "This is the place where I say something eloquent and profound in an attempt to convince you that you too should see this wonderful movie!",
    "recommendations": "If you like this watch...",
    "platform": "Amazon Prime",
    "type": "Movieseen",
    "releasedate": 2007
  },
  {
    "name": "Colossal",
    "posterImage": "images/colossal.jpg",
    "movieTitle": "Colassal",
    "tags": "",
    "rtRating": 76,
    "myRating": 8.5,
    "synopsis": "Synopsis of movie goes here.",
    "review": "This is the place where I say something eloquent and profound in an attempt to convince you that you too should see this wonderful movie!",
    "recommendations": "If you like this watch...",
    "platform": "",
    "type": "Movieseen",
    "releasedate": 2019
            
  },
  {
    "name": "ExMachina",
    "posterImage": "images/exmac.jpg",
    "movieTitle": "Ex Machina",
    "tags": "",
    "rtRating": 93,
    "myRating": 10,
    "synopsis": "Synopsis of movie goes here.",
    "review": "Modern Day Frankenstein. Alicia Vikander. Shit. ",
    "recommendations": "If you like this watch...",
    "platform": "",
    "type": "Movieseen",
    "releasedate": 1970
  },
  {
    "name": "Fences",
    "posterImage": "images/fences.jpg",
    "movieTitle": "Fences",
    "tags": "",
    "rtRating": 93,
    "myRating": 8.5,
    "synopsis": "Synopsis of movie goes here.",
    "review": "Modern Day Frankenstein. Alicia Vikander. Shit. ",
    "recommendations": "If you like this watch...",
    "platform": "",
    "type": "Movieseen",
    "releasedate": 1980
            
  },
  {
    "name": "FlorenceFosterJenkins",
    "posterImage": "images/ffj.jpg",
    "movieTitle": "Florence Foster Jenkins",
    "tags": "",
    "rtRating": 87,
    "myRating": 7,
    "synopsis": "Synopsis of movie goes here.",
    "review": "",
    "recommendations": "If you like this watch...",
    "platform": "",
    "type": "Movieseen",
    "releasedate": 2003
  },
  {
    "name": "FrancesHa",
    "posterImage": "images/francesha.jpg",
    "movieTitle": "Frances Ha",
    "tags": "",
    "rtRating": 93,
    "myRating": 10,
    "synopsis": "Synopsis of movie goes here.",
    "review": "",
    "recommendations": "If you like this watch...",
    "platform": "",
    "type": "Movieseen",
    "releasedate": 2005
  },
  {
    "name": "GetOut",
    "posterImage": "images/getout.jpg",
    "movieTitle": "Get Out",
    "tags": "",
    "rtRating": 99,
    "myRating": 10,
    "synopsis": "Synopsis of movie goes here.",
    "review": "",
    "recommendations": "If you like this watch...",
    "platform": "",
    "type": "Movieseen",
    "releasedate": 1998
  },
  {
    "name": "HacksawRidge",
    "posterImage": "images/hacksaw.jpg",
    "movieTitle": "Hacksaw Ridge",
    "tags": "",
    "rtRating": 87,
    "myRating": 8,
    "synopsis": "Synopsis of movie goes here.",
    "review": "",
    "recommendations": "If you like this watch...",
    "platform": "",
    "type": "Movieseen",
    "releasedate": 2000
  },
  {
    "name": "HelloMyNameisDoris",
    "posterImage": "images/hellomynameisdoris.jpg",
    "movieTitle": "Hello My Name is Doris",
    "tags": "",
    "rtRating": 83,
    "myRating": 7.5,
    "synopsis": "Synopsis of movie goes here.",
    "review": "",
    "recommendations": "If you like this watch...",
    "platform": "",
    "type": "Movieseen",
    "releasedate": 2017
  },
  {
    "name": "HellorHighWater",
    "posterImage": "images/hellorhighwater.jpg",
    "movieTitle": "Hell or High Water",
    "tags": "",
    "rtRating": 98,
    "myRating": 8.5,
    "synopsis": "Synopsis of movie goes here.",
    "review": "",
    "recommendations": "If you like this watch...",
    "platform": "",
    "type": "Movieseen",
    "releasedate": 2016
  },
  {
    "name": "HiddenFigures",
    "posterImage": "images/hiddenfigures.jpg",
    "movieTitle": "Hidden Figures",
    "tags": "",
    "rtRating": 93,
    "myRating": 9.5,
    "synopsis": "Synopsis of movie goes here.",
    "review": "",
    "recommendations": "If you like this watch...",
    "platform": "",
    "type": "Movieseen",
    "releasedate": 2016
  },
  {
    "name": "Goodwillhunting",
    "posterImage": "images/goodwillhunting.jpg",
    "movieTitle": "Good Will Hunting",
    "tags": "",
    "rtRating": 93,
    "myRating": 9.5,
    "synopsis": "Synopsis of movie goes here.",
    "review": "",
    "recommendations": "If you like this watch...",
    "platform": "",
    "type": "Movieseen",
    "releasedate": 1997
  },
  {
    "name": "Jackie",
    "posterImage": "images/jackie.jpg",
    "movieTitle": "Jackie",
    "tags": "",
    "rtRating": 93,
    "myRating": 7,
    "synopsis": "Synopsis of movie goes here.",
    "review": "",
    "recommendations": "If you like this watch...",
    "platform": "",
    "type": "Movieseen",
    "releasedate": 1997
  },
  {
    "name": "Joshy",
    "posterImage": "images/joshy.jpg",
    "movieTitle": "Joshy",
    "tags": "",
    "rtRating": 93,
    "myRating": 7.5,
    "synopsis": "Synopsis of movie goes here.",
    "review": "",
    "recommendations": "If you like this watch...",
    "platform": "",
    "type": "Movieseen",
    "releasedate": 1997
  },
  {
    "name": "Krisha",
    "posterImage": "images/krisha.jpg",
    "movieTitle": "Krisha",
    "tags": "",
    "rtRating": 93,
    "myRating": 8,
    "synopsis": "Synopsis of movie goes here.",
    "review": "",
    "recommendations": "If you like this watch...",
    "platform": "",
    "type": "Movieseen",
    "releasedate": 1997
  },
  {
    "name": "LaLaLand",
    "posterImage": "images/lalaland.jpeg",
    "movieTitle": "La La Land",
    "tags": "",
    "rtRating": 93,
    "myRating": 8.5,
    "synopsis": "Synopsis of movie goes here.",
    "review": "",
    "recommendations": "If you like this watch...",
    "platform": "",
    "type": "Movieseen",
    "releasedate": 1997
  },
  {
    "name": "Life,Animated",
    "posterImage": "images/lifeanimated.jpg",
    "movieTitle": "Life, Animated",
    "tags": "",
    "rtRating": 93,
    "myRating": 8.5,
    "synopsis": "Synopsis of movie goes here.",
    "review": "",
    "recommendations": "If you like this watch...",
    "platform": "",
    "type": "Movieseen",
    "releasedate": 1997
  },
  {
    "name": "Lion",
    "posterImage": "images/lion.jpg",
    "movieTitle": "Lion",
    "tags": "d",
    "rtRating": 93,
    "myRating": 9,
    "synopsis": "Synopsis of movie goes here.",
    "review": "d",
    "recommendations": "If you like this watch...",
    "platform": "Netflix",
    "type": "Movieseen",
    "releasedate": "2017-03-31"
  },
    
  {
    "name": "Littlemen",
    "posterImage": "images/littlemen.jpg",
    "movieTitle": "Little Men",
    "tags": "",
    "rtRating": 93,
    "myRating": 9.5,
    "synopsis": "Synopsis of movie goes here.",
    "review": "",
    "recommendations": "If you like this watch...",
    "platform": "Netflix",
    "type": "Movieseen",
    "releasedate": 1997
  },
  {
    "name": "Loving",
    "posterImage": "images/loving.jpg",
    "movieTitle": "Loving",
    "tags": "",
    "rtRating": 93,
    "myRating": 6,
    "synopsis": "Synopsis of movie goes here.",
    "review": "",
    "recommendations": "If you like this watch...",
    "platform": "",
    "type": "Movieseen",
    "releasedate": 1997
  },
  {
    "name": "Moana",
    "posterImage": "images/moana.jpg",
    "movieTitle": "Moana",
    "tags": "",
    "genre":"Kids",
    "rtRating": 93,
    "myRating": 8,
    "synopsis": "Synopsis of movie goes here.",
    "myreview": "",
    "recommendations": "If you like this watch...",
    "platform": "Netflix",
    "URL": "https://www.netflix.com/title/80108238",
    "type": "Movieseen",
    "releasedate": 2016
  },
  {
    "name": "Moonlight",
    "posterImage": "images/moonlight.jpg",
    "movieTitle": "Moonlight",
    "tags": "",
    "rtRating": 93,
    "myRating": 9.5,
    "synopsis": "Synopsis of movie goes here.",
    "review": "",
    "recommendations": "If you like this watch...",
    "platform": "",
    "type": "Movieseen",
    "releasedate": 1997
  },
  {
    "name": "OtherPeople",
    "posterImage": "images/otherpeople.jpg",
    "movieTitle": "Other People",
    "tags": "",
    "rtRating": 93,
    "myRating": 9.5,
    "synopsis": "Synopsis of movie goes here.",
    "review": "",
    "recommendations": "If you like this watch...",
    "platform": "",
    "type": "Movieseen",
    "releasedate": 1997
  },
  {
    "name": "SingStreet",
    "posterImage": "images/singstreet.jpg",
    "movieTitle": "Sing Street",
    "tags": "",
    "rtRating": 93,
    "myRating": 9,
    "synopsis": "Synopsis of movie goes here.",
    "review": "",
    "recommendations": "If you like this watch...",
    "platform": "",
    "type": "Movieseen",
    "releasedate": 1997
  },
  {
    "name": "Paddington",
    "posterImage": "images/paddington.jpg",
    "movieTitle": "Paddington",
    "tags": "",
    "rtRating": 93,
    "myRating": 7,
    "synopsis": "Synopsis of movie goes here.",
    "review": "",
    "recommendations": "If you like this watch...",
    "platform": "",
    "type": "Movieseen",
    "releasedate": 1997
  },
  {
    "name": "Sightseers",
    "posterImage": "images/sightseers.jpg",
    "movieTitle": "Sightseers",
    "tags": "",
    "rtRating": 93,
    "myRating": 7,
    "synopsis": "Synopsis of movie goes here.",
    "review": "",
    "recommendations": "If you like this watch...",
    "platform": "",
    "type": "Movieseen",
    "releasedate": 1997
  },
  {
    "name": "TheBigAsk",
    "posterImage": "images/thebigask.jpg",
    "movieTitle": "The Big Ask",
    "tags": "",
    "rtRating": 93,
    "myRating": 5,
    "synopsis": "Synopsis of movie goes here.",
    "review": "",
    "recommendations": "If you like this watch...",
    "platform": "",
    "type": "Movieseen",
    "releasedate": 1997
  },
  {
    "name": "TheImitationgame",
    "posterImage": "images/imitationgame.jpg",
    "movieTitle": "The Imitation Game",
    "tags": "",
    "rtRating": 93,
    "myRating": 8,
    "synopsis": "Synopsis of movie goes here.",
    "review": "",
    "recommendations": "If you like this watch...",
    "platform": "",
    "type": "Movieseen",
    "releasedate": 1997
  },
  {
    "name": "TheIntervention",
    "posterImage": "images/intervention.jpg",
    "movieTitle": "The Intervention",
    "tags": "",
    "rtRating": 93,
    "myRating": 7,
    "synopsis": "Synopsis of movie goes here.",
    "review": "",
    "recommendations": "If you like this watch...",
    "platform": "",
    "type": "Movieseen",
    "releasedate": 1997
  },
  {
    "name": "TheJunglebook",
    "posterImage": "images/junglebook.jpg",
    "movieTitle": "The Jungle Book",
    "tags": "",
    "rtRating": 93,
    "myRating": 7,
    "synopsis": "Synopsis of movie goes here.",
    "review": "",
    "recommendations": "If you like this watch...",
    "platform": "",
    "type": "Movieseen",
    "releasedate": 1997
  },
  {
    "name": "TheLobster",
    "posterImage": "images/lobster.jpg",
    "movieTitle": "The Lobster",
    "tags": "",
    "rtRating": 93,
    "myRating": 6,
    "synopsis": "Synopsis of movie goes here.",
    "review": "",
    "recommendations": "If you like this watch...",
    "platform": "",
    "type": "Movieseen",
    "releasedate": 1997
  },
  {
    "name": "Winitall",
    "posterImage": "images/winitall.jpg",
    "movieTitle": "Win It All",
    "tags": "Joe Swanberg, Jake Johnson, Joe Lo Truglia",
    "rtRating": 93,
    "myRating": 8.5,
    "synopsis": "Synopsis of movie goes here.",
    "review": "Another classic Swanberg film. Examines the addictive and detrimental impact of gambling. Enjoyed allusion to 'The Hustler' and Fast Eddie.",
    "recommendations": "Happy Christmas, Drinking Buddies",
    "platform": "Netflix",
    "type": "Movieseen",
    "releasedate": 2017
  },
  {
    "name": "DrinkingBuddies",
    "posterImage": "images/drinkingbuddies.jpg",
    "movieTitle": "Drinking Buddies",
    "tags": "Joe Swanberg, Jake Johnson, Olivia Wilde, Anna Kendrick, ",
    "rtRating": 93,
    "myRating": 7,
    "synopsis": "Synopsis of movie goes here.",
    "review": "Another classic Swanberg film. Examines the addictive and detrimental impact of gambling. Enjoyed allusion to 'The Hustler' and Fast Eddie.",
    "recommendations": "Happy Christmas, Drinking Buddies",
    "platform": "Netflix",
    "type": "Movieseen",
    "releasedate": 2017
  },
  {
    "name": "HappyChristmas",
    "posterImage": "images/happychristmas.jpg",
    "movieTitle": "Happy Christmas",
    "tags": "Joe Swanberg, Anna Kendrick, Melanie Lynksy",
    "rtRating": 93,
    "myRating": 8,
    "synopsis": "Synopsis of movie goes here.",
    "review": "Swanberg's sweet spot is creating character's . Examines the addictive and detrimental impact of gambling. Enjoyed allusion to 'The Hustler' and Fast Eddie.",
    "recommendations": "Win It All, Drinking Buddies",
    "platform": "Netflix",
    "type": "Movieseen",
    "releasedate": 2017
  },
  {
    "name": "ALeagueofTheirOwn",
    "posterImage": "images/leagueoftheirown.jpg",
    "movieTitle": "A League of Their Own",
    "tags": "Joe Swanberg, Anna Kendrick, Melanie Lynksy",
    "rtRating": 93,
    "myRating": 8.5,
    "synopsis": "Synopsis of movie goes here.",
    "review": "Swanberg's sweet spot is creating character's . Examines the addictive and detrimental impact of gambling. Enjoyed allusion to 'The Hustler' and Fast Eddie.",
    "recommendations": "Win It All, Drinking Buddies",
    "platform": "Netflix",
    "type": "Movieseen",
    "releasedate": 2017
  },
    {
    "name": "Catfight",
    "posterImage": "images/catfight.jpg",
    "movieTitle": "Catfight",
    "tags": "",
    "rtRating": 73,
    "myRating": 6,
    "synopsis": "Wealthy wine lover Veronica Salt (Sandra Oh, Grey's Anatomy, Sideways) and struggling outsider artist Ashley Chambers (Anne Heche, Hung, Psycho, Six Days Seven Nights) were close in college, but haven't seen each other since. When they find themselves attending the same glitzy birthday party, verbal barbs lead to fisticuffs and an all-out brawl that will keep these two locked in combat for years to come. Outrageous, hilarious, and action-packed, writer-director Onur Tukel's (Applesauce, Summer of Blood, Richard's Wedding) CATFIGHT is a jet-black comedy about two bitter rivals whose grudge match spans a lifetime.",
    "dateofrelease": "",
    "platform": "Netflix",
    "review": "This movie was a lot to digest. The violent catfight signs made me feel physically uncomfortable. Two deeply unhappy people blaming one another for their lives, overall the movie was heavy handed and not my favorite.",
    "cast": "Sandra Oh",
    "type": "Movieseen",
    "releasedate": 2017
  },

//Movie Queue//

  {
    "name": "Dean",
    "posterImage": "images/dean.jpg",
    "movieTitle": "Dean",
    "tags": "strong female lead, uplifting, ",
    "rtRating": 61,
    "synopsis": "Writer/Director/Comedian Demetri Martin stars alongside Academy Award winner Kevin Kline in this comedic and heartfelt tale about a father and son coming to terms with love, loss and everything in between. Dean (Martin) is an illustrator whose unwillingness to deal with the recent death of his mother means escaping his hometown of New York for an interview with an ad agency in Los Angeles. His retired engineer dad Robert (Kline) takes a more regimented approach to grief, including putting the family home up for sale. Both father and son set out on their own paths to find a new normal as unexpected circumstances and potential new love interests threaten to thwart all plans.",
    "dateofrelease": "July 21, 2017",
    "recommendations": "If you like this watch...",
    "platform": "",
    "stephflixViewedMovie": "No",
    "cast": "Jenny Slate, Jay Duplass",
    "type": "Moviequeue",
    "releasedate": 2017
  },
  {
    "name": "ABiggerSplash",
    "posterImage": "images/biggersplash.jpg",
    "movieTitle": "A Bigger Splash",
    "tags": "",
    "rtRating": 89,
    "synopsis": "In A BIGGER SPLASH, rock legend Marianne Lane (Tilda Swinton) is recuperating on the volcanic island of Pantelleria with her partner Paul (Matthias Schoenaerts) when iconoclast record producer and old flame Harry (Ralph Fiennes) unexpectedly arrives with his daughter Penelope (Dakota Johnson) and interrupts their holiday, bringing with him an A-bomb blast of nostalgia from which there can be no rescue. A BIGGER SPLASH is a sensuous portrait of desire, jealousy and rock and roll, under the Mediterranean sun.",
    "dateofrelease": "July 21, 2017",
    "platform": "Amazon Prime",
    "stephflixViewedMovie": "No",
    "cast": "",
    "type": "Moviequeue",
    "releasedate": 2016
  },
  {
    "name": "AManCalledOve",
    "posterImage": "images/amancalledove.jpg",
    "movieTitle": "A Mah Called Ove",
    "tags": "",
    "rtRating": 91,
    "stephflixViewedMovie": "No",
    "synopsis": "Stepping from the pages of Fredrik Backman's international best-selling novel, Ove is the quintessential angry old man next door. An isolated retiree with strict principles and a short fuse, who spends his days enforcing block association rules that only he cares about, and visiting his wife's grave, Ove has given up on life. Enter a boisterous young family next door who accidentally flattens Ove's mailbox while moving in and earning his special brand of ire. Yet from this inauspicious beginning an unlikely friendship forms and we come to understand Ove's past happiness and heartbreaks. What emerges is a heartwarming tale of unreliable first impressions and the gentle reminder that life is sweeter when it's shared.",
    "dateofrelease": "",
    "platform": "Amazon Prime",
    "cast": "",
    "type": "Moviequeue",
    "releasedate": 2016
  },
  {
    "name": "AmericanHoney",
    "posterImage": "images/americanhoney.jpg",
    "movieTitle": "American Honey",
    "tags": "",
    "rtRating": 79,
    "synopsis": "Star, an adolescent girl from a troubled home, runs away with a traveling sales crew who drive across the American Midwest selling subscriptions door to door. Finding her feet in this gang of teenagers, one of whom is Jake, she soon gets into the group's lifestyle of hard-partying nights, law-bending days, and young love.",
    "dateofrelease": "",
    "platform": "Amazon Prime",
    "stephflixViewedMovie": "No",
    "cast": "",
    "type": "Moviequeue",
    "releasedate": 2016
  },
  {
    "name": "BeatrizatDinner",
    "posterImage": "images/beatrizatdinner.jpg",
    "movieTitle": "Beatriz at Dinner",
    "tags": "",
    "rtRating": 80,
    "stephflixViewedMovie": "No",
    "synopsis": "Beatriz (Salma Hayek), an immigrant from a poor town in Mexico, has drawn on her innate kindness to build a career as a health practitioner in Los Angeles. Doug Strutt (John Lithgow) is a cutthroat, self-satisfied billionaire. When these two opposites meet at a dinner party, their worlds collide and neither will ever be the same.",
    "dateofrelease": "",
    "platform": "",
    "cast": "",
    "type": "Moviequeue",
    "releasedate": 2017
  },
  {
    "name": "Beastsofnonation",
    "posterImage": "images/beastsofnonation.jpg",
    "movieTitle": "Beasts of No Nation",
    "tags": "",
    "rtRating": 91,
    "stephflixViewedMovie": "No",
    "synopsis": "In West Africa, the life of young Agu (Abraham Attah) is disrupted when his father is slaughtered in a civil war and he is inscripted as a child soldier into a mercenary unit led by the sadistic Commandant (Idris Elba).",
    "dateofrelease": "",
    "platform": "Netflix",
    "cast": "",
    "type": "Moviequeue",
    "releasedate": 2015
  },
  {
    "name": "Everybodywantssome",
    "posterImage": "images/everybodywantssome.jpg",
    "movieTitle": "Everybody Wants Some!",
    "stephflixViewedMovie": "No",
    "tags": "",
    "rtRating": 86,
    "synopsis": "On the heels of his success with the groundbreaking drama Boyhood, director Richard Linklater shifts gears to sports for this comedy about a successful college baseball team that plays hard both on and off the diamond. Blake Jenner, Tyler Hoechin, Wyatt Russell, Ryan Guzman, Zoey Dutch, Will Brittain, and Glen Powell star.",
    "dateofrelease": "",
    "platform": "Amazon Prime",
    "cast": "",
    "genre": "Comedy",
    "dir": "Richard Linklater",
    "type": "Movie",
    "releasedate": 2016
  },
  {
    "name": "FitsandStarts",
    "posterImage": "images/fitsandstarts.jpg",
    "movieTitle": "Fits and Starts",
    "stephflixViewedMovie": "No",
    "tags": "",
    "rtRating": 0,
    "synopsis": "David Warwik is a struggling writer who has been toiling away at the same novel for years. His wife Jennifer is a hot young literary figure, who has just released a new masterpiece. When her publisher invites the couple to an artists' salon at his home in Connecticut, the pair embark on a twisted journey, and David must face his demons and try to 'not be weird' among the waspy salon guests and competitive art set in attendance. He encounters a dentist with publishing aspirations, a book critic full of condescending advice, a fellow writer who may know his wife a little too well, an old 'friend,' and a high powered bipolar literary agent who just might be able to help him...for a price",
    "genre": "Comedy",
    "dir": "Laura Terruso",
    "dateofrelease": "",
    "platform": "",
    "cast": "",
    "type": "Moviequeue",
    "releasedate": 2017
  },
  {
    "name": "Freefire",
    "posterImage": "images/freefire.jpg",
    "movieTitle": "Freefire",
    "stephflixViewedMovie": "No",
    "tags": "",
    "rtRating": 67,
    "synopsis": "Bold, breathless and wickedly fun, Free Fire is an electrifying action comedy about an arms deal that goes spectacularly and explosively wrong. Acclaimed filmmaker Ben Wheatley (Kill List, High Rise) propels the audience head-on into quite possibly the most epic shootout ever seen on film as he crafts a spectacular parody -- and biting critique -- of the insanity of gun violence. Everyone's got a gun, and absolutely no one is in control. Set in a colorful yet gritty 1970s Boston, Free Fire opens with Justine (Oscar (R) winner Brie Larson), a mysterious American businesswoman, and her wise-cracking associate Ord (Armie Hammer) arranging a black-market weapons deal in a deserted warehouse between IRA arms buyer Chris (Cillian Murphy) and shifty South African gun runner Vernon (Sharlto Copley). What starts as a polite if uneasy exchange soon goes south when tensions escalate and shots are fired, quickly leading to a full-on Battle Royale where it's every man (and woman) for themselves. Packed with witty one-liners, flamboyant characters and remarkable feats of cinematic gunplay, Free Fire is a full-throttle action extravaganza that keeps things fresh and fun with Wheatley's alternately buoyant and savage sense of humor. Swinging from the madcap to the macabre and back again, the film is an exhilarating experience that will leave you quite literally blown away",
    "dateofrelease": "",
    "platform": "",
    "cast": "Brie Larson",
    "genre": "Action & Adventure, Comedy, Drama",
    "dir": "Ben Wheatley",
    "type": "Moviequeue",
    "releasedate": 2017
  },
  {
    "name": "Girlhood",
    "posterImage": "images/girlhood.jpg",
    "movieTitle": "Girlhood",
    "tags": "",
    "rtRating": 96,
    "synopsis": "Fed up with her abusive family situation, lack of school prospects and the 'boys' law' in the neighborhood, Marieme starts a new life after meeting a group of three free-spirited girls. She changes her name, her style, drops out of school and starts stealing to be accepted into the gang. When her home situation becomes unbearable, Marieme seeks solace in an older man who promises her money and protection. Realizing this sort of lifestyle will never result in the freedom and independence she truly desires, she finally decides to take matters into her own hands. (C) Strand'",
    "dateofrelease": "",
    "platform": "Netflix",
    "cast": "",
    "dir": "Céline Sciamma",
    "type": "Moviequeue",
    "releasedate": 2015
  },
                                     
];

var prev_handler = window.onload;
window.onload = function (event) {
  currentmedia = media
  /*displayCurrentMedia();*/
     event.preventDefault();

  
// Get the modal
var modal = document.getElementById('myModal');

$("#close").click(function (event) {
  $("#myModal").hide();
  console.log("spanclose")
})

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        $("#myModal").hide();
    }
}

}
if (prev_handler) {
    prev_handler();
}

media.sort(function(a, b){
    if(a.name < b.name) return -1;
    if(a.name > b.name) return 1;
    return 0;
})

var movietemplate = '<div class="container">' +
                    '<div class="card">' +
                    '<div class="movie-item">' +
                    '<h2 class="title"></h2>' +
                    '<img class="posterImage">' +
                    '<p class="tags"></p>' +
                    '<div class="rt">' +
                    '<img src="images/rt.png">' +
                    '<p class="rtRating"></p>' +
                    '</div>' +
                    '<div class="myrate">' +
                    '<img src="images/stephflixrate.png">' +
                    '<p class="myRating"></p>' +
                    '</div>' +
                    '<p class="recommendations"></p>' +
                    '<p class="releasedate"></p>' +
                    '<p class="platform"></p>' +
                    '<button class="buttonsyn" onclick="seeMore(event)">Learn more</button>' +
                    '</div>' +
                    '</div>' +
                    '</div>';

function seeMore(event) {
  $("h3.title").html($(event.target).data("title"));
  $("p.synopsis").html($(event.target).data("synopsis"));
  $("p.myreview").html($(event.target).data("myreview"));
  var URL=$(event.target).data("URL");
    if (URL) {
        $("a.platformlink").show()
        $("a.platformlink").html("Watch it now: " + $(event.target).data("platform"));
        $("a.platformlink").attr("href",$(event.target).data("URL"));
        $("a.platformlink").attr("class",$(event.target).data("platform")+ " platformlink"); 
    }
    else {
        $("a.platformlink").hide()
    }
 

  /*
  $("iframe.src").html($(event.target).data("src"));
  $('iframe').show();
  */
  $("#myModal").show();
}


function compareByYear(lhs, rhs) {
  if (lhs.releasedate > rhs.releasedate) {
    return -1;
  }
  if (lhs.releasedate < rhs.releasedate) {
    return 1;
  }
  return 0;
}

 function sortByYear(event) {
    console.log("sort by year");
    currentmedia.sort(compareByYear);
    $("#all-the-movies").empty();
    displayCurrentMedia();
    console.log(media);
    event.preventDefault();
}


function compareRottenRating(lhs, rhs) {
  if (lhs.rtRating > rhs.rtRating) {
    return -1;
  }
  if (lhs.rtRating < rhs.rtRating) {
    return 1;
  }
  return 0;
}

 function sortRottenRating(event) {
    console.log("sort by rotten tomatoes");
    currentmedia.sort(compareRottenRating);
    $("#all-the-movies").empty();
    displayCurrentMedia();
    console.log(media);
    event.preventDefault();
}

function compareMyRating(lhs, rhs) {
  if (lhs.myRating > rhs.myRating) {
    return -1;
  }
  if (lhs.myRating < rhs.myRating) {
    return 1;
  }
  return 0;
}

 function sortMyRating(event) {
    console.log("sort by stephflix");
    currentmedia.sort(compareMyRating);
    $("#all-the-movies").empty();
    displayCurrentMedia();
    console.log(media);
    event.preventDefault();
}

function compareName(lhs, rhs) {
  if (lhs.name < rhs.name) {
    return -1;
  }
  if (lhs.name > rhs.name) {
    return 1;
  }
  return 0;
}

 function sortName(event) {
    console.log("sort alphabetically");
    currentmedia.sort(compareName);
    $("#all-the-movies").empty();
    displayCurrentMedia();
    console.log(media);
    event.preventDefault();
}

function filterMovies(event) {
  currentmedia = [];
  for (i = 0; i < media.length; i++){
    if (media[i].type == "Movieseen") {
      currentmedia.push(media[i]);
    }
  } 
    $("#all-the-movies").empty();
    displayCurrentMedia();
    console.log(media);
    event.preventDefault();
}

function filterTv(event) {
  currentmedia = [];
  for (i = 0; i < media.length; i++){
    if (media[i].type == "TVseen") {
      currentmedia.push(media[i]);
    }
  } 
    $("#all-the-movies").empty();
    displayCurrentMedia();
    event.preventDefault();
}

function displayCurrentMedia() {
  /*apply typefilter --- if not null*/ 
    for (i = 0; i < currentmedia.length; i++) { 
        var movie = currentmedia[i];
        var elem = $.parseHTML(movietemplate);
        $("#all-the-movies").append(elem);
        $(elem).find("img.posterImage").attr("src", movie.posterImage);
        $(elem).find("p.rtRating").html(movie.rtRating);
      $(elem).find("p.myRating").html(movie.myRating);
      $(elem).find("p.platform").html(movie.platform);
      $(elem).find("p.releasedate").html(movie.releasedate);
      /*This stuff is for the modal*/
      $(elem).find("button.buttonsyn").data("synopsis", movie.synopsis);
      $(elem).find("button.buttonsyn").data("title", movie.movieTitle);
       $(elem).find("button.buttonsyn").data("myreview", movie.myreview);
       $(elem).find("button.buttonsyn").data("platform", movie.platform);
       $(elem).find("button.buttonsyn").data("URL", movie.URL);
     
    }   
}

function filterPlatform(event, platform) {
    /*
  currentmedia = [];
  for (i = 0; i < media.length; i++){
    if (media[i].platform == platform) {
      currentmedia.push(media[i]);
  }}*/
  /*
  currentmedia = $.grep(media, function (item, i) { return item.platform == platform; });
  */
  currentmedia = $.grep(currentmedia, function (item, i) { return item.platform == platform; });
    $("#all-the-movies").empty();
    displayCurrentMedia();
    event.preventDefault();
}

function filterGenre(event, genre) {
  currentmedia = $.grep(currentmedia, function (item, i) { return item.genre && item.genre.includes(genre); });
    $("#all-the-movies").empty();
    displayCurrentMedia();
    event.preventDefault();
}

function filterViewTV(event, stephflixViewedTV) {
  currentmedia = [];
  for (i = 0; i < media.length; i++){
    if (media[i].type== "TVqueue") {
      currentmedia.push(media[i]);
  }}
    $("#all-the-movies").empty();
    displayCurrentMedia();
    event.preventDefault();
}

function filterViewMovie(event, stephflixViewedMovie) {
  currentmedia = [];
  for (i = 0; i < media.length; i++){
    if (media[i].type == "Moviequeue") {
      currentmedia.push(media[i]);
  }}
    $("#all-the-movies").empty();
    displayCurrentMedia();
    event.preventDefault();
}

//trying to make video dynamically play//
/*

var MyVideos=["E6RGMRamAFk","IHQr0HCIN2w","CogIXrea6A4"];
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }
      function onPlayerReady(event) {
//Player is ready, cue the array of videos into the playlist.
player.cuePlaylist(MyVideos);
      }
      function onPlayerStateChange(event) {
      }
      */

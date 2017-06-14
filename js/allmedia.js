var currentmedia = [];

var media = [
  {
    "name": "GoT",
    "posterImage": "images/got.jpg",
    "movieTitle": "Game of Thrones",
    "rtRating": 95,
    "myRating": 0,
    "synopsis": "An adaptation of author George R.R. Martin's 'A Song of Ice and Fire' medieval fantasies about power struggles among the Seven Kingdoms of Westeros.",
    "recommendations": "",
    "platform": "HBO Go",
    "cast": "",
    "type": "TV",
    "releasedate": "2011-04-17"
  },
  {
    "name": "13reasonswhy",
    "posterImage": "images/13reasons.jpg",
    "movieTitle": "13 Reasons Why",
    "rtRating": 86,
    "myRating": 0,
    "synopsis": "The late Hannah Baker explains why she committed suicide to her high school peers through a collection of cassette tapes she left behind.",
    "dateofrelease": "July 21, 2017",
    "recommendations": "",
    "platform": "Netflix",
    "cast": "",
    "type": "TV",
    "releasedate": "2017-03-31"
  },
  {
    "name": "Atlanta",
    "posterImage": "images/atlanta.jpg",
    "movieTitle": "Atlanta",
    "rtRating": 100,
    "myRating": 0,
    "synopsis": "In Season 1 of this comedy series, two cousins try to work their way up through the Atlanta hip hop scene.",
    "recommendations": "If you like this watch...",
    "platform": "FX",
    "cast": "Jenny Slate, Jay Duplass",
    "type": "TV",
    "releasedate": "2016-16-09"
  },
  {
    "name": "Black-ish",
    "posterImage": "images/blackish.jpg",
    "movieTitle": "Black-ish",
    "rtRating": 93,
    "myRating": 0,
    "synopsis": "A successful family man worries that his four children are losing touch with black culture because they are growing up in an affluent, mostly white neighborhood.",
    "recommendations": "If you like this watch...",
    "platform": "Hulu",
    "cast": "",
    "type": "TV",
    "releasedate": "2014-09-24"
  },
  {
    "name": "Biglittelies",
    "posterImage": "images/biglittlelies.jpg",
    "movieTitle": "Big Little Lies",
    "rtRating": 92,
    "myRating": 0,
    "synopsis": "All is not what it seems in this dark comedy set in an idyllic seaside California town, where success, affluence and privilege are slowly but surely undone by secrets, rivalries, deception and murder. Nicole Kidman, Reese Witherspoon and Shailene Woodley star.",
    "recommendations": "If you like this watch...",
    "platform": "HBO Go",
    "cast": "",
    "type": "TV",
    "releasedate": "2017-02-19"
  },
  {
    "name": "Empire",
    "posterImage": "images/empire.jpg",
    "movieTitle": "Empire",
    "rtRating": 86,
    "myRating": 0,
    "synopsis": "A music mogul plans for the future of his empire as his three sons and his ex-wife battle each other to become the next heir apparent to the hip-hop throne.",
    "recommendations": "If you like this watch...",
    "platform": "Hulu",
    "cast": "",
    "type": "TV",
    "releasedate": "2015-01-07"
  },
  {
    "name": "Legion",
    "posterImage": "images/legion.jpg",
    "movieTitle": "Legion",
    "rtRating": 90,
    "myRating": 0,
    "synopsis": "Legion follows the story of David Haller, a troubled young man who may be more than human. Since he was a teenager, David has struggled with mental illness. Diagnosed as schizophrenic, David has been in and out of psychiatric hospitals for years. But after a strange encounter with a fellow patient, he's confronted with the possibility that the voices he hears and the visions he sees might be real.",
    "recommendations": "If you like this watch...",
    "platform": "Hulu",
    "cast": "",
    "type": "TV",
    "releasedate": "2017-02-08"
  },
  {
    "name": "Madmen",
    "posterImage": "images/madmen.jpg",
    "movieTitle": "Mad Men",
    "rtRating": 94,
    "myRating": 0,
    "synopsis": "A look at the high-powered world of advertising in 1960s New York City, from the boardroom to the bedroom.",
    "recommendations": "If you like this watch...",
    "platform": "Netflix",
    "cast": "",
    "type": "TV",
    "releasedate": "2007-07-19"
  },
  {
    "name": "Bojack",
    "posterImage": "images/bojack.jpg",
    "movieTitle": "Bojack Horseman",
    "tags": "",
    "rtRating": 86,
    "myRating": 10,
    "synopsis": "A former sitcom star attempts to restart his career. This star also happens to be a cartoon horse.",
    "review": "",
    "recommendations": "",
    "platform": "Netflix",
    "type": "TV",
    "releasedate": "2014-08-22"
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
    "type": "TV",
    "releasedate": "2015-06-19"
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
    "type": "TV",
    "releasedate": "2009-09-17"
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
    "type": "TV",
    "releasedate": "2016-01-11"
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
    "type": "TV",
    "releasedate": "08/05/2015"
  },
  {
    "name": "Flaked",
    "posterImage": "images/flaked.jpg",
    "movieTitle": "Flaked",
    "tags": "strong female lead, uplifting, ",
    "rtRating": 42,
    "myRating": 6.5,
    "synopsis": "A self-appointed ''guru'' named Chip falls for the object of his best friend's desire.",
    "review": "This is the place where I say something eloquent and profound in an attempt to convince you that you too should see this wonderful movie!",
    "recommendations": "If you like this watch...",
    "platform": "Netflix",
    "type": "TV",
    "releasedate": "03/11/2016"
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
    "type": "TV",
    "releasedate": "09/16/2016"
  },
  {
    "name": "Girls",
    "posterImage": "images/girls.jpg",
    "movieTitle": "Girls",
    "tags": "strong female lead, uplifting, ",
    "rtRating": 89,
    "myRating": 10,
    "synopsis": "A comedy about twentysomething women navigating their way through life in New York.",
    "review": "This is the place where I say something eloquent and profound in an attempt to convince you that you too should see this wonderful movie!",
    "recommendations": "If you like this watch...",
    "platform": "HBO Go",
    "type": "TV",
    "releasedate": "04/15/2012"
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
    "type": "TV",
    "releasedate": "09/22/2016"
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
    "type": "TV",
    "releasedate": "05/08/2015"
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
    "type": "TV",
    "releasedate": "04/13/2011"
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
    "type": "TV",
    "releasedate": "09/16/2016"
  },
  {
    "name": "Insecure",
    "posterImage": "images/insecure.jpg",
    "movieTitle": "Insecure",
    "tags": "strong female lead, uplifting, ",
    "rtRating": 100,
    "myRating": 10,
    "synopsis": "Two black women who are best friends navigate the pitfalls of their personal and professional lives in south Los Angeles.",
    "review": "This is the place where I say something eloquent and profound in an attempt to convince you that you too should see this wonderful movie!",
    "recommendations": "If you like this watch...",
    "platform": "HBO Go",
    "type": "TV",
    "releasedate": "10/09/2016"
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
    "type": "TV",
    "releasedate": "02/19/2016"
  },
  {
    "name": "Janethevirgin",
    "posterImage": "images/janethevirgin.jpg",
    "movieTitle": "Jane the Virgin",
    "tags": "strong female lead, uplifting, ",
    "rtRating": 100,
    "myRating": 7.5,
    "synopsis": "A comedy-drama following a chaste young woman who is accidentally impregnated via artificial insemination as she struggles to inform her devoutly religious family and make the right choices concerning the child. Based on the telenovela 'Juana la virgen.'",
    "review": "This is the place where I say something eloquent and profound in an attempt to convince you that you too should see this wonderful movie!",
    "recommendations": "If you like this watch...",
    "platform": "Netflix",
    "type": "TV",
    "releasedate": "10/13/2014"
  },
  {
    "name": "Masterofnone",
    "posterImage": "images/masterofnone.jpg",
    "movieTitle": "Master of None",
    "tags": "strong female lead, uplifting, ",
    "rtRating": 100,
    "myRating": 10,
    "synopsis": "Comedy following the personal and professional challenges that face a 30-year-old New York actor, whose trials range from the immigrant experience to what pasta he should eat for dinner.",
    "review": "",
    "recommendations": "If you like this watch...",
    "platform": "Netflix",
    "type": "TV",
    "releasedate": "10/06/2015"
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
    "type": "TV",
    "releasedate": "09/23/2009"
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
    "type": "TV",
    "releasedate": "12/23/2014"
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
    "type": "TV",
    "releasedate": "09/20/2011"
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
    "type": "TV",
    "releasedate": "07/11/2013"
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
    "type": "TV",
    "releasedate": "03/02/2010"
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
    "type": "TV",
    "releasedate": "04/09/2009"
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
    "platform": "HBO Go, Amazon Prime",
    "type": "TV",
    "releasedate": "06/03/2001"
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
    "type": "TV",
    "releasedate": "07/15/2016"
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
    "type": "TV",
    "releasedate": "09/19/2016"
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
    "type": "TV",
    "releasedate": "03/24/2005"
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
    "type": "TV",
    "releasedate": "03/06/2015"
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
    "type": "TV",
    "releasedate": "09/26/2014"
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
    "platform": "Netflix",
    "type": "TV",
    "releasedate": "01/18/2009"
  },
  {
    "name": "Weeds",
    "posterImage": "images/weeds.jpg",
    "movieTitle": "Weeds",
    "tags": "strong female lead, uplifting, ",
    "rtRating": 77,
    "myRating": 10,
    "synopsis": "A suburban California widow deals pot to make ends meet after the unexpected death of her husband.",
    "review": "This is the place where I say something eloquent and profound in an attempt to convince you that you too should see this wonderful movie!",
    "recommendations": "If you like this watch...",
    "platform": "Netflix",
    "type": "TV",
    "releasedate": "08/07/2005"
  },
  {
    "name": "Landline",
    "posterImage": "images/landline.jpg",
    "movieTitle": "Landline",
    "tags": "strong female lead, uplifting, ",
    "rtRating": 76,
    "myRating": 0,
    "synopsis": "When two sisters suspect their father (John Turturro) may be having an affair, it sends them into a tailspin that reveals cracks in the family façade. For the first time, older sister Dana (Jenny Slate), recently engaged and struggling with her own fidelity, finds herself bonding with her wild teenage sister Ali (Abby Quinn). The two try to uncover the truth without tipping off their mother (Edie Falco) and discover the messy reality of love and sex in the process. Set in 1990s Manhattan, Landline is a warm, insightful and comedic drama about a family united by secrets and lies, co-written and directed by Gillian Robespierre (Obvious Child).",
    "dateofrelease": "July 21, 2017",
    "recommendations": "If you like this watch...",
    "platform": "",
    "cast": "Jenny Slate, Jay Duplass",
    "type": "Movie",
    "releasedate": "07/21/2017"
  },
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
    "cast": "Jenny Slate, Jay Duplass",
    "type": "Movie",
    "releasedate": "06/02/2017"
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
    "type": "Movie",
    "releasedate": "06/23/2017"
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
    "cast": "",
    "type": "Movie",
    "releasedate": "05/04/2016"
  },
  {
    "name": "AManCalledOve",
    "posterImage": "images/amancalledove.jpg",
    "movieTitle": "A Mah Called Ove",
    "tags": "",
    "rtRating": 91,
    "synopsis": "Stepping from the pages of Fredrik Backman's international best-selling novel, Ove is the quintessential angry old man next door. An isolated retiree with strict principles and a short fuse, who spends his days enforcing block association rules that only he cares about, and visiting his wife's grave, Ove has given up on life. Enter a boisterous young family next door who accidentally flattens Ove's mailbox while moving in and earning his special brand of ire. Yet from this inauspicious beginning an unlikely friendship forms and we come to understand Ove's past happiness and heartbreaks. What emerges is a heartwarming tale of unreliable first impressions and the gentle reminder that life is sweeter when it's shared.",
    "dateofrelease": "",
    "platform": "Amazon Prime",
    "cast": "",
    "type": "Movie",
    "releasedate": "09/30/2016"
  },
  {
    "name": "AMonsterCalls",
    "posterImage": "images/monstercalls.jpg",
    "movieTitle": "A Monster Calls",
    "tags": "",
    "rtRating": 87,
    "synopsis": "A visually spectacular drama from director J.A. Bayona ('The Impossible'). 12-year-old Conor (Lewis MacDougall), dealing with his mother's (Felicity Jones) illness, a less-than-sympathetic grandmother (Sigourney Weaver), and bullying classmates, finds a most unlikely ally when a Monster appears at his bedroom window. Ancient, wild, and relentless, the Monster guides Conor on a journey of courage, faith, and truth. Toby Kebbell plays Conor's father, and Liam Neeson stars in performance-capture and voiceover as the nocturnally visiting Monster of the title.",
    "dateofrelease": "",
    "platform": "",
    "cast": "",
    "type": "Movie",
    "releasedate": "01/06/2017"
  },
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
    "type": "Movie",
    "releasedate": "02/10/2017"
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
    "cast": "",
    "type": "Movie",
    "releasedate": "09/30/2016"
  },
  {
    "name": "BattleofSexes",
    "posterImage": "images/battlesexes.jpg",
    "movieTitle": "Battle of the Sexes",
    "tags": "",
    "rtRating": 0,
    "synopsis": "The electrifying 1973 tennis match between World number one Billie Jean King and ex-champ and serial hustler Bobby Riggs was billed as THE BATTLE OF THE SEXES and became the most watched televised sports event of all time. The match caught the zeitgeist and sparked a global conversation on gender equality, spurring on the feminist movement. Trapped in the media glare, King and Riggs were on opposites sides of a binary argument, but off-court each was fighting more personal and complex battles. With a supportive husband urging her to fight the Establishment for equal pay, the fiercely private King was also struggling to come to terms with her own sexuality, while Riggs gambled his legacy and reputation in a bid to relive the glories of his past. Together, Billie and Bobby served up a cultural spectacle that resonated far beyond the tennis courts and animated the discussions between men and women in bedrooms and boardrooms around the world.",
    "dateofrelease": "",
    "platform": "",
    "cast": "",
    "type": "Movie",
    "releasedate": "09/22/2017"
  },
  {
    "name": "BandAid",
    "posterImage": "images/bandaid.jpg",
    "movieTitle": "Band Aid",
    "tags": "",
    "rtRating": 83,
    "synopsis": "Band Aid, the refreshingly raw, real, and hilarious feature debut from Zoe Lister-Jones, is the story of a couple, Anna (Zoe Lister-Jones) and Ben (Adam Pally), who can't stop fighting. Advised by their therapist to try and work through their grief unconventionally, they are reminded of their shared love of music. In a last-ditch effort to save their marriage, they decide to turn all their fights into song, and with the help of their neighbor Dave (Fred Armisen), they start a band. A story of love, loss, and rock and roll, Band Aid is a witty and perceptive view of modern love, with some seriously catchy pop hooks to boot.",
    "dateofrelease": "",
    "platform": "",
    "cast": "Adam Pally",
    "type": "Movie",
    "releasedate": "06/02/2017"
  },
  {
    "name": "BeatrizatDinner",
    "posterImage": "images/beatrizatdinner.jpg",
    "movieTitle": "Beatriz at Dinner",
    "tags": "",
    "rtRating": 80,
    "synopsis": "Beatriz (Salma Hayek), an immigrant from a poor town in Mexico, has drawn on her innate kindness to build a career as a health practitioner in Los Angeles. Doug Strutt (John Lithgow) is a cutthroat, self-satisfied billionaire. When these two opposites meet at a dinner party, their worlds collide and neither will ever be the same.",
    "dateofrelease": "",
    "platform": "",
    "cast": "",
    "type": "Movie",
    "releasedate": "06/09/2017"
  },
  {
    "name": "Beastsofnonation",
    "posterImage": "images/beastsofnonation.jpg",
    "movieTitle": "Beasts of No Nation",
    "tags": "",
    "rtRating": 91,
    "synopsis": "In West Africa, the life of young Agu (Abraham Attah) is disrupted when his father is slaughtered in a civil war and he is inscripted as a child soldier into a mercenary unit led by the sadistic Commandant (Idris Elba).",
    "dateofrelease": "",
    "platform": "Netflix",
    "cast": "",
    "type": "Movie",
    "releasedate": "10/16/2015"
  },
  {
    "name": "Callmebyyourname",
    "posterImage": "images/callmebyyourname.jpg",
    "movieTitle": "Call Me By Your Name",
    "tags": "",
    "rtRating": 100,
    "synopsis": "It's the summer of 1983, in the north of Italy, and Elio Perlman, (Timothée Chalamet) a 17-year-old American-Italian boy spends his days in his family's 17th century villa lazily transcribing music and flirting with his friend Marzia (Esther Garrel). One day Oliver, (Armie Hammer) a charming, 24-year-old American scholar working on his doctorate arrives as the annual summer intern tasked with helping Elio's father (Michael Stuhlbarg), an eminent professor specializing in Greco-Roman culture. Amidst the sun-drenched splendor of this sensual setting, Elio and Oliver discover the heady beauty of awakening desire over the course of a summer that will alter their lives forever.",
    "dateofrelease": "",
    "platform": "",
    "cast": "",
    "type": "Movie",
    "releasedate": "11/24/2017"
  },
  {
    "name": "Catfight",
    "posterImage": "images/catfight.jpg",
    "movieTitle": "Catfight",
    "tags": "",
    "rtRating": 73,
    "synopsis": "Wealthy wine lover Veronica Salt (Sandra Oh, Grey's Anatomy, Sideways) and struggling outsider artist Ashley Chambers (Anne Heche, Hung, Psycho, Six Days Seven Nights) were close in college, but haven't seen each other since. When they find themselves attending the same glitzy birthday party, verbal barbs lead to fisticuffs and an all-out brawl that will keep these two locked in combat for years to come. Outrageous, hilarious, and action-packed, writer-director Onur Tukel's (Applesauce, Summer of Blood, Richard's Wedding) CATFIGHT is a jet-black comedy about two bitter rivals whose grudge match spans a lifetime.",
    "dateofrelease": "",
    "platform": "Netflix",
    "cast": "Sandra Oh",
    "type": "Movie",
    "releasedate": "03/03/2017"
  },
  {
    "name": "Everybodywantssome",
    "posterImage": "images/everybodywantssome.jpg",
    "movieTitle": "Everybody Wants Some!",
    "tags": "",
    "rtRating": 86,
    "synopsis": "Synopsis of movie goes here.",
    "dateofrelease": "",
    "platform": "",
    "cast": "",
    "dir": "Richard Linklater",
    "type": "Movie",
    "releasedate": 2017
  },
  {
    "name": "FitsandStarts",
    "posterImage": "images/fitsandstarts.jpg",
    "movieTitle": "Fits and Starts",
    "tags": "",
    "rtRating": 0,
    "synopsis": "Synopsis of movie goes here.",
    "dateofrelease": "",
    "platform": "",
    "cast": "",
    "dir": "",
    "type": "Movie",
    "releasedate": 2017
  },
  {
    "name": "Freefire",
    "posterImage": "images/freefire.jpg",
    "movieTitle": "Freefire",
    "tags": "",
    "rtRating": 0,
    "synopsis": "Synopsis of movie goes here.",
    "dateofrelease": "",
    "platform": "",
    "cast": "Brie Larson",
    "dir": "",
    "type": "Movie",
    "releasedate": 2017
  },
  {
    "name": "Girlhood",
    "posterImage": "images/girlhood.jpg",
    "movieTitle": "Girlhood",
    "tags": "",
    "rtRating": 0,
    "synopsis": "Synopsis of movie goes here.",
    "dateofrelease": "",
    "platform": "",
    "cast": "",
    "dir": "",
    "type": "Movie",
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
    "type": "Movie",
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
    "type": "Movie",
    "releasedate": 2017
  },
  {
    "name": "ManchesterbytheSea",
    "posterImage": "images/mansea.jpg",
    "movieTitle": "Manchester By the Sea",
    "tags": "sad",
    "rtRating": 98,
    "myRating": 8,
    "synopsis": "Synopsis of movie goes here.",
    "review": "This is the place where I say something eloquent and profound in an attempt to convince you that you too should see this wonderful movie!",
    "recommendations": "If you like this watch...",
    "platform": "",
    "type": "Movie",
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
    "type": "Movie",
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
    "type": "Movie",
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
    "type": "Movie",
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
    "type": "Movie",
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
    "type": "Movie",
    "releasedate": 1970
  },
  {
    "name": "Fences",
    "posterImage": "images/fences.jpg",
    "movieTitle": "Fences",
    "tags": "",
    "rtRating": 93,
    "myRating": 9,
    "synopsis": "Synopsis of movie goes here.",
    "review": "Modern Day Frankenstein. Alicia Vikander. Shit. ",
    "recommendations": "If you like this watch...",
    "platform": "",
    "type": "Movie",
    "releasedate": 1980
            
  },
  {
    "name": "FlorenceFosterJenkins",
    "posterImage": "images/ffj.jpg",
    "movieTitle": "Florence Foster Jenkins",
    "tags": "",
    "rtRating": 87,
    "myRating": 7.5,
    "synopsis": "Synopsis of movie goes here.",
    "review": "",
    "recommendations": "If you like this watch...",
    "platform": "",
    "type": "Movie",
    "releasedate": 2003
  },
  {
    "name": "FrancesHa",
    "posterImage": "images/francesha.jpg",
    "movieTitle": "Frances Ha",
    "tags": "",
    "rtRating": 93,
    "myRating": 9.5,
    "synopsis": "Synopsis of movie goes here.",
    "review": "",
    "recommendations": "If you like this watch...",
    "platform": "",
    "type": "Movie",
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
    "type": "Movie",
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
    "type": "Movie",
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
    "type": "Movie",
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
    "type": "Movie",
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
    "type": "Movie",
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
    "type": "Movie",
    "releasedate": 1997
  },
  {
    "name": "Jackie",
    "posterImage": "images/jackie.jpg",
    "movieTitle": "Jackie",
    "tags": "",
    "rtRating": 93,
    "myRating": 9.5,
    "synopsis": "Synopsis of movie goes here.",
    "review": "",
    "recommendations": "If you like this watch...",
    "platform": "",
    "type": "Movie",
    "releasedate": 1997
  },
  {
    "name": "Joshy",
    "posterImage": "images/joshy.jpg",
    "movieTitle": "Joshy",
    "tags": "",
    "rtRating": 93,
    "myRating": 9.5,
    "synopsis": "Synopsis of movie goes here.",
    "review": "",
    "recommendations": "If you like this watch...",
    "platform": "",
    "type": "Movie",
    "releasedate": 1997
  },
  {
    "name": "Krisha",
    "posterImage": "images/krisha.jpg",
    "movieTitle": "Krisha",
    "tags": "",
    "rtRating": 93,
    "myRating": 9.5,
    "synopsis": "Synopsis of movie goes here.",
    "review": "",
    "recommendations": "If you like this watch...",
    "platform": "",
    "type": "Movie",
    "releasedate": 1997
  },
  {
    "name": "LaLaLand",
    "posterImage": "images/lalaland.jpeg",
    "movieTitle": "La La Land",
    "tags": "",
    "rtRating": 93,
    "myRating": 9.5,
    "synopsis": "Synopsis of movie goes here.",
    "review": "",
    "recommendations": "If you like this watch...",
    "platform": "",
    "type": "Movie",
    "releasedate": 1997
  },
  {
    "name": "Life,Animated",
    "posterImage": "images/lifeanimated.jpg",
    "movieTitle": "Life, Animated",
    "tags": "",
    "rtRating": 93,
    "myRating": 9.5,
    "synopsis": "Synopsis of movie goes here.",
    "review": "",
    "recommendations": "If you like this watch...",
    "platform": "",
    "type": "Movie",
    "releasedate": 1997
  },
  {
    "name": "Lion",
    "posterImage": "images/lion.jpg",
    "movieTitle": "Lion",
    "tags": "d",
    "rtRating": 93,
    "myRating": 9.5,
    "synopsis": "Synopsis of movie goes here.",
    "review": "d",
    "recommendations": "If you like this watch...",
    "platform": "d",
    "type": "Movie",
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
    "platform": "",
    "type": "Movie",
    "releasedate": 1997
  },
  {
    "name": "Loving",
    "posterImage": "images/loving.jpg",
    "movieTitle": "Loving",
    "tags": "",
    "rtRating": 93,
    "myRating": 9.5,
    "synopsis": "Synopsis of movie goes here.",
    "review": "",
    "recommendations": "If you like this watch...",
    "platform": "",
    "type": "Movie",
    "releasedate": 1997
  },
  {
    "name": "Moana",
    "posterImage": "images/moana.jpg",
    "movieTitle": "Moana",
    "tags": "",
    "rtRating": 93,
    "myRating": 9.5,
    "synopsis": "Synopsis of movie goes here.",
    "review": "",
    "recommendations": "If you like this watch...",
    "platform": "",
    "type": "Movie",
    "releasedate": 1997
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
    "type": "Movie",
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
    "type": "Movie",
    "releasedate": 1997
  },
  {
    "name": "SingStreet",
    "posterImage": "images/singstreet.jpg",
    "movieTitle": "Sing Street",
    "tags": "",
    "rtRating": 93,
    "myRating": 9.5,
    "synopsis": "Synopsis of movie goes here.",
    "review": "",
    "recommendations": "If you like this watch...",
    "platform": "",
    "type": "Movie",
    "releasedate": 1997
  },
  {
    "name": "Paddington",
    "posterImage": "images/paddington.jpg",
    "movieTitle": "Paddington",
    "tags": "",
    "rtRating": 93,
    "myRating": 9.5,
    "synopsis": "Synopsis of movie goes here.",
    "review": "",
    "recommendations": "If you like this watch...",
    "platform": "",
    "type": "Movie",
    "releasedate": 1997
  },
  {
    "name": "Sightseers",
    "posterImage": "images/sightseers.jpg",
    "movieTitle": "Sightseers",
    "tags": "",
    "rtRating": 93,
    "myRating": 9.5,
    "synopsis": "Synopsis of movie goes here.",
    "review": "",
    "recommendations": "If you like this watch...",
    "platform": "",
    "type": "Movie",
    "releasedate": 1997
  },
  {
    "name": "TheBigAsk",
    "posterImage": "images/thebigask.jpg",
    "movieTitle": "The Big Ask",
    "tags": "",
    "rtRating": 93,
    "myRating": 9.5,
    "synopsis": "Synopsis of movie goes here.",
    "review": "",
    "recommendations": "If you like this watch...",
    "platform": "",
    "type": "Movie",
    "releasedate": 1997
  },
  {
    "name": "TheImitationgame",
    "posterImage": "images/imitationgame.jpg",
    "movieTitle": "The Imitation Game",
    "tags": "",
    "rtRating": 93,
    "myRating": 9.5,
    "synopsis": "Synopsis of movie goes here.",
    "review": "",
    "recommendations": "If you like this watch...",
    "platform": "",
    "type": "Movie",
    "releasedate": 1997
  },
  {
    "name": "TheIntervention",
    "posterImage": "images/intervention.jpg",
    "movieTitle": "The Intervention",
    "tags": "",
    "rtRating": 93,
    "myRating": 9.5,
    "synopsis": "Synopsis of movie goes here.",
    "review": "",
    "recommendations": "If you like this watch...",
    "platform": "",
    "releasedate": 1997
  },
  {
    "name": "TheJunglebook",
    "posterImage": "images/junglebook.jpg",
    "movieTitle": "The Jungle Book",
    "tags": "",
    "rtRating": 93,
    "myRating": 9.5,
    "synopsis": "Synopsis of movie goes here.",
    "review": "",
    "recommendations": "If you like this watch...",
    "platform": "",
    "type": "Movie",
    "releasedate": 1997
  },
  {
    "name": "TheLobster",
    "posterImage": "images/lobster.jpg",
    "movieTitle": "The Lobster",
    "tags": "",
    "rtRating": 93,
    "myRating": 9.5,
    "synopsis": "Synopsis of movie goes here.",
    "review": "",
    "recommendations": "If you like this watch...",
    "platform": "",
    "type": "Movie",
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
    "type": "Movie",
    "releasedate": 2017
  },
  {
    "name": "DrinkingBuddies",
    "posterImage": "images/drinkingbuddies.jpg",
    "movieTitle": "Drinking Buddies",
    "tags": "Joe Swanberg, Jake Johnson, Olivia Wilde, Anna Kendrick, ",
    "rtRating": 93,
    "myRating": 6.5,
    "synopsis": "Synopsis of movie goes here.",
    "review": "Another classic Swanberg film. Examines the addictive and detrimental impact of gambling. Enjoyed allusion to 'The Hustler' and Fast Eddie.",
    "recommendations": "Happy Christmas, Drinking Buddies",
    "platform": "Netflix",
    "type": "Movie",
    "releasedate": 2017
  },
  {
    "name": "HappyChristmas",
    "posterImage": "images/happychristmas.jpg",
    "movieTitle": "Happy Christmas",
    "tags": "Joe Swanberg, Anna Kendrick, Melanie Lynksy",
    "rtRating": 93,
    "myRating": 6.5,
    "synopsis": "Synopsis of movie goes here.",
    "review": "Swanberg's sweet spot is creating character's . Examines the addictive and detrimental impact of gambling. Enjoyed allusion to 'The Hustler' and Fast Eddie.",
    "recommendations": "Win It All, Drinking Buddies",
    "platform": "Netflix",
    "type": "Movie",
    "releasedate": 2017
  },
  {
    "name": "ALeagueofTheirOwn",
    "posterImage": "images/leagueoftheirown.jpg",
    "movieTitle": "A League of Their Own",
    "tags": "Joe Swanberg, Anna Kendrick, Melanie Lynksy",
    "rtRating": 93,
    "myRating": 6.5,
    "synopsis": "Synopsis of movie goes here.",
    "review": "Swanberg's sweet spot is creating character's . Examines the addictive and detrimental impact of gambling. Enjoyed allusion to 'The Hustler' and Fast Eddie.",
    "recommendations": "Win It All, Drinking Buddies",
    "platform": "Netflix",
    "type": "Movie",
    "releasedate": 2017
  }
                                     
];

var prev_handler = window.onload;
window.onload = function (event) {
  for (i = 0; i < media.length; i++) { 
    var movie = media[i];
    var elem = $.parseHTML(movietemplate);
    $("#all-the-movies").append(elem);
    $(elem).find("img.posterImage").attr("src", movie.posterImage);
    $(elem).find("p.rtRating").html(movie.rtRating);
    $(elem).find("p.myRating").html(movie.myRating);
    $(elem).find("p.platform").html(movie.platform);
    $(elem).find("p.releasedate").html(movie.releasedate);
    }   
     event.preventDefault();

}
if (prev_handler) {
    prev_handler();
}

media.sort(function(a, b){
    if(a.name < b.name) return -1;
    if(a.name > b.name) return 1;
    return 0;
})


function displayWatchlist(event) {
  for (i = 0; i < media.length; i++) { 
    var movie = media[i];
    var elem = $.parseHTML(movietemplate);
    $("#all-the-movies").append(elem);
    $(elem).find("img.posterImage").attr("src", movie.posterImage);
    $(elem).find("p.rtRating").html(movie.rtRating);
    $(elem).find("p.myRating").html(movie.myRating);
    $(elem).find("p.platform").html(movie.platform);
    $(elem).find("p.releasedate").html(movie.releasedate);
    }   
     event.preventDefault();
}

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
                    '<p class="myRating"></p>' +
                    '<p class="synopsis"></p>' +
                    '<p class="review"></p>' +
                    '<p class="recommendations"></p>' +
                    '<p class="releasedate"></p>' +
                    '<p class="platform"></p>' +
                    '<button class="buttonsyn" onclick="seeSynopsis(event)">Synopsis</button>' +
                    '</div>' +
                    '</div>' +
                    '</div>';

/*
var overlay = '<div class="synopsis" id="text">' '</div>'

function displayText(event) {
   for (i = 0; i < media.length; i++) { 
    var movie = media[i];
    var elem = $.parseHTML(overlay);
     $(elem).find("p.synopsis").html(movie.synopsis);
}
*/

/*
function sortByDate(event) {
    media.sort(function(a, b){return a-b});
    $(elem).find("p.releasedate").html(movie.releasedate);
}

*/
/*
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
*/

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
/*

function filterMedia(event) {
  var filtered_movies = [];
  for (i = 0; i < media.length; i++){
    if (media[i].type == "Movie") {
      filtered_movies.push(media[i]);
    }
  } 
    $("#all-the-movies").empty();
    displayFilteredMovies(filtered_movies);
    console.log(media);
    event.preventDefault();
}

function displayFilteredMovies(filterMedia) {
    for (i = 0; i < filterMedia.length; i++) { 
        console.log(filterMedia[i]);
        var movie = filterMedia[i];
        var elem = $.parseHTML(movietemplate);
        $("#all-the-movies").append(elem);
        $(elem).find("img.posterImage").attr("src", movie.posterImage);
        $(elem).find("p.rtRating").html(movie.rtRating);
      $(elem).find("p.myRating").html(movie.myRating);
      $(elem).find("p.platform").html(movie.platform);
      $(elem).find("p.releasedate").html(movie.releasedate);
    }   
}
*/

function filterMovies(event) {
  currentmedia = [];
  for (i = 0; i < media.length; i++){
    if (media[i].type == "Movie") {
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
    if (media[i].type == "TV") {
      currentmedia.push(media[i]);
    }
  } 
    $("#all-the-movies").empty();
    displayCurrentMedia();
    console.log(media);
    event.preventDefault();
}

function filterNetflix(event) {
  currentmedia = [];
  for (i = 0; i < media.length; i++){
    if (media[i].platform == "Netflix") {
      currentmedia.push(media[i]);
    }
  } 
    $("#all-the-movies").empty();
    displayCurrentMedia();
    console.log(media);
    event.preventDefault();
}

function filterHulu(event) {
  currentmedia = [];
  for (i = 0; i < media.length; i++){
    if (media[i].platform == "Hulu") {
      currentmedia.push(media[i]);
    }
  } 
    $("#all-the-movies").empty();
    displayCurrentMedia();
    console.log(media);
    event.preventDefault();
}

function filterAmazonPrime(event) {
  currentmedia = [];
  for (i = 0; i < media.length; i++){
    if (media[i].platform == "Amazon Prime") {
      currentmedia.push(media[i]);
    }
  } 
    $("#all-the-movies").empty();
    displayCurrentMedia();
    console.log(media);
    event.preventDefault();
}

function filterHboGo(event) {
  currentmedia = [];
  for (i = 0; i < media.length; i++){
    if (media[i].platform == "HBO Go") {
      currentmedia.push(media[i]);
    }
  } 
    $("#all-the-movies").empty();
    displayCurrentMedia();
    console.log(media);
    event.preventDefault();
}

function filterOther(event) {
  currentmedia = [];
  for (i = 0; i < media.length; i++){
    if (media[i].platform == "") {
      currentmedia.push(media[i]);
    }
  } 
    $("#all-the-movies").empty();
    displayCurrentMedia();
    console.log(currentmediamedia);
    event.preventDefault();
}

function displayCurrentMedia () {
    for (i = 0; i < currentmedia.length; i++) { 
        console.log(currentmedia[i]);
        var movie = currentmedia[i];
        var elem = $.parseHTML(movietemplate);
        $("#all-the-movies").append(elem);
        $(elem).find("img.posterImage").attr("src", movie.posterImage);
        $(elem).find("p.rtRating").html(movie.rtRating);
      $(elem).find("p.myRating").html(movie.myRating);
      $(elem).find("p.platform").html(movie.platform);
      $(elem).find("p.releasedate").html(movie.releasedate);
    }  
}
/*
function filterPlatform(event, platform) {
  for (i = 0; i < media.length; i++){
    if (currentmedia[i] == platform) {
      currentmedia.push(media[i]);
  } 
    $("#all-the-movies").empty();
    displayCurrentMedia();
    console.log(media);
    event.preventDefault();
}
  */
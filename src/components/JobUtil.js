const JobUtil = {};

JobUtil.titleList = [
  "Help me design a website",
  "I need a logo for my company",
  "Voice acting for a YouTube video",
  "Create a concept art for my next video game",
  "Need a sound engineer to mix my tracks",
  "Help me edit videos for my YouTube channel",
  "Urgently need a translator for my fanfiction",
  "Looking for a professional guitarist to join my death metal band",
  "Looking for a business partner for my MLM",
  "I need someone to finish my CSIT226 project for me",
  "Need someone to pretend to be my girlfriend",
  "Please feed my goldfish while I'm away",
  "Need a babysitter to sit on my babies"
];
JobUtil.gigList = [
  "I can write a song in 5 minutes",
  "I can translate Tamil to Mandarin",
  "I can draw anything you want",
  "I can create 3D models of environments",
  "I can feed your goldfish while you're away",
  "I can do your homework for you",
  "I can join your MLM and build up your business",
  "I can mix your music tracks",
  "I can record a voice over for your videos"
];
JobUtil.categoryList = [
  "Software",
  "Writing",
  "Graphic design",
  "Music",
  "Linguistics",
  "Audio",
  "Video",
  "Multimedia",
  "Translation",
  "Transcription"
];
JobUtil.nameList = [
  "Absalom",
  "Bernard",
  "Charlie",
  "David",
  "Eclair",
  "Fiona",
  "Gandalf",
  "Hank",
  "Ian",
  "Joey",
  "Kate",
  "Lacey",
  "Monty",
  "Nabila",
  "Octavio",
  "Pablo",
  "Qing",
  "Radcliff",
  "Sarah",
  "Tiamat",
  "Uday",
  "Vadim",
  "Winston",
  "Xavier",
  "Yakov",
  "Zoey"
];
JobUtil.locationList = [
  "Jakarta, Indonesia",
  "Singapore",
  "Dubai, UAE",
  "North Korea",
  "Tokyo, Japan",
  "Copenhagen, Denmark",
  "Beijing, China",
  "Mumbai, India",
  "Taipei, Taiwan"
];

JobUtil.messageArray = [
  [
    "Hello! I just saw your listing and got interested. Can I ask you a few questions?",
    "Hey there! I'd like to know more about your gigs!",
    "Hey, are you online right now? I want to inquire about your listings.",
    "Hello, I wanna ask a few questions.",
    "Hi, can I ask you some things?",
    "Your profile looks great! Can I ask a few things about you?"
  ],
  [
    "Yeah, sure! What would you like to know?",
    "Definitely. What do you wish to know?",
    "Feel free to ask!"
  ],
  [
    "What's your favourite color?",
    "Why is the sky blue?",
    "Why do I exist? Who am I?",
    "Do you believe that we're all living in a simulation right now?",
    "Is the earth actually flat?",
    "I'm not sure I'm a real person. Are you?"
  ],
  [
    "Some things in this universe are best left unanswered",
    "Sometimes we needn't know the answers to everything",
    "There are just some things that science can't quantify"
  ],
  [
    "You sure are an interesting person",
    "Well that answers it",
    "I'm not sure if I feel enlightened or confused",
    "Your words astound me"
  ],
  [
    "I'm flattered",
    "I'm no scientist but thank you",
    "Well that's nice of you",
    "I'm honored"
  ]
];

JobUtil.randomTitle = () =>
  JobUtil.titleList[Math.floor(Math.random() * JobUtil.titleList.length)];
JobUtil.randomGig = () =>
  JobUtil.gigList[Math.floor(Math.random() * JobUtil.gigList.length)];
JobUtil.randomCategory = () =>
  JobUtil.categoryList[Math.floor(Math.random() * JobUtil.categoryList.length)];
JobUtil.randomImage = () =>
  `/gig-thumbnail-${Math.ceil(Math.random() * 7)}-square.jpg`;
JobUtil.randomName = () =>
  JobUtil.nameList[Math.floor(Math.random() * JobUtil.nameList.length)];
JobUtil.randomProfilePicture = () =>
  `/person-${Math.ceil(Math.random() * 4)}.jpg`;
JobUtil.randomLocation = () =>
  JobUtil.locationList[Math.floor(Math.random() * JobUtil.locationList.length)];
JobUtil.randomDeadline = () =>
  new Date(new Date().getTime() + Math.random() * 1000 * 3600 * 24 * 31);
JobUtil.randomMessageArray = () =>
  JobUtil.messageArray.map(arr => arr[Math.floor(Math.random() * arr.length)]);

export default JobUtil;

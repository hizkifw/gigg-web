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

JobUtil.randomTitle = () =>
  JobUtil.titleList[Math.floor(Math.random() * JobUtil.titleList.length)];
JobUtil.randomImage = () =>
  `/gig-thumbnail-${Math.ceil(Math.random() * 7)}-square.jpg`;
JobUtil.randomName = () =>
  JobUtil.nameList[Math.floor(Math.random() * JobUtil.nameList.length)];

export default JobUtil;

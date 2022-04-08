import ShowcaseImage from "../ShowcaseElements";

export const TweeterFlipCard = {
  img1: require('../../../images/SimpleTweet_v1.gif').default,
  hasTwoImages: true,
  img2: require('../../../images/SimpleTweet_v2.gif').default,
  frontHead: '"Twitter" app',
  backHead: '"Twitter" app: Real Twitter on a small scale',
  backP: "This simple Twitter clone to use OAuth to allow the user to login to Twitter. We used the real twitter API to allow tweeting, liking, retweeting, infinite pagination, and the tweets were persistent in storage through app closing/reopening."
  , ghlink: "https://github.com/colekimchi/SimpleTweet"
}

export const ParsegramFlipCard = {
  img1: require('../../../images/ParseInstagram_v1.5.gif').default,
  hasTwoImages: false,
  img2: require('../../../images/icon1.svg').default,
  frontHead: '"Instagram" app',
  backHead: '"Instagram" app: Database storage',
  backP: "This project used a Parse server as a mock instagram database. Using the camera, the user could upload a photo and its description to the Parse database. The Parse server also allowed account creation, storing usernames and passwords."
  , ghlink: "https://github.com/colekimchi/ParseInstagram"
}

export const FlixterFlipCard = {
  img1: require('../../../images/Flixter_v2_GIF.gif').default,
  hasTwoImages: false,
  img2: require('../../../images/icon1.svg').default,
  frontHead: '"Flixter" app',
  backHead: "Flixter app: Movie ratings and trailers",
  backP: "We learned how to implement a RecyclerView, make calls to the Movie Database API, use Activities and Intents, and used the YoutubePlayerView to play youtube videos inside the app. Landscape/Portait orientations were implemented."
  , ghlink: "https://github.com/colekimchi/Flixter"
}

export const SBPYFlipCard = {
  img1: require('../../../images/sbdatabase_walkthrough_faster.gif').default,
  hasTwoImages: false,
  img2: require('../../../images/icon1.svg').default,
  frontHead: 'Yelp Python Searcher',
  backHead: "Flixter app: Movie ratings and trailers",
  backP: ""
  , ghlink: "https://github.com/colekimchi/Flixter"
}
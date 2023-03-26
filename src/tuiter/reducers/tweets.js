import posts from './tuits/tuits.json';

const tweets = (state = posts, action) => {
    switch (action.type) {
        case 'fetch-all-tweets':
            return({
                tweets: action.tweets
            })
            break;

        case 'like-tweet':
            return state.map(tweet => {
                if(tweet._id === action.tweet._id) {
                    if(tweet.liked === true) {
                        tweet.liked = false;
                        tweet.likes--;
                    } else {
                        tweet.liked = true;
                        tweet.likes++;
                    }
                    return tweet;
                } else {
                    return tweet;
                }
            });
            break;

        case 'delete-tweet':
            return state.filter(tweet => tweet._id !== action.tweet._id);
            break;

        case 'create-tweet':
            const tweet = {
                tweet: action.tweet,
                _id: (new Date()).getTime() + '',
                "topic": "Web Development",
                "userName": "ReactJS",
                "verified": false,
                "handle": "ReactJS",
                "time": "2h",
                "avatar-image": "/image/elon_profile.jpeg",
                "logo-image": "/image/elon_profile.jpeg",
                "stats": {
                    "comments": 123,
                    "retweets": 234,
                    "likes": 345
                },
            };
            return ([
                    tweet,
                    ...state,
                ]
            );
            break;
        default:
            return (state);
    }
};

export default tweets;


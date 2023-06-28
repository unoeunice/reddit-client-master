export const API_ROOT = 'https://www.reddit.com';

export const getSubredditPosts = async (subreddit) => {
  const response = await fetch(`${API_ROOT}${subreddit}.json`);
  const json = await response.json();

  return json.data.children.map((post) => post.data);
};

export const getSubreddits = async () => {
  const response = await fetch(`${API_ROOT}/subreddits.json`);
  const json = await response.json();

  return json.data.children.map((subreddit) => subreddit.data);
};

export const getPostComments = async (permalink) => {
  const response = await fetch(`${API_ROOT}${permalink}.json`);
  const json = await response.json();

  return json[1].data.children.map((subreddit) => subreddit.data);
};


/*{"kind": "Listing", 
"data": {"after": "t3_1437xqt", "dist": 27, "modhash": "", "geo_filter": null, 
"children": [{"kind": "t3", "data": {"approved_at_utc": null, "subreddit": "Fitness", "selftext": 
"# Welcome to r/Fitness - Reddit's #1 Health and Fitness community!\n\nr/Fitness is a **self-help** community. */

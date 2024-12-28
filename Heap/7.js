/**
 * 355. Design Twitter

Design a simplified version of Twitter where users can post tweets, follow/unfollow another user, 
and is able to see the 10 most recent tweets in the user's news feed.

Implement the Twitter class:

Twitter() Initializes your twitter object.

void postTweet(int userId, int tweetId) Composes a new tweet with ID tweetId by the user userId. 
Each call to this function will be made with a unique tweetId.

List<Integer> getNewsFeed(int userId) Retrieves the 10 most recent tweet IDs in the user's news feed. 
Each item in the news feed must be posted by users who the user followed or by the user themself. 
Tweets must be ordered from most recent to least recent.

void follow(int followerId, int followeeId) The user with ID 
followerId started following the user with ID followeeId.

void unfollow(int followerId, int followeeId) The user with ID followerId 
started unfollowing the user with ID followeeId.

 */


class Twitter {
    constructor() {
        this.newsFeeds = []; // Array to store all tweets
        this.users = new Map(); // Map to store user followers
    }

    /** 
     * @param {number} userId 
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        this.createUser(userId); // Ensure the user exists
        this.newsFeeds.push({ userId, tweetId }); // Add the tweet to newsFeeds
    }

    /** 
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        this.createUser(userId); // Ensure the user exists
        const set = this.users.get(userId); // Get the user's follow set
        const ans = [];

        // Traverse tweets in reverse to get the most recent ones
        for (let i = this.newsFeeds.length - 1; i >= 0 && ans.length < 10; i--) {
            if (set.has(this.newsFeeds[i].userId)) {
                ans.push(this.newsFeeds[i].tweetId);
            }
        }
        return ans;
    }

    /** 
     * @param {number} userId
     * @return {void}
     */
    createUser(userId) {
        if (!this.users.has(userId)) {
            this.users.set(userId, new Set([userId])); // Each user follows themselves by default
        }
    }

    /** 
     * @param {number} followerId 
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        this.createUser(followerId); // Ensure the follower exists
        this.createUser(followeeId); // Ensure the followee exists
        const set = this.users.get(followerId);
        set.add(followeeId); // Add the followee to the follower's set
    }

    /** 
     * @param {number} followerId 
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        if (this.users.has(followerId) && followerId !== followeeId) {
            const set = this.users.get(followerId);
            set.delete(followeeId); // Remove the followee from the follower's set
        }
    }
}

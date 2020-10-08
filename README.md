## FathomLinkTracking for Squarespace Websites

I use fathom (https://usefathom.com/) to track visits for all my websites and recently needed to solve a problem. 

I wanted an easy way to track outbound referrals (clicks) to the companies that contribute to content on my website.

The issue was, the site is run on Squarespace and already has 100+ pages. Going through all those to add "onClick" properties was not only counterproductive, but also not possible give the structure of Squarespace. 

So, instead, I used a .js code injection into the FOOTER of all pages which looks at the entire document for any elements that have an href attribute containing the links to my partner sites and assigns them an Event Listener to track the click on Fathom. 

#### Here's an example of how I added an event listener for clicks to all elements that send the clicker to a url 
```
document.querySelectorAll("[href*=prevail]").forEach(item => {
	item.addEventListener('click', () => fathom.trackGoal('RRWE7BFH', 0));
});
```
You can see that I'm only looking for an href that contains 'prevail' because I want it to match all links to that site (i.e. prevail.com, www.prevail.com, www.prevail.com/blog, etc), from there, it's easy to add the event listener which calls a function stated in the head of my document (i.e. my tracking link). 

### Don't forget!

1. If you put querySelectorAll in the HEAD along with your tracking code, that script will run before your page has rendered and your query will return an empty array. 

2. If the user is using an ad blocker (i.e. js blocker) this will not work. Such is life. 

This line of code now tracks all clicks to that domain on every page of my website providing helpful data to the companies I represent. 

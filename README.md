FathomLinkTracking

I use fathom to track visits for all my websites and recently needed to solve a problem. 

I wanted an easy way to track outbound referrals to the companies that one of my digital assets represents. 

The issue was, the site is run on Squarespace and already has 100+ pages. Going through all those to add "onClick" properties was not only counterproductive, but also not possible give the structure of Squarespace. 

So, instead, I used a .js code injection into the FOOTER of all pages which looks at the entire document for any elements that have an href attribute containing the links to my partner sites and assigns them an Event Listener to track the click on Fathom. 

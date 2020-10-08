FathomLinkTracking

I use fathom to track visits for all my websites and recently needed to solve a problem. 

I wanted an easy way to track outbound referrals to the companies that one of my digital assets represents. 

The issue was, the site is run on Squarespace and already has 100+ pages. Going through all those to add "onClick" properties was not only counterproductive, but also not possible give the structure of Squarespace. 

So, instead, I used a .js code injection into the FOOTER of all pages which looks at the entire document for any elements that have an href attribute containing the links to my partner sites and assigns them an Event Listener to track the click on Fathom. 

<script>
// Prevail Tracking
document.querySelectorAll("[href*=prevail]").forEach(item => {
	item.addEventListener('click', () => fathom.trackGoal('RRWE7BFH', 0));
});

// Qualis Tracking
document.querySelectorAll("[href*=qualis]").forEach(item => {
	item.addEventListener('click', () => fathom.trackGoal('ZKIMOOG1', 0));
});

// PDC Tracking
document.querySelectorAll("[href*='pdcrx']").forEach(item => {
	item.addEventListener('click', () => fathom.trackGoal('INZHVC6X', 0));
});

// TwinMed Tracking
document.querySelectorAll("[href*='twinmed']").forEach(item => {
	item.addEventListener('click', () => fathom.trackGoal('IIA3MROJ', 0));
});

</script>

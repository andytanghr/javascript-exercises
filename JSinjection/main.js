function createHTMLHead(title) {
  // add boilerplate head, meta charset, etc.
  var lang = 'en';
  
  var titleTag = document.head.createElement('title');
  titleTag.textContent = 'okgo';

  // add <title>
}

function createHeader(websiteTitle, home, otherNavs){
// add 

}

function createCurrentArticle(title, body) {

}

function createOlderArticle(title, body) {

}

function createReactions(comments, likes) {

}


var websiteTitle = 'HighOnCoding';
var home = 'Home';
var otherNavs = 'Categories'; // could expand nav links with an array

var currentArticleTitle = 'Curse of the Current Reviews';
var currentArticleBody = 'When you want to buy any application from the Apple iTunes store you have more choices than you can handle. Most of the users scroll past the application description completely avoiding it like ads displayed on the right of the column of your webpage. Their choice is dependent on three important factors price, screenshot and reviews.';

var olderArticleTitle0 = 'Hello WatchKit';
var olderArticleBody0 = 'Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release. The WatchKit framework enable the developers to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch.';
var olderArticleComments0 = 12;
var olderArticleLikes0 = 124;

var olderArticleTitle1 = 'Introduction to Swift'
var olderArticleBody1 = 'Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX applications. Swift is a fairly new language and still in development but it clearly reflects the intentions and the future direction. This article will revolve around the basic concepts in the Swift language and how you can get started.';
var olderArticleComments1 = 15;
var olderArticleLikes1 = 45;

createHTMLHead(websiteTitle);
createHeader(websiteTitle, home, otherNavs);
createCurrentArticle(currentArticleTitle, currentArticleBody);
createOlderArticle(olderArticleTitle0, olderArticleBody0);
createOlderArticle(olderArticleTitle1, olderArticleBody1);
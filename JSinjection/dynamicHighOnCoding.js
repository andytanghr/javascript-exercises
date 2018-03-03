(function () {
  var html = document.getElementsByTagName('html')[0]; //0
  var head = document.getElementsByTagName('head')[0]; //0
  var body = document.getElementsByTagName('body')[0]; //0
  var container = document.getElementById('container');
  container.setAttribute('style', 'font-family: sans-serif');

function createHtmlAndTitleTags() {
  // var docType = document.createElement('!DOCTYPE');
  // html.appendChild(docType);

  html.setAttribute("lang", "en");

  var meta = document.createElement('meta');
  meta.setAttribute('charset', 'UTF-8');
  head.appendChild(meta);

  meta = document.createElement('meta');
  meta.setAttribute('name', 'viewport');
  meta.setAttribute('content', 'width=device-width, initial-scale=1.0');
  head.appendChild(meta);

  meta = document.createElement('meta');
  meta.setAttribute('http-equiv', 'X-UA-Compatible');
  meta.setAttribute('content', 'ie=edge');
  head.appendChild(meta);

  var titleTag = document.createElement('title'); //1
  titleTag.textContent = 'HighOnCoding';  //2
  head.appendChild(titleTag); //3
}

  function createHeader() {
    var header = document.createElement('header');
    header.setAttribute('style', 'background: rgb(101, 167, 243); color: white; padding: 36px 36px 28px 26px;');
    container.appendChild(header);
    
    var h1Website = document.createElement('h1');
    h1Website.setAttribute('style', 'display: inline; margin-right: 64px; font-size: 2.2em;');
    h1Website.textContent = 'HighOnCoding';
    header.appendChild(h1Website);

    var h2Home = document.createElement('h2');
    h2Home.setAttribute('style', 'display: inline; margin-right: 48px;');
    var strong = document.createElement('strong');
    strong.textContent = 'Home';
    h2Home.appendChild(strong);
    header.appendChild(h2Home);

    var h2Categories = document.createElement('h2');
    h2Categories.setAttribute('style', 'display: inline; font-weight: 200;');
    h2Categories.textContent = 'Categories';
    header.appendChild(h2Categories);

    var br = document.createElement('br');
    container.appendChild(br);
  }

  function createCurrentArticle(title, body, hash) {
    var article = document.createElement('article');
    article.setAttribute('class', hash);
    article.setAttribute('style', 'background: rgb(221, 222, 224); margin: 6px 29px 0 29px; padding: 4px 16px;');
    container.appendChild(article);

    var h1 = document.createElement('h1');
    h1.setAttribute('style', 'color: rgb(84, 88, 94); font-size: 1.88em;');
    h1.textContent = title;
    article.appendChild(h1);
    
    var p = document.createElement('p');
    p.setAttribute('style', 'font-size: 0.86em; line-height: 1.2em; padding-top: 12px;');
    p.textContent = body;
    article.appendChild(p);
  }

  function createOlderArticle(title, body, hash, comments, likes) {
    var article = document.createElement('article');
    article.setAttribute('class', hash);
    article.setAttribute('style', 'margin-left: 34px; margin-right: 37px;');
    container.appendChild(article);

    var h2 = document.createElement('h2');
    h2.setAttribute('style', 'color: rgb(38, 102, 186); font-weight: 500;');
    h2.textContent = title;
    article.appendChild(h2);
    
    var p = document.createElement('p');
    p.setAttribute('style', 'font-size: 0.86em; line-height: 1.2em;');
    p.textContent = body;
    article.appendChild(p);

    var div = document.createElement('div');
    div.setAttribute('class', hash);
    div.setAttribute('style', 'background: rgb(230, 148, 59); color: white; padding: 6px; font-weight: 500;');
    article.appendChild(div);

    var pComments = document.createElement('p');
    pComments.setAttribute('style', 'display: inline; margin-right: 27px;');
    pComments.textContent = comments + ' comments';
    div.appendChild(pComments);

    var pLikes = document.createElement('p');
    pLikes.setAttribute('style', 'display: inline;');
    pLikes.textContent = likes + ' likes';
    div.appendChild(pLikes);

    var br = document.createElement('br');
    container.appendChild(br);
  }

createHtmlAndTitleTags();
createHeader();
createCurrentArticle('Curse of the Current Reviews', 'When you want to buy any application from the Apple iTunes store you have more choices than you can handle. Most of the users scroll past the application description completely avoiding it like ads displayed on the right of the column of your webpage. Their choice is dependent on three important factors price, screenshot and reviews.', 'd4595b');
createOlderArticle('Hello WatchKit', 'Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release. The WatchKit framework enable the developers to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch.', '0c11b6', 12, 124);
createOlderArticle('Introduction to Swift', 'Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX applications. Swift is a fairly new language and still in development but it clearly reflects the intentions and the future direction. This article will revolve around the basic concepts in the Swift language and how you can get started.', '01b0ce', 15, 45);

//create main html element node, like html, head, body
//create element node
//create text node, using textcontent
//append text node to parent element node
//append element to higher parent node like in a div

})();


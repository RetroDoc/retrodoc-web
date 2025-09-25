var articlePages = JSON.parse("pages-list.json");

for (let i = 0; i < articlePages.articles.length; i++) {
    document.write('<a href="' + articlePages.articles[i].actual + '">' + articlePages.articles[i].title + '</a>');
}
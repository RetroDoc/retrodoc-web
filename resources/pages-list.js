async function getPageData() {
    const response = await fetch("https://raw.githubusercontent.com/RetroDoc/retrodoc-web/refs/heads/main/resources/pages-list.json")

    const rawData = await response.json();
    return JSON.parse(rawData);
}

const data = getPageData();

for (var ctv = 0; ctv < data.length; ctv++) {

    const pageCategorizer = document.createElement("h4");
    pageCategorizer.innerHTML = data[ctv];
    document.getElementById("pages-list").appendChild(pageCategorizer);
}

// for (var ctv = 0; ctv < data.length; ctv++) {

//     const pageCategorizer = document.createElement("h4");
//     pageCategorizer.innerHTML = data[ctv];
//     document.getElementById("pages-list").appendChild(pageCategorizer);

//     for (var pgv = 0; pgv < data[ctv].length; pgv++) {
//         const pageLister = document.createElement("li");
//         pageLister.innerHTML = '<a href="' + data[ctv].pages[pgv].src + '>' + data[ctv].pages[pgv].title + '</a>';
//         document.getElementById("pages-list").appendChild(page_lister);
//     }
// }

// for (var i = 0; i < data.length; i++) {
//     const pageLister = document.createElement("li");
//     pageLister.innerHTML = '<a href="' + data[i].pages[i].src + '>' + data.pages[i].title + '</a>'
//     document.getElementById("pages-list").appendChild(page_lister);
// }

// const xhr = new XMLHttpRequest();
//     // const url = "https://api.github.com/repositories/1039382278/contents/pages"
//     // Replace -username- with your GitHub username, -repo- with the repository name, and then :path with a path to the file or folder you want to get the content of (leave blank to ge all files of the repository)

//     xhr.open('GET', "https://api.github.com/repositories/1039382278/contents/pages/", true);

//     xhr.onload = function() {
//         const data = JSON.parse(this.response);
//         console.log(data);

//         for (var i = 0; i < data.length; i++) {
//             const page_lister = document.createElement("li");
//             page_lister.innerHTML = '<a href="' + data[i].name + '.html">' + data[i].name + '</a>';
//             document.getElementById("pages-list").appendChild(page_lister);
//         }
//     };
    
//     xhr.send();
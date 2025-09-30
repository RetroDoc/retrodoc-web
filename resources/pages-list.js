const xhr = new XMLHttpRequest();
    const url = "https://api.github.com/repositories/1039382278/contents/pages"
    // Replace -username- with your GitHub username, -repo- with the repository name, and then :path with a path to the file or folder you want to get the content of (leave blank to ge all files of the repository)

    xhr.open('GET', url, true);

    xhr.onload = function() {
        const data = JSON.parse(this.response);
        console.log(data);

        for (let i = 0; i < data.length; i++) {
            const page_lister = document.createElement("li");
            page_lister.innerHTML = '<a href="' + data[i].name + '.html">' + data[i].name + '</a>';
            document.getElementById("pages-list").appendChild(page_lister);
        }
    };
    
    xhr.send();
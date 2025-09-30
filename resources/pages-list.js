const xhr = new XMLHttpRequest();
    const url = "https://api.github.com/repositories/1039382278/contents/pages"
    // Replace -username- with your GitHub username, -repo- with the repository name, and then :path with a path to the file or folder you want to get the content of (leave blank to ge all files of the repository)

    xhr.open('GET', url, true);

    xhr.onload = function() {
        const data = JSON.parse(this.response);
        console.log(data);

        for (let i = 0; i < data.length; i++) {
            document.write('<li><a href="' + data[i].name + '.html">' + data[i].name + '</a></li>')
        }
    };
    
    xhr.send();

// var webpageList = [
//     "Quest to Build my First Windows 98 PC",
//     "What is ISA?",
//     "What is DMA?"
// ]

// var fileList = [
//     "quest_to_build_my_first_windows_98_pc",
//     "what_is_isa",
//     "what_is_dma"
// ]

// if (webpageList.length != fileList.length) {
//     console.error("Invalid page list length!");
// }
// else {
//     for (let i = 0; i < webpageList.length; i++) {
//         document.write('<li><a href="' + fileList[i] + '.html">' + webpageList[i] + '</a></li>')
//     } 
// }
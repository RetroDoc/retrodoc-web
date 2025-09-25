var webpageList = [
    "Quest to Build my First Windows 98 PC",
    "What is ISA?",
    "What is DMA?"
]

var fileList = [
    "quest_to_build_my_first_windows_98_pc",
    "what_is_isa",
    "what_is_dma"
]

if (webpageList.length != fileList.length) {
    console.error("Invalid page list length!");
}
else {
    for (let i = 0; i < webpageList.length; i++) {
        document.write('<li><a href="' + fileList[i] + '.html">' + webpageList[i] + '</a></li>')
    } 
}
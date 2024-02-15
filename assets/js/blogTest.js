// RENDER LOOPING FOREACH
function renderBlog() {
    document.getElementById("contents").innerHTML = "";
    
    console.table(dataBlogs);

    dataBlogs.forEach((contents,index) => {
        let nodesvg,
        nextsvg,
        reactsvg,
        typesvg = "";

        
    
        if (contents.node == true) {
            nodesvg = "<img src='./assets/image/node.svg'/>";
        }
    
        if (contents.next == true) {
            nextsvg = "<img src='./assets/image/next.svg'/>";
        }

        if (contents.react == true) {
            reactsvg = "<img src='./assets/image/react.svg'/>";
        }
        
        if (contents.type == true) {
            typesvg = "<img src='./assets/image/type.svg'/>";
        }

        document.getElementById("contents").innerHTML += `
    <div style="width: 20%; font-size: medium; margin: 0 auto; box-shadow: 0 4px 10px 0; padding: 10px; border-radius: 2%; margin-bottom: 30px;">
            <div >
                <img style="height: 175px;" src="./assets/image/wiaugdbsk.PNG" alt="">
            </div>
            <div>
                <h4>${dataBlogs[index].title}</h4>
                <h5>Durasi: ${dataBlogs[index].startDate} - ${dataBlogs[index].endDate}</h5>
            </div>
            <div>
                <p>${dataBlogs[index].description}</p>
            </div>

            
            <div> 
                    <!-- react -->
                    ${reactsvg ?? ""}
                    <!-- node -->
                    ${nodesvg ?? ""}
                    <!-- next -->
                    ${nextsvg ?? ""}
                    <!-- ts -->
                    ${typesvg ?? ""}
            </div>

            <div>
                <div style="margin-top: 15px;">
                    <a href="" style="background-color: rgb(23, 23, 48); color: white; border-radius: 10px; padding: 5px 20px 5px 20px; text-decoration: none;">Edit post</a>
                    <a href="" style="background-color: rgb(23, 23, 48); color: white; border-radius: 10px; padding: 5px 20px 5px 20px; text-decoration: none;">Delete post</a>
                </div>
            </div>
        </div>
    `;
});
}
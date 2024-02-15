let dataBlogs =[]

// FUNGSI MENAMPLKAN DATA MY PROJECT
function addBlog(event){
    event.preventDefault();

    let title = document.getElementById("inputName").value
    let startDate = document.getElementById("inputDate").value
    let endDate = document.getElementById("inputEdate").value 
    let description = document.getElementById("inputDescription").value 
    let inputNodejs = document.getElementById("nodeJs").checked
    let inputNextjs = document.getElementById("nextJs").checked
    let inputReactjs = document.getElementById("reactJs").checked
    let inputTypescript = document.getElementById("typeScript").checked

    let dataBlog = {
        title,
        startDate,
        endDate,
        description,
        inputNodejs,
        inputNextjs,
        inputReactjs,
        inputTypescript
    };
    
    dataBlogs.push(dataBlog);
    console.log(dataBlogs);

    
    
    renderBlog();
    
}

// RENDER LOOPING
// function renderBlog() {
//     document.getElementById("contents").innerHTML = "";
    
    

//     for (let index = 0; index < dataBlogs.length; index++) {
//         document.getElementById("contents").innerHTML += `
//     <div style="width: 20%; font-size: medium; margin: 0 auto; box-shadow: 0 4px 10px 0; padding: 10px; border-radius: 2%; margin-bottom: 30px;">
//             <div >
//                 <img style="height: 175px;" src="./assets/image/wiaugdbsk.PNG" alt="">
//             </div>
//             <div>
//                 <h4>${dataBlogs[index].title}</h4>
//                 <h5>Durasi: ${dataBlogs[index].startDate} - ${dataBlogs[index].endDate}</h5>
//             </div>
//             <div>
//                 <p>${dataBlogs[index].description}</p>
//             </div>

            
//             <div class="row icon-list"> 
//                     <!-- react -->
//                     ${dataBlogs[index].inputReactjs}
//                     <!-- node -->
//                     ${dataBlogs[index].inputNodejs}
//                     <!-- next -->
//                     ${dataBlogs[index].inputNextjs}
//                     <!-- ts -->
//                     ${dataBlogs[index].inputTypescript}
//             </div>

            

//             <div>
//                 <div style="margin-top: 15px;">
//                     <a href="" style="background-color: rgb(23, 23, 48); color: white; border-radius: 10px; padding: 5px 20px 5px 20px; text-decoration: none;">Edit post</a>
//                     <a href="" style="background-color: rgb(23, 23, 48); color: white; border-radius: 10px; padding: 5px 20px 5px 20px; text-decoration: none;">Delete post</a>
//                 </div>
//             </div>
//         </div>
//     `;
//     }
// }


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
                    ${reactsvg}
                    <!-- node -->
                    ${nodesvg}
                    <!-- next -->
                    ${nextsvg}
                    <!-- ts -->
                    ${typesvg}
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

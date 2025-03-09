//your code here

let arr = ["div1","div2","div3","div4","div5","div6"];

let divs = document.querySelectorAll(".image");

let k=0;
for(let imgSection of divs){
    imgSection.id = arr[k++];

    // dragstart, dragend

    imgSection.addEventListener("dragstart",(e)=>{
        let div = e.target;
        div.style.opacity = "0.5";
        e.dataTransfer.setData("text",div.id);
    })

    imgSection.addEventListener("dragend",(e)=>{
        let div = e.target;
        div.style.opacity = "1";
    })
}

 // dragover, dragenter, drop

 let eventsArr = ["dragover","dragenter","drop"];

 for(let dragEvents of eventsArr){
     for(let imgSection of divs){
         imgSection.addEventListener(dragEvents,(e)=>{
            e.preventDefault();

            if(dragEvents=="drop"){
                let draggedImageId = e.dataTransfer.getData("text");
                let draggedImageIdElement = document.getElementById(draggedImageId);
                let text1 = draggedImageIdElement.innerText;

                let currImageId = imgSection.id;
                let text2 = imgSection.innerText;

                // replacing id to swap backgroud-img
                imgSection.id = draggedImageId;
                draggedImageIdElement.id = currImageId

                // replacing text
                draggedImageIdElement.innerText = text2;
                imgSection.innerText = text1;
            }
         })
     }
 }



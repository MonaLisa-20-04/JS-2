// let parent = document.querySelector(".parent");
// function createToaster(config){
//     return function(str){
//         let div = document.createElement("div");
//         div.textContent = str;
//         div.className = `inline-block ${config.theme === "dark" ? "bg-grey-800 text-white" : "bg-grey-200 text-black"} px-6 py-3 rounded shadow-lg pointer-events-none`;

//         parent.appendChild(div);

//         if(config.positionX !== "left" || config.positionY !== "top"){
//             parent.className += `${config.positionX === "right" ? "right-5" : "left-5"} ${config.positionY === "bottom" ? "bottom-5" : "top-5"}`
//         }

//         setTimeout(() => {
//             parent.removeChild(div);
//         },config.duration * 1000);
//     }
// }
// let toaster = createToaster({
//     positionX : "right",
//     positionY : "bottom",
//     theme : "light",
//     duration : 3
// });
// toaster("Welcome");
// setTimeout(() => {
//     toaster("Chat is open for requests.");
// },2000);
// setTimeout(() => {
//     toaster("Download done!");
// },1000);

let parent = document.querySelector(".parent");

function createToaster(config) {
    // Position the parent container
    parent.classList.remove(
        "left-5", "right-5", "top-5", "bottom-5",
        "items-start", "items-end"
    );

    parent.classList.add(
        config.positionX === "right" ? "right-5" : "left-5",
        config.positionY === "bottom" ? "bottom-5" : "top-5",
        config.positionX === "right" ? "items-end" : "items-start"
    );

    return function (str) {
        let div = document.createElement("div");

        div.textContent = str;

        div.className = `inline-block ${
            config.theme === "dark"
                ? "bg-gray-800 text-white"
                : "bg-gray-200 text-black"
        } px-6 py-3 rounded shadow-lg pointer-events-none`;

        parent.appendChild(div);

        setTimeout(() => {
            parent.removeChild(div);
        }, config.duration * 1000);
    };
}

let toaster = createToaster({
    positionX: "right",
    positionY: "bottom",
    theme: "light",
    duration: 3
});

toaster("Welcome");

setTimeout(() => {
    toaster("Chat is open for requests.");
}, 2000);

setTimeout(() => {
    toaster("Download done!");
}, 1000);
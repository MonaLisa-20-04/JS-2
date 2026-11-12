function getUsers(){
    fetch("https://randomuser.me/api/?results=4")
    .then(raw => raw.json())
    .then((data) =>{
    document.querySelector(".users").innerHTML = "";
    data.results.forEach(function(user){       
    // Main container
    const card = document.createElement("div");
    card.className = "flex items-center gap-4 w-full max-w-[288px] bg-[#1e293b]/70 rounded-md px-5 py-4";

    // Profile image
    const img = document.createElement("img");
    img.src = user.picture.large;
    img.alt = "Khalid Hosseini";
    img.className = "w-12 h-12 rounded-full object-cover shrink-0";

    // Content container
    const content = document.createElement("div");
    content.className = "min-w-0";

    // Heading
    const heading = document.createElement("h2");
    heading.className = "text-white text-sm font-semibold truncate";
    heading.textContent = user.name.first + " " + user.name.last;

    // Email
    const email = document.createElement("p");
    email.className = "text-slate-400 text-xs mt-0.5 truncate";
    email.textContent = user.email;

    // Status
    const status = document.createElement("span");
    status.className = "inline-block mt-2 px-2 py-0.5 text-[10px] font-medium text-blue-100 bg-blue-800/60 rounded-full";
    status.textContent = "Active";

    // Append elements to content
    content.appendChild(heading);
    content.appendChild(email);
    content.appendChild(status);

    // Append image and content to card
    card.appendChild(img);
    card.appendChild(content);

    // Add card to the document
    document.querySelector(".users").appendChild(card);

    });
});
}

getUsers();

document.querySelector(".refreshbtn").addEventListener("click",function(){
    getUsers();
})
let form = document.querySelector("form");
let userName = document.querySelector("#name");
let role = document.querySelector("#role");
let bio = document.querySelector("#bio");
let photo = document.querySelector("#photo");

const userManagers = {
    users: [],
    init: function(){
        form.addEventListener("submit", this.submitForm.bind(this));
    },
    submitForm: function(e){
        e.preventDefault();
        this.addUser();
    },
    addUser: function(){
        this.users.push({
            userName : userName.value,
            role: role.value,
            bio: bio.value,
            photo: photo.value,
        })
        form.reset();
        this.renderUI();
    },
    renderUI: function(){
        document.querySelector(".users").innerHTML = "";
        this.users.forEach((user)=>{
            // Create the article element
            const article = document.createElement("article");
            article.className =
            "w-80 bg-[#262626] border border-neutral-700 rounded-xl px-6 py-7 text-center shadow-md transition-transform hover:scale-105";

            // Create the image
            const img = document.createElement("img");
            img.src = user.photo;
            img.alt = user.userName;
            img.className =
            "w-[104px] h-[104px] rounded-full object-cover mx-auto mb-4 border-4 border-neutral-600";

            // Create the heading
            const h2 = document.createElement("h2");
            h2.className = "text-2xl font-bold text-neutral-200";
            h2.textContent = user.userName;

            // Create the job title
            const job = document.createElement("p");
            job.className = "text-sm font-medium text-neutral-200 mt-1";
            job.textContent = user.role;

            // Create the description
            const description = document.createElement("p");
            description.className = "text-sm text-neutral-300 mt-3 leading-snug";
            description.textContent = user.bio;

            // Append all elements to the article
            article.append(img, h2, job, description);

            // Append the article to the document
            document.querySelector(".users").appendChild(article);
        })
    },
    removeUser: function(){},
}
userManagers.init();
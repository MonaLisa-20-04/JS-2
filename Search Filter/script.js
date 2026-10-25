const users = [
    {
        name: "Ammy Williams",
        pic: "https://images.unsplash.com/photo-1613256289379-9f895ff589c2?w=600&auto=format&fit=crop&q=60",
        bio: "Creative thinker who loves exploring new ideas and experiences."
    },

    {
        name: "Emma Johnson",
        pic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60",
        bio: "Passionate about photography, travel, and meeting new people."
    },

    {
        name: "Sophia Brown",
        pic: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=60",
        bio: "Designer with a love for art, colors, and creativity."
    },

    {
        name: "Olivia Davis",
        pic: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop&q=60",
        bio: "Explorer, coffee lover, and always curious about the world."
    },

    {
        name: "Liam Smith",
        pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60",
        bio: "Technology enthusiast who enjoys building cool projects."
    },

    {
        name: "Noah Wilson",
        pic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=60",
        bio: "Music lover and someone who enjoys learning new things."
    },

    {
        name: "Ethan Miller",
        pic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=60",
        bio: "Focused on growth, creativity, and meaningful experiences."
    },

    {
        name: "James Anderson",
        pic: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=600&auto=format&fit=crop&q=60",
        bio: "Adventure seeker with a passion for photography."
    },

    {
        name: "Mia Taylor",
        pic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=60",
        bio: "Loves books, nature, and discovering beautiful places."
    },

    {
        name: "Ava Thomas",
        pic: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=600&auto=format&fit=crop&q=60",
        bio: "Creative soul who enjoys art and expressing new ideas."
    },

    {
        name: "Isabella Moore",
        pic: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&auto=format&fit=crop&q=60",
        bio: "Fashion enthusiast and lover of simple, beautiful things."
    },

    {
        name: "Lucas Martin",
        pic: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&auto=format&fit=crop&q=60",
        bio: "Entrepreneurial mindset with a passion for innovation."
    },

    {
        name: "Benjamin Lee",
        pic: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&auto=format&fit=crop&q=60",
        bio: "Always learning, creating, and looking for new challenges."
    },

    {
        name: "Charlotte White",
        pic: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&auto=format&fit=crop&q=60",
        bio: "Dreamer, traveler, and believer in living life fully."
    },

    {
        name: "Henry Harris",
        pic: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=600&auto=format&fit=crop&q=60",
        bio: "Curious mind with an interest in technology and design."
    }
];

function showUsers(arr){
    arr.forEach(function(user){
        //outer div
        const card = document.createElement("div");
        card.classList.add("card");

        //img 
        const img = document.createElement("img");
        img.src = user.pic;
        img.classList.add("bg-img");

        //inner blurred layer
        const blurredLayer = document.createElement("div");
        blurredLayer.style.backgroundImage = `url(${user.pic})`;
        blurredLayer.classList.add("blurred-layer");

        //inner content
        const content = document.createElement("div");
        content.classList.add("content");
        const heading = document.createElement("h3")
        heading.textContent = user.name;
        const para = document.createElement("p");
        para.textContent = user.bio;

        //Append heading and para in content
        content.appendChild(heading);
        content.appendChild(para);

        //Append all to card
        card.appendChild(img);
        card.appendChild(blurredLayer);
        card.appendChild(content);

        //append card to any container or body
        document.querySelector(".cards").appendChild(card);
    });
}

showUsers(users);

let inp = document.querySelector("input");
inp.addEventListener("input", function(){
    let newUsers = users.filter((user)=> {
        return user.name.toLowerCase().includes(inp.value.toLowerCase());
    });

    document.querySelector(".cards").innerHTML = "";
    showUsers(newUsers);
});


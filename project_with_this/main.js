const form = document.querySelector("#form")
const userName = document.querySelector("#name")
const role = document.querySelector("#role")
const bio = document.querySelector("#bio")
const photo = document.querySelector("#photo")
const cardsContainer = document.querySelector("#cards-container")

const userManager = {
    users: [],
    init: function () {
        form.addEventListener("submit", this.submitForm.bind(this))
        cardsContainer.addEventListener("click", this.removeItem.bind(this))
    },

    submitForm: function (evt) {
        evt.preventDefault()
        if (this.checkInputs()) {
            return
        }
        this.addUser()
        this.updateHtml(this.users)
    },

    checkInputs: function () {
        if (userName.value.trim() === "" || role.value.trim() === "" || bio.value.trim() === "" || photo.value.trim() === "") {
            return true
        }
    },

    addUser: function () {
        this.users.push({
            id: crypto.randomUUID(),
            name: userName.value,
            role: role.value,
            bio: bio.value,
            photo: photo.value
        })
        form.reset()
    },

    updateHtml: function (userArr) {
        cardsContainer.innerHTML = ""
        userArr.forEach(item => {
            // 1. Main Card Container Element
            const card = document.createElement("div");
            card.className = "relative bg-[#1a1a1a] border border-[#262626] rounded-2xl p-6 flex flex-col items-center text-center shadow-lg transition-transform duration-200 hover:scale-[1.02]";
            card.setAttribute("data-id", `${item.id}`)

            // 2. Close Button (Top Right Position)
            const closeBtn = document.createElement("button");
            closeBtn.innerText = "×";
            closeBtn.className = "absolute top-3 right-4 text-gray-500 hover:text-red-500 text-2xl font-semibold bg-transparent border-0 cursor-pointer transition-colors";
            closeBtn.id = "delete-user"
            card.appendChild(closeBtn);

            // 3. Image Container Div
            const imgContainer = document.createElement("div");
            imgContainer.className = "w-24 h-24 rounded-full p-[3px] border-4 border-[#3a3a3a] overflow-hidden mb-4";

            // 4. Actual Image Element
            const img = document.createElement("img");
            img.src = item.photo
            img.alt = item.name;
            img.className = "w-full h-full object-cover rounded-full";
            imgContainer.appendChild(img);
            card.appendChild(imgContainer);

            // 5. Name Heading (H3)
            const nameHeading = document.createElement("h3");
            nameHeading.className = "text-xl font-bold tracking-wide text-gray-100";
            nameHeading.innerText = item.name;
            card.appendChild(nameHeading);

            // 6. Role Paragraph
            const rolePara = document.createElement("p");
            rolePara.className = "text-xs font-semibold uppercase tracking-wider text-gray-400 mt-1 mb-3";
            rolePara.innerText = item.role;
            card.appendChild(rolePara);

            // 7. Bio Paragraph
            const bioPara = document.createElement("p");
            bioPara.className = "text-sm text-gray-400 leading-relaxed px-2";
            bioPara.innerText = item.bio;
            card.appendChild(bioPara);

            cardsContainer.appendChild(card)
        })
    },

    removeItem: function (evt) {
        if (evt.target.id === "delete-user") {
            const targetId = evt.target.parentElement.dataset.id
            this.users = this.users.filter(item => item.id !== targetId)
            this.updateHtml(this.users)
        }
    }
}

userManager.init()
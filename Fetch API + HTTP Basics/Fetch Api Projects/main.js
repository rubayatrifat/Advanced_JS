const cardsContainer = document.querySelector(".cards-container")
const refreshBtn = document.querySelector("#refresh-button")

function getUsers() {
    fetch("https://randomuser.me/api/?results=4")
        .then(rawData => rawData.json())
        .then(data => {
            cardsContainer.innerHTML = ""
            data.results.forEach(singleUser => {
                console.log(singleUser)
                // 1. Root Card Frame
                const cardFrame = document.createElement('div');
                cardFrame.classList.add(
                    'bg-slate-900', 'border', 'border-slate-800', 'rounded-2xl', 'p-5',
                    'shadow-xl', 'hover:border-violet-500/50', 'transition-all', 'duration-300',
                    'flex', 'flex-col', 'items-center', 'group', 'relative', 'overflow-hidden'
                );

                // 2. Gender Gradient Top Ribbon Accent
                const topRibbon = document.createElement('div');
                topRibbon.classList.add('absolute', 'top-0', 'left-0', 'right-0', 'h-1', 'bg-gradient-to-r', 'from-violet-500', 'to-fuchsia-500');

                // 3. User Avatar Wrapper Box
                const avatarWrapper = document.createElement('div');
                avatarWrapper.classList.add('relative', 'mt-2');
                cardFrame.appendChild(topRibbon);

                // 4. Actual Avatar Image Element
                const avatarImage = document.createElement('img');
                avatarImage.classList.add('w-20', 'h-20', 'rounded-full', 'border-2', 'border-slate-700', 'group-hover:border-violet-400', 'p-0.5', 'object-cover', 'transition-colors');
                avatarImage.src = singleUser.picture.large;
                avatarImage.alt = "User Thumbnail";
                avatarWrapper.appendChild(avatarImage);

                // 5. Active Status Indicator Dot
                const statusDot = document.createElement('span');
                statusDot.classList.add('absolute', 'bottom-0', 'right-1', 'w-3.5', 'h-3.5', 'bg-emerald-500', 'border-2', 'border-slate-900', 'rounded-full');
                avatarWrapper.appendChild(statusDot)

                cardFrame.appendChild(avatarWrapper)

                // 6. User Name Title
                const userTitle = document.createElement('h3');
                userTitle.classList.add('mt-4', 'text-base', 'font-bold', 'text-slate-100', 'tracking-wide', 'group-hover:text-violet-400', 'transition-colors', 'text-center', 'line-clamp-1');
                userTitle.textContent = `${singleUser.name.title} ${singleUser.name.first} ${singleUser.name.last}`;
                cardFrame.appendChild(userTitle)

                // 7. User Age Badge Pill (UPDATED: Dynamic Age mapping)
                const agePill = document.createElement('span');
                agePill.classList.add('text-[11px]', 'text-slate-400', 'font-medium', 'bg-slate-950', 'px-2', 'py-0.5', 'rounded-full', 'mt-1', 'border', 'border-slate-800');
                agePill.textContent = `Age: ${singleUser.dob.age}`;
                cardFrame.appendChild(agePill); // APPEND TO CARD

                // 8. Contact Details Wrapper Block
                const contactBlock = document.createElement('div');
                contactBlock.classList.add('w-full', 'mt-4', 'space-y-2', 'text-xs', 'text-slate-400', 'border-t', 'border-slate-800/60', 'pt-4', 'flex-grow');

                // 9. Location Entry Div Row (UPDATED: Dynamic Country mapping)
                const locRow = document.createElement('div');
                locRow.classList.add('flex', 'items-center', 'gap-2');
                const locIcon = document.createElement('span');
                locIcon.classList.add('text-violet-400', 'font-semibold', 'w-4');
                locIcon.textContent = "📍";
                const locText = document.createElement('span');
                locText.classList.add('line-clamp-1', 'text-slate-300');
                locText.textContent = `${singleUser.location.city}, ${singleUser.location.state}, ${singleUser.location.country}`;

                locRow.appendChild(locIcon);
                locRow.appendChild(locText);
                contactBlock.appendChild(locRow);

                // 10. Email Entry Div Row (UPDATED: Dynamic Email mapping)
                const emailRow = document.createElement('div');
                emailRow.classList.add('flex', 'items-center', 'gap-2');
                const emailIcon = document.createElement('span');
                emailIcon.classList.add('text-violet-400', 'font-semibold', 'w-4');
                emailIcon.textContent = "✉️";
                const emailText = document.createElement('span');
                emailText.classList.add('line-clamp-1', 'hover:text-slate-200', 'cursor-pointer', 'text-slate-300', 'break-all');
                emailText.textContent = singleUser.email;

                emailRow.appendChild(emailIcon);
                emailRow.appendChild(emailText);
                contactBlock.appendChild(emailRow);

                // 11. Phone Entry Div Row (UPDATED: Dynamic Phone mapping)
                const phoneRow = document.createElement('div');
                phoneRow.classList.add('flex', 'items-center', 'gap-2');
                const phoneIcon = document.createElement('span');
                phoneIcon.classList.add('text-violet-400', 'font-semibold', 'w-4');
                phoneIcon.textContent = "📞";
                const phoneText = document.createElement('span');
                phoneText.classList.add('text-slate-300');
                phoneText.textContent = singleUser.phone;

                phoneRow.appendChild(phoneIcon);
                phoneRow.appendChild(phoneText);
                contactBlock.appendChild(phoneRow);

                cardFrame.appendChild(contactBlock);

                const viewProfileBtn = document.createElement('button');
                viewProfileBtn.classList.add('w-full', 'mt-5', 'py-2', 'bg-slate-800', 'hover:bg-violet-600', 'active:scale-95', 'text-xs', 'font-semibold', 'text-slate-200', 'hover:text-white', 'rounded-xl', 'transition-all', 'duration-200', 'border', 'border-slate-700/50', 'hover:border-transparent');
                viewProfileBtn.textContent = "View Profile";
                cardFrame.appendChild(viewProfileBtn);

                cardsContainer.appendChild(cardFrame);
            });
        })
    }
    
    getUsers()
    
    refreshBtn.addEventListener("click", () => {
        getUsers()
})



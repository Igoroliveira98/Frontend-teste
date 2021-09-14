const DOMImports = {
    profileData: document.querySelector(".content__main--profile"),
    reposData: document.querySelector("#repositories"),
    starData: document.querySelector("#star"),
    inputData: document.querySelector("input[name=search]"),
    inputBtn: document.querySelector(".btn-search")
}


// ========== FUNCTION TO GET THE USER'S INFORMATIONS FROM BACKEND:

window.onload = async function getInfos() {
    try {
        const responseOne = await fetch("http://localhost:3333/getUser");
        const responseTwo = await fetch("http://localhost:3333/getRepos");
        const responseThree = await fetch("http://localhost:3333/getStarred");

        let userInfos = await responseOne.json();
        let userRepos = await responseTwo.json();
        let userStarred = await responseThree.json();

        profileInformations(userInfos);
        reposInformation(userRepos);
        starredInformation(userStarred);

    } catch (error) {
        console.error(error);
    }
}

// FUNCTION TO SET THE INFORMATIONS IN HTML

// Profile informations:

async function profileInformations(event) {
    DOMImports.profileData.innerHTML = `
        <div class="content_main--informations">
            <img src="${event.avatar_url}" alt="Github avatar">

            <div class="content__main--bio">
                <h1>${event.name}</h1>
                <h3>${event.bio}</h3>
            </div>
        </div>
    `
}

// Repositories Informations:

async function reposInformation(event) {
    let { data } = await event;

    data.forEach(e => {
        DOMImports.reposData.innerHTML = `
        <div class="repos">
            <div class="repos__content">
                <a href="${e.html_url}">${e.name}</a>

                <div class="description">
                    <p>${e.description}</p>
                </div>
                <div class="numbers">
                    <span><i class="ri-star-fill"></i> ${e.stargazers_count}</span>
                    <span><i class="ri-stackshare-line"></i> ${e.forks_count}</span>
                </div>
            </div>
        </div>
`
    });

    DOMImports.inputBtn.addEventListener("click", e => {
        e.preventDefault();
        const t = DOMImports.inputData.value;

        console.log(t);
    })
}

// Starred information:

async function starredInformation(event) {
    let { data } = await event;
    

    data.forEach(e => {
        DOMImports.starData.innerHTML = `
        <div class="repos">
            <div class="repos__content">
                <a href="${e.html_url}">${e.name}</a>

                <div class="description">
                    <p>${e.description}</p>
                </div>
                <div class="numbers">
                    <span><i class="ri-star-fill"></i> ${e.stargazers_count}</span>
                    <span><i class="ri-stackshare-line"></i> ${e.forks_count}</span>
                </div>
            </div>
        </div>
`
    });
}



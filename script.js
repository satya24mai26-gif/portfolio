/* ==========================================
   GitHub Profile
========================================== 

fetch("https://api.github.com/users/satya24mai26-gif")

.then(response => response.json())

.then(data => {

    document.getElementById("github-avatar").src = data.avatar_url;

    document.getElementById("github-name").innerText = data.name;

    document.getElementById("github-bio").innerText = data.bio;

    document.getElementById("repo-count").innerText = data.public_repos;

    document.getElementById("followers").innerText = data.followers;

    document.getElementById("following").innerText = data.following;

});

/* ==========================================
   GitHub Repository Section
========================================== */

fetch("https://api.github.com/users/satya24mai26-gif/repos?sort=updated&per_page=100")
.then(response => response.json())
.then(repositories => {

    const grid = document.getElementById("repository-grid");

    repositories.forEach(repo => {

        const card = document.createElement("div");

        card.className = "github-project";

        card.innerHTML = `
            <h3>${repo.name}</h3>

            <p>${repo.description || "No description available."}</p>

            <div class="repo-footer">

                <span class="language">
                    ${repo.language || "Mixed"}
                </span>

                <a href="${repo.html_url}"
                   target="_blank"
                   class="github-btn">

                    View Repository

                </a>

            </div>
        `;

        grid.appendChild(card);

    });

});

/* Dashboard */

fetch("https://api.github.com/users/satya24mai26-gif/repos")

.then(r=>r.json())

.then(repos=>{

let stars=0;

let languages=new Set();

let latest="";

repos.forEach(repo=>{

stars+=repo.stargazers_count;

if(repo.language)
languages.add(repo.language);

if(!latest || repo.updated_at>latest)
latest=repo.updated_at;

});

document.getElementById("repo-total").innerHTML=repos.length;

document.getElementById("star-total").innerHTML=stars;

document.getElementById("language-total").innerHTML=languages.size;

document.getElementById("updated-date").innerHTML=latest.substring(0,10);

});
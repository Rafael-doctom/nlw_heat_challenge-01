const SocialObj = {
    github: 'Rafael-doctom',
}

const ChangeLinks = () => {
    for (let li of links.children) {
        const social = li.getAttribute('class')
        li.children[0].href = `https://${social}.com/${SocialObj[social]}`
    }
}

ChangeLinks()

function getGitHubProfileInfos() {
    const URL = `https://api.github.com/users/${SocialObj.github}`


    fetch(URL)
        .then(response => response.json())
        .then(data => {

            document.getElementById("userName").textContent = `${data.name}`;
            document.getElementById("profilegithub").textContent = `${data.login}`;
            document.getElementById("bioGithub").textContent = `${data.bio}`;
            profilegithub.href = `${data.html_url}`;
            document.getElementById("imageProfile").textContent = `${data.bio}`;
            imageProfile.src = `${data.avatar_url}`;
        })
}

getGitHubProfileInfos()
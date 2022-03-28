const SocialObj = {
    youtube: 'Rafael-doctom',
    facebook: 'rafaelFake',
    instagram: 'insFace'
}

const ChangeLinks = () => {
    for (let li of links.children) {
        const social = li.getAttribute('class')
        li.children[0].href = `https://${social}.com/${SocialObj[social]}`
    }
}

ChangeLinks()
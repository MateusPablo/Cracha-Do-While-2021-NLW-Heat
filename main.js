const linksSocialMedia = {
  github: 'mateuspablo',
  youtube: 'channel/UCLL1g9Urd8C0v8DgZRWnk8w',
  instagram: 'mateuspablo_',
  facebook: '100003963474521',
  twitter: 'mateuspablo3'
}

function changLinksSocialMedia() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changLinksSocialMedia()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()

let videos = [
  {
    "youtubeId": "RlWr3VGUzoQ",
    "title": "Canto de Ossanha",
    "author": "Baden-Powell"
  },
  {
    "youtubeId": "zAHL93ikq1Y",
    "title": "Meu Ébano",
    "author": "Alcione"
  },
  {
    "youtubeId": "0y1kGcMi_l8",
    "title": "Os Alquimistas Estão Chegando",
    "author": "Jorge Ben Jor"
  }
]

const addVideoToList = function (video) {
  let videoLink = document.createElement('a')
  let videoTitle = document.createTextNode(video.title)
  videoLink.appendChild(videoTitle)
  let thumbnailUrl = youtube.generateThumbnailUrl(video.youtubeId)
  let thumbnailImg = document.createElement('img')
  thumbnailImg.setAttribute('src', thumbnailUrl)
  videoLink.appendChild(thumbnailImg)

  videoLink.addEventListener('click', function (event) {
    event.preventDefault()

    let videoEmbed = document.createElement('iframe')
    videoEmbed.setAttribute('src', youtube.generateEmbedUrl(video.youtubeId))
    videoEmbed.setAttribute('width', 560)
    videoEmbed.setAttribute('height', 315)

    let videoWatcher = document.querySelector('#video-watcher')
    videoWatcher.innerHTML = ''
    videoWatcher.appendChild(videoEmbed)
  })

  let videoItem = document.createElement('li')
  videoItem.appendChild(videoLink)
  document.querySelector('#videos-list').appendChild(videoItem)
}

for (let i = 0; i < videos.length; i++) {
  addVideoToList(videos[i])
}

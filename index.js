// change video source of viewer
function changeVideoSrc(e) {

  // set iFrame and src variables
  const vieweriFrame = document.querySelector('.section-videos_video iframe');
  const src = e.target.getAttribute('data-videoSrc');
  
  // pass new src to the iFrame
  vieweriFrame.setAttribute('src', src);
}

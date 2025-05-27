const video1 = document.getElementById('projectVideo1');
const video2 = document.getElementById('projectVideo2');
const video3 = document.getElementById('projectVideo3');

// Sidebar elements //
const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon')


const hoverSign = document.querySelector('.hover-sign');

const videoList = [video1, video2, video3].filter(video => video !== null);

if (hoverSign && videoList.length > 0) {
  videoList.forEach(function (video) {
    video.muted = true;

    // Desktop hover
    video.addEventListener("mouseenter", function () {
      video.play().catch(err => {
        console.warn("Autoplay blocked:", err);
      });
      hoverSign.classList.add("active");
    });

    video.addEventListener("mouseleave", function () {
      video.pause();
      hoverSign.classList.remove("active");
    });

    // Mobile tap
    video.addEventListener("touchstart", function () {
      video.play().catch(() => {});
      hoverSign.classList.add("active");
    });
  });
} else {
  console.error("Hover sign or video elements are missing in the DOM");
}


// Sidebar elements //
menu.addEventListener("click", function(){
    sideBar.classList.remove("close-sidebar")
    sideBar.classList.add("open-sidebar")
});

closeIcon.addEventListener("click", function(){
    sideBar.classList.remove("open-sidebar");
    sideBar.classList.add("close-sidebar");
    
})
function detectDevice(){
    var userAgent = navigator.userAgent;
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    var dropdown = document.querySelector('.dropdown');
    var topbarlist = document.querySelector('.topbarlist');
    var topBar = document.getElementById('topbar');
    if (isMobile) {
        dropdown.classList.add('mobile');
        topbarlist.classList.add('mobile');
        topBar.style.height = '100px';
        //alert("MO");
    }else{
        dropdown.classList.add('desktop');
        topbarlist.classList.add('desktop');
    } 
}
document.addEventListener('DOMContentLoaded', detectDevice);

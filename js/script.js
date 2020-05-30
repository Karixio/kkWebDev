document.addEventListener('DOMContentLoaded', function(){

    // Menu event listeners

    document.querySelector('i.burger').addEventListener('click', menuBurger);
    document.querySelector('.menu1').addEventListener('click', firstMenuElement);
    document.querySelector('.menu2').addEventListener('click', secondMenuElement);
    document.querySelector('.menu3').addEventListener('click', thirdMenuElement);
    document.querySelector('.menu4').addEventListener('click', fourthMenuElement);

    // Arrow script
    let arrowScrolledSection = document.querySelector('main');
    document.querySelector('.fas.fa-arrow-circle-down').addEventListener('click', function(){
        arrowScrolledSection.scrollIntoView({behavior: "smooth"}); 
    });

    // IN CASE SOMEONE STILL USES IE
    // The order matters here, and this may report false positives for unlisted browsers.
    let sBrowser, sUsrAg = navigator.userAgent;

    if (sUsrAg.indexOf("Firefox") > -1) {
    sBrowser = "Mozilla Firefox";
    // "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:61.0) Gecko/20100101 Firefox/61.0"
    } else if (sUsrAg.indexOf("SamsungBrowser") > -1) {
    sBrowser = "Samsung Internet";
    // "Mozilla/5.0 (Linux; Android 9; SAMSUNG SM-G955F Build/PPR1.180610.011) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.4 Chrome/67.0.3396.87 Mobile Safari/537.36
    } else if (sUsrAg.indexOf("Opera") > -1 || sUsrAg.indexOf("OPR") > -1) {
    sBrowser = "Opera";
    // "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 OPR/57.0.3098.106"
    } else if (sUsrAg.indexOf("Trident") > -1) {
    sBrowser = "Microsoft Internet Explorer";
        document.querySelector('*').style.display = 'none';

        if (window.navigator.language.slice(0, 2) !== 'pl') {       
            alert('Microsoft Internet Explorer cannot display this site properly. Please use a different browser.');
        }else{
            alert('Przeglądarka "Microsoft Internet Explorer" nie jest w stanie wyświetlić tej strony poprawnie. Proszę użyć innej przeglądarki');
        }
    // "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; Zoom 3.6.0; wbx 1.0.0; rv:11.0) like Gecko"
    } else if (sUsrAg.indexOf("Edge") > -1) {
    sBrowser = "Microsoft Edge";
    // "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 Edge/16.16299"
    } else if (sUsrAg.indexOf("Chrome") > -1) {
    sBrowser = "Google Chrome or Chromium";
    // "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/66.0.3359.181 Chrome/66.0.3359.181 Safari/537.36"
    } else if (sUsrAg.indexOf("Safari") > -1) {
    sBrowser = "Apple Safari";
    // "Mozilla/5.0 (iPhone; CPU iPhone OS 11_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.0 Mobile/15E148 Safari/604.1 980x1306"
    } else {
    sBrowser = "unknown";
    }


// Menu scripts

    let mobileNav = document.querySelector('.mobileNav');
    let mobileBurger = document.querySelector('i.burger');
    let mobileIcon1 = document.querySelector('.fab.fa-linkedin');
    let mobileIcon2 = document.querySelector('.fab.fa-github');


    function menuBurger(){
        mobileNav.classList.toggle('clicked');
        mobileBurger.classList.toggle('clicked');
        mobileIcon1.classList.toggle('clicked');
        mobileIcon2.classList.toggle('clicked');
    };



    // Scrolling to the bounded section
    let section1 = document.querySelector('header');

    function firstMenuElement(){
        section1.scrollIntoView({behavior: 'smooth'});
        mobileNav.classList.remove('clicked');
        mobileBurger.classList.remove('clicked');
        mobileIcon1.classList.remove('clicked');
        mobileIcon2.classList.remove('clicked');
    };


    let section2 = document.querySelector('.about');

    function secondMenuElement(){
        section2.scrollIntoView({behavior: 'smooth'});
        mobileNav.classList.remove('clicked');
        mobileBurger.classList.remove('clicked');
        mobileIcon1.classList.remove('clicked');
        mobileIcon2.classList.remove('clicked');
    };

    let section3 = document.querySelector('.projects');

    function thirdMenuElement(){
        section3.scrollIntoView({behavior: 'smooth'});
        mobileNav.classList.remove('clicked');
        mobileBurger.classList.remove('clicked');
        mobileIcon1.classList.remove('clicked');
        mobileIcon2.classList.remove('clicked');
    };

    let section4 = document.querySelector('.contact');
    
    function fourthMenuElement(){
        section4.scrollIntoView({behavior: 'smooth'});
        mobileNav.classList.remove('clicked');
        mobileBurger.classList.remove('clicked');
        mobileIcon1.classList.remove('clicked');
        mobileIcon2.classList.remove('clicked');
    }

    let section3Position = section3.offsetTop;
    let section4Position = section4.offsetTop;
    window.addEventListener('scroll', function(){
        if(window.scrollY > section3Position - 20 && window.scrollY < section4Position - 20){
            document.querySelector('i.burger').style.color = '#222220';
        }else if(window.scrollY > section4Position - 20){
            document.querySelector('i.burger').style.color = '#F8F5E6';
        }else if(window.scrollY < section4Position && window.scrollY > section3Position - 20){
            document.querySelector('i.burger').style.color = '#222220';
        }else if(window.scrollY < section3Position){
            document.querySelector('i.burger').style.color = '#F8F5E6';
        }     
    });
});
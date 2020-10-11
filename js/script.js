document.addEventListener('DOMContentLoaded', function(){

    //CSS Variables
    let darkColor = getComputedStyle(document.documentElement).getPropertyValue('--darkColor'); //#222220
    let lightColor = getComputedStyle(document.documentElement).getPropertyValue('--lightColor'); //#F8F5E6

    // Menu event listeners

    document.querySelector('i.burger').addEventListener('click', menuBurger);
    document.querySelector('.menu1').addEventListener('click', firstMenuElement);
    document.querySelector('.menu2').addEventListener('click', secondMenuElement);
    document.querySelector('.menu3').addEventListener('click', thirdMenuElement);
    document.querySelector('.menu4').addEventListener('click', fourthMenuElement);

    // Arrow script
    let arrowScrolledSection = document.querySelector('.about');
    document.querySelector('.fas.fa-arrow-circle-down').addEventListener('click', function(){
        arrowScrolledSection.scrollIntoView({behavior: "smooth", block: 'center'}); 
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

    let menu = document.querySelector('.menu');
    let mobileBurger = document.querySelector('i.burger');


    function menuBurger(){
        menu.classList.toggle('clicked');
        mobileBurger.classList.toggle('clicked');
    };



    // Scrolling to the bounded section
    let section1 = document.querySelector('header');

    function firstMenuElement(){
        section1.scrollIntoView({behavior: 'smooth'});
        menu.classList.remove('clicked');
        mobileBurger.classList.remove('clicked');
    };


    let section2 = document.querySelector('.about');

    function secondMenuElement(){
        section2.scrollIntoView({behavior: 'smooth', block: 'center'});
        menu.classList.remove('clicked');
        mobileBurger.classList.remove('clicked');
    };

    let section3 = document.querySelector('.projects');

    function thirdMenuElement(){
        section3.scrollIntoView({behavior: 'smooth', block: 'center'});
        menu.classList.remove('clicked');
        mobileBurger.classList.remove('clicked');
    };

    let section4 = document.querySelector('.contact');
    
    function fourthMenuElement(){
        section4.scrollIntoView({behavior: 'smooth', block: 'center'});
        menu.classList.remove('clicked');
        mobileBurger.classList.remove('clicked');
    }


    //Menu color change

    function menuDarkColorChange(){
        let menuEelems = document.querySelectorAll('.menu>.listElem');
        for(i = 0; i < menuEelems.length; i++){
            menuEelems[i].style.color = lightColor;
            menuEelems[i].style.borderRight = '1px solid ' + lightColor;
        }
    }
    function menuLightColorChange(){
        let menuEelems = document.querySelectorAll('.menu>.listElem');
        for(i = 0; i < menuEelems.length; i++){
            menuEelems[i].style.color = darkColor;
            menuEelems[i].style.borderRight = '1px solid ' + darkColor;
        }
    }

    let section3Position = section3.offsetTop;
    let section4Position = section4.offsetTop;

    window.addEventListener('resize', function(){
        section3Position = section3.offsetTop;
        section4Position = section4.offsetTop;
    });

    let desktopMatch = window.matchMedia('(min-width: 1280px)').matches;
    if(desktopMatch == true){
        window.addEventListener('scroll', function(){
            if(window.scrollY > section3Position - 20 && window.scrollY < section4Position - 20){
                document.querySelector('.menu').style.backgroundColor = darkColor;
                document.querySelector('.languageIcon').style.color = lightColor;
                menuDarkColorChange();
            }else if(window.scrollY > section4Position - 20){
                document.querySelector('.menu').style.backgroundColor = lightColor;
                document.querySelector('.languageIcon').style.color = darkColor;
                menuLightColorChange();
            }else if(window.scrollY < section4Position && window.scrollY > section3Position - 20){
                document.querySelector('.menu').style.backgroundColor = darkColor;
                document.querySelector('.languageIcon').style.color = lightColor;
                menuDarkColorChange();
            }else if(window.scrollY < section3Position){
                document.querySelector('.menu').style.backgroundColor = lightColor;
                document.querySelector('.languageIcon').style.color = darkColor;
                menuLightColorChange();
            }     
        });
    };
    //Burger color change for mobile
    window.addEventListener('scroll', function(){
        if(window.scrollY > section3Position - 20 && window.scrollY < section4Position - 20){
            document.querySelector('i.burger').style.color = darkColor;
        }else if(window.scrollY > section4Position - 20){
            document.querySelector('i.burger').style.color = lightColor;
        }else if(window.scrollY < section4Position && window.scrollY > section3Position - 20){
            document.querySelector('i.burger').style.color = darkColor;
        }else if(window.scrollY < section3Position){
            document.querySelector('i.burger').style.color = lightColor;
        }     
    });

    //BEGINING OF CV SECTION
    let portraitMatch = window.matchMedia('(orientation: portrait)').matches;
    let tabletMatch = window.matchMedia('(min-width: 768px)').matches;
    let cv = document.querySelector('.cv');
    let cvNotification = undefined;
    window.addEventListener('resize', function(){
        desktopMatch = window.matchMedia('(min-width: 1280px)').matches;
        portraitMatch = window.matchMedia('(orientation: portrait)').matches;
        tabletMatch = window.matchMedia('(min-width: 768px)').matches;
    });
    document.addEventListener('DOMSubtreeModified', function(){
                cvNotification = document.querySelector('.cvInfo');
            });

    cv.addEventListener('click', function(){
        
        if (typeof(cvNotification) == 'undefined'){
            //create notification
            let cvInfo = document.createElement('div');
            cvInfo.style.position = 'fixed';
            if(desktopMatch == true){
               cvInfo.style.height = '220px';
               cvInfo.style.width = '400px'; 
            }else if(desktopMatch == false && tabletMatch == true && portraitMatch == true){
                cvInfo.style.height = '40vh';
                cvInfo.style.width = '50%';
                cvInfo.style.zIndex = '10';
            }else{
                cvInfo.style.height = '100vh';
                cvInfo.style.width = '100%';
                cvInfo.style.zIndex = '10';
            };
            cvInfo.style.backgroundColor = darkColor;
            cvInfo.style.top = '50%';
            cvInfo.style.left = '50%';
            cvInfo.style.transform = 'translate(-50%, -50%)';
            let insertCvAfter = document.querySelector('footer');
            insertCvAfter.after(cvInfo);

            //notification close button
            let closeNofitication = document.createElement('i');
            closeNofitication.classList.add('fas');
            closeNofitication.classList.add('fa-times')
            closeNofitication.style.position = 'absolute';
            closeNofitication.style.top = '14px';
            closeNofitication.style.right = '27px';
            closeNofitication.style.fontSize = '28px';
            if(desktopMatch != true){
                closeNofitication.style.zIndex = '10';
            }
            cvInfo.appendChild(closeNofitication);
            closeNofitication.addEventListener('click', function(){
                cvInfo.remove();
                cvNotification = undefined;
            });

            //notification content
            let notificationContent = document.createElement('p');
            notificationContent.style.position = 'relative';
            if(desktopMatch == true){
                notificationContent.style.marginTop = '80px';
                notificationContent.style.padding = '0 25px';
            }else if(desktopMatch == false && tabletMatch == true && portraitMatch == true){
                notificationContent.style.marginTop = '40%';
                notificationContent.style.padding = '0 80px';
            }else if(desktopMatch == false && tabletMatch == false && portraitMatch == true){
                notificationContent.style.marginTop = '45%';
                notificationContent.style.padding = '0 25px';
            }else{
                notificationContent.style.marginTop = '20%';
                notificationContent.style.padding = '0 25px';
            };
            notificationContent.style.textAlign = 'center';
            notificationContent.style.color = lightColor;
            if(window.location.pathname.includes('ENindex')){
                notificationContent.innerText = 'You can view my current CV in PDF format by clicking button below.';
            }else{
                notificationContent.innerText = 'Możesz zobaczyć moje aktualne CV w formacie PDF klikając w poniższy przycisk.';
            };
            cvInfo.appendChild(notificationContent);

            //download button
            let notificationButton = document.createElement('button');
            notificationButton.style.position = 'absolute';
            if(window.matchMedia('(orientation: landscape)').matches){
                notificationButton.style.bottom = '10%';
            }else{
                notificationButton.style.bottom = '20%';
            };
            notificationButton.style.left = '50%';
            notificationButton.style.transform = 'translateX(-50%)';
            notificationButton.style.width = '180px';
            notificationButton.style.height = '30px';
            notificationButton.style.lineHeight = '30px';
            notificationButton.style.border = 'none';
            notificationButton.style.borderRadius = '3px';
            notificationButton.style.backgroundColor = lightColor;
            notificationButton.style.color = darkColor;
            notificationButton.style.textTransform = 'uppercase';
            if(window.location.pathname.includes('ENindex')){
                notificationButton.innerText = 'View'
            }else{
                notificationButton.innerText = 'Wyświetl';
            };
            cvInfo.appendChild(notificationButton);
            notificationButton.addEventListener('click', function(){
                //download file
                window.open("../docs/CV.pdf", "_blank");
            });
        };
    });
    //END OF CV SECTION
});
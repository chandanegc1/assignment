document.addEventListener("DOMContentLoaded", function() {
    const nameElement = document.querySelector(".user-data h1");
    const professionElement = document.querySelector(".user-data p");
    const availabilityElement = document.querySelector(".user-data span");
    var userImgElement = document.getElementById("userImgs");
    const aboutMeElement = document.querySelector(".about-mee p");

    let ulElement = document.querySelector('ul.age');
    let liElements = ulElement.getElementsByTagName('li');
    
    fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        nameElement.textContent = data.user.about.name;
        professionElement.textContent = data.user.about.subTitle;
        availabilityElement.textContent = data.user.about.title;
        userImgElement.src = data.user.about.avatar.url;
        userImgElement.style =" width: 630px; height:630px";
        aboutMeElement.textContent =  data.user.about.description;

        var h6Element = liElements[2].getElementsByTagName('h6')[0];
        var spanElement = h6Element.getElementsByTagName('span')[0];
        spanElement.textContent= data.user.about.address;

        var h6Element = liElements[3].getElementsByTagName('h6')[0];
        var spanElement = h6Element.getElementsByTagName('span')[0];
        spanElement.textContent= data.user.email;

        var h6Element = liElements[4].getElementsByTagName('h6')[0];
        var spanElement = h6Element.getElementsByTagName('span')[0];
        spanElement.textContent= data.user.about.phoneNumber;

        var h6Element = liElements[5].getElementsByTagName('h6')[0];
        var spanElement = h6Element.getElementsByTagName('span')[0];
        spanElement.textContent= data.user.about.title;

        const skill = data.user.skills;
        for(i = 0; i<4;i++){
          const homeOneProgressElement = document.getElementsByClassName('home-one-progress');
          homeOneProgressElement[i].childNodes[3].textContent = skill[i].name ;
          homeOneProgressElement[i].childNodes[1].childNodes[1].textContent=skill[i].percentage;
        }
        

        const services = data.user.services;
        for(i =0 ; i<6;i++){
          const servicesElement = document.getElementsByClassName('service-data')[i];
          servicesElement.childNodes[3].textContent = services[i].name;
          servicesElement.childNodes[5].textContent =services[i].desc;
          servicesElement.childNodes[1].setAttribute('src' ,services[i].image.url);
        }

        const projects = data.user.projects;
        for(i=0 ; i<8;i++){
        const servicesElement = document.getElementsByClassName('show-work')[i];
        servicesElement.childNodes[3].childNodes[1].textContent = projects[i].title;
        servicesElement.childNodes[3].childNodes[3].textContent = projects[i].techStack[0];
        servicesElement.childNodes[1].setAttribute('src' ,projects[i].image.url);
        }
        

        const social = data.user.social_handles;
        let ulSocial= document.getElementById('sociale');
        let liSocial = ulSocial.getElementsByTagName('li');
    
        for( i = 0; i < liSocial.length; i++) {
          liSocial[i].childNodes[0].childNodes[0].setAttribute('src' , social[i].image.url);
          liSocial[i].childNodes[0].childNodes[2].textContent = social[i].platform;
          liSocial[i].childNodes[0].setAttribute('src' , social[i].url);
        }

        const article = data.user.testimonials;
        for(let l =0 ; l<3; l++){
        const articlesElement = document.getElementsByClassName('blog-data')[l];
        articlesElement.childNodes[1].setAttribute('src' , article[l].image.url);
        articlesElement.childNodes[7].childNodes[0].textContent = article[l].position; 
        articlesElement.childNodes[5].textContent =  article[l].name;
        articlesElement.childNodes[9].textContent =  article[l].review; 
        }
        
        x =document.getElementById('phnNo');
        x.textContent = data.user.about.phoneNumber;
        x.setAttribute('href' ,data.user.about.phoneNumber);
        x =document.getElementById('eml');
        x.textContent = data.user.email;
        x.setAttribute('href' ,data.user.email);
        document.getElementById('lctn').textContent = data.user.about.address;
        document.getElementById('descr').textContent = data.user.about.description;
        document.getElementById('quote').textContent = data.user.about.quote;
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
});


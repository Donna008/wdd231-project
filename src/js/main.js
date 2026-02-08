import { getParkData } from "./parkService.mjs";

const parkData = getParkData();
document.title=parkData.fullName;
const disclaimerLink = document.querySelector(".disclaimer>a");
disclaimerLink.href=parkData.url;
disclaimerLink.innerHTML=parkData.fullName;

const heroImage=document.querySelector(".hero-banner img");
heroImage.src=parkData.images[0].url;
heroImage.alt=parkData.images[0].altText;

function parkInfoTemplate(info){
    return `
        <a href="/" class="hero-banner__title">${info.name}</a> 
        <p class ="hero-banner__subtitle">
            <span>${info.designation}</span>
            <span>${info.states}</span>
        </p>
        `;
}

const heroContent=document.querySelector(".hero-banner__content");
heroContent.innerHTML=parkInfoTemplate(parkData);

function setHeaderInfo(data){
    const disclaimer=document.querySelector(".disclaimer>a");
    disclaimer.href=data.url;
    disclaimer.innerHTML=data.fullName;

    document.querySelector("head>title").textContent=data.fullName;

    document.querySelector(".hero-banner>img").src=data.images[0].url;

    document.querySelector(".hero-banner__content").innerHTML=parkInfoTemplate(data);
}

function setParkIntro(data){
    const introEl=document.querySelector(".intro");
    introEl.innerHTML=`
        <h1>${data.fullName}</h1>
        <p>${data.description}</p>
    `;
}
const parkInfoLinks =[
    {
        name: "Current Conditions >",
        link: "conditions.html",
        image: parkData.images[2].url,
        description: "See what conditions to expect in the park before leaving on your trip."
    }
]
function mediaCardTemplate(info){
    return `
        <article class="media-card">
            <a href="${info.link}">
                <img src="${info.image}" alt="">
                <h3>${info.name}</h3>
                </a>
                <p>${info.description}</p>
            </article>
            `;
}
function setParkInfoLinks(data){
    const infoEl = document.querySelector(".info");
    const heml = data.map(mediaCardTemplate);
    infoEl.insertAdjacentHTML("afterbegin", heml.join(""));
}
setHeaderInfo(parkData);
setParkIntro(parkData);
setParkInfoLinks(parkInfoLinks);
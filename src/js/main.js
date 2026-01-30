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
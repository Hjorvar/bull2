const title = 'DOOM Eternal';
const heading = 'DOOM Eternal - Game of the Year Edition';

const titleHTML = document.getElementById('title');
titleHTMLd.innerHTML = title;

const headingHTML = document.getElementById('heading01');
headingHTML.innerHTML = heading;

const ageApprovedHTML = document.getElementById('ageApproved');

const ageRating = 18;
const userAge = 26;

if (userAge >= ageRating) {
  ageApprovedHTML.innerHTML = 'Approved';
} else {
  ageApprovedHTML.innerHTML = 'Not approved';
}
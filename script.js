
$(document).ready(function () {
    $('#fullpage').fullpage({ //initialize
        //set options
        sectionsColor: ['#add8e6', '#add8e6', '#add8e6'],
        navigation: true,
        navigationPosition: 'right',
        anchors: ['section1', 'section2', 'section3'],
        afterLoad: function (origin, destination, direction) {
            if (destination.index == 1) { //section 2
                nine.play();
                ten.play();
                text.play()
            }
            if (destination.index == 2) { //section 3
                section3.play()
            }
        }
    });
});

//animation for numbers
anime({
    targets: '#cases',
    innerHTML: [0, 257510], //start and end values
    easing: 'linear',
    round: 1, //rounds off to zero decimal places
    delay: anime.stagger(300, { start: 500 }), //staggering
    duration: 1000
});
anime({
    targets: '#hospital',
    innerHTML: [0, 1365], //start and end values
    easing: 'linear',
    round: 1, //rounds off to zero decimal places
    delay: anime.stagger(300, { start: 1500 }), //staggering
    duration: 1000
});
anime({
    targets: '#death',
    innerHTML: [0, 678], //start and end values
    easing: 'linear',
    round: 1, //rounds off to zero decimal places
    delay: anime.stagger(300, { start: 2500 }), //staggering
    duration: 1000
});
var nine = anime({
    targets: '#nine',
    innerHTML: [0, 9], //start and end values
    easing: 'linear',
    round: 1, //rounds off to zero decimal places
    delay: anime.stagger(300, { start: 500 }), //staggering
    duration: 1000
});
var ten = anime({
    targets: '#ten',
    innerHTML: [0, 10], //start and end values
    easing: 'linear',
    round: 1, //rounds off to zero decimal places
    delay: anime.stagger(300, { start: 1500 }), //staggering
    duration: 1000
});

var text = anime({
    targets: "#text",
    easing: 'easeOutBounce',
    opacity: [0, 1], //start and end values
    delay: 500
});
//section3 animation
var section3 = anime({
    targets: "#s3",
    translateX: 200,
    direction: 'alternate',
    duration: 1500,
    easing: function (el, i, total) {
        return function (t) {
            return Math.pow(Math.sin(t * (i + 1)), total);
        }
    }
});
//barchart
const labels = [
    'Dec 1',
    'Dec 2',
    'Dec 3',
    'Dec 4',
    'Dec 5',
    'Dec 6',
    'Dec 7',
    'Dec 8',
    'Dec 9',
    'Dec 10',
    'Dec 11',
    'Dec 12',
    'Dec 13',
    'Dec 14',
];

const data = {
    labels: labels,
    datasets: [{
        label: 'Daily Cases (past 2 weeks)',
        backgroundColor: 'rgb(240,248,255)',
        borderColor: 'rgb(255, 99, 132)',
        data: [1134, 1056, 986, 771, 756, 721, 654, 742, 689, 512, 455, 376, 244, 103],
    }]
};

const config = {
    type: 'bar',
    data: data
};

const myChart = new Chart(
    document.querySelector('.myChart'),
    config
);
//tippy person
tippy('#vaccinated', {
    content: 'I am Vaccinated',
});
tippy('#vaccinated1', {
    placement: 'bottom',
    content: 'I am Vaccinated',
});
tippy('#notvaccinated', {
    placement: 'bottom',
    content: 'I am not Vaccinated',
});

//tippy centres
tippy('#bedok', {
    allowHTML: true,
    content: 'Bedok Polyclinic<br>11 Bedok North Street 1 Heartbeat@Bedok #02-01, #03-01, Singapore 469662<br>6343 1121',
});
tippy('#batok', {
    allowHTML: true,
    content: 'Bukit Batok Polyclinic<br>50 Bukit Batok West Avenue 3, Singapore 659164<br>6343 1122',
});
tippy('#merah', {
    allowHTML: true,
    content: 'Bukit Merah Polyclinic<br>162 Bukit Merah Central Level 4, Singapore 150163<br>6343 1123',
});
tippy('#choa', {
    allowHTML: true,
    content: 'Choa Chu Kang Polyclinic<br>2 Teck Whye Crescent, Singapore 688846<br>6343 1124',
});
tippy('#clementi', {
    allowHTML: true,
    content: 'Clementi Polyclinic<br>451 Clementi Avenue 3, Singapore 120451<br>6343 1125',
});
tippy('#geylang', {
    allowHTML: true,
    content: 'Geylang Polyclinic<br>21 Geylang East Central, Singapore 389707<br>6343 1126',
});
tippy('#hougang', {
    allowHTML: true,
    content: 'Hougang Polyclinic<br>89 Hougang Avenue 4, Singapore 538829<br>6765 1121',
});
tippy('#jurong', {
    allowHTML: true,
    content: 'Jurong Polyclinic<br>190 Jurong East Avenue 1, Singapore 609788<br>6765 1122',
});
tippy('#marine', {
    allowHTML: true,
    content: 'Marine Parade Polyclinic<br>80 Marine Parade Central, Singapore 440080<br>6765 1123',
});
tippy('#outram', {
    allowHTML: true,
    content: 'Outram Polyclinic<br>3 Second Hospital Avenue, #02-00 Health Promotion Board Building, Singapore 168937<br>6765 1124',
});
tippy('#pasir', {
    allowHTML: true,
    content: 'Pasir Ris Polyclinic<br>1 Pasir Ris Drive 4, Singapore 519457<br>6765 1125',
});
tippy('#pioneer', {
    allowHTML: true,
    content: 'Pioneer Polyclinic<br>26 Jurong West Street 61, Singapore 648201<br>6765 1126',
});

$(document).ready(function () {
    $('.centres').DataTable({
        "scrollY": "200px",
        "scrollCollapse": true,
        "paging": false
    });
});
const reportData = [
  {
    title: "Work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: "Play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: "Study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: "Exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: "Social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: "Self Care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];

/* <div class="report-block" data-type="work">
  <div class="cover"></div>

  <div class="time-report">
    <div class="now">
      <span class="title">work</span>
      <span class="time-frame">32hrs</span>
    </div>
    <div class="previous">
      <img src="/images/icon-ellipsis.svg" alt="" class="menu-icon" />
      <span>
        Last week - <span class="time-frame">36hrs</span>
      </span>
    </div>
  </div>
</div> */

const displayType = document.querySelector("main").dataset.display;
const timeTracking = document.querySelector(".time-tracking");
timeTracking.innerHTML = "";

let reports = "";

reportData.forEach((data) => {
  const report = `<div class="report-block" data-type="${data.title}">
     <div class="cover"></div>

     <div class="time-report">
       <div class="now">
         <span class="title">${data.title}</span>
         <span class="time-frame">${data.timeframes[displayType].current}hrs</span>
       </div>
       <div class="previous">
         <img src="/images/icon-ellipsis.svg" alt="" class="menu-icon" />
         <span>
           Last week - <span class="time-frame">${data.timeframes[displayType].previous}hrs</span>
         </span>
       </div>
     </div>
   </div>
   `;

  reports += report;
});

timeTracking.innerHTML = reports;

// styling
const reportBlock = document.querySelectorAll(".report-block");

reportBlock.forEach((block) => {
  block.style.backgroundColor = `var(--cover-${block.dataset.type
    .toLowerCase()
    .replace(" ", "")})`;

  block.firstElementChild.style.backgroundImage = `url(/images/icon-${block.dataset.type
    .toLowerCase()
    .replace(" ", "-")}.svg)`;
});

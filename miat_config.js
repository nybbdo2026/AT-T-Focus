const brands = [
    { name: "AT&T", img: "img/AT&T.png" },
    { name: "consumer_cellular", img: "img/consumer_cellular.png" }, 
    { name: "G_fiber", img:"img/G_fiber.png" }, 
    { name: "mint_mobile", img:"img/mint_mobile.png" },
    { name: "smartless_mobile", img:"img/smartless_mobile.png" },
    { name: "spectrum_mobile", img:"img/spectrum_mobile.png" },
    { name: "T-Mobile", img:"img/T-Mobile.png" },
    { name: "verizon", img:"img/verizon.png" },
    { name: "xfinity_mobile", img:"img/xfinity_mobile.png" }
  ];

const category = "Mobile Networks"

const attributes = ["Adventure","Freedom","Discovery","Escape","Unconventional","Dynamic","Resilience","Liberation","Success","Sophistication","Doing my best","Confidence","Empowerment","Optimization","Self-Improvement","Strong","Enablement","Joy","Carefreeness","Pleasure","Relief","Relaxation","Optimism","Satisfaction","Reassurance","Comfort","Control","Reason","Practical","Expertise","Functional","Savvy","Value","Proven","Efficiency","Safety","Trusted","Closeness","Protection","Peace of mind","Belonging","Dependability","Security","Meaningful connections","Excitement","Fun","Stimulation","Curiosity","Change","Energy","Creativity","Velocity"];

const pretest_attributes = [
  "Hot", 
  "Cold", 
  "Dangerous",
  "Refreshing", 
  "Cute",
  "Soft"
];


const pretest_images = [
  {name: "Cat", img: "pretest_img/pretest_cat.png", correct: ["Cute", "Soft"]},
  {name: "Fire", img:"pretest_img/pretest_fire.png", correct:["Dangerous", "Hot"]}, 
  {name: "Icecube", img: "pretest_img/pretest_icecube.png", correct:["Cold", "Refreshing"]}
]

const pretest_attributes_multiple = ["Hot", "Cold", "Dangerous", "Refreshing", "Cute", "Soft", "Travel", "Excitement", "Precise", "Time", "Deep", "Wet"]

const pretest_images_multiple = [
  {name: "Cat", img: "pretest_img/pretest_cat.png", correct: ["Cute", "Soft"]},
  {name: "Fire", img:"pretest_img/pretest_fire.png", correct:["Dangerous", "Hot"]}, 
  {name: "Icecube", img: "pretest_img/pretest_icecube.png", correct:["Cold", "Refreshing"]}, 
  {name: "Driving", img: "pretest_img/pretest_driving.png", correct:["Travel", "Excitement"]}, 
  {name: "Ocean", img: "pretest_img/pretest_ocean.png", correct:["Deep", "Wet"]},
  {name: "Clock", img: "pretest_img/pretest_clock.png", correct:["Precise", "Time"]}
]


const survey_name = "AT&T Survey"
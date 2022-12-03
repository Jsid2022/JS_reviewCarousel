let img = document.getElementById("personImg");
let personname = document.getElementById("personName")
let designation = document.getElementById("personDesignation");
let description = document.getElementById("personDescription");


const data = [
    {
        image: "./image1.jpeg",
        name: "Peter Jones",
        designation: "WEB DEVELOPER",
        description: "I am an enthusiastic, self-motivated, reliable, responsible and hard working person. I am a mature team worker and adaptable to all challenging situations. I am able to work well both in a team environment as well as using own initiative. I am able to work well under pressure and adhere to strict deadlines."
    },
    {
        image: "./image2.jpeg",
        name: "Susan Smith",
        designation: "SOFTWARE DEVELOPER",
        description: "Begin by stating your experience and desired position. Add 2–3 of your key accomplishments, supporting them by numbers (“exceeded KPIs by 12%”). Use strong words to describe yourself, and make sure to showcase your value to the potential employer your value to the potential employer your value to the potential employer."
    },
    {
        image: "./image3.jpeg",
        name: "Rosa Linn",
        designation: "NEWS REPORTER",
        description: "A resume summary is a professional statement at the top of a resume. It describes the candidate's relevant experience, skills, and achievements. The purpose of this career summary is to explain your qualifications for the job in 3-5 sentences and convince the manager to read the whole resume document."
    },
    {
        image: "./image4.jpeg",
        name: "Jason Roy",
        designation: "ESPORTS PLAYER",
        description: "A personal profile is a small paragraph at the very top of your CV that serves as an introduction of yourself but, most importantly, your career goals. It must summarise your work history, education, goals, and strengths while remaining clear, concise, and relevant to your job and industry targets.."
    }
]

let number = 0;

img.src = data[number].image;
personname.textContent = data[number].name;
designation.textContent = data[number].designation;
description.textContent = data[number].description;

function changePersion(value) {
    number += value
    if (number == 4) {
        number = 0;
    } else if (number < 0) {
        number = 3;
    }
    
    console.log(number)
    img.src = data[number].image;
    personname.textContent = data[number].name;
    designation.textContent = data[number].designation;
    description.textContent = data[number].description;
    console.log(number)
}
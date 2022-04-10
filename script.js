// Selecting DOM Elements

    // Personal Information
const fullName = document.getElementById("name");
const job = document.getElementById("job");
const image = document.getElementById("image");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const address = document.getElementById("address");
const city = document.getElementById("city");
const district = document.getElementById("district");
const country = document.getElementById("country");
const github = document.getElementById("github");
    // Professional Summry
const summry = document.getElementById("summry");
    // Skills
        // React Development
const reactDev = document.getElementById("reactDev");
const reactDevBtn = document.getElementById("reactDevBtn");

        // Frontend Development
const frontendDev = document.getElementById("frontendDev");
const frontendDevBtn = document.getElementById("frontendDevBtn");
        // Backend Development
const backendDev = document.getElementById("backendDev");
const backendDevBtn = document.getElementById("backendDevBtn");
        // CMS Development
const cmsDev = document.getElementById("cmsDev");
const cmsDevBtn = document.getElementById("cmsDevBtn");
        // Others
const others = document.getElementById("others");
const othersBtn = document.getElementById("othersBtn");
    // Experience

    // Education
        // Degree
const degree = document.getElementById("degree");
        // Institute
const institute = document.getElementById("institute");
        // Starting Year
const startingYear = document.getElementById("startingYear");
        // ending Year
const endingYear = document.getElementById("endingYear");
        // Adding Education
const addEdu = document.getElementById("addEdu");
// Genrate Button
const genBtn = document.getElementById("genBtn");

// Resume Template DOM Elements Selecting
        // Template Personal Info
const tempName = document.querySelector(".personal-info #tempName");
const tempJob = document.querySelector(".personal-info #tempJob");
const tempEmail = document.querySelector(".personal-info #tempEmail");
const tempPhone = document.querySelector(".personal-info #tempPhone");
const tempAddress = document.querySelector(".personal-info #tempAddress");
const tempCity = document.querySelector(".personal-info #tempCity");
const tempDist = document.querySelector(".personal-info #tempDist");
const tempCountry = document.querySelector(".personal-info #tempCountry");
const tempGithub = document.querySelector(".personal-info #tempGithub");
// const tempImage = document.querySelector(".personal-info #tempImage");
        // Template Proffessional Info
const tempProfile = document.querySelector(".profile #tempSummry");

// Functions
        // Genrating Resume
const genrateResume = (e) => {
        e.preventDefault();
        // Entering Personal Info
        tempName.innerText = fullName.value;
        tempJob.innerText = job.value;
        tempEmail.innerText = email.value;
        tempPhone.innerText = phone.value;
        tempAddress.innerText = address.value;
        tempCity.innerText = city.value;
        tempDist.innerText = district.value;
        tempCountry.innerText = country.value;
        tempGithub.innerText = github.value;
        // Entering Proffessional Summry
        tempProfile.innerText = summry.value
        // Skills
        console.log(fullName.value);
}

// Event Listeners
        // Genrate Button
genBtn.addEventListener("click", genrateResume);

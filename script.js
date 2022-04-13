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
const addDetailBtn = document.getElementById("addDetailBtn");
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
    
}

// Adding React Skills
const addReactSkills = (e) => {
        e.preventDefault();
        let newInput = '<input type="text" class="form-control mb-2" placeholder="React">';
        reactDevBtn.insertAdjacentHTML("beforebegin", newInput);
}
// Adding Frontend Skills
const addFrontendSkills = (e) => {
        e.preventDefault();
        let newInput = '<input type="text" class="form-control mb-2" placeholder="HTML">';
        frontendDevBtn.insertAdjacentHTML("beforebegin", newInput);
}
// Adding Backend Skills
const addBackendSkills = (e) => {
        e.preventDefault();
        let newInput = '<input type="text" class="form-control mb-2" placeholder="PHP">';
        backendDevBtn.insertAdjacentHTML("beforebegin", newInput);
}
// Adding CMS Skills
const addCmsSkills = (e) => {
        e.preventDefault();
        let newInput = '<input type="text" class="form-control mb-2" placeholder="WordPress">';
        cmsDevBtn.insertAdjacentHTML("beforebegin", newInput);
}
// Adding Other Skills
const addOtherSkills = (e) => {
        e.preventDefault();
        let newInput = '<input type="text" class="form-control mb-2" placeholder="Scrum Master">';
        othersBtn.insertAdjacentHTML("beforebegin", newInput);
}
// Adding Details
const addDetails = (e) => {
        e.preventDefault();
        let detail = '<input type="text" id="workDetail" class="form-control mb-1" placeholder="Detail about your work at company">'
        addDetailBtn.insertAdjacentHTML("beforebegin", detail);      
}
// Adding Experience
const addExperience = (e) => {
        e.preventDefault();
        let exp = '<input type="text" id="role" class="form-control mb-1" placeholder="Your Role: Web Developer"><input type="text" id="company" class="form-control mb-1" placeholder="Company: Amazon Pvt Ltd - USA"><input type="number" id="startMonth" class="form-control mb-1" placeholder="Starting Month eg: 02"><input type="number" id="startingYear" class="form-control mb-1" placeholder="Starting Year eg: 2009"><input type="number" id="endingMonth" class="form-control mb-1" placeholder="Ending Month eg: 12"><input type="number" id="endingYear" class="form-control mb-1" placeholder="Ending Year eg: 2011"><input type="text" id="workDetail" class="form-control mb-1" placeholder="Detail about your work at company"><div class="detailBtn text-center"><button type="submit" id="addDetails" class="btn btn-sm btn-info mb-2">Add Details</button></div>'
        addExp.insertAdjacentHTML("beforebegin", exp);      
}
// Adding Education
const addEducation = (e) => {
        e.preventDefault();
        let eduDiv = '<div id="edu" class="education mb-2"><input type="text" id="degree" class="form-control mb-1" placeholder="Your Degree eg: Masters in Computer Science"><input type="text" id="institute" class="form-control mb-1" placeholder="Intitute eg: GC University Lahore"><input type="number" id="startingYear" class="form-control mb-1" placeholder="Starting Year eg: 2009"><input type="number" id="endingYear" class="form-control mb-1" placeholder="Ending Year eg: 2011"></div>'
        addEdu.insertAdjacentHTML("beforebegin", eduDiv);      
}

// Event Listeners
        // Genrate Button
genBtn.addEventListener("click", genrateResume);
reactDevBtn.addEventListener("click", addReactSkills);
frontendDevBtn.addEventListener("click", addFrontendSkills);
backendDevBtn.addEventListener("click", addBackendSkills);
cmsDevBtn.addEventListener("click", addCmsSkills);
othersBtn.addEventListener("click", addOtherSkills);
        // Add Experience
addDetailBtn.addEventListener("click", addDetails);
console.log(addDetailBtn);
        // Add Experience
addExp.addEventListener("click", addExperience);
        // Add Education
addEdu.addEventListener("click", addEducation);



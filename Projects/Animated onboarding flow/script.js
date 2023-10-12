const steps = document.querySelectorAll('.onboarding-step');
let currentStep = 0;
const progressBar = document.querySelector('.progress');

function showStep(stepIndex) {
    steps[currentStep].classList.remove('active');
    steps[stepIndex].classList.add('active');
    currentStep = stepIndex;
    progressBar.style.width = `${(stepIndex / (steps.length - 1)) * 100}%`;

    if (currentStep === steps.length - 1) {
        setTimeout(() => {
            window.location.href = 'next-page.html';
        }, 1000);
    }
}

function nextStep() {
    if (currentStep < steps.length - 1) {
        showStep(currentStep + 1);
    } else {
        // All onboarding steps are complete, so navigate to the next HTML page.
        window.location.href = "nextPage.html";
    }
}

function previousStep() {
    if (currentStep > 0) {
        showStep(currentStep - 1);
    }
}

document.getElementById('prev-button').addEventListener('click', previousStep);
document.getElementById('next-button').addEventListener('click', nextStep);




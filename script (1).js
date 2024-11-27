document.addEventListener('DOMContentLoaded', function() {
    const resumeForm = document.getElementById('resumeForm');
    const previewContent = document.getElementById('previewContent');
    const downloadButton = document.getElementById('downloadButton');
    const templates = document.querySelectorAll('.template');

    resumeForm.addEventListener('submit', function(event) {
        event.preventDefault();
        generateResume();
    });

    templates.forEach(template => {
        template.addEventListener('click', function() {
            selectTemplate(template.id);
        });
    });

    function generateResume() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const address = document.getElementById('address').value;
        const workTitle = document.getElementById('workTitle').value;
        const workPlace = document.getElementById('workPlace').value;
        const workDescription = document.getElementById('workDescription').value;
        const eduDegree = document.getElementById('eduDegree').value;
        const eduInstitution = document.getElementById('eduInstitution').value;
        const eduYear = document.getElementById('eduYear').value;
        const skills = document.getElementById('skills').value;

        const resumeHTML = `
            <h3>${name}</h3>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <p>Address: ${address}</p>
            <h3>Work Experience</h3>
            <p><strong>${workTitle}</strong> at ${workPlace}</p>
            <p>${workDescription}</p>
            <h3>Education</h3>
            <p>${eduDegree} from ${eduInstitution} (${eduYear})</p>
            <h3>Skills</h3>
            <p>${skills}</p>
        `;
        
        previewContent.innerHTML = resumeHTML;
        downloadButton.disabled = false;
    }

    function selectTemplate(templateId) {
        const selectedTemplate = document.getElementById(templateId);
        templates.forEach(template => {
            template.classList.remove('selected');
        });
        selectedTemplate.classList.add('selected');
    }
});

document.addEventListener("DOMContentLoaded", function () {
   

    function populateList(id, data) {
        const list = document.getElementById(id);
        data.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item.title;
            li.onclick = () => alert(item.details);
            list.appendChild(li);
        });
    }

    populateList("research-list", researchData);
    populateList("internship-list", internshipData);
    populateList("activities-list", activitiesData);
});

function showSection(sectionId) {
    document.querySelectorAll(".content").forEach(section => {
        section.style.display = section.id === sectionId ? "block" : "none";
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const researchData = [
        { title: "Paper on NLP", details: "Published at NAACL 2024" },
        { title: "Text Style Transfer", details: "Analyzing linguistic transformations" }
    ];

    const internshipData = [
        { title: "AI Research Intern", details: "Worked on sentiment analysis models" }
    ];

    const activitiesData = [
        { title: "Hackathon Winner", details: "First place in AI competition" },
        { title: "Conference Speaker", details: "Gave a talk on NLP advancements" }
    ];

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

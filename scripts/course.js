const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the basic concepts of program design and development.',
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to script writing.',
        technology: ['HTML', 'CSS'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more proficient in writing functions and modular code.',
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces classes, objects, inheritance, and polymorphism.',
        technology: ['C#'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Students will learn to create dynamic websites using JavaScript.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Web Frontend Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior web fundamentals focusing on API integration.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const courseContainer = document.querySelector("#course-container");
    const totalCreditsEl = document.querySelector("#total-credits");
    const allBtn = document.querySelector("#all-btn");
    const cseBtn = document.querySelector("#cse-btn");
    const wddBtn = document.querySelector("#wdd-btn");

    function displayCourses(filteredCourses) {
        courseContainer.innerHTML = "";
        filteredCourses.forEach(course => {
            const card = document.createElement("div");
            card.className = `course-card ${course.completed ? 'completed' : ''}`;
            card.textContent = `${course.subject} ${course.number}`;
            courseContainer.appendChild(card);
        });

        const totalCredits = filteredCourses.reduce((acc, course) => acc + course.credits, 0);
        totalCreditsEl.textContent = `The total number of credits required for courses listed above is ${totalCredits}`;
    }

    function setActiveBtn(activeBtn) {
        [allBtn, cseBtn, wddBtn].forEach(btn => btn.classList.remove("active"));
        activeBtn.classList.add("active");
    }

    allBtn.addEventListener("click", () => {
        setActiveBtn(allBtn);
        displayCourses(courses);
    });

    cseBtn.addEventListener("click", () => {
        setActiveBtn(cseBtn);
        displayCourses(courses.filter(c => c.subject === "CSE"));
    });

    wddBtn.addEventListener("click", () => {
        setActiveBtn(wddBtn);
        displayCourses(courses.filter(c => c.subject === "WDD"));
    });

    displayCourses(courses);
});

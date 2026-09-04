const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces the basics of programming using Python.',
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Introduces core HTML5, CSS3 styling, and responsive layout foundations.',
        technology: ['HTML', 'CSS'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Focuses on writing functions, parameter passing, and testing Python code.',
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Object-oriented programming concepts using C#.',
        technology: ['C#'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Building dynamic user interfaces using modern DOM manipulation and JavaScript.',
        technology: ['HTML', 'CSS', 'JS'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Focuses on accessibility, API interaction, performance optimization, and responsive design.',
        technology: ['HTML', 'CSS', 'JS'],
        completed: false
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const courseContainer = document.getElementById('course-container');
    const creditCountSpan = document.getElementById('credit-count');

    function displayCourses(filteredCourses) {
        courseContainer.innerHTML = '';

        filteredCourses.forEach(course => {
            const card = document.createElement('div');
            card.className = `course-card ${course.completed ? 'completed' : 'incomplete'}`;
            card.textContent = `${course.subject} ${course.number}`;
            courseContainer.appendChild(card);
        });

        const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
        creditCountSpan.textContent = totalCredits;
    }

    document.getElementById('all-btn').addEventListener('click', (e) => {
        setActiveBtn(e.target);
        displayCourses(courses);
    });

    document.getElementById('cse-btn').addEventListener('click', (e) => {
        setActiveBtn(e.target);
        displayCourses(courses.filter(c => c.subject === 'CSE'));
    });

    document.getElementById('wdd-btn').addEventListener('click', (e) => {
        setActiveBtn(e.target);
        displayCourses(courses.filter(c => c.subject === 'WDD'));
    });

    function setActiveBtn(activeBtn) {
        document.querySelectorAll('.filter-buttons button').forEach(btn => btn.classList.remove('active-filter'));
        activeBtn.classList.add('active-filter');
    }

    displayCourses(courses);
});

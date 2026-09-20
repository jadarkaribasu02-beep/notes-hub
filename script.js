/**
 * NOTES HUB - INTERACTIVE JAVASCRIPT
 * Developer: Karibasu Jadar
 */

document.addEventListener('DOMContentLoaded', () => {

    // 8 Subjects Data Registry
    const subjectsData = {
        c: {
            title: 'C Programming',
            category: 'Programming',
            iconClass: 'fa-solid fa-code',
            iconBg: 'icon-bg-c',
            mainDrive: 'https://drive.google.com/drive/u/1/folders/1txybjRMtiHbXDvub4I5YscUVQgk5m-k7',
            modules: [
                { title: 'Module 1: C Fundamentals & Control Flow', desc: 'Variables, Operators, if-else, Loops', link: 'https://drive.google.com/drive/u/1/folders/1txybjRMtiHbXDvub4I5YscUVQgk5m-k7' },
                { title: 'Module 2: Arrays & Strings', desc: '1D/2D Arrays & String Handling', link: 'https://drive.google.com/drive/u/1/folders/1txybjRMtiHbXDvub4I5YscUVQgk5m-k7' },
                { title: 'Module 3: Functions & Recursion', desc: 'User functions & Parameter passing', link: 'https://drive.google.com/drive/u/1/folders/1txybjRMtiHbXDvub4I5YscUVQgk5m-k7' },
                { title: 'Module 4: Pointers & Structures', desc: 'Memory addresses & Structure arrays', link: 'https://drive.google.com/drive/u/1/folders/1txybjRMtiHbXDvub4I5YscUVQgk5m-k7' },
                { title: 'Module 5: Dynamic Memory & Files', desc: 'malloc, free & File pointers', link: 'https://drive.google.com/drive/u/1/folders/1txybjRMtiHbXDvub4I5YscUVQgk5m-k7' }
            ]
        },
        python: {
            title: 'Python Programming',
            category: 'Programming',
            iconClass: 'fa-brands fa-python',
            iconBg: 'icon-bg-py',
            mainDrive: 'https://drive.google.com/drive/u/1/folders/1txybjRMtiHbXDvub4I5YscUVQgk5m-k7',
            modules: [
                { title: 'Module 1: Python Basics (Scribd)', desc: 'Data Types, Control Structures, I/O', link: 'https://www.scribd.com/document/918957332/Python-Progr-Module-1-Final-1BPLCK105B-2025-scheme' },
                { title: 'Module 2: Collections & Methods', desc: 'Lists, Tuples, Dictionaries', link: 'https://drive.google.com/drive/u/1/folders/1txybjRMtiHbXDvub4I5YscUVQgk5m-k7' },
                { title: 'Module 3: Functions & Modules', desc: 'Def, Lambda, Standard Library', link: 'https://drive.google.com/drive/u/1/folders/1txybjRMtiHbXDvub4I5YscUVQgk5m-k7' },
                { title: 'Module 4: OOP Concepts', desc: 'Classes, Objects, Inheritance', link: 'https://drive.google.com/drive/u/1/folders/1txybjRMtiHbXDvub4I5YscUVQgk5m-k7' },
                { title: 'Module 5: Files & Exceptions', desc: 'Try-except & File reading/writing', link: 'https://drive.google.com/drive/u/1/folders/1txybjRMtiHbXDvub4I5YscUVQgk5m-k7' }
            ]
        },
        maths: {
            title: 'Question Bank & Math',
            category: 'Science & Math',
            iconClass: 'fa-solid fa-square-root-variable',
            iconBg: 'icon-bg-math',
            mainDrive: 'https://drive.google.com/drive/u/1/folders/1txybjRMtiHbXDvub4I5YscUVQgk5m-k7',
            modules: [
                { title: 'Calculus & Differential Equations', desc: 'Polar curves & Partial derivatives', link: 'https://drive.google.com/drive/u/1/folders/1txybjRMtiHbXDvub4I5YscUVQgk5m-k7' },
                { title: 'Linear Algebra & Matrices', desc: 'Rank of matrix & Linear systems', link: 'https://drive.google.com/drive/u/1/folders/1txybjRMtiHbXDvub4I5YscUVQgk5m-k7' },
                { title: 'Question Bank Collection', desc: 'Previous years model question papers', link: 'https://drive.google.com/drive/u/1/folders/1txybjRMtiHbXDvub4I5YscUVQgk5m-k7' }
            ]
        },
        eee: {
            title: 'Electrical Engineering (EEE)',
            category: 'Core Engg',
            iconClass: 'fa-solid fa-bolt',
            iconBg: 'icon-bg-eee',
            mainDrive: 'https://drive.google.com/drive/folders/12Z2YXb-GklA9oN8SjEmlnc5ypKQESvzY?usp=sharing',
            modules: [
                { title: 'Module 1: DC Circuits & Theorems', desc: 'KCL, KVL, Mesh analysis', link: 'https://drive.google.com/drive/folders/12Z2YXb-GklA9oN8SjEmlnc5ypKQESvzY?usp=sharing' },
                { title: 'Module 2: Single Phase AC Circuits', desc: 'Phasor diagrams & RLC circuits', link: 'https://drive.google.com/drive/folders/12Z2YXb-GklA9oN8SjEmlnc5ypKQESvzY?usp=sharing' },
                { title: 'Module 3: Transformers', desc: 'Construction, Working principle', link: 'https://drive.google.com/drive/folders/12Z2YXb-GklA9oN8SjEmlnc5ypKQESvzY?usp=sharing' },
                { title: 'Module 4: Electrical Machines', desc: 'DC Motors & Induction Motors', link: 'https://drive.google.com/drive/folders/12Z2YXb-GklA9oN8SjEmlnc5ypKQESvzY?usp=sharing' },
                { title: 'Module 5: Power Systems', desc: 'Electricity generation & Wiring', link: 'https://drive.google.com/drive/folders/12Z2YXb-GklA9oN8SjEmlnc5ypKQESvzY?usp=sharing' }
            ]
        },
        ai: {
            title: 'Artificial Intelligence',
            category: 'Programming',
            iconClass: 'fa-solid fa-brain',
            iconBg: 'icon-bg-ai',
            mainDrive: 'https://drive.google.com/drive/u/1/folders/1Xr6b0x4PFnm6fiu1CDtqfQb5RHHOOewb',
            modules: [
                { title: 'Module 1: Search & Heuristics', desc: 'A* algorithm & Problem Solving', link: 'https://drive.google.com/drive/u/1/folders/1Xr6b0x4PFnm6fiu1CDtqfQb5RHHOOewb' },
                { title: 'Module 2: Knowledge Representation', desc: 'Propositional & First order logic', link: 'https://drive.google.com/drive/u/1/folders/1Xr6b0x4PFnm6fiu1CDtqfQb5RHHOOewb' },
                { title: 'Module 3: Machine Learning Principles', desc: 'Supervised vs Unsupervised learning', link: 'https://drive.google.com/drive/u/1/folders/1Xr6b0x4PFnm6fiu1CDtqfQb5RHHOOewb' },
                { title: 'Module 4: Neural Networks', desc: 'Perceptrons & Backpropagation', link: 'https://drive.google.com/drive/u/1/folders/1Xr6b0x4PFnm6fiu1CDtqfQb5RHHOOewb' },
                { title: 'Module 5: AI Ethics & Applications', desc: 'NLP & Robotics overview', link: 'https://drive.google.com/drive/u/1/folders/1Xr6b0x4PFnm6fiu1CDtqfQb5RHHOOewb' }
            ]
        },
        chemistry: {
            title: 'Engineering Chemistry',
            category: 'Science & Math',
            iconClass: 'fa-solid fa-flask',
            iconBg: 'icon-bg-chem',
            mainDrive: 'https://drive.google.com/drive/u/1/folders/1T0YIEUShQGh4UlDvw6mBNJV4JCKVbM9u',
            modules: [
                { title: 'Module 1: Electrochemistry & Batteries', desc: 'Nernst equation & Li-ion cells', link: 'https://drive.google.com/drive/u/1/folders/1T0YIEUShQGh4UlDvw6mBNJV4JCKVbM9u' },
                { title: 'Module 2: Corrosion Science', desc: 'Electrochemical theory & Protection', link: 'https://drive.google.com/drive/u/1/folders/1T0YIEUShQGh4UlDvw6mBNJV4JCKVbM9u' },
                { title: 'Module 3: Polymers & Composites', desc: 'Commercial polymers & Plastics', link: 'https://drive.google.com/drive/u/1/folders/1T0YIEUShQGh4UlDvw6mBNJV4JCKVbM9u' },
                { title: 'Module 4: Water Technology', desc: 'Hardness & Desalination', link: 'https://drive.google.com/drive/u/1/folders/1T0YIEUShQGh4UlDvw6mBNJV4JCKVbM9u' },
                { title: 'Module 5: Instrumental Methods', desc: 'UV-Vis Spectroscopy & Conductometry', link: 'https://drive.google.com/drive/u/1/folders/1T0YIEUShQGh4UlDvw6mBNJV4JCKVbM9u' }
            ]
        },
        webdev: {
            title: 'Web Development',
            category: 'Programming',
            iconClass: 'fa-solid fa-laptop-code',
            iconBg: 'icon-bg-web',
            mainDrive: 'https://drive.google.com/drive/u/1/folders/1txybjRMtiHbXDvub4I5YscUVQgk5m-k7',
            modules: [
                { title: 'HTML5 Semantic Structure', desc: 'Tags, Forms & Media', link: 'https://drive.google.com/drive/u/1/folders/1txybjRMtiHbXDvub4I5YscUVQgk5m-k7' },
                { title: 'CSS3 Responsive Layouts', desc: 'Flexbox, Grid & Glassmorphism', link: 'https://drive.google.com/drive/u/1/folders/1txybjRMtiHbXDvub4I5YscUVQgk5m-k7' },
                { title: 'JavaScript Essentials', desc: 'DOM, Events, ES6+ & Async/Await', link: 'https://drive.google.com/drive/u/1/folders/1txybjRMtiHbXDvub4I5YscUVQgk5m-k7' }
            ]
        },
        dsa: {
            title: 'Data Structures & Algo',
            category: 'Programming',
            iconClass: 'fa-solid fa-diagram-project',
            iconBg: 'icon-bg-dsa',
            mainDrive: 'https://drive.google.com/drive/u/1/folders/1txybjRMtiHbXDvub4I5YscUVQgk5m-k7',
            modules: [
                { title: 'Module 1: Stacks & Queues', desc: 'Array & Linked List implementation', link: 'https://drive.google.com/drive/u/1/folders/1txybjRMtiHbXDvub4I5YscUVQgk5m-k7' },
                { title: 'Module 2: Linked List Variants', desc: 'Singly, Doubly & Circular lists', link: 'https://drive.google.com/drive/u/1/folders/1txybjRMtiHbXDvub4I5YscUVQgk5m-k7' },
                { title: 'Module 3: Trees & BST', desc: 'Traversals & BST operations', link: 'https://drive.google.com/drive/u/1/folders/1txybjRMtiHbXDvub4I5YscUVQgk5m-k7' },
                { title: 'Module 4: Graphs & Shortest Paths', desc: 'BFS, DFS & Dijkstra algorithm', link: 'https://drive.google.com/drive/u/1/folders/1txybjRMtiHbXDvub4I5YscUVQgk5m-k7' },
                { title: 'Module 5: Sorting & Hashing', desc: 'Quick Sort, Merge Sort & Hash tables', link: 'https://drive.google.com/drive/u/1/folders/1txybjRMtiHbXDvub4I5YscUVQgk5m-k7' }
            ]
        }
    };

    // Elements
    const searchInput = document.getElementById('searchInput');
    const clearSearchBtn = document.getElementById('clearSearchBtn');
    const filterChips = document.querySelectorAll('.filter-chip');
    const subjectCards = document.querySelectorAll('.subject-card');
    const emptySearchState = document.getElementById('emptySearchState');
    const resetSearchBtn = document.getElementById('resetSearchBtn');

    // Modal
    const notesModal = document.getElementById('notesModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modalSubjectTitle = document.getElementById('modalSubjectTitle');
    const modalSubjectBadge = document.getElementById('modalSubjectBadge');
    const modalSubjectIcon = document.getElementById('modalSubjectIcon');
    const modalSubjectContent = document.getElementById('modalSubjectContent');
    const modalActionBtn = document.getElementById('modalActionBtn');

    let currentCategory = 'all';
    let currentSearchTerm = '';

    function filterSubjects() {
        let visibleCount = 0;

        subjectCards.forEach(card => {
            const cardCategory = card.dataset.category;
            const cardTitle = card.dataset.title.toLowerCase();
            const matchesCategory = (currentCategory === 'all' || cardCategory === currentCategory);
            const matchesSearch = (cardTitle.includes(currentSearchTerm));

            if (matchesCategory && matchesSearch) {
                card.classList.remove('hidden');
                visibleCount++;
            } else {
                card.classList.add('hidden');
            }
        });

        if (visibleCount === 0) {
            emptySearchState.classList.remove('hidden');
        } else {
            emptySearchState.classList.add('hidden');
        }
    }

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSearchTerm = e.target.value.toLowerCase().trim();
            if (currentSearchTerm.length > 0) {
                clearSearchBtn.classList.remove('hidden');
            } else {
                clearSearchBtn.classList.add('hidden');
            }
            filterSubjects();
        });
    }

    if (clearSearchBtn) {
        clearSearchBtn.addEventListener('click', () => {
            searchInput.value = '';
            currentSearchTerm = '';
            clearSearchBtn.classList.add('hidden');
            filterSubjects();
        });
    }

    filterChips.forEach(chip => {
        chip.addEventListener('click', () => {
            filterChips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            currentCategory = chip.dataset.category;
            filterSubjects();
        });
    });

    if (resetSearchBtn) {
        resetSearchBtn.addEventListener('click', () => {
            if (searchInput) searchInput.value = '';
            currentSearchTerm = '';
            currentCategory = 'all';
            clearSearchBtn.classList.add('hidden');
            filterChips.forEach(c => c.classList.remove('active'));
            if (filterChips[0]) filterChips[0].classList.add('active');
            filterSubjects();
        });
    }

    // Open Modal
    function openNotesModal(subjectId) {
        const data = subjectsData[subjectId];
        if (!data) return;

        modalSubjectTitle.textContent = data.title;
        modalSubjectBadge.textContent = data.category;
        
        modalSubjectIcon.innerHTML = `<i class="${data.iconClass}"></i>`;
        modalSubjectIcon.className = `modal-icon ${data.iconBg}`;

        modalSubjectContent.innerHTML = '';
        data.modules.forEach((mod, index) => {
            const moduleEl = document.createElement('div');
            moduleEl.className = 'module-item';
            moduleEl.innerHTML = `
                <div class="module-left">
                    <div class="module-number">${index + 1}</div>
                    <div>
                        <div class="module-title">${mod.title}</div>
                        <div class="module-subtitle">${mod.desc}</div>
                    </div>
                </div>
                <a href="${mod.link}" target="_blank" class="btn-outline">
                    <span>Open</span>
                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
            `;
            modalSubjectContent.appendChild(moduleEl);
        });

        modalActionBtn.onclick = () => {
            window.open(data.mainDrive, '_blank');
        };

        notesModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeNotesModal() {
        notesModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    document.querySelectorAll('.view-notes-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const subjectId = btn.dataset.subject;
            openNotesModal(subjectId);
        });
    });

    subjectCards.forEach(card => {
        card.addEventListener('click', () => {
            const subjectId = card.dataset.subjectId;
            openNotesModal(subjectId);
        });
    });

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeNotesModal);
    }

    if (notesModal) {
        notesModal.addEventListener('click', (e) => {
            if (e.target === notesModal) {
                closeNotesModal();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && notesModal.classList.contains('active')) {
            closeNotesModal();
        }
    });

});

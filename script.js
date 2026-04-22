document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const openUploadBtn = document.getElementById('openUploadBtn');
    const heroUploadBtn = document.getElementById('heroUploadBtn');
    const uploadModalOverlay = document.getElementById('uploadModalOverlay');
    const closeUploadBtn = document.getElementById('closeUploadBtn');
    const uploadForm = document.getElementById('uploadForm');
    const subjectSelect = document.getElementById('subjectSelect');
    const moduleSelect = document.getElementById('moduleSelect');
    const moduleGroup = document.getElementById('moduleGroup');
    const noteTitleInput = document.getElementById('noteTitle');
    const fileUploadInput = document.getElementById('fileUpload');
    
    // Auth Elements
    const openAuthBtn = document.getElementById('openAuthBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    const authModalOverlay = document.getElementById('authModalOverlay');
    const closeAuthBtn = document.getElementById('closeAuthBtn');
    const tabLogin = document.getElementById('tabLogin');
    const tabRegister = document.getElementById('tabRegister');
    const authForm = document.getElementById('authForm');
    const authUsernameInput = document.getElementById('authUsername');
    const authPasswordInput = document.getElementById('authPassword');
    const authSubmitBtn = document.getElementById('authSubmitBtn');
    const authTitle = document.getElementById('authTitle');
    
    const authEmailInput = document.getElementById('authEmail');
    const authMobileInput = document.getElementById('authMobile');
    const registerOnlyFields = document.querySelectorAll('.register-only');

    const subjectCards = document.querySelectorAll('.subject-card');
    const subjectModalOverlay = document.getElementById('subjectModalOverlay');
    const closeSubjectBtn = document.getElementById('closeSubjectBtn');
    const viewSubjectTitle = document.getElementById('viewSubjectTitle');
    const subjectModalBody = document.getElementById('subjectModalBody');
    
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');

    // Default configuration
    const subjectNames = {
        'c': 'C Programming',
        'python': 'Python',
        'maths': 'Maths',
        'eee': 'EEE',
        'ai': 'Artificial Intelligence',
        'chemistry': 'Chemistry',
        'html': 'HTML',
        'css': 'CSS'
    };

    const generalSubjects = ['html', 'css'];

    // Initialize initial state if empty
    if (!localStorage.getItem('notesData')) {
        localStorage.setItem('notesData', JSON.stringify({}));
    }
    
    // Initialize mock user DB with admin
    if (!localStorage.getItem('users')) {
        localStorage.setItem('users', JSON.stringify([{username: 'karibasu', password: '0911', role: 'admin'}]));
    }

    let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
    let authMode = 'login';

    function updateUI() {
        if (currentUser) {
            openAuthBtn.classList.add('hidden');
            logoutBtn.classList.remove('hidden');
            openUploadBtn.classList.remove('hidden');
            if (heroUploadBtn) heroUploadBtn.classList.remove('hidden');
        } else {
            openAuthBtn.classList.remove('hidden');
            logoutBtn.classList.add('hidden');
            openUploadBtn.classList.add('hidden');
            if (heroUploadBtn) heroUploadBtn.classList.add('hidden');
        }
    }
    updateUI();

    // Auth Handlers
    const openAuthModal = () => {
        authModalOverlay.classList.add('active');
        authForm.classList.remove('hidden');
    };
    const closeAuthModal = () => authModalOverlay.classList.remove('active');
    
    openAuthBtn.addEventListener('click', (e) => { e.preventDefault(); openAuthModal(); });
    closeAuthBtn.addEventListener('click', closeAuthModal);

    logoutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        currentUser = null;
        localStorage.removeItem('currentUser');
        updateUI();
        showToast('Logged out successfully');
    });

    tabLogin.addEventListener('click', () => {
        authMode = 'login';
        tabLogin.classList.add('active');
        tabRegister.classList.remove('active');
        authTitle.innerHTML = 'Login to <span class="text-gradient">Hub</span>';
        authSubmitBtn.innerHTML = 'Login <i class="fa-solid fa-arrow-right-to-bracket"></i>';
        registerOnlyFields.forEach(el => el.classList.add('hidden'));
        authEmailInput.required = false;
        authMobileInput.required = false;
    });
    
    tabRegister.addEventListener('click', () => {
        authMode = 'register';
        tabRegister.classList.add('active');
        tabLogin.classList.remove('active');
        authTitle.innerHTML = 'Create <span class="text-gradient">Account</span>';
        authSubmitBtn.innerHTML = 'Register <i class="fa-solid fa-user-plus"></i>';
        registerOnlyFields.forEach(el => el.classList.remove('hidden'));
        authEmailInput.required = true;
        authMobileInput.required = true;
    });

    authForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = authUsernameInput.value.trim();
        const password = authPasswordInput.value.trim();
        
        let users = JSON.parse(localStorage.getItem('users'));

        if (authMode === 'login') {
            if (!username || !password) return;
            const user = users.find(u => u.username === username && u.password === password);
            if (user) {
                currentUser = user;
                localStorage.setItem('currentUser', JSON.stringify(user));
                authForm.reset();
                closeAuthModal();
                updateUI();
                showToast(`Welcome back, ${username}!`);
            } else {
                alert('Invalid credentials!');
            }
        } else {
            const email = authEmailInput.value.trim();
            const mobile = authMobileInput.value.trim();
            if (!username || !password || !email || !mobile) return;

            if (users.find(u => u.username === username)) {
                alert('Username already exists!');
            } else {
                const newUser = { username, password, email, mobile, role: 'user' };
                users.push(newUser);
                localStorage.setItem('users', JSON.stringify(users));
                currentUser = newUser;
                localStorage.setItem('currentUser', JSON.stringify(newUser));
                authForm.reset();
                closeAuthModal();
                updateUI();
                showToast(`Account created, ${username}!`);
            }
        }
    });

    // Modal Logic (Upload)
    const openUploadModal = () => {
        if (!currentUser) {
            alert("Please login to upload notes.");
            return;
        }
        uploadModalOverlay.classList.add('active');
    };
    const closeUploadModal = () => uploadModalOverlay.classList.remove('active');

    openUploadBtn.addEventListener('click', (e) => { e.preventDefault(); openUploadModal(); });
    if (heroUploadBtn) heroUploadBtn.addEventListener('click', openUploadModal);
    closeUploadBtn.addEventListener('click', closeUploadModal);

    // Subject Dropdown Logic in Upload Form
    subjectSelect.addEventListener('change', (e) => {
        const val = e.target.value;
        if (generalSubjects.includes(val)) {
            moduleSelect.disabled = true;
            moduleGroup.style.opacity = '0.5';
            moduleSelect.value = '';
        } else {
            moduleSelect.disabled = false;
            moduleGroup.style.opacity = '1';
        }
    });

    // Handle Upload Submit
    uploadForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const subject = subjectSelect.value;
        const module = moduleSelect.disabled ? 'general' : moduleSelect.value;
        const title = noteTitleInput.value;
        const fileVal = fileUploadInput.value.split('\\').pop() || 'note.pdf'; // Handle mock file name

        if (!subject || (!moduleSelect.disabled && !module)) {
            alert("Please fill all required fields.");
            return;
        }

        // Save to localStorage
        const data = JSON.parse(localStorage.getItem('notesData'));
        
        if (!data[subject]) {
            data[subject] = {};
        }

        if (!data[subject][module]) {
            data[subject][module] = [];
        }

        data[subject][module].push({
            id: Date.now(),
            title: title,
            fileName: fileVal,
            date: new Date().toLocaleDateString()
        });

        localStorage.setItem('notesData', JSON.stringify(data));

        // Reset and close
        uploadForm.reset();
        moduleSelect.disabled = false;
        moduleGroup.style.opacity = '1';
        closeUploadModal();
        showToast('Note uploaded successfully!');
    });

    // Subject View Logic
    const openSubjectModal = () => subjectModalOverlay.classList.add('active');
    const closeSubjectModal = () => subjectModalOverlay.classList.remove('active');

    closeSubjectBtn.addEventListener('click', closeSubjectModal);

    subjectCards.forEach(card => {
        card.addEventListener('click', () => {
            const subject = card.getAttribute('data-subject');
            viewSubjectTitle.innerHTML = `${subjectNames[subject]} <span class="text-gradient">Notes</span>`;
            renderNotesForSubject(subject);
            openSubjectModal();
        });
    });

    function renderNotesForSubject(subjectKey) {
        const data = JSON.parse(localStorage.getItem('notesData'));
        const subjectData = data[subjectKey] || {};

        let html = '';

        if (generalSubjects.includes(subjectKey)) {
            const notes = subjectData['general'] || [];
            if (notes.length === 0) {
                html = getEmptyStateHTML();
            } else {
                html = `
                    <div class="module-card">
                        <h4>General Notes</h4>
                        <ul class="notes-list">
                            ${notes.map(note => getNoteItemHTML(note)).join('')}
                        </ul>
                    </div>
                `;
            }
        } else {
            html = '<div class="modules-container">';
            
            for (let i = 1; i <= 5; i++) {
                const notes = subjectData[i.toString()] || [];
                html += `
                    <div class="module-card">
                        <h4>Module ${i}</h4>
                        ${notes.length > 0 ? `
                        <ul class="notes-list">
                            ${notes.map(note => getNoteItemHTML(note)).join('')}
                        </ul>
                        ` : `
                        <p style="color: var(--text-secondary); font-size: 13px; text-align: center; margin-top: 10px;">No notes uploaded for Module ${i} yet.</p>
                        `}
                    </div>
                `;
            }
            
            html += '</div>';
        }

        subjectModalBody.innerHTML = html;
    }

    function getEmptyStateHTML() {
        return `
            <div class="empty-state">
                <i class="fa-solid fa-folder-open"></i>
                <h3>No notes found</h3>
                <p>Be the first to upload notes for this section!</p>
            </div>
        `;
    }

    function getNoteItemHTML(note) {
        return `
            <li class="note-item">
                <div class="note-info">
                    <i class="fa-solid fa-file-pdf note-icon"></i>
                    <div>
                        <div class="note-title">${note.title}</div>
                        <div style="font-size: 11px; color: var(--text-secondary);">${note.date} • ${note.fileName}</div>
                    </div>
                </div>
                <button class="btn secondary-btn" onclick="alert('Downloading: ${note.fileName}')"><i class="fa-solid fa-download"></i></button>
            </li>
        `;
    }

    // Toast Notification
    function showToast(message) {
        toastMessage.textContent = message;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3000);
    }

    // Contact Form Logic
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            contactForm.reset();
            showToast('Message sent successfully!');
        });
    }

    // Close Modals on outside click
    window.addEventListener('click', (e) => {
        if (e.target === uploadModalOverlay) closeUploadModal();
        if (e.target === subjectModalOverlay) closeSubjectModal();
        if (e.target === authModalOverlay) closeAuthModal();
    });
});

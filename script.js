document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const loginModal = document.getElementById('loginModal');
    const openLoginBtn = document.getElementById('openLogin');
    const closeLoginBtn = document.querySelector('.close-btn');
    const loginForm = document.getElementById('loginForm');
    const userAvatar = document.getElementById('userAvatar');
    const videoGrid = document.querySelector('.video-grid');
    
    // Sample video data
    const videos = [
        {
            id: 1,
            title: 'How to Build a Simple YouTube Clone with HTML, CSS & JavaScript',
            thumbnail: 'https://i.ytimg.com/vi/G3e-cpL7ofc/hqdefault.jpg',
            duration: '12:34',
            channel: 'Web Dev Simplified',
            channelAvatar: 'https://yt3.googleusercontent.com/ytc/APkrFKZWeMCsx4Q9e_Hm6nhOOUQ3fv96QGUXiMr1-pPP=s176-c-k-c0x00ffffff-no-rj',
            views: '125K',
            date: '2 weeks ago'
        },
        {
            id: 2,
            title: 'Learn CSS Animations in 20 Minutes - For Beginners',
            thumbnail: 'https://i.ytimg.com/vi/1Rs2ND1ryYc/hqdefault.jpg',
            duration: '20:01',
            channel: 'Web Dev Simplified',
            channelAvatar: 'https://yt3.googleusercontent.com/ytc/APkrFKZWeMCsx4Q9e_Hm6nhOOUQ3fv96QGUXiMr1-pPP=s176-c-k-c0x00ffffff-no-rj',
            views: '342K',
            date: '1 month ago'
        },
        {
            id: 3,
            title: 'Build a Netflix Clone with React, Firebase & Styled Components',
            thumbnail: 'https://i.ytimg.com/vi/tBweoUiMsDg/hqdefault.jpg',
            duration: '1:45:22',
            channel: 'Clever Programmer',
            channelAvatar: 'https://yt3.googleusercontent.com/ytc/APkrFKaqca-xQc5dHOB6TLU1UGnvh6eX1J4AfNvSShX4=s176-c-k-c0x00ffffff-no-rj',
            views: '1.2M',
            date: '5 months ago'
        },
        {
            id: 4,
            title: 'JavaScript Array Methods You Need to Know in 2023',
            thumbnail: 'https://i.ytimg.com/vi/R8rmfD9Y5-c/hqdefault.jpg',
            duration: '15:45',
            channel: 'Web Dev Simplified',
            channelAvatar: 'https://yt3.googleusercontent.com/ytc/APkrFKZWeMCsx4Q9e_Hm6nhOOUQ3fv96QGUXiMr1-pPP=s176-c-k-c0x00ffffff-no-rj',
            views: '89K',
            date: '3 weeks ago'
        },
        {
            id: 5,
            title: 'Build a Spotify Clone with JavaScript',
            thumbnail: 'https://i.ytimg.com/vi/XD5sZWxwJUk/hqdefault.jpg',
            duration: '1:12:45',
            channel: 'Clever Programmer',
            channelAvatar: 'https://yt3.googleusercontent.com/ytc/APkrFKaqca-xQc5dHOB6TLU1UGnvh6eX1J4AfNvSShX4=s176-c-k-c0x00ffffff-no-rj',
            views: '876K',
            date: '4 months ago'
        },
        {
            id: 6,
            title: 'CSS Grid Layout Crash Course',
            thumbnail: 'https://i.ytimg.com/vi/jV8B24rSN5o/hqdefault.jpg',
            duration: '28:12',
            channel: 'Traversy Media',
            channelAvatar: 'https://yt3.googleusercontent.com/ytc/APkrFKYcYswt_UhD7D0j6ddiQz6Gb8QqSJpqY7P0Y5r=s176-c-k-c0x00ffffff-no-rj',
            views: '543K',
            date: '2 months ago'
        }
    ];
    
    // Render videos
    function renderVideos() {
        videoGrid.innerHTML = '';
        videos.forEach(video => {
            const videoCard = document.createElement('div');
            videoCard.className = 'video-card';
            videoCard.innerHTML = `
                <div class="video-thumbnail">
                    <img src="${video.thumbnail}" alt="${video.title}">
                    <span class="video-duration">${video.duration}</span>
                </div>
                <div class="video-info">
                    <h3 class="video-title">${video.title}</h3>
                    <div class="video-channel">
                        <img class="channel-avatar" src="${video.channelAvatar}" alt="${video.channel}">
                        <span class="channel-name">${video.channel}</span>
                    </div>
                    <div class="video-stats">${video.views} views • ${video.date}</div>
                </div>
            `;
            videoGrid.appendChild(videoCard);
        });
    }
    
    // Modal functionality
    openLoginBtn.addEventListener('click', () => {
        loginModal.style.display = 'block';
    });
    
    closeLoginBtn.addEventListener('click', () => {
        loginModal.style.display = 'none';
    });
    
    window.addEventListener('click', (e) => {
        if (e.target === loginModal) {
            loginModal.style.display = 'none';
        }
    });
    
    // Login form submission
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Simple validation
        if (username && password) {
            // In a real app, you would validate credentials with a backend
            alert(`Welcome, ${username}!`);
            openLoginBtn.classList.add('hidden');
            userAvatar.classList.remove('hidden');
            loginModal.style.display = 'none';
            loginForm.reset();
        } else {
            alert('Please enter both username and password');
        }
    });
    
    // Initialize the app
    renderVideos();
});

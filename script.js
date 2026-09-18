/**
 * VISTARA - Main JavaScript
 */

// ==================================================
// 1. DATA: GALLERY IMAGES
// ==================================================
// In development, using reliable remote placeholder images.
// Replace the src paths with local paths (e.g., 'images/nature1.jpg') as instructed.
const galleryImages = [
    {
        id: 1,
        src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1000&auto=format&fit=crop",
        title: "Mountain Sunrise",
        category: "nature"
    },
    {
        id: 2,
        src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1000&auto=format&fit=crop",
        title: "Road Trip",
        category: "travel"
    },
    {
        id: 3,
        src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop",
        title: "Silent Portrait",
        category: "portrait"
    },
    {
        id: 4,
        src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
        title: "Modern Building",
        category: "architecture"
    },
    {
        id: 5,
        src: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=1000&auto=format&fit=crop",
        title: "Forest Path",
        category: "nature"
    },
    {
        id: 6,
        src: "https://images.unsplash.com/photo-1504150558240-0b4fd8946624?q=80&w=1000&auto=format&fit=crop",
        title: "Ocean Dreams",
        category: "travel"
    },
    {
        id: 7,
        src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop",
        title: "Traveler",
        category: "portrait"
    },
    {
        id: 8,
        src: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop",
        title: "City Architecture",
        category: "architecture"
    },
    {
        id: 9,
        src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1000&auto=format&fit=crop",
        title: "Golden Sunset",
        category: "nature"
    },
    {
        id: 10,
        src: "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=1000&auto=format&fit=crop",
        title: "Desert Road",
        category: "travel"
    },
    {
        id: 11,
        src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
        title: "Thoughtful Eyes",
        category: "portrait"
    },
    {
        id: 12,
        src: "https://images.unsplash.com/photo-1429497419816-9ca5cb7b5736?q=80&w=1000&auto=format&fit=crop",
        title: "Urban Nights",
        category: "architecture"
    },
    {
        id: 13,
        src: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=1000&auto=format&fit=crop",
        title: "Waterfall",
        category: "nature"
    },
    {
        id: 14,
        src: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=1000&auto=format&fit=crop",
        title: "Mountain Journey",
        category: "travel"
    },
    {
        id: 15,
        src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
        title: "Classic Portrait",
        category: "portrait"
    },
    {
        id: 16,
        src: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=1000&auto=format&fit=crop",
        title: "Street Life",
        category: "architecture"
    }
];

// ==================================================
// 2. DOM ELEMENTS
// ==================================================
document.addEventListener('DOMContentLoaded', () => {
    
    // Set Current Year in Footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Elements
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const galleryGrid = document.getElementById('gallery-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    // Lightbox Elements
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxOverlay = document.getElementById('lightbox-overlay');
    const lightboxPrev = document.getElementById('lightbox-prev');
    const lightboxNext = document.getElementById('lightbox-next');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxCategory = document.getElementById('lightbox-category');
    const lightboxCounter = document.getElementById('lightbox-counter');
    
    // Contact Form
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    let currentLightboxIndex = 0;
    let currentFilteredImages = [...galleryImages];

    // ==================================================
    // 3. NAVIGATION & SCROLL
    // ==================================================
    
    // Sticky Navbar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Active Link Highlighting
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (current && link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // Hamburger Menu Toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        const isExpanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
        hamburger.setAttribute('aria-expanded', !isExpanded);
    });

    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            hamburger.setAttribute('aria-expanded', false);
        });
    });

    // ==================================================
    // 4. GALLERY GENERATION & FILTERING
    // ==================================================

    // Generate Gallery HTML
    function renderGallery(images) {
        galleryGrid.innerHTML = ''; // Clear existing
        
        if(images.length === 0) {
            galleryGrid.innerHTML = '<p style="color: #fff; text-align: center; grid-column: 1 / -1;">No images found.</p>';
            return;
        }

        images.forEach((img, index) => {
            const itemHTML = `
                <div class="gallery-item show" data-category="${img.category}" tabindex="0" data-index="${index}">
                    <img src="${img.src}" alt="${img.title}" class="gallery-img" loading="lazy">
                    <div class="gallery-overlay">
                        <div class="gallery-info">
                            <h3>${img.title}</h3>
                            <p>${img.category}</p>
                            <span class="view-icon">View</span>
                        </div>
                    </div>
                </div>
            `;
            galleryGrid.insertAdjacentHTML('beforeend', itemHTML);
        });

        // Add event listeners to new items for lightbox
        const galleryItems = document.querySelectorAll('.gallery-item');
        galleryItems.forEach(item => {
            item.addEventListener('click', () => {
                const index = parseInt(item.getAttribute('data-index'));
                openLightbox(index);
            });
            // Keyboard accessibility for gallery items
            item.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    const index = parseInt(item.getAttribute('data-index'));
                    openLightbox(index);
                }
            });
        });
    }

    // Initial Render
    renderGallery(galleryImages);

    // Filtering Logic
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add to clicked
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            if (filterValue === 'all') {
                currentFilteredImages = [...galleryImages];
            } else {
                currentFilteredImages = galleryImages.filter(img => img.category === filterValue);
            }

            renderGallery(currentFilteredImages);
        });
    });


    // ==================================================
    // 5. LIGHTBOX FUNCTIONALITY
    // ==================================================

    function openLightbox(index) {
        currentLightboxIndex = index;
        updateLightboxContent();
        lightbox.classList.add('active');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
        
        // Trap focus (basic)
        lightboxClose.focus();
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = 'auto'; // Restore scrolling
    }

    function updateLightboxContent() {
        const image = currentFilteredImages[currentLightboxIndex];
        if(!image) return;

        // Add a small fade effect for image change
        lightboxImg.style.opacity = '0';
        
        setTimeout(() => {
            lightboxImg.src = image.src;
            lightboxImg.alt = image.title;
            lightboxTitle.textContent = image.title;
            lightboxCategory.textContent = image.category;
            lightboxCounter.textContent = `${currentLightboxIndex + 1} / ${currentFilteredImages.length}`;
            lightboxImg.style.opacity = '1';
        }, 200);
    }

    function nextImage() {
        currentLightboxIndex = (currentLightboxIndex + 1) % currentFilteredImages.length;
        updateLightboxContent();
    }

    function prevImage() {
        currentLightboxIndex = (currentLightboxIndex - 1 + currentFilteredImages.length) % currentFilteredImages.length;
        updateLightboxContent();
    }

    // Lightbox Event Listeners
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxOverlay.addEventListener('click', closeLightbox);
    lightboxNext.addEventListener('click', nextImage);
    lightboxPrev.addEventListener('click', prevImage);

    // Keyboard Navigation for Lightbox
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;

        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowRight') {
            nextImage();
        } else if (e.key === 'ArrowLeft') {
            prevImage();
        }
    });

    // ==================================================
    // 6. CONTACT FORM VALIDATION
    // ==================================================

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name && email && message) {
            // Mock successful submission
            formMessage.textContent = "Thank you! Your message has been received.";
            formMessage.classList.remove('hidden');
            formMessage.classList.add('success');
            
            // Reset form
            contactForm.reset();
            
            // Hide message after 5 seconds
            setTimeout(() => {
                formMessage.classList.add('hidden');
                formMessage.classList.remove('success');
            }, 5000);
        }
    });

    // ==================================================
    // 7. SCROLL REVEAL ANIMATIONS
    // ==================================================
    
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Run once
            }
        });
    };

    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

});

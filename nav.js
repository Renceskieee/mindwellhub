console.log("Script is running");

document.addEventListener("DOMContentLoaded", function () {
    var headerContainer = document.querySelector(".header-container");

    if (headerContainer) {
        var initialOffset = headerContainer.offsetTop;

        window.addEventListener("scroll", function () {
            if (window.scrollY > initialOffset) {
                headerContainer.classList.add("scrolled");           
                headerContainer.style.backgroundColor = "#304D30";
            } else {
                headerContainer.classList.remove("scrolled");
                headerContainer.backgroundColor = "";
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    
    for (const scrollLink of scrollLinks) {
        scrollLink.addEventListener('click', smoothScroll);
    }

    function smoothScroll(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    }
});

function performSearch(event) {
    event.preventDefault();

    var searchInputValue = document.getElementById('searchInput').value.toLowerCase();

    var searchElements = [
        { element: document.querySelector('.hdr-main'), section: 'home' },
        { element: document.querySelector('.desc-main'), section: 'home' },
        { element: document.querySelector('.card__title1'), section: 'home' },
        { element: document.querySelector('.card__description1'), section: 'home' },
        { element: document.querySelector('.card__title2'), section: 'home' },
        { element: document.querySelector('.card__description2'), section: 'home' },
        { element: document.querySelector('.card__title3'), section: 'home' },
        { element: document.querySelector('.card__description3'), section: 'home' },
        { element: document.querySelector('.hdr-2nd'), section: 'about' },
        { element: document.querySelector('.desc-2nd'), section: 'about' },
        { element: document.querySelector('.hdr-third'), section: 'services' },
        { element: document.querySelector('.tip a'), section: 'services' },
        { element: document.querySelector('.hdr-4th'), section: 'contact' },
        { element: document.querySelector('.help-title'), section: 'contact' },
        { element: document.querySelector('.desc-3rd'), section: 'contact' },
    ];

    clearHighlights();

    for (var item of searchElements) {
        if (item.element) {
            var elementText = item.element.textContent.toLowerCase();

            if (elementText.includes(searchInputValue)) {
                highlightKeyword(item.element, searchInputValue);

                scrollToSection(item.section);
                return;
            }
        }
    }

    alert('No match found');
}

function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function highlightKeyword(element, keyword) {
    var regex = new RegExp(keyword, 'gi');

    element.innerHTML = element.innerHTML.replace(regex, '<span class="highlighted">$&</span>');
}

function clearHighlights() {
    var highlightedElements = document.querySelectorAll('.highlighted');
    highlightedElements.forEach(function (el) {
        el.outerHTML = el.innerHTML;
    });
}

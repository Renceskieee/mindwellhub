document.addEventListener('DOMContentLoaded', function () {

    function handleIntersection(entries, observer) {
        entries.forEach((entry) => {
            const helpDesign = document.querySelector('.help-design');
            if (entry.isIntersecting && helpDesign && !helpDesign.classList.contains('slide-in')) {
                helpDesign.classList.add('slide-in');
            }
        });
    }

    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

    const bgFourth = document.querySelector('.bg-fourth');

    if (bgFourth) {
        observer.observe(bgFourth);
    }
});

function sendEmail() {
    var recipient = "mind.well.health@gmail.com";
    var subject = "Subject of the email";
    var body = "Body of the email";

    var gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(gmailUrl);
}


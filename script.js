
document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: .7 });

    const elementsToAnimate = document.querySelectorAll(".aboutMeName, .aboutMeDescription, .photoImageFormat, .columnCenter");
    elementsToAnimate.forEach(el => observer.observe(el));
});

function copyToClipboardEmail() {
    const text = document.getElementById("copyEmail").innerText;
    navigator.clipboard.writeText(text).then(() => {
        const toast = document.getElementById("toast");
        toast.classList.add("show");
      
        setTimeout(() => {
            toast.classList.remove("show");
        }, 2500);
    }).catch(err => {
        console.error("Failed to copy: ", err);
    });
}

function copyToClipboardNumber() {
    const text = document.getElementById("copyNumber").innerText;
    navigator.clipboard.writeText(text).then(() => {
        const toast = document.getElementById("toast");
        toast.classList.add("show");
      
        setTimeout(() => {
            toast.classList.remove("show");
        }, 2500);
    }).catch(err => {
        console.error("Failed to copy: ", err);
    });
}

function copyToClipboardTeams() {
    const text = document.getElementById("copyTeams").innerText;
    navigator.clipboard.writeText(text).then(() => {
        const toast = document.getElementById("toast");
        toast.classList.add("show");
      
        setTimeout(() => {
            toast.classList.remove("show");
        }, 2500);
    }).catch(err => {
        console.error("Failed to copy: ", err);
    });
}

function copyToClipboardMessenger() {
    const text = document.getElementById("copyMessenger").innerText;
    navigator.clipboard.writeText(text).then(() => {
        const toast = document.getElementById("toast");
        toast.classList.add("show");
      
        setTimeout(() => {
            toast.classList.remove("show");
        }, 2500);
    }).catch(err => {
        console.error("Failed to copy: ", err);
    });
}
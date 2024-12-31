let a = document.getElementsByClassName("ques-head");
let b = document.getElementsByClassName("ques-ans");
let c = document.getElementsByClassName("add-svg");
let footer = document.getElementsByClassName("footer");

for (let i = 0; i < a.length; i++) {
    a[i].addEventListener('click', () => {
        if (b[i].style.display === 'block') {
            a[i].style.marginBottom = '0rem'
            b[i].style.display = 'none';
        } else {
            a[i].style.marginBottom = '1rem'
            b[i].style.display = 'block';
            b[i].style.paddingBottom = '1rem';
            b[i].style.marginBottom = "1.2rem";
            c.style.marginTop = ' 1rem';
        }
    });
}




const questionContainers = document.querySelectorAll(".ques-container");

questionContainers.forEach((container) => {
      const header = container.querySelector(".ques-head");
      const answer = container.querySelector(".ques-ans");

      header.addEventListener("click", () => {
            const isOpen = container.classList.contains("open");

            document.querySelectorAll(".ques-container").forEach((item) => {
                  item.classList.remove("open");
                  item.querySelector(".ques-ans").style.maxHeight = null;
            });


            if (!isOpen) {
                  container.classList.add("open");
                  answer.style.maxHeight = answer.scrollHeight + "px";
            } else {
                  container.classList.remove("open");
                  answer.style.maxHeight = null;
            }

            container.scrollIntoView({ behavior: "smooth", block: "start" });
      });
});
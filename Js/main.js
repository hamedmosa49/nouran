const book = document.querySelector(".book");

const openBook = document.getElementById("openBook");

openBook.onclick = function () {

    book.classList.add("open");

}
function login() {

    const user = document.getElementById("username").value;

    const pass = document.getElementById("password").value;

    if (user === "Nouran" && pass === "2010") {

        goToPage(2)

        // هنا بعدين هنقلب الصفحة على "أنا مين"

    }

    else {

        document.getElementById("loginError").innerHTML =
            "اسم المستخدم أو كلمة السر غير صحيحة";

    }

}
function goToPage(pageNumber) {

    document
        .querySelectorAll(".page")
        .forEach(page => page.classList.remove("active"));

    document
        .querySelector(".page" + pageNumber)
        .classList.add("active");

}
// يمنع تشغيل أكثر من Audio أو Video في نفس الوقت

const media = document.querySelectorAll("audio, video");

media.forEach(current => {

    current.addEventListener("play", () => {

        media.forEach(item => {

            if (item !== current) {

                item.pause();

            }

        });

    });

});
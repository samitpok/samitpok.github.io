const homeDiv = document.getElementById("home");
        const contactDiv = document.getElementById("contact");
        const classInfoDiv = document.getElementById("classinfo");

        const btnHome = document.getElementById("homebtn");
        const btnClassInfo = document.getElementById("classinfobtn");
        const btnContact = document.getElementById("contactbtn");

        btnContact.onclick = function () {
            homeDiv.style.display = "none";
            classInfoDiv.style.display="none";
            contactDiv.style.display="block";

            btnContact.style.borderBottom = "2px solid #12213e";
            btnHome.style.border = "none";
            btnClassInfo.style.border = "none";
        };

        btnClassInfo.onclick = function () {
            homeDiv.style.display = "none";
            contactDiv.style.display="none";
            classInfoDiv.style.display="block";

            btnContact.style.borderBottom = "none";
            btnHome.style.border = "none";
            btnClassInfo.style.borderBottom = "2px solid #12213e";
        };

        btnHome.onclick = function () {
            homeDiv.style.display = "block";
            classInfoDiv.style.display="none";
            contactDiv.style.display="none";
            btnHome.style.borderBottom = "2px solid #12213e";
            btnContact.style.border = "none";
            btnClassInfo.style.border = "none";
        };
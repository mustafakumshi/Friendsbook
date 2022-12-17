// SIDEBAR
const menuItems = document.querySelectorAll(".menu-item");

// MESSAGES
const messagesNotification = document.querySelector("#messages-notification");
const messages = document.querySelector(".messages");
const message = messages.querySelectorAll(".message");
const messageSearch = document.querySelector("#message-search");

// THEME
const theme = document.querySelector("#theme");
const themeModal = document.querySelector(".customize-theme");
const fontSizes = document.querySelectorAll(".choose-size span");
let root = document.querySelector(":root");
const colorPalette = document.querySelectorAll(".choose-color span");
const BgColorPicker = document.querySelectorAll(".choose-bg div");



//------------------- SIDEBAR ----------------------------

// Remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove("active");
    });
};

menuItems.forEach(item => {
    item.addEventListener("click", () => {
        changeActiveItem();
        item.classList.add("active");
        if (item.id != "notifications") {
            document.querySelector(".notifications-popup").style.display = "none";
        } else {
            document.querySelector(".notifications-popup").style.display = "block";
            document.querySelector("#notifications .notification-count").style.display = "none";
        }
    });
});

//------------------- MESSAGES ----------------------------

// Search Chat Function
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(user => {
        let name = user.querySelector("h5").textContent.toLowerCase();
        if (name.indexOf(val) != -1) {
            user.style.display = "flex"
        } else {
            user.style.display = "none";
        }
    });
};

// Search Chat
messageSearch.addEventListener("keyup", searchMessage);


// Highlight 
messagesNotification.addEventListener("click", () => {
    messages.style.boxShadow = "0 0 1rem var(--color-primary)";
    messagesNotification.querySelector(".notification-count").style.display = "none";
    setTimeout(() => {
        messages.style.boxShadow = "none";
    }, 2000);
});

//------------- THEME CUSTOMIZATION MODAL -------------------

// Opens Modal
const openThemeModal = () => {
    themeModal.style.display = "grid";
};

// Closes Modal
const closeThemeModal = (e) => {
    if (e.target.classList.contains("customize-theme")) {
        themeModal.style.display = "none";
    }
};

// Modal Open Close Funcionality
themeModal.addEventListener("click", closeThemeModal);
theme.addEventListener("click", openThemeModal);



//------------------- FONTS CUSTOMIZATION --------------------

// Remove Active Class from spans or Font Size Selectors
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove("active");
    });
};


fontSizes.forEach(size => {
    size.addEventListener("click", () => {
        removeSizeSelector();
        let fontSize;
        size.classList.toggle("active");
        if (size.classList.contains("font-size-1")) {
            fontSize = "10px";
            root.style.setProperty("--sticky-top-left", "5rem");
            root.style.setProperty("--sticky-top-right", "-25.5rem");
        } else if (size.classList.contains("font-size-2")) {
            fontSize = "13px";
            root.style.setProperty("--sticky-top-left", "5rem");
            root.style.setProperty("--sticky-top-right", "-25.5rem");
        } else if (size.classList.contains("font-size-3")) {
            fontSize = "16px";
            root.style.setProperty("--sticky-top-left", "5rem");
            root.style.setProperty("--sticky-top-right", "-25.5rem");
        } else if (size.classList.contains("font-size-4")) {
            fontSize = "19px";
            root.style.setProperty("--sticky-top-left", "-1.5rem");
            root.style.setProperty("--sticky-top-right", "-28.7rem");
        }

        // Change Font Size of root HTML Element
        document.querySelector("html").style.fontSize = fontSize;
    });
});

//------------------- COLOR CUSTOMIZATION --------------------

// Remove Active Class from Colors
const changeActiveColorClass = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove("active");
    });
};

colorPalette.forEach(color => {
    color.addEventListener("click", () => {
        let primaryHue;
        changeActiveColorClass();

        if (color.classList.contains("color-1")) {
            primaryHue = 252;
        } else if (color.classList.contains("color-2")) {
            primaryHue = 352;
        } else if (color.classList.contains("color-3")) {
            primaryHue = 52;
        } else if (color.classList.contains("color-4")) {
            primaryHue = 152;
        } else if (color.classList.contains("color-5")) {
            primaryHue = 202;
        }

        color.classList.add("active");

        root.style.setProperty("--primary-color-hue", primaryHue)
    });
});


//----------------- BACKGROUND CUSTOMIZATION -----------------

// Background Values
let darkColorLightness;
let lightColorLightness;
let whiteColorLightness;


// Change Background Function;
const changeBg = () => {
    root.style.setProperty("--dark-color-lightness", darkColorLightness);
    root.style.setProperty("--light-color-lightness", lightColorLightness);
    root.style.setProperty("--white-color-lightness", whiteColorLightness);
};

// Remove Active class from Background Options
const changeBgColorClass = () => {
    BgColorPicker.forEach(BgColor => {
        BgColor.classList.remove("active");
    });
};

BgColorPicker.forEach(background => {
    background.addEventListener("click", () => {
        changeBgColorClass();
        if (background.classList.contains("bg-1")) {
            darkColorLightness = "17%";
            lightColorLightness = "95%";
            whiteColorLightness = "100%";
        } else if (background.classList.contains("bg-2")) {
            darkColorLightness = "95%";
            lightColorLightness = "15%";
            whiteColorLightness = "20%";
        } else if (background.classList.contains("bg-3")) {
            darkColorLightness = "95%";
            lightColorLightness = "0%";
            whiteColorLightness = "10%";
        }

        background.classList.add("active");
        changeBg();
    });

});
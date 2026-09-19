<<<<<<< HEAD
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Quicksand', sans-serif;
}

body {
    background: #e8e2e8;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    overflow: hidden;
}

/* Phone-first Frame Look */
.phone-container {
    width: 100%;
    max-width: 420px;
    height: 100vh;
    max-height: 850px;
    background: linear-gradient(135deg, #FFF9F5 0%, #FFB6C9 40%, #BDE0FE 100%);
    position: relative;
    box-shadow: 0 15px 35px rgba(74, 68, 88, 0.2);
    overflow-y: auto;
    overflow-x: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}

@media(min-width: 450px) {
    .phone-container {
        border-radius: 40px;
        border: 10px solid #fff;
    }
}

/* Page Transition Setup */
.page {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.5s ease, transform 0.5s ease;
    transform: scale(0.95);
}

.page.active {
    opacity: 1;
    pointer-events: auto;
    transform: scale(1);
}

/* Main Card Design */
.main-card {
    background: rgba(255, 255, 255, 0.94);
    backdrop-filter: blur(10px);
    padding: 22px 18px;
    border-radius: 30px;
    box-shadow: 0 10px 25px rgba(74, 68, 88, 0.08);
    text-align: center;
    width: 100%;
    max-width: 380px;
    border: 2px solid #ffffff;
}

/* First Page Elements Styling */
.top-ribbon {
    font-size: 30px;
    margin-bottom: 2px;
}

.main-title {
    color: #4A4458;
    font-size: 19px;
    font-weight: 700;
    margin-bottom: 3px;
}

.heart-icon {
    color: #ff6b81;
    font-size: 13px;
    margin-bottom: 10px;
}

.image-frame {
    width: 100%;
    height: 200px;
    background: #FFF5F7;
    border-radius: 18px;
    overflow: hidden;
    margin-bottom: 12px;
    box-shadow: inset 0 2px 8px rgba(0,0,0,0.03);
    border: 1px solid #ffe3ec;
    display: flex;
    align-items: center;
    justify-content: center;
}

.illustration-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.name-greeting {
    color: #4A4458;
    font-size: 21px;
    font-weight: 700;
    margin-bottom: 6px;
}

.pink-heart {
    color: #ff758c;
}

.intro-text {
    color: #6e657e;
    font-size: 13.5px;
    line-height: 1.5;
    margin-bottom: 15px;
}

/* Gradient Pill Shape Button Style */
.gradient-pill-btn {
    background: linear-gradient(135deg, #ff758c 0%, #ff7eb3 100%);
    color: white;
    border: none;
    padding: 13px 25px;
    border-radius: 50px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 0 6px 20px rgba(255, 117, 140, 0.4);
    transition: all 0.3s ease;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
}

.gradient-pill-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 117, 140, 0.6);
}

.scroll-hint {
    margin-top: 10px;
    color: #9c91ab;
    font-size: 11px;
}

.scroll-hint span {
    display: block;
    font-size: 9px;
}

/* General Typography for other pages */
.section-heading {
    color: #4A4458;
    font-size: 20px;
    margin-bottom: 15px;
    font-weight: 700;
}

.illustration {
    font-size: 55px;
    margin-bottom: 15px;
}

.sub-text {
    color: #4A4458;
    font-size: 15px;
    line-height: 1.6;
    margin-bottom: 20px;
}

/* Typewriter Box */
.typewriter-container {
    min-height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
}

#typewriter-text {
    font-size: 15px;
    color: #4A4458;
    font-weight: 500;
}

/* Polaroid Photo Style */
.polaroid-card {
    background: white;
    padding: 12px 12px 8px 12px;
    border-radius: 10px;
    box-shadow: 0 8px 20px rgba(0,0,0,0.08);
    margin-bottom: 20px;
    transform: rotate(-2deg);
}

.photo-placeholder {
    width: 100%;
    height: 160px;
    background: #F5F1EE;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #bfaea5;
    font-weight: 600;
    letter-spacing: 1px;
    font-size: 13px;
}

.polaroid-caption {
    font-size: 13px;
    color: #7A7088;
    margin-top: 8px;
    margin-bottom: 0;
}

/* Gift Box */
.gift-box {
    font-size: 65px;
    cursor: pointer;
    margin: 15px 0;
    animation: bounce 1.5s infinite;
}

.instruction-text {
    font-size: 13px;
    color: #8c829c;
    margin-bottom: 0;
}

@keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}

.animate-pop {
    animation: popIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
}

@keyframes popIn {
    0% { opacity: 0; transform: scale(0.8); }
    100% { opacity: 1; transform: scale(1); }
=======
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Quicksand', sans-serif;
}

body {
    background: #e8e2e8;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    overflow: hidden;
}

/* Phone-first Frame Look */
.phone-container {
    width: 100%;
    max-width: 420px;
    height: 100vh;
    max-height: 850px;
    background: linear-gradient(135deg, #FFF9F5 0%, #FFB6C9 40%, #BDE0FE 100%);
    position: relative;
    box-shadow: 0 15px 35px rgba(74, 68, 88, 0.2);
    overflow-y: auto;
    overflow-x: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}

@media(min-width: 450px) {
    .phone-container {
        border-radius: 40px;
        border: 10px solid #fff;
    }
}

/* Page Transition Setup */
.page {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.5s ease, transform 0.5s ease;
    transform: scale(0.95);
}

.page.active {
    opacity: 1;
    pointer-events: auto;
    transform: scale(1);
}

/* Main Card Design */
.main-card {
    background: rgba(255, 255, 255, 0.94);
    backdrop-filter: blur(10px);
    padding: 22px 18px;
    border-radius: 30px;
    box-shadow: 0 10px 25px rgba(74, 68, 88, 0.08);
    text-align: center;
    width: 100%;
    max-width: 380px;
    border: 2px solid #ffffff;
}

/* First Page Elements Styling */
.top-ribbon {
    font-size: 30px;
    margin-bottom: 2px;
}

.main-title {
    color: #4A4458;
    font-size: 19px;
    font-weight: 700;
    margin-bottom: 3px;
}

.heart-icon {
    color: #ff6b81;
    font-size: 13px;
    margin-bottom: 10px;
}

.image-frame {
    width: 100%;
    height: 200px;
    background: #FFF5F7;
    border-radius: 18px;
    overflow: hidden;
    margin-bottom: 12px;
    box-shadow: inset 0 2px 8px rgba(0,0,0,0.03);
    border: 1px solid #ffe3ec;
    display: flex;
    align-items: center;
    justify-content: center;
}

.illustration-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.name-greeting {
    color: #4A4458;
    font-size: 21px;
    font-weight: 700;
    margin-bottom: 6px;
}

.pink-heart {
    color: #ff758c;
}

.intro-text {
    color: #6e657e;
    font-size: 13.5px;
    line-height: 1.5;
    margin-bottom: 15px;
}

/* Gradient Pill Shape Button Style */
.gradient-pill-btn {
    background: linear-gradient(135deg, #ff758c 0%, #ff7eb3 100%);
    color: white;
    border: none;
    padding: 13px 25px;
    border-radius: 50px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 0 6px 20px rgba(255, 117, 140, 0.4);
    transition: all 0.3s ease;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
}

.gradient-pill-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 117, 140, 0.6);
}

.scroll-hint {
    margin-top: 10px;
    color: #9c91ab;
    font-size: 11px;
}

.scroll-hint span {
    display: block;
    font-size: 9px;
}

/* General Typography for other pages */
.section-heading {
    color: #4A4458;
    font-size: 20px;
    margin-bottom: 15px;
    font-weight: 700;
}

.illustration {
    font-size: 55px;
    margin-bottom: 15px;
}

.sub-text {
    color: #4A4458;
    font-size: 15px;
    line-height: 1.6;
    margin-bottom: 20px;
}

/* Typewriter Box */
.typewriter-container {
    min-height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
}

#typewriter-text {
    font-size: 15px;
    color: #4A4458;
    font-weight: 500;
}

/* Polaroid Photo Style */
.polaroid-card {
    background: white;
    padding: 12px 12px 8px 12px;
    border-radius: 10px;
    box-shadow: 0 8px 20px rgba(0,0,0,0.08);
    margin-bottom: 20px;
    transform: rotate(-2deg);
}

.photo-placeholder {
    width: 100%;
    height: 160px;
    background: #F5F1EE;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #bfaea5;
    font-weight: 600;
    letter-spacing: 1px;
    font-size: 13px;
}

.polaroid-caption {
    font-size: 13px;
    color: #7A7088;
    margin-top: 8px;
    margin-bottom: 0;
}

/* Gift Box */
.gift-box {
    font-size: 65px;
    cursor: pointer;
    margin: 15px 0;
    animation: bounce 1.5s infinite;
}

.instruction-text {
    font-size: 13px;
    color: #8c829c;
    margin-bottom: 0;
}

@keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}

.animate-pop {
    animation: popIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
}

@keyframes popIn {
    0% { opacity: 0; transform: scale(0.8); }
    100% { opacity: 1; transform: scale(1); }
>>>>>>> 96664ac (update website page)
}
---
layout: base
title: Student Home 
description: Home Page
hide: true
permalink: /index
---
<style>
    h2 {
        text-align: center; 
        font-size: 5vw;
        color: rgb(255, 255, 255);
        font-family: "Oxygen", Helvetica, sans-serif;
    }
    h1 {
        text-align: left; 
        font-size: 24pt; 
        color: rgb(170, 220, 246);
        font-size: 3.5vw;
    }
    body {
        text-align: left; 
        background-color: rgb(2, 12, 35);
        color: rgb(220, 220, 220);
        font-size: 1.5vw;
    }
    .button-overlay {
        position: relative;
        width: 110px;
        height: 100px;
    }

    .custom-button {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: transparent;
        border: none;
        cursor: pointer;
        z-index: 2;
    }

    .iframe-container {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
    }
</style>

<img src="images/West.png" width="100" height="100">
<img src="images/Nigil.png" width="100" height="100">
<img src="images/Evan.png" width="100" height="100">

<h1>Variables Lesson Homepage</h1>
<b1>Below is a series of links to each one of the notebook files in this lesson.</b1>

<div style="display: flex; flex-wrap: wrap; gap: 10px;">
    <a href="https://nikhile22427.github.io/MortsMonkeys/2025/01/09/homework_IPYNB_2_.html" style="text-decoration: none;">
        <div style="background-color: #00FF00; color: black; padding: 10px 20px; border-radius: 5px; font-weight: bold;">
            Homework Notebook
        </div>
    </a>
    <a href="https://nikhile22427.github.io/MortsMonkeys/2025/01/09/lessonBook1_IPYNB_2_.html" style="text-decoration: none;">
        <div style="background-color: #00DD00; color: black; padding: 10px 20px; border-radius: 5px; font-weight: bold;">
            Lesson 1
        </div>
    </a>
    <a href="https://nikhile22427.github.io/MortsMonkeys/2025/01/09/lessonBook2_IPYNB_2_.html" style="text-decoration: none;">
        <div style="background-color: #00DD00; color: black; padding: 10px 20px; border-radius: 5px; font-weight: bold;">
            Lesson 2
        </div>
    </a>
    <a href="https://nikhile22427.github.io/MortsMonkeys/2025/01/09/popcornHax-completed_IPYNB_2_.html" style="text-decoration: none;">
        <div style="background-color: #00DD00; color: black; padding: 10px 20px; border-radius: 5px; font-weight: bold;">
            Popcorn Hax (Completed)
        </div>
    </a>
    <a href="https://nikhile22427.github.io/MortsMonkeys/2025/01/09/popcornHax_IPYNB_2_.html" style="text-decoration: none;">
        <div style="background-color: #00DD00; color: black; padding: 10px 20px; border-radius: 5px; font-weight: bold;">
            Popcorn Hax
        </div>
    </a>
</div>

<br><br><br><br><br>
<b1>Secret?</b1>
<br>
<div class="button-overlay">
    <button class="custom-button" onclick="handleSecretClick()"></button>
    <div class="iframe-container">
        <iframe width="110" height="100" src="https://www.myinstants.com/instant/prowler-sound-effect-83389/embed/" frameborder="0" scrolling="no"></iframe>
    </div>
</div>

<script>
function handleSecretClick() {
    // Small delay to allow sound to play before opening new tab
    setTimeout(() => {
        window.open('URL_TO_YOUR_SECRET_PAGE', '_blank');
    }, 100);
}
</script>
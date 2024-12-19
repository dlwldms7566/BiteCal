---
layout: page
title: Log
permalink: /log/
order: 3
---

<main class="log-page">
    <h1>Food Log</h1>
    <p id="selected-date">Selected Date: </p>
    <form id="diet-log-form">
        
        <!-- Photo Upload -->
        <div class="form-group">
            <label for="meal-photo">Upload Photo:</label>
            <div class="file-input-wrapper">
                <button type="button" class="choose-file-btn" onclick="document.getElementById('meal-photo').click()">Choose File</button>
                <span id="file-name" class="file-name">No file selected</span>
            </div>
            <input type="file" id="meal-photo" accept="image/*" required style="display: none;">
            <div id="photo-preview-container">
                <img id="meal-photo-preview" alt="Image Preview" style="display: none; max-width: 100%; margin-top: 10px; border-radius: 8px;">
            </div>
        </div>

        <!-- Meal Type -->
        <div class="form-group">
            <label for="meal-type">Meal Type:</label>
            <select id="meal-type" required>
                <option value="" disabled selected>Select meal type</option>
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
                <option value="snack">Snack</option>
            </select>
        </div>

        <!-- Current Time -->
    <div class="form-group">
        <label for="current-time">Current Time:</label>
        <input type="text" id="current-time" name="current_time" readonly required>
    </div>

<script>
    // Function to format the current date and time without seconds
    function getCurrentTime() {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        return `${year}-${month}-${day} ${hours}:${minutes}`;
    }

    // Set the current time in the input field when the page loads
    document.addEventListener('DOMContentLoaded', () => {
        const currentTimeInput = document.getElementById('current-time');
        if (currentTimeInput) {
            currentTimeInput.value = getCurrentTime();
        }
    });
</script>

        <div class="form-group">
            <label for="meal-description">Description:</label>
            <textarea id="meal-description" rows="4" placeholder="Write details about your meal here..." required></textarea>
        </div>

        <!-- Submit Button -->
        <button type="submit" class="btn">Submit</button>
    </form>

    <section id="log-display">
        <h2>Your Logs</h2>
        <ul id="log-list"></ul>
    </section>

</main>

<script>
    // Load selected date from local storage
    const selectedDate = localStorage.getItem('selectedDate') || new Date().toISOString().split('T')[0]; // 기본값: 오늘 날짜
    document.getElementById('selected-date').textContent = `Selected Date: ${selectedDate}`;

    // Update form with the selected date
    document.getElementById('current-time').value = selectedDate;

    // Display logs for the selected date
    function displayLogs() {
    const logs = JSON.parse(localStorage.getItem('dietLogs')) || [];
    const logList = document.getElementById('log-list');
    logList.innerHTML = '';

    logs.forEach(log => {
        const logItem = document.createElement('li');
        logItem.className = 'log-item';

        // Left image container
        const logImage = document.createElement('img');
        logImage.src = log.imageSrc;
        logImage.alt = 'Meal Image';
        logImage.className = 'log-image';

        // Right text container
        const logDetails = document.createElement('div');
        logDetails.className = 'log-details';

        const logDate = document.createElement('p');
        logDate.textContent = `Date: ${log.currentTime.split(' ')[0]}`;

        const logTime = document.createElement('p');
        logTime.textContent = `Time: ${log.currentTime.split(' ')[1]}`;

        const logMealType = document.createElement('p');
        logMealType.textContent = `Meal Type: ${log.mealType}`;

        const logDescription = document.createElement('p');
        logDescription.textContent = `Description: ${log.mealDescription}`;

        logDetails.appendChild(logDate);
        logDetails.appendChild(logTime);
        logDetails.appendChild(logMealType);
        logDetails.appendChild(logDescription);

        logItem.appendChild(logImage);
        logItem.appendChild(logDetails);

        logList.appendChild(logItem);
    });
}

    // Display logs on page load
    document.addEventListener('DOMContentLoaded', displayLogs);

    // Function to format current time (without seconds)
    function getCurrentTime() {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        return `${year}-${month}-${day} ${hours}:${minutes}`;
    }

    // Initialize current time field
    document.addEventListener('DOMContentLoaded', () => {
        const currentTimeInput = document.getElementById('current-time');
        currentTimeInput.value = getCurrentTime();
    });

    // Save log and reload
    // Save log on form submission
    const form = document.getElementById('diet-log-form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const mealType = document.getElementById('meal-type').value;
        const mealDescription = document.getElementById('meal-description').value;
        const currentTime = document.getElementById('current-time').value;
        const preview = document.getElementById('meal-photo-preview');

        if (!mealPhotoInput.files[0]) {
            alert('Please upload a photo of your meal.');
            return;
        }

        const imageSrc = preview.src;

        const logs = JSON.parse(localStorage.getItem('dietLogs')) || [];
        logs.push({
            mealType,
            currentTime,
            mealDescription,
            imageSrc,
        });
        localStorage.setItem('dietLogs', JSON.stringify(logs));

        displayLogs(); // 새로고침 없이 로그 갱신
        e.target.reset(); // Reset the form after submission
        preview.style.display = 'none'; // 미리보기 숨김
        fileName.textContent = 'No file selected';
    });


    // Display logs on page load
    document.addEventListener('DOMContentLoaded', displayLogs);

    document.addEventListener('DOMContentLoaded', () => {
        const currentTimeInput = document.getElementById('current-time');
        if (currentTimeInput) {
            currentTimeInput.value = getCurrentTime();
        }
    });
    
    // Ensure mealPhotoInput is defined
    // Modify to ensure preview updates correctly
    const preview = document.getElementById('meal-photo-preview');
    const mealPhotoInput = document.getElementById('meal-photo');

    // Check and display preview
    mealPhotoInput.addEventListener('change', function () {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();

            reader.onload = function (e) {
                preview.src = e.target.result;
                preview.style.display = 'block';
            };

            reader.readAsDataURL(file);
        } else {
            preview.style.display = 'none';
        }
    });



</script>

<style>
    main.log-page {
        font-family: 'Nanum Gothic Coding', monospace;
        max-width: 700px;
        margin: 30px auto;
        padding: 30px;
        background-color: #f8f9fa;
        border-radius: 10px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }

    h1 {
        font-family: 'Arial', sans-serif;
        font-size: 28px;
        color: #FF9800;
        margin-bottom: 20px;
        text-align: center;
    }

    #selected-date {
        font-size: 18px;
        color: #555;
        margin-bottom: 20px;
        text-align: center;
        font-weight: bold;
    }

    .form-group {
        margin-bottom: 20px;
    }

    label {
        display: block;
        margin-bottom: 8px;
        font-weight: bold;
        color: #FF9800;
        font-size: 16px;
    }

    input, select, textarea, button {
        width: 100%;
        padding: 12px;
        margin-top: 5px;
        font-size: 16px;
        border: 1px solid #ddd;
        border-radius: 8px;
        box-sizing: border-box;
        font-family: 'Nanum Gothic Coding', monospace;
    }

    input[type="file"] {
        padding: 8px;
    }

    input:focus, select:focus, textarea:focus {
        outline: none;
        border-color: #FF9800; /* 주황색 계열 */
        box-shadow: 0 0 5px rgba(255, 152, 0, 0.5);
    }

    textarea {
        resize: none;
        height: 120px;
    }

    button {
        background-color: #FF9800; /* 주황색 계열 */
        color: white;
        font-weight: bold;
        text-transform: uppercase;
        cursor: pointer;
        transition: background-color 0.2s ease, transform 0.1s ease;
    }

    button:hover {
        background-color: #E67E22; /* 조금 더 어두운 주황색 */
        transform: scale(1.05);
    }

    section#log-display {
        margin-top: 40px;
        padding: 20px;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }

    section#log-display h2 {
        font-size: 22px;
        color: #FF9800;
        margin-bottom: 15px;
        text-align: center;
    }

    ul#log-list {
        list-style: none;
        padding: 0;
        font-size: 16px;
    }

    ul#log-list li {
        padding: 10px;
        margin-bottom: 10px;
        background-color: #f8f9fa;
        border: 1px solid #ddd;
        border-radius: 8px;
        color: #333;
        line-height: 1.5;
        transition: background-color 0.2s ease, box-shadow 0.2s ease;
    }

    ul#log-list li:hover {
        background-color: #FFE0B2; /* 주황색 계열의 연한 배경 */
        box-shadow: 0 2px 5px rgba(255, 152, 0, 0.1);
    }
    #photo-preview-container {
        text-align: center;
        margin-top: 10px;
    }

    #meal-photo-preview {
        max-width: 100%;
        max-height: 200px;
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 5px;
        background-color: #f9f9f9;
    }
    .file-input-wrapper {
    display: flex;
    align-items: center; /* 수평 정렬 */
    gap: 10px; /* 버튼과 텍스트 사이 간격 */
    margin-top: 10px;
    }

    .file-input-wrapper {
    display: flex;
    align-items: center; /* 수평 정렬 */
    gap: 10px; /* 버튼과 텍스트 사이 간격 */
    margin-top: 10px;
    }

    .choose-file-btn {
        padding: 3px 8px; /* 작은 패딩 */
        font-size: 16px; /* 작은 글씨 크기 */
        background-color: #FF9800; /* 주황색 버튼 */
        color: white;
        border: none;
        border-radius: 3px; /* 둥근 모서리 */
        cursor: pointer;
        transition: background-color 0.2s ease, transform 0.1s ease;
        line-height: 1; /* 버튼 높이 줄이기 */
        height: auto; /* 자동 높이 */
        width: auto; /* 텍스트 내용에 맞춰 버튼 크기 조정 */
        white-space: nowrap; /* 텍스트 줄 바꿈 방지 */
        text-align: center; /* 텍스트 가운데 정렬 */
    }

    .choose-file-btn:hover {
        background-color: #E67E22; /* 버튼 호버 효과 */
    }

    .file-input-wrapper {
        display: flex;
        align-items: center; /* 수평 정렬 */
        gap: 8px; /* 버튼과 텍스트 사이 간격 */
    }

    .file-name {
        font-size: 16px; /* 텍스트 크기 줄임 */
        color: #555; /* 회색 톤 */
        white-space: nowrap; /* 텍스트 줄 바꿈 방지 */
        overflow: hidden;
        text-overflow: ellipsis; /* 긴 파일 이름 잘림 처리 */
        max-width: 150px; /* 텍스트 최대 너비 줄임 */
    }
    .log-item {
    display: flex;
    align-items: flex-start;
    gap: 15px;
    margin-bottom: 20px;
    padding: 15px;
    background-color: #f8f9fa;
    border: 1px solid #ddd;
    border-radius: 8px;
    transition: background-color 0.2s ease, box-shadow 0.2s ease;
    }

/* Log image */
    .log-image {
        width: 50%;
        max-width: 150px;
        height: auto;
        border-radius: 8px;
        object-fit: cover;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

/* Log details container */
    .log-details {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 5px;
        color: #333;
        font-size: 14px;
    }

/* Log item hover effect */
    .log-item:hover {
        background-color: #ffe0b2; /* Light orange background */
        box-shadow: 0 2px 5px rgba(255, 152, 0, 0.1);
    }
</style>

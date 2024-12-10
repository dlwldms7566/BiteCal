---
layout: page
title: Star
permalink: /star/
order: 4
---

<div id="app">
        <h1>BiteStar</h1>
        <form id="upload-form">
            <label for="food-image">A picture of my diet:</label>
            <input type="file" id="food-image" accept="image/*" required>
            <label for="rating">Rating:</label>
            <select id="rating" required>
                <option value="5">★★★★★ (5)</option>
                <option value="4">★★★★☆ (4)</option>
                <option value="3">★★★☆☆ (3)</option>
                <option value="2">★★☆☆☆ (2)</option>
                <option value="1">★☆☆☆☆ (1)</option>
            </select>
            <button type="submit">Upload</button>
        </form>

        <h2>Bulletin Board</h2>
        <div id="food-list"></div>
    </div>

<style>
        /* 전체적인 스타일 */
        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
            background-color: #fff4e6; /* 주황색 계열의 밝은 배경 */
            color: #333;
        }

        #app {
            max-width: 800px;
            margin: auto;
            background: #fff; /* 흰색 배경 */
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
            border: 2px solid #ffa45c; /* 주황색 테두리 */
        }

        h1 {
            color: #ff6f00; /* 진한 주황색 */
            text-align: center;
            font-size: 2.5rem;
        }

        form {
            margin-bottom: 20px;
        }

        form label {
            display: block;
            margin-top: 10px;
            font-weight: bold;
            color: #d35400; /* 어두운 주황색 */
        }

        form input,
        form select,
        form button {
            width: 100%;
            padding: 10px;
            margin-top: 5px;
            font-size: 1rem;
            border: 1px solid #ffa45c;
            border-radius: 5px;
        }

        form button {
            background-color: #ff6f00; /* 진한 주황색 */
            color: white;
            font-weight: bold;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        form button:hover {
            background-color: #e65c00; /* 더 진한 주황색 */
        }

        #food-list {
            display: flex;
            flex-direction: column;
            gap: 15px;
        }

        .food-item {
            display: flex;
            align-items: center;
            background: #ffe6cc; /* 밝은 주황색 */
            padding: 15px;
            border-radius: 10px;
            gap: 15px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .food-item img {
            width: 100px;
            height: 100px;
            object-fit: cover;
            border-radius: 5px;
            border: 2px solid #ff6f00; /* 주황색 테두리 */
        }

        .food-item p {
            margin: 0;
            font-size: 1.2rem;
            color: #d35400; /* 어두운 주황색 */
        }

        h2 {
            color: #ff6f00;
            margin-top: 30px;
            text-align: center;
            font-size: 2rem;
        }
    </style>
<script>
        // JavaScript 코드
        const uploadForm = document.getElementById("upload-form");
        const foodList = document.getElementById("food-list");

        let foodItems = [];

        function loadItemsFromStorage() {
            const storedItems = localStorage.getItem("foodItems");
            if (storedItems) {
                foodItems = JSON.parse(storedItems);
                renderFoodItems();
            }
        }

        function saveItemsToStorage() {
            localStorage.setItem("foodItems", JSON.stringify(foodItems));
        }

        function sortItems() {
            foodItems.sort((a, b) => b.rating - a.rating);
        }

        function renderFoodItems() {
            foodList.innerHTML = "";
            sortItems();

            foodItems.forEach((item, index) => {
                const foodDiv = document.createElement("div");
                foodDiv.classList.add("food-item");

                const img = document.createElement("img");
                img.src = item.image;
                img.alt = `Food ${index + 1}`;

                const rating = document.createElement("p");
                rating.textContent = `Rating: ${"★".repeat(item.rating)} (${item.rating})`;

                foodDiv.appendChild(img);
                foodDiv.appendChild(rating);

                foodList.appendChild(foodDiv);
            });
        }

        uploadForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const foodImage = document.getElementById("food-image").files[0];
            const rating = parseInt(document.getElementById("rating").value);

            const reader = new FileReader();
            reader.onload = function (e) {
                const imageUrl = e.target.result;

                foodItems.push({ image: imageUrl, rating });

                saveItemsToStorage();
                renderFoodItems();

                uploadForm.reset();
            };

            reader.readAsDataURL(foodImage);
        });

        document.addEventListener("DOMContentLoaded", loadItemsFromStorage);
    </script>

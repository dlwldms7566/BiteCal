function toggleSearch() {
    var searchBar = document.getElementById('searchBar');
    searchBar.classList.toggle('active');  // 검색창 토글
}

function search() {
    var searchInput = document.getElementById('searchInput').value;
    if (searchInput.trim() !== "") {
        alert("Searching for: " + searchInput);  // 실제 검색 기능을 이곳에 구현
    } else {
        alert("Please enter a search term.");
    }
}

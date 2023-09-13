// script.js
const movieList = document.getElementById("movie-list");

// Fetch movie data from the API (replace with the actual API endpoint)
fetch("https://api.themoviedb.org/3/discover/movie?api_key=08c523e9a3de20461a89aca32825fd86")
    .then(response => response.json())
    .then(data => {
        // Iterate through the movies and create movie cards
        data.forEach(movie => {
            const movieCard = document.createElement("div");
            movieCard.classList.add("movie-card");

            // Populate movie card with data (e.g., title, poster, etc.)
            movieCard.innerHTML = `
                <img src="${movie.poster}" alt="${movie.title}">
                <h2>${movie.title}</h2>
                <p>${movie.description}</p>
                <button class="vote-button">Vote</button>
                <button class="review-button">Leave a Review</button>
            `;

            // Append the movie card to the movie list
            movieList.appendChild(movieCard);
        });
    })
    .catch(error => {
        console.error("Error fetching movie data:", error);
    });

// Add event listeners for voting and leaving reviews (implement these)
movieList.addEventListener("click", event => {
    if (event.target.classList.contains("vote-button")) {
        // Implement voting functionality
    } else if (event.target.classList.contains("review-button")) {
        // Implement review functionality
    }
});

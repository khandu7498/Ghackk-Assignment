document.addEventListener('DOMContentLoaded', () => {
    const manhwaList = [
        {
            title: "Tower of God",
            genre: "Fantasy, Adventure",
            description: "A story about a boy who climbs a mysterious tower."
        },
        {
            title: "Solo Leveling",
            genre: "Fantasy, Action",
            description: "A hunter who levels up in a world filled with monsters."
        },
        {
            title: "The Beginning After The End",
            genre: "Fantasy, Reincarnation",
            description: "A king's second life in a magical world."
        }
    ];

    const manhwaContainer = document.getElementById('manhwa-list');
    
    manhwaList.forEach(manhwa => {
        const manhwaCard = document.createElement('div');
        manhwaCard.classList.add('manhwa-card');

        manhwaCard.innerHTML = `
            <h2>${manhwa.title}</h2>
            <p class="genre">${manhwa.genre}</p>
            <p>${manhwa.description}</p>
        `;

        manhwaContainer.appendChild(manhwaCard);
    });
});

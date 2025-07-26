const moviesByMood = {
    happy: [
        { title: "The Pursuit of Happyness", year: 2006, genre: "Drama" },
        { title: "Forrest Gump", year: 1994, genre: "Comedy-Drama" },
        { title: "The Lion King", year: 1994, genre: "Animation" },
        { title: "Paddington", year: 2014, genre: "Family" },
        { title: "School of Rock", year: 2003, genre: "Comedy" },
        { title: "Finding Nemo", year: 2003, genre: "Animation" },
        { title: "The Grand Budapest Hotel", year: 2014, genre: "Comedy" },
        { title: "Good Will Hunting", year: 1997, genre: "Drama" },
        { title: "Little Miss Sunshine", year: 2006, genre: "Comedy-Drama" },
        { title: "Up", year: 2009, genre: "Animation" },
        { title: "The Intouchables", year: 2011, genre: "Comedy-Drama" },
        { title: "Chef", year: 2014, genre: "Comedy-Drama" },
        { title: "Sing Street", year: 2016, genre: "Musical" },
        { title: "The Secret Life of Walter Mitty", year: 2013, genre: "Adventure" },
        { title: "Julie & Julia", year: 2009, genre: "Comedy-Drama" },
        { title: "Amélie", year: 2001, genre: "Romance" },
        { title: "Big Fish", year: 2003, genre: "Fantasy" },
        { title: "The Princess Bride", year: 1987, genre: "Adventure" },
        { title: "Mamma Mia!", year: 2008, genre: "Musical" },
        { title: "Paddington 2", year: 2017, genre: "Family" },
        { title: "About Time", year: 2013, genre: "Romance" },
        { title: "The Way Way Back", year: 2013, genre: "Comedy-Drama" },
        { title: "Hunt for the Wilderpeople", year: 2016, genre: "Adventure" },
        { title: "Yesterday", year: 2019, genre: "Musical" },
        { title: "The Hundred-Foot Journey", year: 2014, genre: "Drama" },
        { title: "Brooklyn", year: 2015, genre: "Romance" },
        { title: "Begin Again", year: 2013, genre: "Musical" },
        { title: "The Intern", year: 2015, genre: "Comedy" },
        { title: "Wonder", year: 2017, genre: "Family" },
        { title: "Coco", year: 2017, genre: "Animation" },
        { title: "Soul", year: 2020, genre: "Animation" },
        { title: "Luca", year: 2021, genre: "Animation" },
        { title: "The Good Place", year: 2016, genre: "Comedy" }
    ],
    sad: [
        { title: "Inside Out", year: 2015, genre: "Animation" },
        { title: "Her", year: 2013, genre: "Drama" },
        { title: "Manchester by the Sea", year: 2016, genre: "Drama" },
        { title: "The Fault in Our Stars", year: 2014, genre: "Romance" },
        { title: "A Monster Calls", year: 2016, genre: "Drama" },
        { title: "Marley & Me", year: 2008, genre: "Comedy-Drama" },
        { title: "The Green Mile", year: 1999, genre: "Drama" },
        { title: "Requiem for a Dream", year: 2000, genre: "Drama" },
        { title: "Blue Valentine", year: 2010, genre: "Romance" },
        { title: "Eternal Sunshine of the Spotless Mind", year: 2004, genre: "Romance" },
        { title: "Lost in Translation", year: 2003, genre: "Drama" },
        { title: "The Pianist", year: 2002, genre: "Drama" },
        { title: "Schindler's List", year: 1993, genre: "Drama" },
        { title: "12 Years a Slave", year: 2013, genre: "Drama" },
        { title: "Room", year: 2015, genre: "Drama" },
        { title: "The Pursuit of Love", year: 2021, genre: "Romance" },
        { title: "If Beale Street Could Talk", year: 2018, genre: "Romance" },
        { title: "Moonlight", year: 2016, genre: "Drama" },
        { title: "Call Me by Your Name", year: 2017, genre: "Romance" },
        { title: "The Theory of Everything", year: 2014, genre: "Biography" },
        { title: "Still Alice", year: 2014, genre: "Drama" },
        { title: "Me Before You", year: 2016, genre: "Romance" },
        { title: "A Walk to Remember", year: 2002, genre: "Romance" },
        { title: "The Notebook", year: 2004, genre: "Romance" },
        { title: "Ghost", year: 1990, genre: "Romance" },
        { title: "Titanic", year: 1997, genre: "Romance" },
        { title: "The Time Traveler's Wife", year: 2009, genre: "Romance" },
        { title: "Dear John", year: 2010, genre: "Romance" },
        { title: "The Vow", year: 2012, genre: "Romance" },
        { title: "One Day", year: 2011, genre: "Romance" },
        { title: "P.S. I Love You", year: 2007, genre: "Romance" },
        { title: "The Last Song", year: 2010, genre: "Romance" },
        { title: "Atonement", year: 2007, genre: "Romance" }
    ],
    excited: [
        { title: "Mad Max: Fury Road", year: 2015, genre: "Action" },
        { title: "Avengers: Endgame", year: 2019, genre: "Action" },
        { title: "John Wick", year: 2014, genre: "Action" },
        { title: "Mission: Impossible - Fallout", year: 2018, genre: "Action" },
        { title: "Fast & Furious 7", year: 2015, genre: "Action" },
        { title: "The Dark Knight", year: 2008, genre: "Action" },
        { title: "Spider-Man: Into the Spider-Verse", year: 2018, genre: "Animation" },
        { title: "Top Gun: Maverick", year: 2022, genre: "Action" },
        { title: "Dune", year: 2021, genre: "Sci-Fi" },
        { title: "The Matrix", year: 1999, genre: "Sci-Fi" },
        { title: "Guardians of the Galaxy", year: 2014, genre: "Action" },
        { title: "Thor: Ragnarok", year: 2017, genre: "Action" },
        { title: "Black Panther", year: 2018, genre: "Action" },
        { title: "Wonder Woman", year: 2017, genre: "Action" },
        { title: "Baby Driver", year: 2017, genre: "Action" },
        { title: "Edge of Tomorrow", year: 2014, genre: "Sci-Fi" },
        { title: "Pacific Rim", year: 2013, genre: "Sci-Fi" },
        { title: "Kingsman: The Secret Service", year: 2014, genre: "Action" },
        { title: "The Raid", year: 2011, genre: "Action" },
        { title: "Atomic Blonde", year: 2017, genre: "Action" },
        { title: "Speed", year: 1994, genre: "Action" },
        { title: "Die Hard", year: 1988, genre: "Action" },
        { title: "Terminator 2: Judgment Day", year: 1991, genre: "Action" },
        { title: "Aliens", year: 1986, genre: "Sci-Fi" },
        { title: "The Rock", year: 1996, genre: "Action" },
        { title: "Con Air", year: 1997, genre: "Action" },
        { title: "Face/Off", year: 1997, genre: "Action" },
        { title: "Rush", year: 2013, genre: "Biography" },
        { title: "Ford v Ferrari", year: 2019, genre: "Biography" },
        { title: "1917", year: 2019, genre: "War" },
        { title: "Dunkirk", year: 2017, genre: "War" },
        { title: "Gladiator", year: 2000, genre: "Action" },
        { title: "300", year: 2006, genre: "Action" }
    ],
    romantic: [
        { title: "The Notebook", year: 2004, genre: "Romance" },
        { title: "Titanic", year: 1997, genre: "Romance" },
        { title: "La La Land", year: 2016, genre: "Musical" },
        { title: "Casablanca", year: 1942, genre: "Romance" },
        { title: "The Princess Bride", year: 1987, genre: "Adventure" },
        { title: "When Harry Met Sally", year: 1989, genre: "Romance" },
        { title: "Eternal Sunshine of the Spotless Mind", year: 2004, genre: "Romance" },
        { title: "Pride and Prejudice", year: 2005, genre: "Romance" },
        { title: "The Holiday", year: 2006, genre: "Romance" },
        { title: "Sleepless in Seattle", year: 1993, genre: "Romance" },
        { title: "You've Got Mail", year: 1998, genre: "Romance" },
        { title: "Roman Holiday", year: 1953, genre: "Romance" },
        { title: "Dirty Dancing", year: 1987, genre: "Romance" },
        { title: "Ghost", year: 1990, genre: "Romance" },
        { title: "Pretty Woman", year: 1990, genre: "Romance" },
        { title: "The Proposal", year: 2009, genre: "Romance" },
        { title: "Love Actually", year: 2003, genre: "Romance" },
        { title: "Notting Hill", year: 1999, genre: "Romance" },
        { title: "Four Weddings and a Funeral", year: 1994, genre: "Romance" },
        { title: "Bridget Jones's Diary", year: 2001, genre: "Romance" },
        { title: "The Time Traveler's Wife", year: 2009, genre: "Romance" },
        { title: "About Time", year: 2013, genre: "Romance" },
        { title: "Me Before You", year: 2016, genre: "Romance" },
        { title: "The Fault in Our Stars", year: 2014, genre: "Romance" },
        { title: "A Walk to Remember", year: 2002, genre: "Romance" },
        { title: "Dear John", year: 2010, genre: "Romance" },
        { title: "The Vow", year: 2012, genre: "Romance" },
        { title: "Safe Haven", year: 2013, genre: "Romance" },
        { title: "The Best of Me", year: 2014, genre: "Romance" },
        { title: "The Longest Ride", year: 2015, genre: "Romance" },
        { title: "Call Me by Your Name", year: 2017, genre: "Romance" },
        { title: "Her", year: 2013, genre: "Romance" },
        { title: "500 Days of Summer", year: 2009, genre: "Romance" }
    ],
    scared: [
        { title: "Get Out", year: 2017, genre: "Horror" },
        { title: "A Quiet Place", year: 2018, genre: "Horror" },
        { title: "The Conjuring", year: 2013, genre: "Horror" },
        { title: "Hereditary", year: 2018, genre: "Horror" },
        { title: "The Babadook", year: 2014, genre: "Horror" },
        { title: "It Follows", year: 2014, genre: "Horror" },
        { title: "Midsommar", year: 2019, genre: "Horror" },
        { title: "The Witch", year: 2015, genre: "Horror" },
        { title: "Sinister", year: 2012, genre: "Horror" },
        { title: "Insidious", year: 2010, genre: "Horror" },
        { title: "The Ring", year: 2002, genre: "Horror" },
        { title: "The Grudge", year: 2004, genre: "Horror" },
        { title: "Paranormal Activity", year: 2007, genre: "Horror" },
        { title: "The Exorcist", year: 1973, genre: "Horror" },
        { title: "Halloween", year: 1978, genre: "Horror" },
        { title: "A Nightmare on Elm Street", year: 1984, genre: "Horror" },
        { title: "Friday the 13th", year: 1980, genre: "Horror" },
        { title: "Scream", year: 1996, genre: "Horror" },
        { title: "The Silence of the Lambs", year: 1991, genre: "Thriller" },
        { title: "Psycho", year: 1960, genre: "Thriller" },
        { title: "The Shining", year: 1980, genre: "Horror" },
        { title: "It", year: 2017, genre: "Horror" },
        { title: "Us", year: 2019, genre: "Horror" },
        { title: "The Lighthouse", year: 2019, genre: "Horror" },
        { title: "Saint Maud", year: 2019, genre: "Horror" },
        { title: "His House", year: 2020, genre: "Horror" },
        { title: "The Invisible Man", year: 2020, genre: "Horror" },
        { title: "Candyman", year: 2021, genre: "Horror" },
        { title: "X", year: 2022, genre: "Horror" },
        { title: "Nope", year: 2022, genre: "Horror" },
        { title: "Barbarian", year: 2022, genre: "Horror" },
        { title: "Smile", year: 2022, genre: "Horror" },
        { title: "M3GAN", year: 2022, genre: "Horror" }
    ],
    thoughtful: [
        { title: "Inception", year: 2010, genre: "Sci-Fi" },
        { title: "Interstellar", year: 2014, genre: "Sci-Fi" },
        { title: "The Matrix", year: 1999, genre: "Sci-Fi" },
        { title: "Blade Runner 2049", year: 2017, genre: "Sci-Fi" },
        { title: "Ex Machina", year: 2014, genre: "Sci-Fi" },
        { title: "Arrival", year: 2016, genre: "Sci-Fi" },
        { title: "The Prestige", year: 2006, genre: "Mystery" },
        { title: "Memento", year: 2000, genre: "Mystery" },
        { title: "Shutter Island", year: 2010, genre: "Mystery" },
        { title: "The Sixth Sense", year: 1999, genre: "Mystery" },
        { title: "Fight Club", year: 1999, genre: "Drama" },
        { title: "The Social Network", year: 2010, genre: "Drama" },
        { title: "Her", year: 2013, genre: "Drama" },
        { title: "Black Mirror: Bandersnatch", year: 2018, genre: "Sci-Fi" },
        { title: "Primer", year: 2004, genre: "Sci-Fi" },
        { title: "Coherence", year: 2013, genre: "Sci-Fi" },
        { title: "The Man from Earth", year: 2007, genre: "Drama" },
        { title: "Moon", year: 2009, genre: "Sci-Fi" },
        { title: "Source Code", year: 2011, genre: "Sci-Fi" },
        { title: "Looper", year: 2012, genre: "Sci-Fi" },
        { title: "Predestination", year: 2014, genre: "Sci-Fi" },
        { title: "The Machinist", year: 2004, genre: "Thriller" },
        { title: "Donnie Darko", year: 2001, genre: "Sci-Fi" },
        { title: "Eternal Sunshine of the Spotless Mind", year: 2004, genre: "Romance" },
        { title: "Being John Malkovich", year: 1999, genre: "Comedy" },
        { title: "Synecdoche, New York", year: 2008, genre: "Drama" },
        { title: "The Tree of Life", year: 2011, genre: "Drama" },
        { title: "2001: A Space Odyssey", year: 1968, genre: "Sci-Fi" },
        { title: "Solaris", year: 1972, genre: "Sci-Fi" },
        { title: "Stalker", year: 1979, genre: "Sci-Fi" },
        { title: "The Fountain", year: 2006, genre: "Drama" },
        { title: "Cloud Atlas", year: 2012, genre: "Drama" },
        { title: "Mr. Nobody", year: 2009, genre: "Drama" }
    ]
};

const movieTitle = document.getElementById('movieTitle');
const movieDetails = document.getElementById('movieDetails');
const pickButton = document.getElementById('pickMovie');
const moodButtons = document.querySelectorAll('.mood-btn');

let selectedMood = null;

// Add event listeners to mood buttons
moodButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove selected class from all buttons
        moodButtons.forEach(btn => btn.classList.remove('selected'));
        
        // Add selected class to clicked button
        button.classList.add('selected');
        
        // Store selected mood
        selectedMood = button.dataset.mood;
        
        // Enable pick movie button
        pickButton.disabled = false;
        
        // Update display
        movieTitle.textContent = `Ready to pick a ${selectedMood} movie!`;
        movieDetails.textContent = 'Click "Pick Movie" to get your personalized recommendation!';
    });
});

// Add animation class for smooth transitions
movieTitle.classList.add('fade-in');

pickButton.addEventListener('click', pickMoodBasedMovie);

function pickMoodBasedMovie() {
    if (!selectedMood) return;
    
    const moviesForMood = moviesByMood[selectedMood];
    const randomIndex = Math.floor(Math.random() * moviesForMood.length);
    const selectedMovie = moviesForMood[randomIndex];
    
    // Add animation class
    movieTitle.classList.remove('fade-in');
    movieTitle.classList.add('fade-out');
    
    setTimeout(() => {
        movieTitle.textContent = selectedMovie.title;
        movieTitle.classList.remove('fade-out');
        movieTitle.classList.add('fade-in');
        
        // Display movie details
        movieDetails.textContent = `Year: ${selectedMovie.year} • Genre: ${selectedMovie.genre} • Mood: ${selectedMood.charAt(0).toUpperCase() + selectedMood.slice(1)}`;
    }, 500);
}

// Add CSS animation classes
const style = document.createElement('style');
style.textContent = `
    .fade-out {
        opacity: 0;
        transform: translateY(-20px);
        transition: all 0.5s ease;
    }
    
    .fade-in {
        opacity: 1;
        transform: translateY(0);
        transition: all 0.5s ease;
    }
    
    .pick-button:disabled {
        background-color: #7f8c8d;
        cursor: not-allowed;
        opacity: 0.6;
    }
    
    .pick-button:disabled:hover {
        background-color: #7f8c8d;
        transform: none;
    }
`;
document.head.appendChild(style);

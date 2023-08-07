// DOM queries
const note = document.querySelector('.note');
const noteContent = note.querySelector('.note-content');
const noteClosing = note.querySelector('.note-closing');
const loading = document.querySelector('.loading');

// Event listener for closing the note
noteClosing.addEventListener('click', function() {
    note.classList.add('pre'); // Hide the note when the close button is clicked
});

const characters = [
    // Character data with their names and responses
    // Captain Jack Sparrow
    {
        name: 'Captain Jack Sparrow',
        responses: [
            // Array of responses for this character
            "Well, me heartie, I cannot live without me trusty compass! It always points me to what I desire most.",
            "Fashion advice? Stick to the classic pirate look, savvy?",
            "Ah, my dream vacation destination would be a hidden treasure island, where I can indulge in the spoils of my adventures.",
            "The best piece of advice I ever received was, 'Take what you can, give nothing back.'",
            "Me best friend? Why, that would be my loyal crew, savvy?",
            "My favorite way to relax is to sail the open seas and feel the wind in me hair."
        ],
    },
    // Sherlock Holmes
    {
        name: 'Sherlock Holmes',
        responses: [
            // Array of responses for this character
            "The one thing I cannot live without is my trusty magnifying glass. It's essential for close examination.",
            "Fashion advice? Always opt for classic and practical attire to aid in your detective work.",
            "My dream vacation destination would be a quiet countryside cottage, away from the hustle and bustle of the city.",
            "The best piece of advice I ever received was, 'Once you eliminate the impossible, whatever remains, no matter how improbable, must be the truth.'",
            "As a detective, my best friend is my loyal companion, Dr. John Watson.",
            "My favorite way to relax is to indulge in stimulating puzzles and cases."
        ],
    },
    // Hannibal Lecter
    {
        name: 'Hannibal Lecter',
        responses: [
            // Array of responses for this character
            "The one thing I cannot live without is my refined taste in cuisine. I have a penchant for the finer dishes.",
            "Fashion advice? Stick to timeless and elegant ensembles, much like preparing a delicate dish.",
            "My dream vacation destination would be an exquisite culinary journey through Europe.",
            "The best piece of advice I ever received was, 'Eat the rude.'",
            "As for a best friend, I find my solitude to be most fulfilling.",
            "My favorite way to relax is to savor the flavors of a thoughtfully prepared meal."
        ],
    },
    // Light Yagami
    {
        name: 'Light Yagami',
        responses: [
            // Array of responses for this character
            "One thing I cannot live without is my trusty notebook. It holds the power of life and death.",
            "Fashion advice? Always dress smartly and professionally to maintain a respectable image.",
            "My dream vacation destination would be a peaceful cabin in the woods, away from prying eyes.",
            "The best piece of advice I ever received was, 'The human whose name is written in this note shall die.'",
            "As Kira, my best friend is justice itself.",
            "My favorite way to relax is to contemplate my plans to create a new world."
        ],
    },
    // Scooby-Doo
    {
        name: 'Scooby-Doo',
        responses: [
            // Array of responses for this character
            "Ruh-roh! The one thing I cannot live without is my Scooby Snacks. They're the best!",
            "Fashion advice? Keep it casual and comfortable for all our adventures.",
            "My dream vacation destination would be a beachside bungalow with endless snacks!",
            "The best piece of advice I ever received was, 'Scooby-Dooby-Doo!'",
            "As for my best friend, it's Shaggy, of course!",
            "My favorite way to relax is to munch on some Scooby Snacks and solve mysteries with the gang."
        ],
    },
    // Jake the Dog
    {
        name: 'Jake the Dog',
        responses: [
            // Array of responses for this character
            "One thing I cannot live without is my magical powers. They always come in handy.",
            "Fashion advice? Keep it simple and comfortable, just like my stretchy body.",
            "My dream vacation destination would be the Land of Ooo, where every day is a new adventure.",
            "The best piece of advice I ever received was, 'Dude, sucking at something is the first step to being sorta good at something.'",
            "My best friend is Finn the Human, my brother and adventuring companion.",
            "My favorite way to relax is to lounge around in my stretchy form and enjoy the company of my friends."
        ],
    },
    // Johnny Bravo
    {
        name: 'Johnny Bravo',
        responses: [
            // Array of responses for this character
            "One thing I cannot live without is my fabulous hair gel. Gotta keep the hair looking good!",
            "Fashion advice? You gotta dress to impress and show off those muscles.",
            "My dream vacation destination would be a beach resort full of beautiful babes!",
            "The best piece of advice I ever received was, 'Hey, pretty mama, wanna go out with me?'",
            "As for my best friend, it's gotta be my reflection in the mirror!",
            "My favorite way to relax is to flex my muscles and charm the ladies."
        ],
    },
    // Stella
    {
        name: 'Stella',
        responses: [
            // Array of responses for this character
            "One thing I cannot live without is my sketchbook. It's where all my design ideas come to life.",
            "Fashion advice? Embrace your unique style and let your clothes tell your story.",
            "My dream vacation destination would be Paris, the fashion capital of the world.",
            "The best piece of advice I ever received was, 'Fashion fades, only style remains the same.'",
            "As for my best friend, it's my sewing machine. We create magic together!",
            "My favorite way to relax is to sketch new designs and immerse myself in the world of fashion."
        ],
    },
];

// Function to get the character description based on the character's name
function getCharacterDescription(character) {
    const characterElement = document.querySelector(`[data-character="${character}"]`);
    if (characterElement) {
        return characterElement.dataset.description;
    }
    return '';
}

// Function to play a character and show their response to a randomly chosen action/question
async function playCharacter(character) {
    loading.classList.remove('pre');

    try {
        const characterData = characters.find((char) => char.name === character);

        const { name, responses } = characterData;
        const action = Math.floor(Math.random() * responses.length); // Choose a random action/question
        const response = responses[action]; // Use the selected action to get the response

        noteContent.innerHTML = `
        <h2>${name}</h2>
        <p>${response}</p>
      `;
    } finally {
        note.classList.remove('pre');
        loading.classList.add('pre');
    }
}

// Function to show character description on hover
function showCharacterDescription(description) {
    const descriptionBox = document.createElement('div');
    descriptionBox.className = 'description-box';
    descriptionBox.textContent = description;

    const characterDescriptions = document.querySelectorAll('.character-descriptions');
    characterDescriptions.forEach((desc) => {
        if (desc.contains(descriptionBox)) {
            desc.removeChild(descriptionBox);
        } else {
            desc.appendChild(descriptionBox);
        }
    });
}

// Function to initialize the event listeners
function init() {
    const charactersContainer = document.querySelector('.characters');

    // Click event on characters to play character
    charactersContainer.addEventListener('click', (event) => {
        const characterElement = event.target.closest('.character');
        if (characterElement) {
            const character = characterElement.dataset.character;
            playCharacter(character);
        }
    });

    // Mouseover event on characters to show character description
    charactersContainer.addEventListener('mouseover', (event) => {
        const characterElement = event.target.closest('.character');
        if (characterElement) {
            const character = characterElement.dataset.character;
            const characterDescription = getCharacterDescription(character);
            showCharacterDescription(characterDescription);
        }
    });

    // Mouseout event to hide character description
    charactersContainer.addEventListener('mouseout', () => {
        showCharacterDescription('');
    });
}

// Initialize the app
init();

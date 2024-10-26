document.getElementById('generate-button').addEventListener('click', () => {
    
    const start = new Date();
    const end = new Date();
    end.setFullYear(start.getFullYear() + 1);

    const randomDate = new Date(start.getTime() + Math.random() * (end - start));


    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = randomDate.toLocaleDateString(undefined, options);

    const foodEvents = [
        "Pasta Night",
        "Taco Tuesday",
        "Sushi Party",
        "BBQ Weekend",
        "Dessert Tasting",
        "Pizza Making Night",
        "Vegetable Stir-fry",
        "Breakfast for Dinner"
    ];

    const randomIndex = Math.floor(Math.random() * foodEvents.length);
    const selectedEvent = foodEvents[randomIndex];

    document.getElementById('result').innerText = `Event: ${selectedEvent} on ${formattedDate}`;
});
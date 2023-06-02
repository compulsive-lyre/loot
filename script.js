// Function to generate a random item
function generateItem() {
	// Array containing the categories with their weighted chances
	const categories = [
		{ name: "Treasure", chance: 5 },
		{ name: "Consumable", chance: 10 },
		{ name: "Equipment", chance: 10 },
		{ name: "Common Magic Item", chance: 30 },
		{ name: "Uncommon Magic Item", chance: 20 },
		{ name: "Rare Magic Item", chance: 15 },
		{ name: "Very Rare Magic Item", chance: 8 },
		{ name: "Legendary Magic Item", chance: 2 },
	];

	// Calculate the total weight of all categories
	let totalWeight = 0;
	for (const category of categories) {
		totalWeight += category.chance;
	}

	// Generate a random number between 0 and the total weight
	const random = Math.random() * totalWeight;

	// Iterate over the categories to find the selected category
	let accumulatedWeight = 0;
	let selectedCategory;
	for (const category of categories) {
		accumulatedWeight += category.chance;
		if (random < accumulatedWeight) {
			selectedCategory = category;
			break;
		}
	}

	// Randomly select an item from the selected category
	const filteredItems = data.filter(
		(item) => item.Category === selectedCategory.name
	);

	const randomItem =
		filteredItems.length > 0
			? filteredItems[Math.floor(Math.random() * filteredItems.length)]
			: null;

	// Update the result element with the generated item and category
	const resultElement = document.getElementById("result");
	if (randomItem) {
		resultElement.innerHTML =
			"<span id='result-name'>" +
			randomItem.Name +
			"</span><br>" +
			"<span id='result-category'>(" +
			selectedCategory.name +
			")</span><br><br>" +
			"<span id='result-description'>" +
			randomItem.Description +
			"</span>";
	} else {
		resultElement.innerHTML = "No item found for the selected category.";
	}
	resultElement.style.display = "block";
}

// Fetch the data.json file
fetch("data.json")
	.then((response) => response.json())
	.then((data) => {
		// Store the retrieved data in a global variable
		window.data = data;

		// Event listener for the roll button
		document
			.getElementById("rollButton")
			.addEventListener("click", generateItem);
	})
	.catch((error) => {
		console.error("Error fetching data.json:", error);
	});
// Function to copy the generated text to the clipboard
function copyTextToClipboard() {
	const resultElement = document.getElementById("result");
	const text = resultElement.innerText;
  
	navigator.clipboard.writeText(text)
	  .then(() => {
		console.log("Text copied to clipboard");
		// You can also display a success message or perform any other actions here
	  })
	  .catch((error) => {
		console.error("Error copying text to clipboard:", error);
		// You can display an error message or handle the error gracefully here
	  });
  }
  
  // Add event listener to the result element for click events
  document.getElementById("result").addEventListener("click", copyTextToClipboard);
  
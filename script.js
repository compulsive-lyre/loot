// JavaScript code for Loot Generator

// Function to generate a random item
function generateItem() {
	const categories = [
		{
			name: "Treasure",
			chance: 5,
			items: [
				"Abacus",
				"Acid (vial)",
				"Adamantine Ammunition",
				"Alchemist's Doom",
				"Alchemist's Fire (flask)",
				"Alchemist's Supplies",
				"Ale (Gallon)",
				"Ale (Mug)",
				"Antitoxin (vial)",
				"Arrow",
				"Arrows (20)",
				"Artisan's Tools",
				"Assassin's Blood",
				"Backpack",
				"Bagpipes",
				"Ball Bearing",
				"Ball Bearings (bag of 1,000)",
				"Barrel",
				"Basic Fishing Equipment",
				"Basic Poison (vial)",
				"Basket",
				"Bedroll",
				"Bell",
				"Birdpipes",
				"Biza's Breath",
				"Black Ghost Orchid Seed",
				"Blanket",
				"Block and Tackle",
				"Blowgun Needle",
				"Blowgun Needles (50)",
				"Book",
				"Brewer's Supplies",
				"Bucket",
				"Bullseye Lantern",
				"Burglar's Pack",
				"Burnt Othur Fumes",
				"Calligrapher's Supplies",
				"Caltrop",
				"Caltrops (bag of 20)",
				"Candle",
				"Carpenter's Tools",
				"Carrion Crawler Mucus",
				"Cartographer's Tools",
				"Catapult Munition",
				"Chain (10 feet)",
				"Chalk (1 piece)",
				"Chest",
				"Chunk of Meat",
				"Climber's Kit",
				"Clothing, cold weather",
				"Cobbler's Tools",
				"Common Clothes",
				"Common Wine (Pitcher)",
				"Component Pouch",
				"Cook's Utensils",
				"Costume Clothes",
				"Crampons",
				"Crossbow Bolt",
				"Crossbow Bolt Case",
				"Crossbow Bolts (20)",
				"Crowbar",
				"Dice Set",
				"Diplomat's Pack",
				"Disguise Kit",
				"Dragonchess Set",
				"Drow Poison",
				"Drum",
				"Dulcimer",
				"Dungeoneer's Pack",
				"Elven Trinket",
				"Entertainer's Pack",
				"Essence of Ether",
				"Explorer's Pack",
				"Feywild Trinket",
				"Fine Clothes",
				"Fine Wine (Bottle)",
				"Fishing Tackle",
				"Flask",
				"Flute",
				"Forgery Kit",
				"Gaming Set",
				"Glass Bottle",
				"Glassblower's Tools",
				"Glaur",
				"Grappling Hook",
				"Hammer",
				"Hand Drum",
				"Healer's Kit",
				"Hempen Rope (50 feet)",
				"Herbalism Kit",
				"Holy Water (flask)",
				"Hooded Lantern",
				"Horn",
				"Horror Trinket",
				"Hourglass",
				"Hunk of Cheese",
				"Hunting Trap",
				"Icewind Dale Trinket",
				"Ink (1-ounce bottle)",
				"Ink Pen",
				"Insect Repellent (block of incense)",
				"Insect Repellent (greasy salve)",
				"Iron Pot",
				"Iron Spike",
				"Iron Spikes (10)",
				"Ivana's Whisper",
				"Jeweler's Tools",
				"Jug",
				"Keg of Alchemist's Fire",
				"Ladder (10-foot)",
				"Lamp",
				"Leatherworker's Tools",
				"Loaf of Bread",
				"Lock",
				"Longhorn",
				"Lute",
				"Lyre",
				"Magnifying Glass",
				"Malice",
				"Manacles",
				"Map or Scroll Case",
				"Mason's Tools",
				"Menga leaves (1 ounce)",
				"Merchant's Scale",
				"Mess Kit",
				"Midnight Tears",
				"Miner's Pick",
				"Monster Hunter's Pack",
				"Murgaxor's Elixir of Life",
				"Musical Instrument",
				"Musical Instrument",
				"Navigator's Tools",
				"Oil (flask)",
				"Oil of Taggit",
				"Painter's Supplies",
				"Pale Tincture",
				"Pan Flute",
				"Paper (one sheet)",
				"Parchment (one sheet)",
				"Perfume (vial)",
				"Pitcher",
				"Piton",
				"Playing Card Set",
				"Poisoner's Kit",
				"Pole (10-foot)",
				"Portable Ram",
				"Potter's Tools",
				"Pouch",
				"Priest's Pack",
				"Purple Worm Poison",
				"Quiver",
				"Rain Catcher",
				"Rations (1 day)",
				"Robes",
				"Ryath Root",
				"Sack",
				"Scholar's Pack",
				"Sealing Wax",
				"Serpent Venom",
				"Shawm",
				"Shovel",
				"Signal Whistle",
				"Signet Ring",
				"Silk Rope (50 feet)",
				"Silvered Ammunition",
				"Sinda berries (10)",
				"Sledgehammer",
				"Sling Bullet",
				"Sling Bullets (20)",
				"Smith's Tools",
				"Snowshoes",
				"Soap",
				"Songhorn",
				"Spellbook",
				"Spyglass",
				"Steel Mirror",
				"Tankard",
				"Tantan",
				"Tej",
				"The Incantations of Iriolarthas",
				"Thelarr",
				"Thieves' Tools",
				"Three-Dragon Ante Set",
				"Tinderbox",
				"Tinker's Tools",
				"Tocken",
				"Tome of Strahd",
				"Torch",
				"Torpor",
				"Traveler's Clothes",
				"Trinket",
				"Truth Serum",
				"Two-Person Tent",
				"Vial",
				"Viol",
				"Wargong",
				"Waterskin",
				"Weaver's Tools",
				"Whetstone",
				"White Ghost Orchid Seed",
				"Wildroot",
				"Woodcarver's Tools",
				"Wukka Nut",
				"Wyvern Poison",
				"Yahcha",
				"Yarting",
				"Zabou",
				"Zulkoon",
			],
		},
		{
			name: "Consumables",
			chance: 10,
			items: [
				"Adamantine Ammunition",
				"Arrows (20)",
				"Assassin's Blood",
				"Basic Poison (vial)",
				"Biza's Breath",
				"Blowgun Needle",
				"Blowgun Needles (50)",
				"Burnt Othur Fumes",
				"Carrion Crawler Mucus",
				"Crossbow Bolts (20)",
				"Drow Poison",
				"Essence of Ether",
				"Ivana's Whisper",
				"Malice",
				"Midnight Tears",
				"Oil of Taggit",
				"Pale Tincture",
				"Purple Worm Poison",
				"Serpent Venom",
				"Silvered Ammunition",
				"Sling Bullets (20)",
				"Torpor",
				"Truth Serum",
				"Wyvern Poison",
				"+1 Ammunition",
				"+2 Ammunition",
				"+3 Ammunition",
				"Arrow of Slaying (*)",
				"Bottled Breath",
				"Elixir of Health",
				"Oil of Etherealness",
				"Oil of Sharpness",
				"Oil of Slipperiness",
				"Philter of Love",
				"Potion of Acid Resistance",
				"Potion of Advantage",
				"Potion of Animal Friendship",
				"Potion of Aqueous Form",
				"Potion of Clairvoyance",
				"Potion of Climbing",
				"Potion of Cloud Giant Strength",
				"Potion of Cold Resistance",
				"Potion of Comprehension",
				"Potion of Diminution",
				"Potion of Dragon's Majesty",
				"Potion of Fire Breath",
				"Potion of Fire Giant Strength",
				"Potion of Fire Resistance",
				"Potion of Flying",
				"Potion of Force Resistance",
				"Potion of Frost Giant Strength",
				"Potion of Gaseous Form",
				"Potion of Giant Size",
				"Potion of Giant Strength",
				"Potion of Greater Healing",
				"Potion of Growth",
				"Potion of Healing",
				"Potion of Healing (*)",
				"Potion of Heroism",
				"Potion of Hill Giant Strength",
				"Potion of Invisibility",
				"Potion of Invulnerability",
				"Potion of Lightning Resistance",
				"Potion of Longevity",
				"Potion of Mind Control",
				"Potion of Mind Control (beast)",
				"Potion of Mind Control (humanoid)",
				"Potion of Mind Control (monster)",
				"Potion of Mind Reading",
				"Potion of Necrotic Resistance",
				"Potion of Poison",
				"Potion of Poison Resistance",
				"Potion of Psychic Resistance",
				"Potion of Radiant Resistance",
				"Potion of Resistance",
				"Potion of Speed",
				"Potion of Stone Giant Strength",
				"Potion of Storm Giant Strength",
				"Potion of Superior Healing",
				"Potion of Supreme Healing",
				"Potion of Thunder Resistance",
				"Potion of Vitality",
				"Potion of Watchful Rest",
				"Potion of Water Breathing",
				"Sling Bullets of Althemone",
				"Unbreakable Arrow",
				"Walloping Ammunition",
			],
		},
		{
			name: "Equipment",
			chance: 10,
			items: [
				"Amulet",
				"Arcane Focus",
				"Battleaxe",
				"Blowgun",
				"Breastplate",
				"Chain Mail",
				"Chain Shirt",
				"Club",
				"Crystal",
				"Dagger",
				"Dart",
				"Druidic Focus",
				"Emblem",
				"Flail",
				"Glaive",
				"Greataxe",
				"Greatclub",
				"Greatsword",
				"Halberd",
				"Half Plate Armor",
				"Hand Crossbow",
				"Handaxe",
				"Heavy Crossbow",
				"Hide Armor",
				"Holy Symbol",
				"Hooked Shortspear",
				"Javelin",
				"Lance",
				"Leather Armor",
				"Light Crossbow",
				"Light Hammer",
				"Light Repeating Crossbow",
				"Longbow",
				"Longsword",
				"Mace",
				"Maul",
				"Morningstar",
				"Net",
				"Orb",
				"Oversized Longbow",
				"Padded Armor",
				"Pike",
				"Plate Armor",
				"Quarterstaff",
				"Rapier",
				"Reliquary",
				"Ring Mail",
				"Rod",
				"Scale Mail",
				"Scimitar",
				"Shield",
				"Shortbow",
				"Shortsword",
				"Sickle",
				"Sling",
				"Spear",
				"Spiked Armor",
				"Splint Armor",
				"Sprig of Mistletoe",
				"Staff",
				"Studded Leather Armor",
				"Survival Mantle",
				"Totem",
				"Trident",
				"Wand",
				"War Pick",
				"Warhammer",
				"Whip",
				"Wooden Staff",
				"Yew Wand",
				"Yklwa",
			],
		},
		{
			name: "Common Magic Items",
			chance: 25,
			items: [
				"Armor of Gleaming",
				"Bead of Nourishment",
				"Bead of Refreshment",
				"Boots of False Tracks",
				"Bottle of Boundless Coffee",
				"Candle of the Deep",
				"Cast-Off Armor",
				"Charlatan's Die",
				"Chest of Preserving",
				"Cloak of Billowing",
				"Cloak of Many Fashions",
				"Clockwork Amulet",
				"Clothes of Mending",
				"Cuddly Strixhaven Mascot",
				"Dark Shard Amulet",
				"Dread Helm",
				"Ear Horn of Hearing",
				"Enduring Spellbook",
				"Ersatz Eye",
				"Hat of Vermin",
				"Hat of Wizardry",
				"Heward's Handy Spice Pouch",
				"Horn of Silent Alarm",
				"Illuminator's Tattoo",
				"Instrument of Illusions",
				"Instrument of Scribing",
				"Lantern of Tracking",
				"Lock of Trickery",
				"Masque Charm",
				"Masquerade Tattoo",
				"Moodmark Paint",
				"Moon-Touched Sword",
				"Mystery Key",
				"Orb of Direction",
				"Orb of Gonging",
				"Orb of Time",
				"Perfume of Bewitching",
				"Pipe of Remembrance",
				"Pipe of Smoke Monsters",
				"Pole of Angling",
				"Pole of Collapsing",
				"Pot of Awakening",
				"Pressure Capsule",
				"Prosthetic Limb",
				"Rope of Mending",
				"Ruby of the War Mage",
				"Sekolahian Worshiping Statuette",
				"Shield of Expression",
				"Smoldering Armor",
				"Spell Scroll (1st Level)",
				"Spell Scroll (Cantrip)",
				"Spellwrought Tattoo (1st Level)",
				"Spellwrought Tattoo (Cantrip)",
				"Staff of Adornment",
				"Staff of Birdcalls",
				"Staff of Flowers",
				"Strixhaven Pennant",
				"Talking Doll",
				"Tankard of Sobriety",
				"Thermal Cube",
				"Veteran's Cane",
				"Wand of Conducting",
				"Wand of Pyrotechnics",
				"Wand of Scowls",
				"Wand of Smiles",
				"Wyllow's Staff of Flowers",
			],
		},
		{
			name: "Uncommon Magic Items",
			chance: 20,
			items: [
				"All-Purpose Tool",
				"Amulet of the Devout",
				"Arcane Grimoire",
				"Bloodwell Vial",
				"Dragonhide Belt",
				"Moon Sickle",
				"Rhythm-Maker's Drum",
				"Rod of the Pact Keeper",
				"Shield (*)",
				"Wand of the War Mage",
				"Weapon",
				"Weapon (no damage)",
				"Adamantine Armor",
				"Alchemy Jug",
				"Alchemy Jug (Blue)",
				"Alchemy Jug (Orange)",
				"Amulet of Proof against Detection and Location",
				"Azorius Guild Signet",
				"Bag of Holding",
				"Bag of Tricks",
				"Bag of Tricks, Gray",
				"Bag of Tricks, Rust",
				"Bag of Tricks, Tan",
				"Balance of Harmony",
				"Balloon Pack",
				"Barrier Tattoo (Small)",
				"Blood Spear",
				"Boots of Elvenkind",
				"Boots of Striding and Springing",
				"Boots of the Winterlands",
				"Boros Guild Signet",
				"Bracers of Archery",
				"Brooch of Shielding",
				"Broom of Flying",
				"Cap of Water Breathing",
				"Charred Wand of Magic Missiles",
				"Circlet of Blasting",
				"Circlet of Human Perfection",
				"Cloak of Elvenkind",
				"Cloak of Protection",
				"Cloak of the Manta Ray",
				"Coiling Grasp Tattoo",
				"Cracked Driftglobe",
				"Cursed Luckstone",
				"Decanter of Endless Water",
				"Deck of Illusions",
				"Dimir Guild Signet",
				"Driftglobe",
				"Dust of Corrosion",
				"Dust of Disappearance",
				"Dust of Dryness",
				"Dust of Sneezing and Choking",
				"Eldritch Claw Tattoo",
				"Elemental Gem",
				"Elemental Gem, Blue Sapphire",
				"Elemental Gem, Emerald",
				"Elemental Gem, Red Corundum",
				"Elemental Gem, Yellow Diamond",
				"Emerald Pen",
				"Eversmoking Bottle",
				"Eyes of Charming",
				"Eyes of Minute Seeing",
				"Eyes of the Eagle",
				"Feywild Shard",
				"Figurine of Wondrous Power, Silver Raven",
				"Gauntlets of Ogre Power",
				"Gem of Brightness",
				"Gloves of Missile Snaring",
				"Gloves of Swimming and Climbing",
				"Gloves of Thievery",
				"Goggles of Night",
				"Golgari Guild Signet",
				"Gruul Guild Signet",
				"Guardian Emblem",
				"Guild Signet",
				"Harkon's Bite",
				"Hat of Disguise",
				"Headband of Intellect",
				"Hellfire Weapon",
				"Helm of Comprehending Languages",
				"Helm of Telepathy",
				"Helm of Underwater Action",
				"Immovable Rod",
				"Infernal Puzzle Box",
				"Insignia of Claws",
				"Instrument of the Bards, Doss Lute",
				"Instrument of the Bards, Fochlucan Bandore",
				"Instrument of the Bards, Mac-Fuirmidh Cittern",
				"Izzet Guild Signet",
				"Javelin of Lightning",
				"Keoghtom's Ointment",
				"Lantern of Revealing",
				"Lightbringer",
				"Lorehold Primer",
				"Mariner's Armor",
				"Mask of the Beast",
				"Medallion of Thoughts",
				"Mind Carapace Armor",
				"Mithral Armor",
				"Mizzium Apparatus",
				"Nature's Mantle",
				"Necklace of Adaptation",
				"Night Caller",
				"Orc Stone",
				"Orzhov Guild Signet",
				"Paper Bird",
				"Pearl of Power",
				"Periapt of Health",
				"Periapt of Wound Closure",
				"Pipes of Haunting",
				"Pipes of the Sewers",
				"Piwafwi (Cloak of Elvenkind)",
				"Pixie Dust",
				"Prismari Primer",
				"Propeller Helm",
				"Psi Crystal",
				"Pyroconverger",
				"Quandrix Primer",
				"Quiver of Ehlonna",
				"Rakdos Guild Signet",
				"Rakdos Keyrune",
				"Reszur",
				"Ring of Jumping",
				"Ring of Mind Shielding",
				"Ring of Swimming",
				"Ring of Truth Telling",
				"Ring of Warmth",
				"Ring of Water Walking",
				"Robe of Serpents",
				"Robe of Useful Items",
				"Rope of Climbing",
				"Saddle of the Cavalier",
				"Seeker Dart",
				"Selesnya Guild Signet",
				"Sending Stones",
				"Sentinel Shield",
				"Serpent Scale Armor",
				"Shatterspike",
				"Silverquill Primer",
				"Simic Guild Signet",
				"Simic Keyrune",
				"Skyblinder Staff",
				"Slippers of Spider Climbing",
				"Slumbering Dragon Vessel",
				"Slumbering Dragon's Wrath Weapon",
				"Slumbering Dragon-Touched Focus",
				"Slumbering Scaled Ornament",
				"Smokepowder",
				"Soul Coin",
				"Spell Gem (Lapis lazuli)",
				"Spell Gem (Obsidian)",
				"Spell Scroll (2nd Level)",
				"Spell Scroll (3rd Level)",
				"Spellwrought Tattoo (2nd Level)",
				"Spellwrought Tattoo (3rd Level)",
				"Spies' Murmur",
				"Staff of the Adder",
				"Staff of the Python",
				"Stone of Good Luck",
				"Stone of Ill Luck",
				"Storm Boomerang",
				"Sword of Vengeance",
				"Trident of Fish Command",
				"Vanrak's Mithral Shirt",
				"Wand of Entangle",
				"Wand of Magic Detection",
				"Wand of Magic Missiles",
				"Wand of Secrets",
				"Wand of Web",
				"Weapon of Warning",
				"Wildspace Orrery",
				"Wind Fan",
				"Winged Boots",
				"Wingwear",
				"Winter's Dark Bite",
				"Witherbloom Primer",
			],
		},
		{
			name: "Rare Magic Items",
			chance: 15,
			items: [
				"+1 Armor",
				"All-Purpose Tool",
				"Amulet of the Devout",
				"Arcane Grimoire",
				"Bloodwell Vial",
				"Dragonhide Belt",
				"Moon Sickle",
				"Rhythm-Maker's Drum",
				"Rod of the Pact Keeper",
				"Shield (*)",
				"Wand of the War Mage",
				"Weapon",
				"Weapon (no damage)",
				"Alchemical Compendium",
				"Amulet of Health",
				"Amulet of Protection from Turning",
				"Armor of Acid Resistance",
				"Armor of Cold Resistance",
				"Armor of Fire Resistance",
				"Armor of Force Resistance",
				"Armor of Lightning Resistance",
				"Armor of Necrotic Resistance",
				"Armor of Poison Resistance",
				"Armor of Psychic Resistance",
				"Armor of Radiant Resistance",
				"Armor of Resistance",
				"Armor of Thunder Resistance",
				"Armor of Vulnerability",
				"Armor of Vulnerability (Bludgeoning)",
				"Armor of Vulnerability (Piercing)",
				"Armor of Vulnerability (Slashing)",
				"Arrow-Catching Shield",
				"Astral Shard",
				"Astromancy Archive",
				"Atlas of Endless Horizons",
				"Azorius Keyrune",
				"Badge of the Watch",
				"Bag of Beans",
				"Banner of the Krig Rune",
				"Barrier Tattoo (Medium)",
				"Bead of Force",
				"Bell Branch",
				"Belt of Dwarvenkind",
				"Belt of Hill Giant Strength",
				"Berserker Axe",
				"Black Chromatic Rose",
				"Blod Stone",
				"Blue Chromatic Rose",
				"Bonecounter",
				"Boots of Levitation",
				"Boots of Speed",
				"Boros Keyrune",
				"Bowl of Commanding Water Elementals",
				"Bracer of Flying Daggers",
				"Bracers of Defense",
				"Brazier of Commanding Fire Elementals",
				"Cape of the Mountebank",
				"Cauldron of Plenty",
				"Censer of Controlling Air Elementals",
				"Charm of Plant Command",
				"Chime of Opening",
				"Chromatic Rose",
				"Claw of the Wyrm Rune",
				"Claws of the Umber Hulk",
				"Cloak of Displacement",
				"Cloak of the Bat",
				"Crystal Blade",
				"Cube of Force",
				"Daern's Instant Fortress",
				"Dagger of Blindsight",
				"Dagger of Venom",
				"Devotee's Censer",
				"Dimensional Shackles",
				"Dodecahedron of Doom",
				"Dragon Slayer",
				"Dragon Wing Bow",
				"Dragonguard",
				"Dragontooth Dagger",
				"Duplicitous Manuscript",
				"Eagle Whistle",
				"Elemental Essence Shard",
				"Elemental Essence Shard (Air)",
				"Elemental Essence Shard (Earth)",
				"Elemental Essence Shard (Fire)",
				"Elemental Essence Shard (Water)",
				"Elven Chain",
				"Far Realm Shard",
				"Feather of Diatryma Summoning",
				"Figurine of Wondrous Power, Bronze Griffon",
				"Figurine of Wondrous Power, Ebony Fly",
				"Figurine of Wondrous Power, Golden Lions",
				"Figurine of Wondrous Power, Ivory Goats",
				"Figurine of Wondrous Power, Marble Elephant",
				"Figurine of Wondrous Power, Onyx Dog",
				"Figurine of Wondrous Power, Serpentine Owl",
				"Flame Tongue",
				"Flying Chariot",
				"Folding Boat",
				"Fulminating Treatise",
				"Gauntlets of Flaming Fury",
				"Gavel of the Venn Rune",
				"Gem of Seeing",
				"Ghost Lantern",
				"Giant Slayer",
				"Glamoured Studded Leather",
				"Green Chromatic Rose",
				"Gruul Keyrune",
				"Gulthias Staff",
				"Heart Weaver's Primer",
				"Hell Hound Cloak",
				"Helm of Teleportation",
				"Helm of the Gods",
				"Heward's Handy Haversack",
				"Hook of Fisher's Delight",
				"Horn of Blasting",
				"Horn of the Endless Maze",
				"Horn of Valhalla, Brass",
				"Horn of Valhalla, Silver",
				"Horseshoes of Speed",
				"Instrument of the Bards, Canaith Mandolin",
				"Instrument of the Bards, Cli Lyre",
				"Ioun Stone, Awareness",
				"Ioun Stone, Protection",
				"Ioun Stone, Reserve",
				"Ioun Stone, Sustenance",
				"Iron Bands of Bilarro",
				"Izzet Keyrune",
				"Knave's Eye Patch",
				"Libram of Souls and Flesh",
				"Loadstone",
				"Lyre of Building",
				"Mace of Disruption",
				"Mace of Smiting",
				"Mace of Terror",
				"Mantle of Spell Resistance",
				"Mind Blade",
				"Mind Lash",
				"Mirror of the Past",
				"Mizzium Armor",
				"Mizzium Mortar",
				"Molten Bronze Skin",
				"Necklace of Fireballs",
				"Necklace of Prayer Beads",
				"Opal of the Ild Rune",
				"Orb of the Stein Rune",
				"Order of the Silver Dragon +2 Shield",
				"Orzhov Keyrune",
				"Outer Essence Shard",
				"Outer Essence Shard (Chaotic)",
				"Outer Essence Shard (Evil)",
				"Outer Essence Shard (Good)",
				"Outer Essence Shard (Lawful)",
				"Pariah's Shield",
				"Periapt of Proof against Poison",
				"Piwafwi of Fire Resistance",
				"Planecaller's Codex",
				"Portable Hole",
				"Professor Orb",
				"Professor Skant",
				"Protective Verses",
				"Quaal's Feather Token",
				"Quaal's Feather Token, Anchor",
				"Quaal's Feather Token, Bird",
				"Quaal's Feather Token, Fan",
				"Quaal's Feather Token, Swan Boat",
				"Quaal's Feather Token, Tree",
				"Quaal's Feather Token, Whip",
				"Red Chromatic Rose",
				"Reveler's Concertina",
				"Ring of Acid Resistance",
				"Ring of Animal Influence",
				"Ring of Cold Resistance",
				"Ring of Evasion",
				"Ring of Feather Falling",
				"Ring of Fire Resistance",
				"Ring of Force Resistance",
				"Ring of Free Action",
				"Ring of Lightning Resistance",
				"Ring of Necrotic Resistance",
				"Ring of Poison Resistance",
				"Ring of Protection",
				"Ring of Psychic Resistance",
				"Ring of Radiant Resistance",
				"Ring of Resistance",
				"Ring of Spell Storing",
				"Ring of the Ram",
				"Ring of Thunder Resistance",
				"Ring of X-ray Vision",
				"Robe of Eyes",
				"Robe of Summer",
				"Rod of Rulership",
				"Rod of the Vonindod",
				"Rope of Entanglement",
				"Saint Markovia's Thighbone",
				"Scissors of Shadow Snipping",
				"Scorpion Armor",
				"Scroll of Protection",
				"Scroll of Protection from Aberrations",
				"Scroll of Protection from Beasts",
				"Scroll of Protection from Celestials",
				"Scroll of Protection from Elementals",
				"Scroll of Protection from Fey",
				"Scroll of Protection from Fiends",
				"Scroll of Protection from Plants",
				"Scroll of Protection from Undead",
				"Selesnya Keyrune",
				"Serpent's Fang",
				"Shadowfell Brand Tattoo",
				"Shadowfell Shard",
				"Shard of Xeluan",
				"Shield Guardian Amulet",
				"Shield of Far Sight",
				"Shield of Missile Attraction",
				"Siren Song Lyre",
				"Spell Gem (Bloodstone)",
				"Spell Gem (Quartz)",
				"Spell Scroll (4th Level)",
				"Spell Scroll (5th Level)",
				"Spelljamming Helm",
				"Spellwrought Tattoo (4th Level)",
				"Spellwrought Tattoo (5th Level)",
				"Spider Staff",
				"Staff of Charming",
				"Staff of Defense",
				"Staff of Healing",
				"Staff of Swarming Insects",
				"Staff of the Woodlands",
				"Staff of Withering",
				"Stirring Dragon Vessel",
				"Stirring Dragon's Wrath Weapon",
				"Stirring Dragon-Touched Focus",
				"Stirring Scaled Ornament",
				"Stone of Controlling Earth Elementals",
				"Stonespeaker Crystal",
				"Sun Blade",
				"Sunforger",
				"Sword of Life Stealing",
				"Sword of Wounding",
				"Tentacle Rod",
				"Two-Birds Sling",
				"Vicious Weapon",
				"Wand of Binding",
				"Wand of Enemy Detection",
				"Wand of Fear",
				"Wand of Fireballs",
				"Wand of Lightning Bolts",
				"Wand of Paralysis",
				"Wand of Viscid Globs",
				"Wand of Winter",
				"Wand of Wonder",
				"Weird Tank",
				"White Chromatic Rose",
				"Wings of Flying",
				"Woodcutter's Axe",
			],
		},
		{
			name: "Very Rare Magic Items",
			chance: 8,
			items: [
				"+2 Armor",
				"+3 All-Purpose Tool",
				"+3 Amulet of the Devout",
				"+3 Arcane Grimoire",
				"+3 Bloodwell Vial",
				"+3 Dragonhide Belt",
				"+3 Moon Sickle",
				"+3 Rhythm-Maker's Drum",
				"+3 Rod of the Pact Keeper",
				"+3 Shield (*)",
				"+3 Wand of the War Mage",
				"+3 Weapon",
				"+3 Weapon (no damage)",
				"Abracadabrus",
				"Absorbing Tattoo",
				"Acid Absorbing Tattoo",
				"Amethyst Lodestone",
				"Amulet of the Black Skull",
				"Amulet of the Planes",
				"Animated Shield",
				"Bag of Devouring",
				"Barrier Tattoo (Large)",
				"Battle Standard of Infernal Power",
				"Belt of Fire Giant Strength",
				"Belt of Frost Giant Strength",
				"Belt of Stone Giant Strength",
				"Black Dragon Scale Mail",
				"Blast Scepter",
				"Blue Dragon Scale Mail",
				"Bobbing Lily Pad",
				"Bracelet of Rock Magic",
				"Brass Dragon Scale Mail",
				"Bronze Dragon Scale Mail",
				"Candle of Invocation",
				"Carpet of Flying",
				"Cauldron of Rebirth",
				"Cloak of Arachnida",
				"Cold Absorbing Tattoo",
				"Conch of Teleportation",
				"Constantori's Portrait",
				"Copper Dragon Scale Mail",
				"Crystal Ball",
				"Crystalline Chronicle",
				"Dancing Sword",
				"Demon Armor",
				"Devastation Orb",
				"Devastation Orb of Air",
				"Devastation Orb of Earth",
				"Devastation Orb of Fire",
				"Devastation Orb of Water",
				"Devlin's Staff of Striking",
				"Dimir Keyrune",
				"Dragon Scale Mail",
				"Dwarven Plate",
				"Dwarven Thrower",
				"Efreeti Bottle",
				"Eldritch Staff",
				"Figurine of Wondrous Power, Obsidian Steed",
				"Fire Absorbing Tattoo",
				"Fish Suit",
				"Force Absorbing Tattoo",
				"Frost Brand",
				"Ghost Step Tattoo",
				"Gold Dragon Scale Mail",
				"Golgari Keyrune",
				"Green Dragon Scale Mail",
				"Heartstone",
				"Helm of Brilliance",
				"Helm of Devil Command",
				"Horn of Valhalla, Bronze",
				"Horned Ring",
				"Horseshoes of a Zephyr",
				"Illusionist's Bracers",
				"Ingot of the Skold Rune",
				"Instrument of the Bards, Anstruth Harp",
				"Ioun Stone, Absorption",
				"Ioun Stone, Agility",
				"Ioun Stone, Fortitude",
				"Ioun Stone, Insight",
				"Ioun Stone, Intellect",
				"Ioun Stone, Leadership",
				"Ioun Stone, Strength",
				"Jakarion's Staff of Frost",
				"Javelin of Backbiting",
				"Lifewell Tattoo",
				"Lightning Absorbing Tattoo",
				"Lord's Ensemble",
				"Maddgoth's Helm",
				"Manual of Bodily Health",
				"Manual of Clay Golems",
				"Manual of Flesh Golems",
				"Manual of Gainful Exercise",
				"Manual of Golems",
				"Manual of Iron Golems",
				"Manual of Quickness of Action",
				"Manual of Stone Golems",
				"Mirror of Life Trapping",
				"Navigation Orb",
				"Necrotic Absorbing Tattoo",
				"Nine Lives Stealer",
				"Nolzur's Marvelous Pigments",
				"Oathbow",
				"Ornithopter of Flying",
				"Pennant of the Vind Rune",
				"Peregrine Mask",
				"Poison Absorbing Tattoo",
				"Psychic Absorbing Tattoo",
				"Radiant Absorbing Tattoo",
				"Red Dragon Scale Mail",
				"Ring of Regeneration",
				"    Ring of Shooting Stars",
				"    Ring of Telekinesis",
				"    Robe of Scintillating Colors",
				"    Robe of Stars",
				"    Rod of Absorption",
				"    Rod of Alertness",
				"    Rod of Security",
				"    Sapphire Buckler",
				"    Scimitar of Speed",
				"    Shard of the Ise Rune",
				"    Shield of the Uven Rune",
				"    Silver Dragon Scale Mail",
				"    Soul Bag",
				"    Spear of Backbiting",
				"    Spell Gem (Amber)",
				"    Spell Gem (Jade)",
				"    Spell Gem (Topaz)",
				"    Spell Scroll (6th Level)",
				"    Spell Scroll (7th Level)",
				"    Spell Scroll (8th Level)",
				"    Spellguard Shield",
				"    Staff of Fate",
				"    Staff of Fire",
				"    Staff of Frost",
				"    Staff of Power",
				"    Staff of Striking",
				"    Staff of Thunder and Lightning",
				"    Steel",
				"    Sword of Sharpness",
				"    Sword of the Paruns",
				"    Tearulai",
				"    Thunder Absorbing Tattoo",
				"    Tome of Clear Thought",
				"    Tome of Leadership and Influence",
				"    Tome of Understanding",
				"    Voyager Staff",
				"    Wakened Dragon Vessel",
				"    Wakened Dragon's Wrath Weapon",
				"    Wakened Dragon-Touched Focus",
				"    Wakened Scaled Ornament",
				"    Wand of Polymorph",
				"    Watchful Helm",
				"    White Dragon Scale Mail",
			],
		},
		{
			name: "Legendary Magic Items",
			chance: 2,
			items: [
				"+3 Armor",
				"Apparatus of Kwalish",
				"Armor of Invulnerability",
				"Ascendant Dragon Vessel",
				"Ascendant Dragon's Wrath Weapon",
				"Ascendant Dragon-Touched Focus",
				"Ascendant Scaled Ornament",
				"Azuredge",
				"Belt of Cloud Giant Strength",
				"Belt of Storm Giant Strength",
				"Black Crystal Tablet",
				"Black Dragon Mask",
				"Blackrazor",
				"Blackstaff",
				"Blood Fury Tattoo",
				"Blue Dragon Mask",
				"Bookmark",
				"Cloak of Invisibility",
				"Crystal Ball (Legendary Version)",
				"Crystal Ball of Mind Reading",
				"Crystal Ball of Telepathy",
				"Crystal Ball of True Seeing",
				"Cubic Gate",
				"Dawnbringer",
				"Deck of Many Things",
				"Defender",
				"Dragonlance",
				"Dragonstaff of Ahghairon",
				"Drown",
				"Efreeti Chain",
				"Fane-Eater",
				"Flail of Tiamat",
				"Gloves of Soul Catching",
				"Gold Canary Figurine of Wondrous Power",
				"Greater Silver Sword",
				"Green Dragon Mask",
				"Gurt's Greataxe",
				"Hammer of Thunderbolts",
				"Hammock of Worlds",
				"Hazirawn",
				"Helm of the Scavenger",
				"Holy Avenger",
				"Holy Symbol of Ravenkind",
				"Horn of Valhalla, Iron",
				"Icon of Ravenloft",
				"Infernal Tack",
				"Instrument of the Bards, Ollamh Harp",
				"Ioun Stone, Greater Absorption",
				"Ioun Stone, Mastery",
				"Ioun Stone, Regeneration",
				"Iron Flask",
				"Ironfang",
				"Korolnor Scepter",
				"Lesser Hammock of Worlds",
				"Lost Crown of Besilmer",
				"Luck Blade",
				"Matalotok",
				"Moonblade",
				"Murgaxor's Orb",
				"Nepenthe",
				"Nether Scroll of Azumar",
				"Obsidian Flint Dragon Plate",
				"Orcsplitter",
				"Plate Armor of Etherealness",
				"Platinum Scarf",
				"Pyxis of Pandemonium",
				"Rakdos Riteknife",
				"Red Dragon Mask",
				"Ring of Air Elemental Command",
				"Ring of Djinni Summoning",
				"Ring of Earth Elemental Command",
				"Ring of Elemental Command",
				"Ring of Fire Elemental Command",
				"Ring of Invisibility",
				"Ring of Spell Turning",
				"Ring of Three Wishes",
				"Ring of Water Elemental Command",
				"Robe of the Archmagi",
				"Rod of Lordly Might",
				"Rod of Resurrection",
				"Ruby Weave Gem",
				"Scarab of Protection",
				"Scroll of Tarrasque Summoning",
				"Scroll of the Comet",
				"Shard Solitaire",
				"Shard Solitaire (Black Sapphire)",
				"Shard Solitaire (Diamond)",
				"Shard Solitaire (Jacinth)",
				"Shard Solitaire (Rainbow Pearl)",
				"Shard Solitaire (Ruby)",
				"Shield of the Hidden Lord",
				"Snicker-Snack",
				"Sovereign Glue",
				"Spell Gem (Diamond)",
				"Spell Gem (Ruby)",
				"Spell Gem (Star ruby)",
				"Spell Scroll (9th Level)",
				"Sphere of Annihilation",
				"Staff of the Magi",
				"Sunsword",
				"Sword of Answering",
				"Talarith",
				"Talisman of Pure Good",
				"Talisman of the Sphere",
				"Talisman of Ultimate Evil",
				"Tinderstrike",
				"Tome of the Stilled Tongue",
				"Universal Solvent",
				"Vorpal Sword",
				"Wave",
				"Waythe",
				"Well of Many Worlds",
				"Whelm",
				"White Dragon Mask",
				"Windvane",
				"Witchlight Vane",
				"Witchlight Watch",
				"Ythryn Mythallar",
			],
		},
	];

	// Generate a random category based on the chance percentages
	const random = Math.random() * 100;
	let total = 0;
	let selectedCategory;
	for (const category of categories) {
		total += category.chance;
		if (random < total) {
			selectedCategory = category;
			break;
		}
	}

	// Randomly select an item from the selected category
	const randomItems = selectedCategory.items;
	const randomItem =
		randomItems[Math.floor(Math.random() * randomItems.length)];

	// Update the result element with the generated item and category
	const resultElement = document.getElementById("result");
	resultElement.innerHTML = randomItem + "<br>(" + selectedCategory.name + ")";
	resultElement.style.display = "block";
}

// Event listener for the roll button
document.getElementById("rollButton").addEventListener("click", generateItem);
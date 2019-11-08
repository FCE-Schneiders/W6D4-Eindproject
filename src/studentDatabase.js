import React, { Component } from 'react';


const studentDate = [
    {
      "assignment": "SCRUM",
      "name": "Evelyn",
      "toughRating": 3,
      "joyRating": 4
    },
    {
      "assignment": "W1D1-1",
      "name": "Evelyn",
      "toughRating": 3,
      "joyRating": 3
    },
    {
      "assignment": "W1D2-1",
      "name": "Evelyn",
      "toughRating": 1,
      "joyRating": 3
    },
    {
      "assignment": "W1D2-2",
      "name": "Evelyn",
      "toughRating": 1,
      "joyRating": 4
    },
    {
      "assignment": "W1D2-3",
      "name": "Evelyn",
      "toughRating": 2,
      "joyRating": 3
    },
    {
      "assignment": "W1D2-4",
      "name": "Evelyn",
      "toughRating": 3,
      "joyRating": 4
    },
    {
      "assignment": "W1D2-5",
      "name": "Evelyn",
      "toughRating": 3,
      "joyRating": 4
    },
    {
      "assignment": "W1D3-1",
      "name": "Evelyn",
      "toughRating": 3,
      "joyRating": 4
    },
    {
      "assignment": "W1D3-2",
      "name": "Evelyn",
      "toughRating": 3,
      "joyRating": 4
    },
    {
      "assignment": "W1D3-4",
      "name": "Evelyn",
      "toughRating": 4,
      "joyRating": 4
    },
    {
      "assignment": "W1D3-5",
      "name": "Evelyn",
      "toughRating": 4,
      "joyRating": 4
    },
    {
      "assignment": "W1D3 - Project - Guess-the-number",
      "name": "Evelyn",
      "toughRating": 5,
      "joyRating": 5
    },
    {
      "assignment": "W1D4-1",
      "name": "Evelyn",
      "toughRating": 4,
      "joyRating": 5
    },
    {
      "assignment": "W1D4 - Project - Kleurentoggle",
      "name": "Evelyn",
      "toughRating": 3,
      "joyRating": 4
    },
    {
      "assignment": "W1D5 - Project -Â Galgje",
      "name": "Evelyn",
      "toughRating": 3,
      "joyRating": 3
    },
    {
      "assignment": "W2D1-1",
      "name": "Evelyn",
      "toughRating": 1,
      "joyRating": 5
    },
    {
      "assignment": "W2D1-2",
      "name": "Evelyn",
      "toughRating": 2,
      "joyRating": 5
    },
    {
      "assignment": "W2D2-1",
      "name": "Evelyn",
      "toughRating": 3,
      "joyRating": 4
    },
    {
      "assignment": "W2D2-2",
      "name": "Evelyn",
      "toughRating": 3,
      "joyRating": 4
    },
    {
      "assignment": "W2D2-3",
      "name": "Evelyn",
      "toughRating": 3,
      "joyRating": 4
    },
    {
      "assignment": "W2D3-1",
      "name": "Evelyn",
      "toughRating": 4,
      "joyRating": 4
    },
    {
      "assignment": "W2D3-2",
      "name": "Evelyn",
      "toughRating": 1,
      "joyRating": 3
    },
    {
      "assignment": "W2D3-3",
      "name": "Evelyn",
      "toughRating": 4,
      "joyRating": 4
    },
    {
      "assignment": "W2D4-1",
      "name": "Evelyn",
      "toughRating": 1,
      "joyRating": 3
    },
    {
      "assignment": "W2D4-2",
      "name": "Evelyn",
      "toughRating": 4,
      "joyRating": 4
    },
    {
      "assignment": "W2D4-3",
      "name": "Evelyn",
      "toughRating": 1,
      "joyRating": 3
    },
    {
      "assignment": "W2D5 - Project - Filmzoeker",
      "name": "Evelyn",
      "toughRating": 3,
      "joyRating": 4
    },
    {
      "assignment": "W3D1-1",
      "name": "Evelyn",
      "toughRating": 3,
      "joyRating": 4
    },
    {
      "assignment": "W3D1-2",
      "name": "Evelyn",
      "toughRating": 2,
      "joyRating": 4
    },
    {
      "assignment": "W3D1-3",
      "name": "Evelyn",
      "toughRating": 3,
      "joyRating": 4
    },
    {
      "assignment": "W3D1-4",
      "name": "Evelyn",
      "toughRating": 3,
      "joyRating": 3
    },
    {
      "assignment": "W3D2-1",
      "name": "Evelyn",
      "toughRating": 2,
      "joyRating": 4
    },
    {
      "assignment": "W3D2-2",
      "name": "Evelyn",
      "toughRating": 3,
      "joyRating": 3
    },
    {
      "assignment": "W3D2-3",
      "name": "Evelyn",
      "toughRating": 3,
      "joyRating": 5
    },
    {
      "assignment": "W3D3-1",
      "name": "Evelyn",
      "toughRating": 4,
      "joyRating": 4
    },
    {
      "assignment": "W3D3-2",
      "name": "Evelyn",
      "toughRating": 4,
      "joyRating": 5
    },
    {
      "assignment": "W3D3-3",
      "name": "Evelyn",
      "toughRating": 3,
      "joyRating": 5
    },
    {
      "assignment": "W3D3-4",
      "name": "Evelyn",
      "toughRating": 4,
      "joyRating": 5
    },
    {
      "assignment": "W3D4-1",
      "name": "Evelyn",
      "toughRating": 5,
      "joyRating": 5
    },
    {
      "assignment": "W3D4-2",
      "name": "Evelyn",
      "toughRating": 1,
      "joyRating": 5
    },
    {
      "assignment": "W3D5 - Project - Todo-List",
      "name": "Evelyn",
      "toughRating": 2,
      "joyRating": 5
    },
    {
      "assignment": "W4D2-1",
      "name": "Evelyn",
      "toughRating": 1,
      "joyRating": 5
    },
    {
      "assignment": "W4D2-2",
      "name": "Evelyn",
      "toughRating": 1,
      "joyRating": 5
    },
    {
      "assignment": "W4D2-3",
      "name": "Evelyn",
      "toughRating": 1,
      "joyRating": 5
    },
    {
      "assignment": "W4D2-4",
      "name": "Evelyn",
      "toughRating": 1,
      "joyRating": 5
    },
    {
      "assignment": "W4D3-1",
      "name": "Evelyn",
      "toughRating": 1,
      "joyRating": 5
    },
    {
      "assignment": "W4D3-2",
      "name": "Evelyn",
      "toughRating": 1,
      "joyRating": 5
    },
    {
      "assignment": "W4D3-3",
      "name": "Evelyn",
      "toughRating": 1,
      "joyRating": 5
    },
    {
      "assignment": "W4D3-4",
      "name": "Evelyn",
      "toughRating": 1,
      "joyRating": 5
    },
    {
      "assignment": "W4D3-5",
      "name": "Evelyn",
      "toughRating": 1,
      "joyRating": 5
    },
    {
      "assignment": "W4D3 - Project - Next-Level CSS",
      "name": "Evelyn",
      "toughRating": 1,
      "joyRating": 5
    },
    {
      "assignment": "W5D4-1",
      "name": "Evelyn",
      "toughRating": 3,
      "joyRating": 4
    },
    {
      "assignment": "W5D5 - Project - Lil_Playlist",
      "name": "Evelyn",
      "toughRating": 4,
      "joyRating": 3
    },
    {
      "assignment": "W6D1-1",
      "name": "Evelyn",
      "toughRating": 5,
      "joyRating": 5
    },
    {
      "assignment": "W6D2-1",
      "name": "Evelyn",
      "toughRating": 4,
      "joyRating": 3
    },
    {
      "assignment": "W6D2 - Project - Eindopdracht",
      "name": "Evelyn",
      "toughRating": 5,
      "joyRating": 5
    },
    {
      "assignment": "SCRUM",
      "name": "Aranka",
      "toughRating": 1,
      "joyRating": 1
    },
    {
      "assignment": "W1D1-1",
      "name": "Aranka",
      "toughRating": 4,
      "joyRating": 3
    },
    {
      "assignment": "W1D2-1",
      "name": "Aranka",
      "toughRating": 3,
      "joyRating": 1
    },
    {
      "assignment": "W1D2-2",
      "name": "Aranka",
      "toughRating": 3,
      "joyRating": 2
    },
    {
      "assignment": "W1D2-3",
      "name": "Aranka",
      "toughRating": 4,
      "joyRating": 1
    },
    {
      "assignment": "W1D2-4",
      "name": "Aranka",
      "toughRating": 2,
      "joyRating": 3
    },
    {
      "assignment": "W1D2-5",
      "name": "Aranka",
      "toughRating": 4,
      "joyRating": 2
    },
    {
      "assignment": "W1D3-1",
      "name": "Aranka",
      "toughRating": 3,
      "joyRating": 2
    },
    {
      "assignment": "W1D3-2",
      "name": "Aranka",
      "toughRating": 2,
      "joyRating": 1
    },
    {
      "assignment": "W1D3-4",
      "name": "Aranka",
      "toughRating": 1,
      "joyRating": 2
    },
    {
      "assignment": "W1D3-5",
      "name": "Aranka",
      "toughRating": 4,
      "joyRating": 1
    },
    {
      "assignment": "W1D3 - Project - Guess-the-number",
      "name": "Aranka",
      "toughRating": 2,
      "joyRating": 3
    },
    {
      "assignment": "W1D4-1",
      "name": "Aranka",
      "toughRating": 3,
      "joyRating": 2
    },
    {
      "assignment": "W1D4 - Project - Kleurentoggle",
      "name": "Aranka",
      "toughRating": 4,
      "joyRating": 3
    },
    {
      "assignment": "W1D5 - Project -Â Galgje",
      "name": "Aranka",
      "toughRating": 4,
      "joyRating": 1
    },
    {
      "assignment": "W2D1-1",
      "name": "Aranka",
      "toughRating": 2,
      "joyRating": 4
    },
    {
      "assignment": "W2D1-2",
      "name": "Aranka",
      "toughRating": 4,
      "joyRating": 4
    },
    {
      "assignment": "W2D2-1",
      "name": "Aranka",
      "toughRating": 3,
      "joyRating": 4
    },
    {
      "assignment": "W2D2-2",
      "name": "Aranka",
      "toughRating": 3,
      "joyRating": 4
    },
    {
      "assignment": "W2D2-3",
      "name": "Aranka",
      "toughRating": 1,
      "joyRating": 4
    },
    {
      "assignment": "W2D3-1",
      "name": "Aranka",
      "toughRating": 4,
      "joyRating": 3
    },
    {
      "assignment": "W2D3-2",
      "name": "Aranka",
      "toughRating": 4,
      "joyRating": 1
    },
    {
      "assignment": "W2D3-3",
      "name": "Aranka",
      "toughRating": 1,
      "joyRating": 1
    },
    {
      "assignment": "W2D4-1",
      "name": "Aranka",
      "toughRating": 1,
      "joyRating": 4
    },
    {
      "assignment": "W2D4-2",
      "name": "Aranka",
      "toughRating": 2,
      "joyRating": 3
    },
    {
      "assignment": "W2D4-3",
      "name": "Aranka",
      "toughRating": 2,
      "joyRating": 3
    },
    {
      "assignment": "W2D5 - Project - Filmzoeker",
      "name": "Aranka",
      "toughRating": 2,
      "joyRating": 2
    },
    {
      "assignment": "W3D1-1",
      "name": "Aranka",
      "toughRating": 4,
      "joyRating": 2
    },
    {
      "assignment": "W3D1-2",
      "name": "Aranka",
      "toughRating": 3,
      "joyRating": 2
    },
    {
      "assignment": "W3D1-3",
      "name": "Aranka",
      "toughRating": 1,
      "joyRating": 4
    },
    {
      "assignment": "W3D1-4",
      "name": "Aranka",
      "toughRating": 1,
      "joyRating": 3
    },
    {
      "assignment": "W3D2-1",
      "name": "Aranka",
      "toughRating": 1,
      "joyRating": 3
    },
    {
      "assignment": "W3D2-2",
      "name": "Aranka",
      "toughRating": 2,
      "joyRating": 3
    },
    {
      "assignment": "W3D2-3",
      "name": "Aranka",
      "toughRating": 2,
      "joyRating": 3
    },
    {
      "assignment": "W3D3-1",
      "name": "Aranka",
      "toughRating": 2,
      "joyRating": 2
    },
    {
      "assignment": "W3D3-2",
      "name": "Aranka",
      "toughRating": 4,
      "joyRating": 3
    },
    {
      "assignment": "W3D3-3",
      "name": "Aranka",
      "toughRating": 3,
      "joyRating": 3
    },
    {
      "assignment": "W3D3-4",
      "name": "Aranka",
      "toughRating": 1,
      "joyRating": 3
    },
    {
      "assignment": "W3D4-1",
      "name": "Aranka",
      "toughRating": 1,
      "joyRating": 1
    },
    {
      "assignment": "W3D4-2",
      "name": "Aranka",
      "toughRating": 3,
      "joyRating": 2
    },
    {
      "assignment": "W3D5 - Project - Todo-List",
      "name": "Aranka",
      "toughRating": 1,
      "joyRating": 1
    },
    {
      "assignment": "W4D2-1",
      "name": "Aranka",
      "toughRating": 2,
      "joyRating": 1
    },
    {
      "assignment": "W4D2-2",
      "name": "Aranka",
      "toughRating": 3,
      "joyRating": 2
    },
    {
      "assignment": "W4D2-3",
      "name": "Aranka",
      "toughRating": 2,
      "joyRating": 2
    },
    {
      "assignment": "W4D2-4",
      "name": "Aranka",
      "toughRating": 3,
      "joyRating": 4
    },
    {
      "assignment": "W4D3-1",
      "name": "Aranka",
      "toughRating": 2,
      "joyRating": 1
    },
    {
      "assignment": "W4D3-2",
      "name": "Aranka",
      "toughRating": 4,
      "joyRating": 4
    },
    {
      "assignment": "W4D3-3",
      "name": "Aranka",
      "toughRating": 3,
      "joyRating": 1
    },
    {
      "assignment": "W4D3-4",
      "name": "Aranka",
      "toughRating": 3,
      "joyRating": 1
    },
    {
      "assignment": "W4D3-5",
      "name": "Aranka",
      "toughRating": 4,
      "joyRating": 3
    },
    {
      "assignment": "W4D3 - Project - Next-Level CSS",
      "name": "Aranka",
      "toughRating": 4,
      "joyRating": 4
    },
    {
      "assignment": "W5D4-1",
      "name": "Aranka",
      "toughRating": 1,
      "joyRating": 3
    },
    {
      "assignment": "W5D5 - Project - Lil_Playlist",
      "name": "Aranka",
      "toughRating": 3,
      "joyRating": 2
    },
    {
      "assignment": "W6D1-1",
      "name": "Aranka",
      "toughRating": 1,
      "joyRating": 1
    },
    {
      "assignment": "W6D2-1",
      "name": "Aranka",
      "toughRating": 2,
      "joyRating": 2
    },
    {
      "assignment": "W6D2 - Project - Eindopdracht",
      "name": "Aranka",
      "toughRating": 3,
      "joyRating": 4
    },
    {
      "assignment": "SCRUM",
      "name": "Floris",
      "toughRating": 2,
      "joyRating": 1
    },
    {
      "assignment": "W1D1-1",
      "name": "Floris",
      "toughRating": 4,
      "joyRating": 3
    },
    {
      "assignment": "W1D2-1",
      "name": "Floris",
      "toughRating": 1,
      "joyRating": 2
    },
    {
      "assignment": "W1D2-2",
      "name": "Floris",
      "toughRating": 1,
      "joyRating": 4
    },
    {
      "assignment": "W1D2-3",
      "name": "Floris",
      "toughRating": 1,
      "joyRating": 4
    },
    {
      "assignment": "W1D2-4",
      "name": "Floris",
      "toughRating": 3,
      "joyRating": 4
    },
    {
      "assignment": "W1D2-5",
      "name": "Floris",
      "toughRating": 1,
      "joyRating": 3
    },
    {
      "assignment": "W1D3-1",
      "name": "Floris",
      "toughRating": 2,
      "joyRating": 4
    },
    {
      "assignment": "W1D3-2",
      "name": "Floris",
      "toughRating": 4,
      "joyRating": 4
    },
    {
      "assignment": "W1D3-4",
      "name": "Floris",
      "toughRating": 4,
      "joyRating": 2
    },
    {
      "assignment": "W1D3-5",
      "name": "Floris",
      "toughRating": 2,
      "joyRating": 4
    },
    {
      "assignment": "W1D3 - Project - Guess-the-number",
      "name": "Floris",
      "toughRating": 2,
      "joyRating": 2
    },
    {
      "assignment": "W1D4-1",
      "name": "Floris",
      "toughRating": 1,
      "joyRating": 3
    },
    {
      "assignment": "W1D4 - Project - Kleurentoggle",
      "name": "Floris",
      "toughRating": 4,
      "joyRating": 3
    },
    {
      "assignment": "W1D5 - Project -Â Galgje",
      "name": "Floris",
      "toughRating": 4,
      "joyRating": 4
    },
    {
      "assignment": "W2D1-1",
      "name": "Floris",
      "toughRating": 2,
      "joyRating": 2
    },
    {
      "assignment": "W2D1-2",
      "name": "Floris",
      "toughRating": 4,
      "joyRating": 1
    },
    {
      "assignment": "W2D2-1",
      "name": "Floris",
      "toughRating": 4,
      "joyRating": 1
    },
    {
      "assignment": "W2D2-2",
      "name": "Floris",
      "toughRating": 2,
      "joyRating": 2
    },
    {
      "assignment": "W2D2-3",
      "name": "Floris",
      "toughRating": 4,
      "joyRating": 2
    },
    {
      "assignment": "W2D3-1",
      "name": "Floris",
      "toughRating": 1,
      "joyRating": 1
    },
    {
      "assignment": "W2D3-2",
      "name": "Floris",
      "toughRating": 1,
      "joyRating": 2
    },
    {
      "assignment": "W2D3-3",
      "name": "Floris",
      "toughRating": 3,
      "joyRating": 3
    },
    {
      "assignment": "W2D4-1",
      "name": "Floris",
      "toughRating": 4,
      "joyRating": 4
    },
    {
      "assignment": "W2D4-2",
      "name": "Floris",
      "toughRating": 3,
      "joyRating": 1
    },
    {
      "assignment": "W2D4-3",
      "name": "Floris",
      "toughRating": 4,
      "joyRating": 1
    },
    {
      "assignment": "W2D5 - Project - Filmzoeker",
      "name": "Floris",
      "toughRating": 4,
      "joyRating": 1
    },
    {
      "assignment": "W3D1-1",
      "name": "Floris",
      "toughRating": 4,
      "joyRating": 3
    },
    {
      "assignment": "W3D1-2",
      "name": "Floris",
      "toughRating": 2,
      "joyRating": 3
    },
    {
      "assignment": "W3D1-3",
      "name": "Floris",
      "toughRating": 2,
      "joyRating": 3
    },
    {
      "assignment": "W3D1-4",
      "name": "Floris",
      "toughRating": 3,
      "joyRating": 3
    },
    {
      "assignment": "W3D2-1",
      "name": "Floris",
      "toughRating": 3,
      "joyRating": 2
    },
    {
      "assignment": "W3D2-2",
      "name": "Floris",
      "toughRating": 2,
      "joyRating": 2
    },
    {
      "assignment": "W3D2-3",
      "name": "Floris",
      "toughRating": 3,
      "joyRating": 2
    },
    {
      "assignment": "W3D3-1",
      "name": "Floris",
      "toughRating": 4,
      "joyRating": 4
    },
    {
      "assignment": "W3D3-2",
      "name": "Floris",
      "toughRating": 2,
      "joyRating": 4
    },
    {
      "assignment": "W3D3-3",
      "name": "Floris",
      "toughRating": 2,
      "joyRating": 1
    },
    {
      "assignment": "W3D3-4",
      "name": "Floris",
      "toughRating": 3,
      "joyRating": 2
    },
    {
      "assignment": "W3D4-1",
      "name": "Floris",
      "toughRating": 1,
      "joyRating": 3
    },
    {
      "assignment": "W3D4-2",
      "name": "Floris",
      "toughRating": 2,
      "joyRating": 2
    },
    {
      "assignment": "W3D5 - Project - Todo-List",
      "name": "Floris",
      "toughRating": 4,
      "joyRating": 2
    },
    {
      "assignment": "W4D2-1",
      "name": "Floris",
      "toughRating": 1,
      "joyRating": 4
    },
    {
      "assignment": "W4D2-2",
      "name": "Floris",
      "toughRating": 2,
      "joyRating": 3
    },
    {
      "assignment": "W4D2-3",
      "name": "Floris",
      "toughRating": 2,
      "joyRating": 4
    },
    {
      "assignment": "W4D2-4",
      "name": "Floris",
      "toughRating": 1,
      "joyRating": 2
    },
    {
      "assignment": "W4D3-1",
      "name": "Floris",
      "toughRating": 1,
      "joyRating": 4
    },
    {
      "assignment": "W4D3-2",
      "name": "Floris",
      "toughRating": 4,
      "joyRating": 4
    },
    {
      "assignment": "W4D3-3",
      "name": "Floris",
      "toughRating": 3,
      "joyRating": 2
    },
    {
      "assignment": "W4D3-4",
      "name": "Floris",
      "toughRating": 2,
      "joyRating": 2
    },
    {
      "assignment": "W4D3-5",
      "name": "Floris",
      "toughRating": 4,
      "joyRating": 1
    },
    {
      "assignment": "W4D3 - Project - Next-Level CSS",
      "name": "Floris",
      "toughRating": 2,
      "joyRating": 2
    },
    {
      "assignment": "W5D4-1",
      "name": "Floris",
      "toughRating": 1,
      "joyRating": 3
    },
    {
      "assignment": "W5D5 - Project - Lil_Playlist",
      "name": "Floris",
      "toughRating": 3,
      "joyRating": 1
    },
    {
      "assignment": "W6D1-1",
      "name": "Floris",
      "toughRating": 3,
      "joyRating": 2
    },
    {
      "assignment": "W6D2-1",
      "name": "Floris",
      "toughRating": 1,
      "joyRating": 1
    },
    {
      "assignment": "W6D2 - Project - Eindopdracht",
      "name": "Floris",
      "toughRating": 4,
      "joyRating": 1
    },
    {
      "assignment": "SCRUM",
      "name": "Hector",
      "toughRating": 1,
      "joyRating": 2
    },
    {
      "assignment": "W1D1-1",
      "name": "Hector",
      "toughRating": 1,
      "joyRating": 4
    },
    {
      "assignment": "W1D2-1",
      "name": "Hector",
      "toughRating": 2,
      "joyRating": 4
    },
    {
      "assignment": "W1D2-2",
      "name": "Hector",
      "toughRating": 2,
      "joyRating": 3
    },
    {
      "assignment": "W1D2-3",
      "name": "Hector",
      "toughRating": 1,
      "joyRating": 2
    },
    {
      "assignment": "W1D2-4",
      "name": "Hector",
      "toughRating": 1,
      "joyRating": 3
    },
    {
      "assignment": "W1D2-5",
      "name": "Hector",
      "toughRating": 3,
      "joyRating": 1
    },
    {
      "assignment": "W1D3-1",
      "name": "Hector",
      "toughRating": 1,
      "joyRating": 4
    },
    {
      "assignment": "W1D3-2",
      "name": "Hector",
      "toughRating": 4,
      "joyRating": 3
    },
    {
      "assignment": "W1D3-4",
      "name": "Hector",
      "toughRating": 3,
      "joyRating": 1
    },
    {
      "assignment": "W1D3-5",
      "name": "Hector",
      "toughRating": 4,
      "joyRating": 2
    },
    {
      "assignment": "W1D3 - Project - Guess-the-number",
      "name": "Hector",
      "toughRating": 3,
      "joyRating": 1
    },
    {
      "assignment": "W1D4-1",
      "name": "Hector",
      "toughRating": 1,
      "joyRating": 1
    },
    {
      "assignment": "W1D4 - Project - Kleurentoggle",
      "name": "Hector",
      "toughRating": 1,
      "joyRating": 3
    },
    {
      "assignment": "W1D5 - Project -Â Galgje",
      "name": "Hector",
      "toughRating": 2,
      "joyRating": 4
    },
    {
      "assignment": "W2D1-1",
      "name": "Hector",
      "toughRating": 4,
      "joyRating": 4
    },
    {
      "assignment": "W2D1-2",
      "name": "Hector",
      "toughRating": 3,
      "joyRating": 2
    },
    {
      "assignment": "W2D2-1",
      "name": "Hector",
      "toughRating": 4,
      "joyRating": 3
    },
    {
      "assignment": "W2D2-2",
      "name": "Hector",
      "toughRating": 1,
      "joyRating": 2
    },
    {
      "assignment": "W2D2-3",
      "name": "Hector",
      "toughRating": 3,
      "joyRating": 2
    },
    {
      "assignment": "W2D3-1",
      "name": "Hector",
      "toughRating": 3,
      "joyRating": 1
    },
    {
      "assignment": "W2D3-2",
      "name": "Hector",
      "toughRating": 4,
      "joyRating": 2
    },
    {
      "assignment": "W2D3-3",
      "name": "Hector",
      "toughRating": 4,
      "joyRating": 2
    },
    {
      "assignment": "W2D4-1",
      "name": "Hector",
      "toughRating": 2,
      "joyRating": 4
    },
    {
      "assignment": "W2D4-2",
      "name": "Hector",
      "toughRating": 4,
      "joyRating": 1
    },
    {
      "assignment": "W2D4-3",
      "name": "Hector",
      "toughRating": 3,
      "joyRating": 2
    },
    {
      "assignment": "W2D5 - Project - Filmzoeker",
      "name": "Hector",
      "toughRating": 4,
      "joyRating": 1
    },
    {
      "assignment": "W3D1-1",
      "name": "Hector",
      "toughRating": 1,
      "joyRating": 1
    },
    {
      "assignment": "W3D1-2",
      "name": "Hector",
      "toughRating": 1,
      "joyRating": 4
    },
    {
      "assignment": "W3D1-3",
      "name": "Hector",
      "toughRating": 3,
      "joyRating": 2
    },
    {
      "assignment": "W3D1-4",
      "name": "Hector",
      "toughRating": 4,
      "joyRating": 3
    },
    {
      "assignment": "W3D2-1",
      "name": "Hector",
      "toughRating": 1,
      "joyRating": 3
    },
    {
      "assignment": "W3D2-2",
      "name": "Hector",
      "toughRating": 4,
      "joyRating": 3
    },
    {
      "assignment": "W3D2-3",
      "name": "Hector",
      "toughRating": 2,
      "joyRating": 1
    },
    {
      "assignment": "W3D3-1",
      "name": "Hector",
      "toughRating": 4,
      "joyRating": 4
    },
    {
      "assignment": "W3D3-2",
      "name": "Hector",
      "toughRating": 3,
      "joyRating": 1
    },
    {
      "assignment": "W3D3-3",
      "name": "Hector",
      "toughRating": 2,
      "joyRating": 4
    },
    {
      "assignment": "W3D3-4",
      "name": "Hector",
      "toughRating": 4,
      "joyRating": 1
    },
    {
      "assignment": "W3D4-1",
      "name": "Hector",
      "toughRating": 3,
      "joyRating": 4
    },
    {
      "assignment": "W3D4-2",
      "name": "Hector",
      "toughRating": 1,
      "joyRating": 4
    },
    {
      "assignment": "W3D5 - Project - Todo-List",
      "name": "Hector",
      "toughRating": 2,
      "joyRating": 4
    },
    {
      "assignment": "W4D2-1",
      "name": "Hector",
      "toughRating": 1,
      "joyRating": 1
    },
    {
      "assignment": "W4D2-2",
      "name": "Hector",
      "toughRating": 2,
      "joyRating": 1
    },
    {
      "assignment": "W4D2-3",
      "name": "Hector",
      "toughRating": 3,
      "joyRating": 3
    },
    {
      "assignment": "W4D2-4",
      "name": "Hector",
      "toughRating": 1,
      "joyRating": 3
    },
    {
      "assignment": "W4D3-1",
      "name": "Hector",
      "toughRating": 3,
      "joyRating": 3
    },
    {
      "assignment": "W4D3-2",
      "name": "Hector",
      "toughRating": 1,
      "joyRating": 4
    },
    {
      "assignment": "W4D3-3",
      "name": "Hector",
      "toughRating": 3,
      "joyRating": 1
    },
    {
      "assignment": "W4D3-4",
      "name": "Hector",
      "toughRating": 1,
      "joyRating": 3
    },
    {
      "assignment": "W4D3-5",
      "name": "Hector",
      "toughRating": 1,
      "joyRating": 2
    },
    {
      "assignment": "W4D3 - Project - Next-Level CSS",
      "name": "Hector",
      "toughRating": 3,
      "joyRating": 1
    },
    {
      "assignment": "W5D4-1",
      "name": "Hector",
      "toughRating": 3,
      "joyRating": 4
    },
    {
      "assignment": "W5D5 - Project - Lil_Playlist",
      "name": "Hector",
      "toughRating": 3,
      "joyRating": 1
    },
    {
      "assignment": "W6D1-1",
      "name": "Hector",
      "toughRating": 1,
      "joyRating": 1
    },
    {
      "assignment": "W6D2-1",
      "name": "Hector",
      "toughRating": 4,
      "joyRating": 2
    },
    {
      "assignment": "W6D2 - Project - Eindopdracht",
      "name": "Hector",
      "toughRating": 2,
      "joyRating": 4
    },
    {
      "assignment": "SCRUM",
      "name": "Martina",
      "toughRating": 1,
      "joyRating": 1
    },
    {
      "assignment": "W1D1-1",
      "name": "Martina",
      "toughRating": 4,
      "joyRating": 1
    },
    {
      "assignment": "W1D2-1",
      "name": "Martina",
      "toughRating": 3,
      "joyRating": 3
    },
    {
      "assignment": "W1D2-2",
      "name": "Martina",
      "toughRating": 2,
      "joyRating": 1
    },
    {
      "assignment": "W1D2-3",
      "name": "Martina",
      "toughRating": 2,
      "joyRating": 1
    },
    {
      "assignment": "W1D2-4",
      "name": "Martina",
      "toughRating": 4,
      "joyRating": 2
    },
    {
      "assignment": "W1D2-5",
      "name": "Martina",
      "toughRating": 3,
      "joyRating": 4
    },
    {
      "assignment": "W1D3-1",
      "name": "Martina",
      "toughRating": 3,
      "joyRating": 4
    },
    {
      "assignment": "W1D3-2",
      "name": "Martina",
      "toughRating": 2,
      "joyRating": 1
    },
    {
      "assignment": "W1D3-4",
      "name": "Martina",
      "toughRating": 3,
      "joyRating": 2
    },
    {
      "assignment": "W1D3-5",
      "name": "Martina",
      "toughRating": 1,
      "joyRating": 1
    },
    {
      "assignment": "W1D3 - Project - Guess-the-number",
      "name": "Martina",
      "toughRating": 2,
      "joyRating": 2
    },
    {
      "assignment": "W1D4-1",
      "name": "Martina",
      "toughRating": 4,
      "joyRating": 2
    },
    {
      "assignment": "W1D4 - Project - Kleurentoggle",
      "name": "Martina",
      "toughRating": 1,
      "joyRating": 3
    },
    {
      "assignment": "W1D5 - Project -Â Galgje",
      "name": "Martina",
      "toughRating": 1,
      "joyRating": 4
    },
    {
      "assignment": "W2D1-1",
      "name": "Martina",
      "toughRating": 1,
      "joyRating": 4
    },
    {
      "assignment": "W2D1-2",
      "name": "Martina",
      "toughRating": 4,
      "joyRating": 2
    },
    {
      "assignment": "W2D2-1",
      "name": "Martina",
      "toughRating": 4,
      "joyRating": 1
    },
    {
      "assignment": "W2D2-2",
      "name": "Martina",
      "toughRating": 3,
      "joyRating": 3
    },
    {
      "assignment": "W2D2-3",
      "name": "Martina",
      "toughRating": 3,
      "joyRating": 1
    },
    {
      "assignment": "W2D3-1",
      "name": "Martina",
      "toughRating": 4,
      "joyRating": 2
    },
    {
      "assignment": "W2D3-2",
      "name": "Martina",
      "toughRating": 3,
      "joyRating": 4
    },
    {
      "assignment": "W2D3-3",
      "name": "Martina",
      "toughRating": 3,
      "joyRating": 3
    },
    {
      "assignment": "W2D4-1",
      "name": "Martina",
      "toughRating": 1,
      "joyRating": 4
    },
    {
      "assignment": "W2D4-2",
      "name": "Martina",
      "toughRating": 3,
      "joyRating": 4
    },
    {
      "assignment": "W2D4-3",
      "name": "Martina",
      "toughRating": 3,
      "joyRating": 4
    },
    {
      "assignment": "W2D5 - Project - Filmzoeker",
      "name": "Martina",
      "toughRating": 2,
      "joyRating": 4
    },
    {
      "assignment": "W3D1-1",
      "name": "Martina",
      "toughRating": 1,
      "joyRating": 1
    },
    {
      "assignment": "W3D1-2",
      "name": "Martina",
      "toughRating": 3,
      "joyRating": 3
    },
    {
      "assignment": "W3D1-3",
      "name": "Martina",
      "toughRating": 3,
      "joyRating": 1
    },
    {
      "assignment": "W3D1-4",
      "name": "Martina",
      "toughRating": 3,
      "joyRating": 2
    },
    {
      "assignment": "W3D2-1",
      "name": "Martina",
      "toughRating": 1,
      "joyRating": 2
    },
    {
      "assignment": "W3D2-2",
      "name": "Martina",
      "toughRating": 2,
      "joyRating": 4
    },
    {
      "assignment": "W3D2-3",
      "name": "Martina",
      "toughRating": 3,
      "joyRating": 1
    },
    {
      "assignment": "W3D3-1",
      "name": "Martina",
      "toughRating": 1,
      "joyRating": 4
    },
    {
      "assignment": "W3D3-2",
      "name": "Martina",
      "toughRating": 4,
      "joyRating": 1
    },
    {
      "assignment": "W3D3-3",
      "name": "Martina",
      "toughRating": 3,
      "joyRating": 3
    },
    {
      "assignment": "W3D3-4",
      "name": "Martina",
      "toughRating": 2,
      "joyRating": 3
    },
    {
      "assignment": "W3D4-1",
      "name": "Martina",
      "toughRating": 4,
      "joyRating": 4
    },
    {
      "assignment": "W3D4-2",
      "name": "Martina",
      "toughRating": 3,
      "joyRating": 1
    },
    {
      "assignment": "W3D5 - Project - Todo-List",
      "name": "Martina",
      "toughRating": 2,
      "joyRating": 3
    },
    {
      "assignment": "W4D2-1",
      "name": "Martina",
      "toughRating": 3,
      "joyRating": 4
    },
    {
      "assignment": "W4D2-2",
      "name": "Martina",
      "toughRating": 1,
      "joyRating": 2
    },
    {
      "assignment": "W4D2-3",
      "name": "Martina",
      "toughRating": 3,
      "joyRating": 4
    },
    {
      "assignment": "W4D2-4",
      "name": "Martina",
      "toughRating": 4,
      "joyRating": 1
    },
    {
      "assignment": "W4D3-1",
      "name": "Martina",
      "toughRating": 2,
      "joyRating": 4
    },
    {
      "assignment": "W4D3-2",
      "name": "Martina",
      "toughRating": 1,
      "joyRating": 3
    },
    {
      "assignment": "W4D3-3",
      "name": "Martina",
      "toughRating": 2,
      "joyRating": 4
    },
    {
      "assignment": "W4D3-4",
      "name": "Martina",
      "toughRating": 4,
      "joyRating": 1
    },
    {
      "assignment": "W4D3-5",
      "name": "Martina",
      "toughRating": 3,
      "joyRating": 2
    },
    {
      "assignment": "W4D3 - Project - Next-Level CSS",
      "name": "Martina",
      "toughRating": 3,
      "joyRating": 4
    },
    {
      "assignment": "W5D4-1",
      "name": "Martina",
      "toughRating": 1,
      "joyRating": 4
    },
    {
      "assignment": "W5D5 - Project - Lil_Playlist",
      "name": "Martina",
      "toughRating": 1,
      "joyRating": 1
    },
    {
      "assignment": "W6D1-1",
      "name": "Martina",
      "toughRating": 2,
      "joyRating": 1
    },
    {
      "assignment": "W6D2-1",
      "name": "Martina",
      "toughRating": 1,
      "joyRating": 4
    },
    {
      "assignment": "W6D2 - Project - Eindopdracht",
      "name": "Martina",
      "toughRating": 1,
      "joyRating": 4
    },
    {
      "assignment": "SCRUM",
      "name": "Maurits",
      "toughRating": 3,
      "joyRating": 4
    },
    {
      "assignment": "W1D1-1",
      "name": "Maurits",
      "toughRating": 4,
      "joyRating": 3
    },
    {
      "assignment": "W1D2-1",
      "name": "Maurits",
      "toughRating": 2,
      "joyRating": 2
    },
    {
      "assignment": "W1D2-2",
      "name": "Maurits",
      "toughRating": 1,
      "joyRating": 4
    },
    {
      "assignment": "W1D2-3",
      "name": "Maurits",
      "toughRating": 2,
      "joyRating": 2
    },
    {
      "assignment": "W1D2-4",
      "name": "Maurits",
      "toughRating": 3,
      "joyRating": 1
    },
    {
      "assignment": "W1D2-5",
      "name": "Maurits",
      "toughRating": 2,
      "joyRating": 3
    },
    {
      "assignment": "W1D3-1",
      "name": "Maurits",
      "toughRating": 2,
      "joyRating": 4
    },
    {
      "assignment": "W1D3-2",
      "name": "Maurits",
      "toughRating": 2,
      "joyRating": 2
    },
    {
      "assignment": "W1D3-4",
      "name": "Maurits",
      "toughRating": 2,
      "joyRating": 2
    },
    {
      "assignment": "W1D3-5",
      "name": "Maurits",
      "toughRating": 1,
      "joyRating": 3
    },
    {
      "assignment": "W1D3 - Project - Guess-the-number",
      "name": "Maurits",
      "toughRating": 1,
      "joyRating": 1
    },
    {
      "assignment": "W1D4-1",
      "name": "Maurits",
      "toughRating": 3,
      "joyRating": 4
    },
    {
      "assignment": "W1D4 - Project - Kleurentoggle",
      "name": "Maurits",
      "toughRating": 4,
      "joyRating": 1
    },
    {
      "assignment": "W1D5 - Project -Â Galgje",
      "name": "Maurits",
      "toughRating": 3,
      "joyRating": 2
    },
    {
      "assignment": "W2D1-1",
      "name": "Maurits",
      "toughRating": 1,
      "joyRating": 1
    },
    {
      "assignment": "W2D1-2",
      "name": "Maurits",
      "toughRating": 2,
      "joyRating": 3
    },
    {
      "assignment": "W2D2-1",
      "name": "Maurits",
      "toughRating": 1,
      "joyRating": 2
    },
    {
      "assignment": "W2D2-2",
      "name": "Maurits",
      "toughRating": 4,
      "joyRating": 1
    },
    {
      "assignment": "W2D2-3",
      "name": "Maurits",
      "toughRating": 2,
      "joyRating": 2
    },
    {
      "assignment": "W2D3-1",
      "name": "Maurits",
      "toughRating": 2,
      "joyRating": 2
    },
    {
      "assignment": "W2D3-2",
      "name": "Maurits",
      "toughRating": 3,
      "joyRating": 3
    },
    {
      "assignment": "W2D3-3",
      "name": "Maurits",
      "toughRating": 2,
      "joyRating": 1
    },
    {
      "assignment": "W2D4-1",
      "name": "Maurits",
      "toughRating": 1,
      "joyRating": 3
    },
    {
      "assignment": "W2D4-2",
      "name": "Maurits",
      "toughRating": 3,
      "joyRating": 2
    },
    {
      "assignment": "W2D4-3",
      "name": "Maurits",
      "toughRating": 3,
      "joyRating": 3
    },
    {
      "assignment": "W2D5 - Project - Filmzoeker",
      "name": "Maurits",
      "toughRating": 3,
      "joyRating": 1
    },
    {
      "assignment": "W3D1-1",
      "name": "Maurits",
      "toughRating": 4,
      "joyRating": 4
    },
    {
      "assignment": "W3D1-2",
      "name": "Maurits",
      "toughRating": 1,
      "joyRating": 3
    },
    {
      "assignment": "W3D1-3",
      "name": "Maurits",
      "toughRating": 1,
      "joyRating": 4
    },
    {
      "assignment": "W3D1-4",
      "name": "Maurits",
      "toughRating": 1,
      "joyRating": 2
    },
    {
      "assignment": "W3D2-1",
      "name": "Maurits",
      "toughRating": 1,
      "joyRating": 4
    },
    {
      "assignment": "W3D2-2",
      "name": "Maurits",
      "toughRating": 1,
      "joyRating": 1
    },
    {
      "assignment": "W3D2-3",
      "name": "Maurits",
      "toughRating": 4,
      "joyRating": 3
    },
    {
      "assignment": "W3D3-1",
      "name": "Maurits",
      "toughRating": 1,
      "joyRating": 1
    },
    {
      "assignment": "W3D3-2",
      "name": "Maurits",
      "toughRating": 2,
      "joyRating": 1
    },
    {
      "assignment": "W3D3-3",
      "name": "Maurits",
      "toughRating": 1,
      "joyRating": 3
    },
    {
      "assignment": "W3D3-4",
      "name": "Maurits",
      "toughRating": 4,
      "joyRating": 1
    },
    {
      "assignment": "W3D4-1",
      "name": "Maurits",
      "toughRating": 4,
      "joyRating": 4
    },
    {
      "assignment": "W3D4-2",
      "name": "Maurits",
      "toughRating": 1,
      "joyRating": 3
    },
    {
      "assignment": "W3D5 - Project - Todo-List",
      "name": "Maurits",
      "toughRating": 3,
      "joyRating": 4
    },
    {
      "assignment": "W4D2-1",
      "name": "Maurits",
      "toughRating": 3,
      "joyRating": 1
    },
    {
      "assignment": "W4D2-2",
      "name": "Maurits",
      "toughRating": 4,
      "joyRating": 4
    },
    {
      "assignment": "W4D2-3",
      "name": "Maurits",
      "toughRating": 4,
      "joyRating": 1
    },
    {
      "assignment": "W4D2-4",
      "name": "Maurits",
      "toughRating": 2,
      "joyRating": 3
    },
    {
      "assignment": "W4D3-1",
      "name": "Maurits",
      "toughRating": 3,
      "joyRating": 1
    },
    {
      "assignment": "W4D3-2",
      "name": "Maurits",
      "toughRating": 3,
      "joyRating": 2
    },
    {
      "assignment": "W4D3-3",
      "name": "Maurits",
      "toughRating": 3,
      "joyRating": 4
    },
    {
      "assignment": "W4D3-4",
      "name": "Maurits",
      "toughRating": 1,
      "joyRating": 3
    },
    {
      "assignment": "W4D3-5",
      "name": "Maurits",
      "toughRating": 2,
      "joyRating": 1
    },
    {
      "assignment": "W4D3 - Project - Next-Level CSS",
      "name": "Maurits",
      "toughRating": 2,
      "joyRating": 3
    },
    {
      "assignment": "W5D4-1",
      "name": "Maurits",
      "toughRating": 1,
      "joyRating": 3
    },
    {
      "assignment": "W5D5 - Project - Lil_Playlist",
      "name": "Maurits",
      "toughRating": 4,
      "joyRating": 2
    },
    {
      "assignment": "W6D1-1",
      "name": "Maurits",
      "toughRating": 1,
      "joyRating": 3
    },
    {
      "assignment": "W6D2-1",
      "name": "Maurits",
      "toughRating": 1,
      "joyRating": 4
    },
    {
      "assignment": "W6D2 - Project - Eindopdracht",
      "name": "Maurits",
      "toughRating": 3,
      "joyRating": 3
    },
    {
      "assignment": "SCRUM",
      "name": "Rahima",
      "toughRating": 2,
      "joyRating": 4
    },
    {
      "assignment": "W1D1-1",
      "name": "Rahima",
      "toughRating": 3,
      "joyRating": 4
    },
    {
      "assignment": "W1D2-1",
      "name": "Rahima",
      "toughRating": 2,
      "joyRating": 4
    },
    {
      "assignment": "W1D2-2",
      "name": "Rahima",
      "toughRating": 1,
      "joyRating": 2
    },
    {
      "assignment": "W1D2-3",
      "name": "Rahima",
      "toughRating": 1,
      "joyRating": 3
    },
    {
      "assignment": "W1D2-4",
      "name": "Rahima",
      "toughRating": 1,
      "joyRating": 2
    },
    {
      "assignment": "W1D2-5",
      "name": "Rahima",
      "toughRating": 1,
      "joyRating": 3
    },
    {
      "assignment": "W1D3-1",
      "name": "Rahima",
      "toughRating": 1,
      "joyRating": 1
    },
    {
      "assignment": "W1D3-2",
      "name": "Rahima",
      "toughRating": 2,
      "joyRating": 4
    },
    {
      "assignment": "W1D3-4",
      "name": "Rahima",
      "toughRating": 1,
      "joyRating": 2
    },
    {
      "assignment": "W1D3-5",
      "name": "Rahima",
      "toughRating": 2,
      "joyRating": 2
    },
    {
      "assignment": "W1D3 - Project - Guess-the-number",
      "name": "Rahima",
      "toughRating": 3,
      "joyRating": 1
    },
    {
      "assignment": "W1D4-1",
      "name": "Rahima",
      "toughRating": 4,
      "joyRating": 3
    },
    {
      "assignment": "W1D4 - Project - Kleurentoggle",
      "name": "Rahima",
      "toughRating": 2,
      "joyRating": 4
    },
    {
      "assignment": "W1D5 - Project -Â Galgje",
      "name": "Rahima",
      "toughRating": 3,
      "joyRating": 3
    },
    {
      "assignment": "W2D1-1",
      "name": "Rahima",
      "toughRating": 2,
      "joyRating": 2
    },
    {
      "assignment": "W2D1-2",
      "name": "Rahima",
      "toughRating": 3,
      "joyRating": 1
    },
    {
      "assignment": "W2D2-1",
      "name": "Rahima",
      "toughRating": 1,
      "joyRating": 1
    },
    {
      "assignment": "W2D2-2",
      "name": "Rahima",
      "toughRating": 1,
      "joyRating": 1
    },
    {
      "assignment": "W2D2-3",
      "name": "Rahima",
      "toughRating": 4,
      "joyRating": 2
    },
    {
      "assignment": "W2D3-1",
      "name": "Rahima",
      "toughRating": 1,
      "joyRating": 1
    },
    {
      "assignment": "W2D3-2",
      "name": "Rahima",
      "toughRating": 1,
      "joyRating": 4
    },
    {
      "assignment": "W2D3-3",
      "name": "Rahima",
      "toughRating": 4,
      "joyRating": 2
    },
    {
      "assignment": "W2D4-1",
      "name": "Rahima",
      "toughRating": 4,
      "joyRating": 4
    },
    {
      "assignment": "W2D4-2",
      "name": "Rahima",
      "toughRating": 4,
      "joyRating": 4
    },
    {
      "assignment": "W2D4-3",
      "name": "Rahima",
      "toughRating": 2,
      "joyRating": 3
    },
    {
      "assignment": "W2D5 - Project - Filmzoeker",
      "name": "Rahima",
      "toughRating": 3,
      "joyRating": 1
    },
    {
      "assignment": "W3D1-1",
      "name": "Rahima",
      "toughRating": 1,
      "joyRating": 1
    },
    {
      "assignment": "W3D1-2",
      "name": "Rahima",
      "toughRating": 1,
      "joyRating": 2
    },
    {
      "assignment": "W3D1-3",
      "name": "Rahima",
      "toughRating": 2,
      "joyRating": 3
    },
    {
      "assignment": "W3D1-4",
      "name": "Rahima",
      "toughRating": 2,
      "joyRating": 4
    },
    {
      "assignment": "W3D2-1",
      "name": "Rahima",
      "toughRating": 3,
      "joyRating": 2
    },
    {
      "assignment": "W3D2-2",
      "name": "Rahima",
      "toughRating": 1,
      "joyRating": 4
    },
    {
      "assignment": "W3D2-3",
      "name": "Rahima",
      "toughRating": 2,
      "joyRating": 1
    },
    {
      "assignment": "W3D3-1",
      "name": "Rahima",
      "toughRating": 3,
      "joyRating": 1
    },
    {
      "assignment": "W3D3-2",
      "name": "Rahima",
      "toughRating": 4,
      "joyRating": 4
    },
    {
      "assignment": "W3D3-3",
      "name": "Rahima",
      "toughRating": 1,
      "joyRating": 4
    },
    {
      "assignment": "W3D3-4",
      "name": "Rahima",
      "toughRating": 2,
      "joyRating": 2
    },
    {
      "assignment": "W3D4-1",
      "name": "Rahima",
      "toughRating": 1,
      "joyRating": 2
    },
    {
      "assignment": "W3D4-2",
      "name": "Rahima",
      "toughRating": 3,
      "joyRating": 3
    },
    {
      "assignment": "W3D5 - Project - Todo-List",
      "name": "Rahima",
      "toughRating": 2,
      "joyRating": 4
    },
    {
      "assignment": "W4D2-1",
      "name": "Rahima",
      "toughRating": 2,
      "joyRating": 4
    },
    {
      "assignment": "W4D2-2",
      "name": "Rahima",
      "toughRating": 4,
      "joyRating": 3
    },
    {
      "assignment": "W4D2-3",
      "name": "Rahima",
      "toughRating": 3,
      "joyRating": 3
    },
    {
      "assignment": "W4D2-4",
      "name": "Rahima",
      "toughRating": 4,
      "joyRating": 1
    },
    {
      "assignment": "W4D3-1",
      "name": "Rahima",
      "toughRating": 2,
      "joyRating": 1
    },
    {
      "assignment": "W4D3-2",
      "name": "Rahima",
      "toughRating": 1,
      "joyRating": 1
    },
    {
      "assignment": "W4D3-3",
      "name": "Rahima",
      "toughRating": 2,
      "joyRating": 1
    },
    {
      "assignment": "W4D3-4",
      "name": "Rahima",
      "toughRating": 2,
      "joyRating": 2
    },
    {
      "assignment": "W4D3-5",
      "name": "Rahima",
      "toughRating": 3,
      "joyRating": 2
    },
    {
      "assignment": "W4D3 - Project - Next-Level CSS",
      "name": "Rahima",
      "toughRating": 1,
      "joyRating": 2
    },
    {
      "assignment": "W5D4-1",
      "name": "Rahima",
      "toughRating": 3,
      "joyRating": 3
    },
    {
      "assignment": "W5D5 - Project - Lil_Playlist",
      "name": "Rahima",
      "toughRating": 2,
      "joyRating": 3
    },
    {
      "assignment": "W6D1-1",
      "name": "Rahima",
      "toughRating": 4,
      "joyRating": 4
    },
    {
      "assignment": "W6D2-1",
      "name": "Rahima",
      "toughRating": 1,
      "joyRating": 4
    },
    {
      "assignment": "W6D2 - Project - Eindopdracht",
      "name": "Rahima",
      "toughRating": 4,
      "joyRating": 1
    },
    {
      "assignment": "SCRUM",
      "name": "Sandra",
      "toughRating": 4,
      "joyRating": 1
    },
    {
      "assignment": "W1D1-1",
      "name": "Sandra",
      "toughRating": 2,
      "joyRating": 4
    },
    {
      "assignment": "W1D2-1",
      "name": "Sandra",
      "toughRating": 3,
      "joyRating": 4
    },
    {
      "assignment": "W1D2-2",
      "name": "Sandra",
      "toughRating": 3,
      "joyRating": 2
    },
    {
      "assignment": "W1D2-3",
      "name": "Sandra",
      "toughRating": 3,
      "joyRating": 4
    },
    {
      "assignment": "W1D2-4",
      "name": "Sandra",
      "toughRating": 3,
      "joyRating": 1
    },
    {
      "assignment": "W1D2-5",
      "name": "Sandra",
      "toughRating": 4,
      "joyRating": 3
    },
    {
      "assignment": "W1D3-1",
      "name": "Sandra",
      "toughRating": 1,
      "joyRating": 1
    },
    {
      "assignment": "W1D3-2",
      "name": "Sandra",
      "toughRating": 1,
      "joyRating": 1
    },
    {
      "assignment": "W1D3-4",
      "name": "Sandra",
      "toughRating": 3,
      "joyRating": 3
    },
    {
      "assignment": "W1D3-5",
      "name": "Sandra",
      "toughRating": 4,
      "joyRating": 3
    },
    {
      "assignment": "W1D3 - Project - Guess-the-number",
      "name": "Sandra",
      "toughRating": 2,
      "joyRating": 4
    },
    {
      "assignment": "W1D4-1",
      "name": "Sandra",
      "toughRating": 3,
      "joyRating": 2
    },
    {
      "assignment": "W1D4 - Project - Kleurentoggle",
      "name": "Sandra",
      "toughRating": 1,
      "joyRating": 3
    },
    {
      "assignment": "W1D5 - Project -Â Galgje",
      "name": "Sandra",
      "toughRating": 3,
      "joyRating": 3
    },
    {
      "assignment": "W2D1-1",
      "name": "Sandra",
      "toughRating": 4,
      "joyRating": 1
    },
    {
      "assignment": "W2D1-2",
      "name": "Sandra",
      "toughRating": 4,
      "joyRating": 3
    },
    {
      "assignment": "W2D2-1",
      "name": "Sandra",
      "toughRating": 3,
      "joyRating": 4
    },
    {
      "assignment": "W2D2-2",
      "name": "Sandra",
      "toughRating": 2,
      "joyRating": 3
    },
    {
      "assignment": "W2D2-3",
      "name": "Sandra",
      "toughRating": 4,
      "joyRating": 3
    },
    {
      "assignment": "W2D3-1",
      "name": "Sandra",
      "toughRating": 1,
      "joyRating": 2
    },
    {
      "assignment": "W2D3-2",
      "name": "Sandra",
      "toughRating": 3,
      "joyRating": 2
    },
    {
      "assignment": "W2D3-3",
      "name": "Sandra",
      "toughRating": 2,
      "joyRating": 2
    },
    {
      "assignment": "W2D4-1",
      "name": "Sandra",
      "toughRating": 1,
      "joyRating": 3
    },
    {
      "assignment": "W2D4-2",
      "name": "Sandra",
      "toughRating": 2,
      "joyRating": 4
    },
    {
      "assignment": "W2D4-3",
      "name": "Sandra",
      "toughRating": 2,
      "joyRating": 2
    },
    {
      "assignment": "W2D5 - Project - Filmzoeker",
      "name": "Sandra",
      "toughRating": 2,
      "joyRating": 4
    },
    {
      "assignment": "W3D1-1",
      "name": "Sandra",
      "toughRating": 3,
      "joyRating": 3
    },
    {
      "assignment": "W3D1-2",
      "name": "Sandra",
      "toughRating": 3,
      "joyRating": 4
    },
    {
      "assignment": "W3D1-3",
      "name": "Sandra",
      "toughRating": 2,
      "joyRating": 4
    },
    {
      "assignment": "W3D1-4",
      "name": "Sandra",
      "toughRating": 2,
      "joyRating": 2
    },
    {
      "assignment": "W3D2-1",
      "name": "Sandra",
      "toughRating": 2,
      "joyRating": 4
    },
    {
      "assignment": "W3D2-2",
      "name": "Sandra",
      "toughRating": 2,
      "joyRating": 3
    },
    {
      "assignment": "W3D2-3",
      "name": "Sandra",
      "toughRating": 1,
      "joyRating": 2
    },
    {
      "assignment": "W3D3-1",
      "name": "Sandra",
      "toughRating": 1,
      "joyRating": 2
    },
    {
      "assignment": "W3D3-2",
      "name": "Sandra",
      "toughRating": 2,
      "joyRating": 2
    },
    {
      "assignment": "W3D3-3",
      "name": "Sandra",
      "toughRating": 4,
      "joyRating": 4
    },
    {
      "assignment": "W3D3-4",
      "name": "Sandra",
      "toughRating": 3,
      "joyRating": 2
    },
    {
      "assignment": "W3D4-1",
      "name": "Sandra",
      "toughRating": 2,
      "joyRating": 3
    },
    {
      "assignment": "W3D4-2",
      "name": "Sandra",
      "toughRating": 1,
      "joyRating": 1
    },
    {
      "assignment": "W3D5 - Project - Todo-List",
      "name": "Sandra",
      "toughRating": 1,
      "joyRating": 2
    },
    {
      "assignment": "W4D2-1",
      "name": "Sandra",
      "toughRating": 3,
      "joyRating": 3
    },
    {
      "assignment": "W4D2-2",
      "name": "Sandra",
      "toughRating": 1,
      "joyRating": 1
    },
    {
      "assignment": "W4D2-3",
      "name": "Sandra",
      "toughRating": 3,
      "joyRating": 4
    },
    {
      "assignment": "W4D2-4",
      "name": "Sandra",
      "toughRating": 1,
      "joyRating": 4
    },
    {
      "assignment": "W4D3-1",
      "name": "Sandra",
      "toughRating": 3,
      "joyRating": 1
    },
    {
      "assignment": "W4D3-2",
      "name": "Sandra",
      "toughRating": 1,
      "joyRating": 3
    },
    {
      "assignment": "W4D3-3",
      "name": "Sandra",
      "toughRating": 2,
      "joyRating": 4
    },
    {
      "assignment": "W4D3-4",
      "name": "Sandra",
      "toughRating": 1,
      "joyRating": 4
    },
    {
      "assignment": "W4D3-5",
      "name": "Sandra",
      "toughRating": 1,
      "joyRating": 3
    },
    {
      "assignment": "W4D3 - Project - Next-Level CSS",
      "name": "Sandra",
      "toughRating": 3,
      "joyRating": 4
    },
    {
      "assignment": "W5D4-1",
      "name": "Sandra",
      "toughRating": 1,
      "joyRating": 1
    },
    {
      "assignment": "W5D5 - Project - Lil_Playlist",
      "name": "Sandra",
      "toughRating": 2,
      "joyRating": 2
    },
    {
      "assignment": "W6D1-1",
      "name": "Sandra",
      "toughRating": 1,
      "joyRating": 4
    },
    {
      "assignment": "W6D2-1",
      "name": "Sandra",
      "toughRating": 2,
      "joyRating": 3
    },
    {
      "assignment": "W6D2 - Project - Eindopdracht",
      "name": "Sandra",
      "toughRating": 4,
      "joyRating": 1
    },
    {
      "assignment": "SCRUM",
      "name": "Wietske",
      "toughRating": 1,
      "joyRating": 1
    },
    {
      "assignment": "W1D1-1",
      "name": "Wietske",
      "toughRating": 4,
      "joyRating": 3
    },
    {
      "assignment": "W1D2-1",
      "name": "Wietske",
      "toughRating": 1,
      "joyRating": 4
    },
    {
      "assignment": "W1D2-2",
      "name": "Wietske",
      "toughRating": 1,
      "joyRating": 2
    },
    {
      "assignment": "W1D2-3",
      "name": "Wietske",
      "toughRating": 2,
      "joyRating": 3
    },
    {
      "assignment": "W1D2-4",
      "name": "Wietske",
      "toughRating": 2,
      "joyRating": 1
    },
    {
      "assignment": "W1D2-5",
      "name": "Wietske",
      "toughRating": 3,
      "joyRating": 4
    },
    {
      "assignment": "W1D3-1",
      "name": "Wietske",
      "toughRating": 1,
      "joyRating": 2
    },
    {
      "assignment": "W1D3-2",
      "name": "Wietske",
      "toughRating": 1,
      "joyRating": 4
    },
    {
      "assignment": "W1D3-4",
      "name": "Wietske",
      "toughRating": 2,
      "joyRating": 1
    },
    {
      "assignment": "W1D3-5",
      "name": "Wietske",
      "toughRating": 3,
      "joyRating": 4
    },
    {
      "assignment": "W1D3 - Project - Guess-the-number",
      "name": "Wietske",
      "toughRating": 2,
      "joyRating": 4
    },
    {
      "assignment": "W1D4-1",
      "name": "Wietske",
      "toughRating": 2,
      "joyRating": 4
    },
    {
      "assignment": "W1D4 - Project - Kleurentoggle",
      "name": "Wietske",
      "toughRating": 2,
      "joyRating": 3
    },
    {
      "assignment": "W1D5 - Project -Â Galgje",
      "name": "Wietske",
      "toughRating": 3,
      "joyRating": 3
    },
    {
      "assignment": "W2D1-1",
      "name": "Wietske",
      "toughRating": 3,
      "joyRating": 1
    },
    {
      "assignment": "W2D1-2",
      "name": "Wietske",
      "toughRating": 4,
      "joyRating": 1
    },
    {
      "assignment": "W2D2-1",
      "name": "Wietske",
      "toughRating": 2,
      "joyRating": 2
    },
    {
      "assignment": "W2D2-2",
      "name": "Wietske",
      "toughRating": 2,
      "joyRating": 4
    },
    {
      "assignment": "W2D2-3",
      "name": "Wietske",
      "toughRating": 3,
      "joyRating": 4
    },
    {
      "assignment": "W2D3-1",
      "name": "Wietske",
      "toughRating": 2,
      "joyRating": 1
    },
    {
      "assignment": "W2D3-2",
      "name": "Wietske",
      "toughRating": 1,
      "joyRating": 1
    },
    {
      "assignment": "W2D3-3",
      "name": "Wietske",
      "toughRating": 2,
      "joyRating": 3
    },
    {
      "assignment": "W2D4-1",
      "name": "Wietske",
      "toughRating": 1,
      "joyRating": 1
    },
    {
      "assignment": "W2D4-2",
      "name": "Wietske",
      "toughRating": 2,
      "joyRating": 4
    },
    {
      "assignment": "W2D4-3",
      "name": "Wietske",
      "toughRating": 4,
      "joyRating": 3
    },
    {
      "assignment": "W2D5 - Project - Filmzoeker",
      "name": "Wietske",
      "toughRating": 2,
      "joyRating": 2
    },
    {
      "assignment": "W3D1-1",
      "name": "Wietske",
      "toughRating": 1,
      "joyRating": 3
    },
    {
      "assignment": "W3D1-2",
      "name": "Wietske",
      "toughRating": 4,
      "joyRating": 4
    },
    {
      "assignment": "W3D1-3",
      "name": "Wietske",
      "toughRating": 4,
      "joyRating": 2
    },
    {
      "assignment": "W3D1-4",
      "name": "Wietske",
      "toughRating": 1,
      "joyRating": 4
    },
    {
      "assignment": "W3D2-1",
      "name": "Wietske",
      "toughRating": 3,
      "joyRating": 2
    },
    {
      "assignment": "W3D2-2",
      "name": "Wietske",
      "toughRating": 1,
      "joyRating": 3
    },
    {
      "assignment": "W3D2-3",
      "name": "Wietske",
      "toughRating": 2,
      "joyRating": 4
    },
    {
      "assignment": "W3D3-1",
      "name": "Wietske",
      "toughRating": 1,
      "joyRating": 4
    },
    {
      "assignment": "W3D3-2",
      "name": "Wietske",
      "toughRating": 3,
      "joyRating": 1
    },
    {
      "assignment": "W3D3-3",
      "name": "Wietske",
      "toughRating": 1,
      "joyRating": 3
    },
    {
      "assignment": "W3D3-4",
      "name": "Wietske",
      "toughRating": 3,
      "joyRating": 4
    },
    {
      "assignment": "W3D4-1",
      "name": "Wietske",
      "toughRating": 3,
      "joyRating": 4
    },
    {
      "assignment": "W3D4-2",
      "name": "Wietske",
      "toughRating": 4,
      "joyRating": 2
    },
    {
      "assignment": "W3D5 - Project - Todo-List",
      "name": "Wietske",
      "toughRating": 2,
      "joyRating": 4
    },
    {
      "assignment": "W4D2-1",
      "name": "Wietske",
      "toughRating": 3,
      "joyRating": 3
    },
    {
      "assignment": "W4D2-2",
      "name": "Wietske",
      "toughRating": 2,
      "joyRating": 4
    },
    {
      "assignment": "W4D2-3",
      "name": "Wietske",
      "toughRating": 1,
      "joyRating": 2
    },
    {
      "assignment": "W4D2-4",
      "name": "Wietske",
      "toughRating": 4,
      "joyRating": 3
    },
    {
      "assignment": "W4D3-1",
      "name": "Wietske",
      "toughRating": 2,
      "joyRating": 1
    },
    {
      "assignment": "W4D3-2",
      "name": "Wietske",
      "toughRating": 1,
      "joyRating": 2
    },
    {
      "assignment": "W4D3-3",
      "name": "Wietske",
      "toughRating": 1,
      "joyRating": 4
    },
    {
      "assignment": "W4D3-4",
      "name": "Wietske",
      "toughRating": 3,
      "joyRating": 4
    },
    {
      "assignment": "W4D3-5",
      "name": "Wietske",
      "toughRating": 4,
      "joyRating": 3
    },
    {
      "assignment": "W4D3 - Project - Next-Level CSS",
      "name": "Wietske",
      "toughRating": 4,
      "joyRating": 2
    },
    {
      "assignment": "W5D4-1",
      "name": "Wietske",
      "toughRating": 3,
      "joyRating": 1
    },
    {
      "assignment": "W5D5 - Project - Lil_Playlist",
      "name": "Wietske",
      "toughRating": 4,
      "joyRating": 2
    },
    {
      "assignment": "W6D1-1",
      "name": "Wietske",
      "toughRating": 1,
      "joyRating": 1
    },
    {
      "assignment": "W6D2-1",
      "name": "Wietske",
      "toughRating": 2,
      "joyRating": 1
    },
    {
      "assignment": "W6D2 - Project - Eindopdracht",
      "name": "Wietske",
      "toughRating": 1,
      "joyRating": 2
    },
    {
      "assignment": "SCRUM",
      "name": "Storm",
      "toughRating": 1,
      "joyRating": 1
    },
    {
      "assignment": "W1D1-1",
      "name": "Storm",
      "toughRating": 2,
      "joyRating": 2
    },
    {
      "assignment": "W1D2-1",
      "name": "Storm",
      "toughRating": 2,
      "joyRating": 3
    },
    {
      "assignment": "W1D2-2",
      "name": "Storm",
      "toughRating": 1,
      "joyRating": 3
    },
    {
      "assignment": "W1D2-3",
      "name": "Storm",
      "toughRating": 1,
      "joyRating": 2
    },
    {
      "assignment": "W1D2-4",
      "name": "Storm",
      "toughRating": 4,
      "joyRating": 3
    },
    {
      "assignment": "W1D2-5",
      "name": "Storm",
      "toughRating": 3,
      "joyRating": 3
    },
    {
      "assignment": "W1D3-1",
      "name": "Storm",
      "toughRating": 2,
      "joyRating": 3
    },
    {
      "assignment": "W1D3-2",
      "name": "Storm",
      "toughRating": 1,
      "joyRating": 1
    },
    {
      "assignment": "W1D3-4",
      "name": "Storm",
      "toughRating": 1,
      "joyRating": 1
    },
    {
      "assignment": "W1D3-5",
      "name": "Storm",
      "toughRating": 2,
      "joyRating": 2
    },
    {
      "assignment": "W1D3 - Project - Guess-the-number",
      "name": "Storm",
      "toughRating": 3,
      "joyRating": 4
    },
    {
      "assignment": "W1D4-1",
      "name": "Storm",
      "toughRating": 4,
      "joyRating": 2
    },
    {
      "assignment": "W1D4 - Project - Kleurentoggle",
      "name": "Storm",
      "toughRating": 3,
      "joyRating": 2
    },
    {
      "assignment": "W1D5 - Project -Â Galgje",
      "name": "Storm",
      "toughRating": 4,
      "joyRating": 4
    },
    {
      "assignment": "W2D1-1",
      "name": "Storm",
      "toughRating": 2,
      "joyRating": 4
    },
    {
      "assignment": "W2D1-2",
      "name": "Storm",
      "toughRating": 3,
      "joyRating": 2
    },
    {
      "assignment": "W2D2-1",
      "name": "Storm",
      "toughRating": 4,
      "joyRating": 4
    },
    {
      "assignment": "W2D2-2",
      "name": "Storm",
      "toughRating": 2,
      "joyRating": 1
    },
    {
      "assignment": "W2D2-3",
      "name": "Storm",
      "toughRating": 1,
      "joyRating": 1
    },
    {
      "assignment": "W2D3-1",
      "name": "Storm",
      "toughRating": 2,
      "joyRating": 3
    },
    {
      "assignment": "W2D3-2",
      "name": "Storm",
      "toughRating": 3,
      "joyRating": 4
    },
    {
      "assignment": "W2D3-3",
      "name": "Storm",
      "toughRating": 3,
      "joyRating": 2
    },
    {
      "assignment": "W2D4-1",
      "name": "Storm",
      "toughRating": 3,
      "joyRating": 4
    },
    {
      "assignment": "W2D4-2",
      "name": "Storm",
      "toughRating": 4,
      "joyRating": 3
    },
    {
      "assignment": "W2D4-3",
      "name": "Storm",
      "toughRating": 2,
      "joyRating": 1
    },
    {
      "assignment": "W2D5 - Project - Filmzoeker",
      "name": "Storm",
      "toughRating": 4,
      "joyRating": 1
    },
    {
      "assignment": "W3D1-1",
      "name": "Storm",
      "toughRating": 2,
      "joyRating": 1
    },
    {
      "assignment": "W3D1-2",
      "name": "Storm",
      "toughRating": 2,
      "joyRating": 2
    },
    {
      "assignment": "W3D1-3",
      "name": "Storm",
      "toughRating": 1,
      "joyRating": 2
    },
    {
      "assignment": "W3D1-4",
      "name": "Storm",
      "toughRating": 2,
      "joyRating": 3
    },
    {
      "assignment": "W3D2-1",
      "name": "Storm",
      "toughRating": 1,
      "joyRating": 4
    },
    {
      "assignment": "W3D2-2",
      "name": "Storm",
      "toughRating": 3,
      "joyRating": 3
    },
    {
      "assignment": "W3D2-3",
      "name": "Storm",
      "toughRating": 3,
      "joyRating": 4
    },
    {
      "assignment": "W3D3-1",
      "name": "Storm",
      "toughRating": 3,
      "joyRating": 4
    },
    {
      "assignment": "W3D3-2",
      "name": "Storm",
      "toughRating": 1,
      "joyRating": 2
    },
    {
      "assignment": "W3D3-3",
      "name": "Storm",
      "toughRating": 3,
      "joyRating": 1
    },
    {
      "assignment": "W3D3-4",
      "name": "Storm",
      "toughRating": 3,
      "joyRating": 1
    },
    {
      "assignment": "W3D4-1",
      "name": "Storm",
      "toughRating": 2,
      "joyRating": 4
    },
    {
      "assignment": "W3D4-2",
      "name": "Storm",
      "toughRating": 3,
      "joyRating": 4
    },
    {
      "assignment": "W3D5 - Project - Todo-List",
      "name": "Storm",
      "toughRating": 3,
      "joyRating": 2
    },
    {
      "assignment": "W4D2-1",
      "name": "Storm",
      "toughRating": 2,
      "joyRating": 1
    },
    {
      "assignment": "W4D2-2",
      "name": "Storm",
      "toughRating": 3,
      "joyRating": 3
    },
    {
      "assignment": "W4D2-3",
      "name": "Storm",
      "toughRating": 2,
      "joyRating": 2
    },
    {
      "assignment": "W4D2-4",
      "name": "Storm",
      "toughRating": 3,
      "joyRating": 4
    },
    {
      "assignment": "W4D3-1",
      "name": "Storm",
      "toughRating": 3,
      "joyRating": 4
    },
    {
      "assignment": "W4D3-2",
      "name": "Storm",
      "toughRating": 2,
      "joyRating": 3
    },
    {
      "assignment": "W4D3-3",
      "name": "Storm",
      "toughRating": 1,
      "joyRating": 1
    },
    {
      "assignment": "W4D3-4",
      "name": "Storm",
      "toughRating": 3,
      "joyRating": 1
    },
    {
      "assignment": "W4D3-5",
      "name": "Storm",
      "toughRating": 2,
      "joyRating": 3
    },
    {
      "assignment": "W4D3 - Project - Next-Level CSS",
      "name": "Storm",
      "toughRating": 4,
      "joyRating": 1
    },
    {
      "assignment": "W5D4-1",
      "name": "Storm",
      "toughRating": 2,
      "joyRating": 2
    },
    {
      "assignment": "W5D5 - Project - Lil_Playlist",
      "name": "Storm",
      "toughRating": 1,
      "joyRating": 2
    },
    {
      "assignment": "W6D1-1",
      "name": "Storm",
      "toughRating": 4,
      "joyRating": 4
    },
    {
      "assignment": "W6D2-1",
      "name": "Storm",
      "toughRating": 1,
      "joyRating": 1
    },
    {
      "assignment": "W6D2 - Project - Eindopdracht",
      "name": "Storm",
      "toughRating": 3,
      "joyRating": 3
    }
  ]
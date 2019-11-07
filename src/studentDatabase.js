import React, { Component } from 'react';


const studentDate = [
    {
      "exercise": "SCRUM",
      "name": "Evelyn",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W1D1-1",
      "name": "Evelyn",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W1D2-1",
      "name": "Evelyn",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W1D2-2",
      "name": "Evelyn",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W1D2-3",
      "name": "Evelyn",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W1D2-4",
      "name": "Evelyn",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W1D2-5",
      "name": "Evelyn",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W1D3-1",
      "name": "Evelyn",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W1D3-2",
      "name": "Evelyn",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W1D3-4",
      "name": "Evelyn",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W1D3-5",
      "name": "Evelyn",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W1D3 - Project - Guess-the-number",
      "name": "Evelyn",
      "ratingDifficulty": 5,
      "ratingEnjoyment": 5
    },
    {
      "exercise": "W1D4-1",
      "name": "Evelyn",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 5
    },
    {
      "exercise": "W1D4 - Project - Kleurentoggle",
      "name": "Evelyn",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W1D5 - Project -Â Galgje",
      "name": "Evelyn",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W2D1-1",
      "name": "Evelyn",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 5
    },
    {
      "exercise": "W2D1-2",
      "name": "Evelyn",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 5
    },
    {
      "exercise": "W2D2-1",
      "name": "Evelyn",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W2D2-2",
      "name": "Evelyn",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W2D2-3",
      "name": "Evelyn",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W2D3-1",
      "name": "Evelyn",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W2D3-2",
      "name": "Evelyn",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W2D3-3",
      "name": "Evelyn",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W2D4-1",
      "name": "Evelyn",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W2D4-2",
      "name": "Evelyn",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W2D4-3",
      "name": "Evelyn",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W2D5 - Project - Filmzoeker",
      "name": "Evelyn",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W3D1-1",
      "name": "Evelyn",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W3D1-2",
      "name": "Evelyn",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W3D1-3",
      "name": "Evelyn",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W3D1-4",
      "name": "Evelyn",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W3D2-1",
      "name": "Evelyn",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W3D2-2",
      "name": "Evelyn",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W3D2-3",
      "name": "Evelyn",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 5
    },
    {
      "exercise": "W3D3-1",
      "name": "Evelyn",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W3D3-2",
      "name": "Evelyn",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 5
    },
    {
      "exercise": "W3D3-3",
      "name": "Evelyn",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 5
    },
    {
      "exercise": "W3D3-4",
      "name": "Evelyn",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 5
    },
    {
      "exercise": "W3D4-1",
      "name": "Evelyn",
      "ratingDifficulty": 5,
      "ratingEnjoyment": 5
    },
    {
      "exercise": "W3D4-2",
      "name": "Evelyn",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 5
    },
    {
      "exercise": "W3D5 - Project - Todo-List",
      "name": "Evelyn",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 5
    },
    {
      "exercise": "W4D2-1",
      "name": "Evelyn",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 5
    },
    {
      "exercise": "W4D2-2",
      "name": "Evelyn",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 5
    },
    {
      "exercise": "W4D2-3",
      "name": "Evelyn",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 5
    },
    {
      "exercise": "W4D2-4",
      "name": "Evelyn",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 5
    },
    {
      "exercise": "W4D3-1",
      "name": "Evelyn",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 5
    },
    {
      "exercise": "W4D3-2",
      "name": "Evelyn",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 5
    },
    {
      "exercise": "W4D3-3",
      "name": "Evelyn",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 5
    },
    {
      "exercise": "W4D3-4",
      "name": "Evelyn",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 5
    },
    {
      "exercise": "W4D3-5",
      "name": "Evelyn",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 5
    },
    {
      "exercise": "W4D3 - Project - Next-Level CSS",
      "name": "Evelyn",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 5
    },
    {
      "exercise": "W5D4-1",
      "name": "Evelyn",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W5D5 - Project - Lil_Playlist",
      "name": "Evelyn",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W6D1-1",
      "name": "Evelyn",
      "ratingDifficulty": 5,
      "ratingEnjoyment": 5
    },
    {
      "exercise": "W6D2-1",
      "name": "Evelyn",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W6D2 - Project - Eindopdracht",
      "name": "Evelyn",
      "ratingDifficulty": 5,
      "ratingEnjoyment": 5
    },
    {
      "exercise": "SCRUM",
      "name": "Aranka",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W1D1-1",
      "name": "Aranka",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W1D2-1",
      "name": "Aranka",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W1D2-2",
      "name": "Aranka",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W1D2-3",
      "name": "Aranka",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W1D2-4",
      "name": "Aranka",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W1D2-5",
      "name": "Aranka",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W1D3-1",
      "name": "Aranka",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W1D3-2",
      "name": "Aranka",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W1D3-4",
      "name": "Aranka",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W1D3-5",
      "name": "Aranka",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W1D3 - Project - Guess-the-number",
      "name": "Aranka",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W1D4-1",
      "name": "Aranka",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W1D4 - Project - Kleurentoggle",
      "name": "Aranka",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W1D5 - Project -Â Galgje",
      "name": "Aranka",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W2D1-1",
      "name": "Aranka",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W2D1-2",
      "name": "Aranka",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W2D2-1",
      "name": "Aranka",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W2D2-2",
      "name": "Aranka",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W2D2-3",
      "name": "Aranka",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W2D3-1",
      "name": "Aranka",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W2D3-2",
      "name": "Aranka",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W2D3-3",
      "name": "Aranka",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W2D4-1",
      "name": "Aranka",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W2D4-2",
      "name": "Aranka",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W2D4-3",
      "name": "Aranka",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W2D5 - Project - Filmzoeker",
      "name": "Aranka",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W3D1-1",
      "name": "Aranka",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W3D1-2",
      "name": "Aranka",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W3D1-3",
      "name": "Aranka",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W3D1-4",
      "name": "Aranka",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W3D2-1",
      "name": "Aranka",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W3D2-2",
      "name": "Aranka",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W3D2-3",
      "name": "Aranka",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W3D3-1",
      "name": "Aranka",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W3D3-2",
      "name": "Aranka",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W3D3-3",
      "name": "Aranka",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W3D3-4",
      "name": "Aranka",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W3D4-1",
      "name": "Aranka",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W3D4-2",
      "name": "Aranka",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W3D5 - Project - Todo-List",
      "name": "Aranka",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W4D2-1",
      "name": "Aranka",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W4D2-2",
      "name": "Aranka",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W4D2-3",
      "name": "Aranka",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W4D2-4",
      "name": "Aranka",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W4D3-1",
      "name": "Aranka",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W4D3-2",
      "name": "Aranka",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W4D3-3",
      "name": "Aranka",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W4D3-4",
      "name": "Aranka",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W4D3-5",
      "name": "Aranka",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W4D3 - Project - Next-Level CSS",
      "name": "Aranka",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W5D4-1",
      "name": "Aranka",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W5D5 - Project - Lil_Playlist",
      "name": "Aranka",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W6D1-1",
      "name": "Aranka",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W6D2-1",
      "name": "Aranka",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W6D2 - Project - Eindopdracht",
      "name": "Aranka",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "SCRUM",
      "name": "Floris",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W1D1-1",
      "name": "Floris",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W1D2-1",
      "name": "Floris",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W1D2-2",
      "name": "Floris",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W1D2-3",
      "name": "Floris",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W1D2-4",
      "name": "Floris",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W1D2-5",
      "name": "Floris",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W1D3-1",
      "name": "Floris",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W1D3-2",
      "name": "Floris",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W1D3-4",
      "name": "Floris",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W1D3-5",
      "name": "Floris",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W1D3 - Project - Guess-the-number",
      "name": "Floris",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W1D4-1",
      "name": "Floris",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W1D4 - Project - Kleurentoggle",
      "name": "Floris",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W1D5 - Project -Â Galgje",
      "name": "Floris",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W2D1-1",
      "name": "Floris",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W2D1-2",
      "name": "Floris",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W2D2-1",
      "name": "Floris",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W2D2-2",
      "name": "Floris",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W2D2-3",
      "name": "Floris",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W2D3-1",
      "name": "Floris",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W2D3-2",
      "name": "Floris",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W2D3-3",
      "name": "Floris",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W2D4-1",
      "name": "Floris",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W2D4-2",
      "name": "Floris",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W2D4-3",
      "name": "Floris",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W2D5 - Project - Filmzoeker",
      "name": "Floris",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W3D1-1",
      "name": "Floris",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W3D1-2",
      "name": "Floris",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W3D1-3",
      "name": "Floris",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W3D1-4",
      "name": "Floris",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W3D2-1",
      "name": "Floris",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W3D2-2",
      "name": "Floris",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W3D2-3",
      "name": "Floris",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W3D3-1",
      "name": "Floris",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W3D3-2",
      "name": "Floris",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W3D3-3",
      "name": "Floris",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W3D3-4",
      "name": "Floris",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W3D4-1",
      "name": "Floris",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W3D4-2",
      "name": "Floris",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W3D5 - Project - Todo-List",
      "name": "Floris",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W4D2-1",
      "name": "Floris",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W4D2-2",
      "name": "Floris",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W4D2-3",
      "name": "Floris",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W4D2-4",
      "name": "Floris",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W4D3-1",
      "name": "Floris",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W4D3-2",
      "name": "Floris",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W4D3-3",
      "name": "Floris",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W4D3-4",
      "name": "Floris",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W4D3-5",
      "name": "Floris",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W4D3 - Project - Next-Level CSS",
      "name": "Floris",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W5D4-1",
      "name": "Floris",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W5D5 - Project - Lil_Playlist",
      "name": "Floris",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W6D1-1",
      "name": "Floris",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W6D2-1",
      "name": "Floris",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W6D2 - Project - Eindopdracht",
      "name": "Floris",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "SCRUM",
      "name": "Hector",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W1D1-1",
      "name": "Hector",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W1D2-1",
      "name": "Hector",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W1D2-2",
      "name": "Hector",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W1D2-3",
      "name": "Hector",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W1D2-4",
      "name": "Hector",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W1D2-5",
      "name": "Hector",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W1D3-1",
      "name": "Hector",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W1D3-2",
      "name": "Hector",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W1D3-4",
      "name": "Hector",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W1D3-5",
      "name": "Hector",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W1D3 - Project - Guess-the-number",
      "name": "Hector",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W1D4-1",
      "name": "Hector",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W1D4 - Project - Kleurentoggle",
      "name": "Hector",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W1D5 - Project -Â Galgje",
      "name": "Hector",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W2D1-1",
      "name": "Hector",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W2D1-2",
      "name": "Hector",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W2D2-1",
      "name": "Hector",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W2D2-2",
      "name": "Hector",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W2D2-3",
      "name": "Hector",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W2D3-1",
      "name": "Hector",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W2D3-2",
      "name": "Hector",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W2D3-3",
      "name": "Hector",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W2D4-1",
      "name": "Hector",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W2D4-2",
      "name": "Hector",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W2D4-3",
      "name": "Hector",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W2D5 - Project - Filmzoeker",
      "name": "Hector",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W3D1-1",
      "name": "Hector",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W3D1-2",
      "name": "Hector",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W3D1-3",
      "name": "Hector",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W3D1-4",
      "name": "Hector",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W3D2-1",
      "name": "Hector",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W3D2-2",
      "name": "Hector",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W3D2-3",
      "name": "Hector",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W3D3-1",
      "name": "Hector",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W3D3-2",
      "name": "Hector",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W3D3-3",
      "name": "Hector",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W3D3-4",
      "name": "Hector",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W3D4-1",
      "name": "Hector",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W3D4-2",
      "name": "Hector",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W3D5 - Project - Todo-List",
      "name": "Hector",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W4D2-1",
      "name": "Hector",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W4D2-2",
      "name": "Hector",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W4D2-3",
      "name": "Hector",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W4D2-4",
      "name": "Hector",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W4D3-1",
      "name": "Hector",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W4D3-2",
      "name": "Hector",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W4D3-3",
      "name": "Hector",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W4D3-4",
      "name": "Hector",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W4D3-5",
      "name": "Hector",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W4D3 - Project - Next-Level CSS",
      "name": "Hector",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W5D4-1",
      "name": "Hector",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W5D5 - Project - Lil_Playlist",
      "name": "Hector",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W6D1-1",
      "name": "Hector",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W6D2-1",
      "name": "Hector",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W6D2 - Project - Eindopdracht",
      "name": "Hector",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "SCRUM",
      "name": "Martina",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W1D1-1",
      "name": "Martina",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W1D2-1",
      "name": "Martina",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W1D2-2",
      "name": "Martina",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W1D2-3",
      "name": "Martina",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W1D2-4",
      "name": "Martina",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W1D2-5",
      "name": "Martina",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W1D3-1",
      "name": "Martina",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W1D3-2",
      "name": "Martina",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W1D3-4",
      "name": "Martina",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W1D3-5",
      "name": "Martina",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W1D3 - Project - Guess-the-number",
      "name": "Martina",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W1D4-1",
      "name": "Martina",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W1D4 - Project - Kleurentoggle",
      "name": "Martina",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W1D5 - Project -Â Galgje",
      "name": "Martina",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W2D1-1",
      "name": "Martina",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W2D1-2",
      "name": "Martina",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W2D2-1",
      "name": "Martina",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W2D2-2",
      "name": "Martina",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W2D2-3",
      "name": "Martina",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W2D3-1",
      "name": "Martina",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W2D3-2",
      "name": "Martina",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W2D3-3",
      "name": "Martina",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W2D4-1",
      "name": "Martina",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W2D4-2",
      "name": "Martina",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W2D4-3",
      "name": "Martina",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W2D5 - Project - Filmzoeker",
      "name": "Martina",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W3D1-1",
      "name": "Martina",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W3D1-2",
      "name": "Martina",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W3D1-3",
      "name": "Martina",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W3D1-4",
      "name": "Martina",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W3D2-1",
      "name": "Martina",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W3D2-2",
      "name": "Martina",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W3D2-3",
      "name": "Martina",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W3D3-1",
      "name": "Martina",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W3D3-2",
      "name": "Martina",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W3D3-3",
      "name": "Martina",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W3D3-4",
      "name": "Martina",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W3D4-1",
      "name": "Martina",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W3D4-2",
      "name": "Martina",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W3D5 - Project - Todo-List",
      "name": "Martina",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W4D2-1",
      "name": "Martina",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W4D2-2",
      "name": "Martina",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W4D2-3",
      "name": "Martina",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W4D2-4",
      "name": "Martina",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W4D3-1",
      "name": "Martina",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W4D3-2",
      "name": "Martina",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W4D3-3",
      "name": "Martina",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W4D3-4",
      "name": "Martina",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W4D3-5",
      "name": "Martina",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W4D3 - Project - Next-Level CSS",
      "name": "Martina",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W5D4-1",
      "name": "Martina",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W5D5 - Project - Lil_Playlist",
      "name": "Martina",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W6D1-1",
      "name": "Martina",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W6D2-1",
      "name": "Martina",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W6D2 - Project - Eindopdracht",
      "name": "Martina",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "SCRUM",
      "name": "Maurits",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W1D1-1",
      "name": "Maurits",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W1D2-1",
      "name": "Maurits",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W1D2-2",
      "name": "Maurits",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W1D2-3",
      "name": "Maurits",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W1D2-4",
      "name": "Maurits",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W1D2-5",
      "name": "Maurits",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W1D3-1",
      "name": "Maurits",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W1D3-2",
      "name": "Maurits",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W1D3-4",
      "name": "Maurits",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W1D3-5",
      "name": "Maurits",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W1D3 - Project - Guess-the-number",
      "name": "Maurits",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W1D4-1",
      "name": "Maurits",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W1D4 - Project - Kleurentoggle",
      "name": "Maurits",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W1D5 - Project -Â Galgje",
      "name": "Maurits",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W2D1-1",
      "name": "Maurits",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W2D1-2",
      "name": "Maurits",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W2D2-1",
      "name": "Maurits",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W2D2-2",
      "name": "Maurits",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W2D2-3",
      "name": "Maurits",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W2D3-1",
      "name": "Maurits",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W2D3-2",
      "name": "Maurits",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W2D3-3",
      "name": "Maurits",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W2D4-1",
      "name": "Maurits",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W2D4-2",
      "name": "Maurits",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W2D4-3",
      "name": "Maurits",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W2D5 - Project - Filmzoeker",
      "name": "Maurits",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W3D1-1",
      "name": "Maurits",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W3D1-2",
      "name": "Maurits",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W3D1-3",
      "name": "Maurits",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W3D1-4",
      "name": "Maurits",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W3D2-1",
      "name": "Maurits",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W3D2-2",
      "name": "Maurits",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W3D2-3",
      "name": "Maurits",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W3D3-1",
      "name": "Maurits",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W3D3-2",
      "name": "Maurits",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W3D3-3",
      "name": "Maurits",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W3D3-4",
      "name": "Maurits",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W3D4-1",
      "name": "Maurits",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W3D4-2",
      "name": "Maurits",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W3D5 - Project - Todo-List",
      "name": "Maurits",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W4D2-1",
      "name": "Maurits",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W4D2-2",
      "name": "Maurits",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W4D2-3",
      "name": "Maurits",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W4D2-4",
      "name": "Maurits",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W4D3-1",
      "name": "Maurits",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W4D3-2",
      "name": "Maurits",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W4D3-3",
      "name": "Maurits",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W4D3-4",
      "name": "Maurits",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W4D3-5",
      "name": "Maurits",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W4D3 - Project - Next-Level CSS",
      "name": "Maurits",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W5D4-1",
      "name": "Maurits",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W5D5 - Project - Lil_Playlist",
      "name": "Maurits",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W6D1-1",
      "name": "Maurits",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W6D2-1",
      "name": "Maurits",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W6D2 - Project - Eindopdracht",
      "name": "Maurits",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "SCRUM",
      "name": "Rahima",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W1D1-1",
      "name": "Rahima",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W1D2-1",
      "name": "Rahima",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W1D2-2",
      "name": "Rahima",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W1D2-3",
      "name": "Rahima",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W1D2-4",
      "name": "Rahima",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W1D2-5",
      "name": "Rahima",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W1D3-1",
      "name": "Rahima",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W1D3-2",
      "name": "Rahima",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W1D3-4",
      "name": "Rahima",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W1D3-5",
      "name": "Rahima",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W1D3 - Project - Guess-the-number",
      "name": "Rahima",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W1D4-1",
      "name": "Rahima",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W1D4 - Project - Kleurentoggle",
      "name": "Rahima",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W1D5 - Project -Â Galgje",
      "name": "Rahima",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W2D1-1",
      "name": "Rahima",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W2D1-2",
      "name": "Rahima",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W2D2-1",
      "name": "Rahima",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W2D2-2",
      "name": "Rahima",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W2D2-3",
      "name": "Rahima",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W2D3-1",
      "name": "Rahima",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W2D3-2",
      "name": "Rahima",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W2D3-3",
      "name": "Rahima",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W2D4-1",
      "name": "Rahima",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W2D4-2",
      "name": "Rahima",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W2D4-3",
      "name": "Rahima",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W2D5 - Project - Filmzoeker",
      "name": "Rahima",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W3D1-1",
      "name": "Rahima",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W3D1-2",
      "name": "Rahima",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W3D1-3",
      "name": "Rahima",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W3D1-4",
      "name": "Rahima",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W3D2-1",
      "name": "Rahima",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W3D2-2",
      "name": "Rahima",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W3D2-3",
      "name": "Rahima",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W3D3-1",
      "name": "Rahima",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W3D3-2",
      "name": "Rahima",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W3D3-3",
      "name": "Rahima",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W3D3-4",
      "name": "Rahima",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W3D4-1",
      "name": "Rahima",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W3D4-2",
      "name": "Rahima",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W3D5 - Project - Todo-List",
      "name": "Rahima",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W4D2-1",
      "name": "Rahima",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W4D2-2",
      "name": "Rahima",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W4D2-3",
      "name": "Rahima",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W4D2-4",
      "name": "Rahima",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W4D3-1",
      "name": "Rahima",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W4D3-2",
      "name": "Rahima",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W4D3-3",
      "name": "Rahima",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W4D3-4",
      "name": "Rahima",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W4D3-5",
      "name": "Rahima",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W4D3 - Project - Next-Level CSS",
      "name": "Rahima",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W5D4-1",
      "name": "Rahima",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W5D5 - Project - Lil_Playlist",
      "name": "Rahima",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W6D1-1",
      "name": "Rahima",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W6D2-1",
      "name": "Rahima",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W6D2 - Project - Eindopdracht",
      "name": "Rahima",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "SCRUM",
      "name": "Sandra",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W1D1-1",
      "name": "Sandra",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W1D2-1",
      "name": "Sandra",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W1D2-2",
      "name": "Sandra",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W1D2-3",
      "name": "Sandra",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W1D2-4",
      "name": "Sandra",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W1D2-5",
      "name": "Sandra",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W1D3-1",
      "name": "Sandra",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W1D3-2",
      "name": "Sandra",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W1D3-4",
      "name": "Sandra",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W1D3-5",
      "name": "Sandra",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W1D3 - Project - Guess-the-number",
      "name": "Sandra",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W1D4-1",
      "name": "Sandra",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W1D4 - Project - Kleurentoggle",
      "name": "Sandra",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W1D5 - Project -Â Galgje",
      "name": "Sandra",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W2D1-1",
      "name": "Sandra",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W2D1-2",
      "name": "Sandra",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W2D2-1",
      "name": "Sandra",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W2D2-2",
      "name": "Sandra",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W2D2-3",
      "name": "Sandra",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W2D3-1",
      "name": "Sandra",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W2D3-2",
      "name": "Sandra",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W2D3-3",
      "name": "Sandra",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W2D4-1",
      "name": "Sandra",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W2D4-2",
      "name": "Sandra",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W2D4-3",
      "name": "Sandra",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W2D5 - Project - Filmzoeker",
      "name": "Sandra",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W3D1-1",
      "name": "Sandra",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W3D1-2",
      "name": "Sandra",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W3D1-3",
      "name": "Sandra",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W3D1-4",
      "name": "Sandra",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W3D2-1",
      "name": "Sandra",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W3D2-2",
      "name": "Sandra",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W3D2-3",
      "name": "Sandra",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W3D3-1",
      "name": "Sandra",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W3D3-2",
      "name": "Sandra",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W3D3-3",
      "name": "Sandra",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W3D3-4",
      "name": "Sandra",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W3D4-1",
      "name": "Sandra",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W3D4-2",
      "name": "Sandra",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W3D5 - Project - Todo-List",
      "name": "Sandra",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W4D2-1",
      "name": "Sandra",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W4D2-2",
      "name": "Sandra",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W4D2-3",
      "name": "Sandra",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W4D2-4",
      "name": "Sandra",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W4D3-1",
      "name": "Sandra",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W4D3-2",
      "name": "Sandra",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W4D3-3",
      "name": "Sandra",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W4D3-4",
      "name": "Sandra",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W4D3-5",
      "name": "Sandra",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W4D3 - Project - Next-Level CSS",
      "name": "Sandra",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W5D4-1",
      "name": "Sandra",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W5D5 - Project - Lil_Playlist",
      "name": "Sandra",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W6D1-1",
      "name": "Sandra",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W6D2-1",
      "name": "Sandra",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W6D2 - Project - Eindopdracht",
      "name": "Sandra",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "SCRUM",
      "name": "Wietske",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W1D1-1",
      "name": "Wietske",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W1D2-1",
      "name": "Wietske",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W1D2-2",
      "name": "Wietske",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W1D2-3",
      "name": "Wietske",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W1D2-4",
      "name": "Wietske",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W1D2-5",
      "name": "Wietske",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W1D3-1",
      "name": "Wietske",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W1D3-2",
      "name": "Wietske",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W1D3-4",
      "name": "Wietske",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W1D3-5",
      "name": "Wietske",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W1D3 - Project - Guess-the-number",
      "name": "Wietske",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W1D4-1",
      "name": "Wietske",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W1D4 - Project - Kleurentoggle",
      "name": "Wietske",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W1D5 - Project -Â Galgje",
      "name": "Wietske",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W2D1-1",
      "name": "Wietske",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W2D1-2",
      "name": "Wietske",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W2D2-1",
      "name": "Wietske",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W2D2-2",
      "name": "Wietske",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W2D2-3",
      "name": "Wietske",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W2D3-1",
      "name": "Wietske",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W2D3-2",
      "name": "Wietske",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W2D3-3",
      "name": "Wietske",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W2D4-1",
      "name": "Wietske",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W2D4-2",
      "name": "Wietske",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W2D4-3",
      "name": "Wietske",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W2D5 - Project - Filmzoeker",
      "name": "Wietske",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W3D1-1",
      "name": "Wietske",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W3D1-2",
      "name": "Wietske",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W3D1-3",
      "name": "Wietske",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W3D1-4",
      "name": "Wietske",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W3D2-1",
      "name": "Wietske",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W3D2-2",
      "name": "Wietske",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W3D2-3",
      "name": "Wietske",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W3D3-1",
      "name": "Wietske",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W3D3-2",
      "name": "Wietske",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W3D3-3",
      "name": "Wietske",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W3D3-4",
      "name": "Wietske",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W3D4-1",
      "name": "Wietske",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W3D4-2",
      "name": "Wietske",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W3D5 - Project - Todo-List",
      "name": "Wietske",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W4D2-1",
      "name": "Wietske",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W4D2-2",
      "name": "Wietske",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W4D2-3",
      "name": "Wietske",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W4D2-4",
      "name": "Wietske",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W4D3-1",
      "name": "Wietske",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W4D3-2",
      "name": "Wietske",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W4D3-3",
      "name": "Wietske",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W4D3-4",
      "name": "Wietske",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W4D3-5",
      "name": "Wietske",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W4D3 - Project - Next-Level CSS",
      "name": "Wietske",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W5D4-1",
      "name": "Wietske",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W5D5 - Project - Lil_Playlist",
      "name": "Wietske",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W6D1-1",
      "name": "Wietske",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W6D2-1",
      "name": "Wietske",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W6D2 - Project - Eindopdracht",
      "name": "Wietske",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "SCRUM",
      "name": "Storm",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W1D1-1",
      "name": "Storm",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W1D2-1",
      "name": "Storm",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W1D2-2",
      "name": "Storm",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W1D2-3",
      "name": "Storm",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W1D2-4",
      "name": "Storm",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W1D2-5",
      "name": "Storm",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W1D3-1",
      "name": "Storm",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W1D3-2",
      "name": "Storm",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W1D3-4",
      "name": "Storm",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W1D3-5",
      "name": "Storm",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W1D3 - Project - Guess-the-number",
      "name": "Storm",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W1D4-1",
      "name": "Storm",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W1D4 - Project - Kleurentoggle",
      "name": "Storm",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W1D5 - Project -Â Galgje",
      "name": "Storm",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W2D1-1",
      "name": "Storm",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W2D1-2",
      "name": "Storm",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W2D2-1",
      "name": "Storm",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W2D2-2",
      "name": "Storm",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W2D2-3",
      "name": "Storm",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W2D3-1",
      "name": "Storm",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W2D3-2",
      "name": "Storm",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W2D3-3",
      "name": "Storm",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W2D4-1",
      "name": "Storm",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W2D4-2",
      "name": "Storm",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W2D4-3",
      "name": "Storm",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W2D5 - Project - Filmzoeker",
      "name": "Storm",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W3D1-1",
      "name": "Storm",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W3D1-2",
      "name": "Storm",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W3D1-3",
      "name": "Storm",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W3D1-4",
      "name": "Storm",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W3D2-1",
      "name": "Storm",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W3D2-2",
      "name": "Storm",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W3D2-3",
      "name": "Storm",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W3D3-1",
      "name": "Storm",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W3D3-2",
      "name": "Storm",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W3D3-3",
      "name": "Storm",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W3D3-4",
      "name": "Storm",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W3D4-1",
      "name": "Storm",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W3D4-2",
      "name": "Storm",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W3D5 - Project - Todo-List",
      "name": "Storm",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W4D2-1",
      "name": "Storm",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W4D2-2",
      "name": "Storm",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W4D2-3",
      "name": "Storm",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W4D2-4",
      "name": "Storm",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W4D3-1",
      "name": "Storm",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W4D3-2",
      "name": "Storm",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W4D3-3",
      "name": "Storm",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W4D3-4",
      "name": "Storm",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W4D3-5",
      "name": "Storm",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 3
    },
    {
      "exercise": "W4D3 - Project - Next-Level CSS",
      "name": "Storm",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W5D4-1",
      "name": "Storm",
      "ratingDifficulty": 2,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W5D5 - Project - Lil_Playlist",
      "name": "Storm",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 2
    },
    {
      "exercise": "W6D1-1",
      "name": "Storm",
      "ratingDifficulty": 4,
      "ratingEnjoyment": 4
    },
    {
      "exercise": "W6D2-1",
      "name": "Storm",
      "ratingDifficulty": 1,
      "ratingEnjoyment": 1
    },
    {
      "exercise": "W6D2 - Project - Eindopdracht",
      "name": "Storm",
      "ratingDifficulty": 3,
      "ratingEnjoyment": 3
    }
  ]
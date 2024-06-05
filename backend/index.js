// const express = require("express");
// const cors = require("cors");

// const app = express();
// app.use(express.json());
// app.use(cors({ origin: true }));

// app.post("/authenticate", async (req, res) => {
//     const { username } = req.body;
//     try {
//         const r = await axios.put(
//             "https://api.chatengine.io/users/",
//             { username: username, secret: username, first_name: username },
//             { headers: { "private-key": "6ab25b2f-38b5-4ddc-ab2e-c95bac9a03a6" } }
//         );
//         return res.status(r.status).json(r.data);
//     } catch (e) {
//         return res.status(e.response.status).json(e.response.data);
//     }
// });

// app.listen(3001);



const express = require("express");
const cors = require("cors");
const axios = require("axios");  // Ensure axios is imported

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;

    try {
        const r = await axios.put(
            "https://api.chatengine.io/users/",
            { username: username, secret: username, first_name: username },
            { headers: { "private-key": "a21c51f3-060d-4ea6-9f6d-da05091ac98f" } }
        )
        return res.status(r.status).json(r.data)
    } catch (e) {
        return res.status(e.response.status).json(e.response.data)
    }
});

app.listen(3001);

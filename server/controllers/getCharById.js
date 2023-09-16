const { default: axios } = require("axios");

async function getCharById(req, res) {


    try {
        const { id } = req.params
        const { data } = await axios(`https://rickandmortyapi.com/api/character/${id}`)
        console.log("hola");
        // const { name, gender, species, origin = origin.name, image, status } = data
        // const character = { id, name, gender, species, origin, image, status }
        const { name, gender, species, origin: { name: originName }, image, status } = data;
        const character = { id, name, gender, species, origin: originName, image, status }; 
        res.json(character)


    } catch (error) {
        res.status(404).json({ error: "Character not found" })
    }
}

module.exports = getCharById
const shortid = require("shortid");
const URL = require("../models/url");

async function handleGenerateNewURL(req, res) {
    const body = req.body;
    if(!body.url) return res.status(400).json({error: 'url is required'});
    const shortId = shortid();
    await URL.create({
        shortId: shortId,
        redirectURL: body.url,
        visitHistry: [],
    });
    res.json({id: shortId});
}

 


module.exports = {
    handleGenerateNewURL,
}

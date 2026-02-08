const { Statuscodes } = require("http-status-codes");
function pingProblemController(req, res) {
    return res.json({ message: "problem controller is alive" });
}

function getProblems(req, res) {
    return res.status(Statuscodes.NOT_IMPLEMENTED).json({ message: "Not implemented" });
}

function getProblem(req, res) {
    return res.status(Statuscodes.NOT_IMPLEMENTED).json({ message: "Not implemented" });
}

function addProblem(req, res) {
    return res.status(Statuscodes.NOT_IMPLEMENTED).json({ message: "Not implemented" });
}

function deleteProblem(req, res) {
    return res.status(Statuscodes.NOT_IMPLEMENTED).json({ message: "Not implemented" });
}

function updateProblem(req, res) {
    return res.status(Statuscodes.NOT_IMPLEMENTED).json({ message: "Not implemented" });
}

module.exports = {
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
    pingProblemController
};

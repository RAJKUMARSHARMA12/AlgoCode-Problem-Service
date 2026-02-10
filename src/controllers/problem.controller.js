const { StatusCodes } = require("http-status-codes");
const NotImplemented = require("../errors/notimplemented.error");
function pingProblemController(req, res) {
    return res.json({ message: "problem controller is alive" });
}

function getProblems(req, res) {
    return res.status(Statuscodes.NOT_IMPLEMENTED).json({ message: "Not implemented" });
}

function getProblem(req, res) {
    return res.status(Statuscodes.NOT_IMPLEMENTED).json({ message: "Not implemented" });
}

function addProblem(req, res, next) {
    try {
        //nothing is implemented yet
        throw new NotImplemented("addProblem");
    } catch (error) {
        next(error);
    }
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

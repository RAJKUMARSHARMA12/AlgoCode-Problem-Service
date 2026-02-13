const { StatusCodes } = require("http-status-codes");
const NotImplemented = require("../errors/notimplemented.error");
function pingProblemController(req, res) {
    return res.json({ message: "problem controller is alive" });
}

function getProblems(req, res, next) {
    try {
        //nothing is implemented yet
        throw new NotImplemented("addProblem");
    } catch (error) {
        next(error);
    }
}

function getProblem(req, res, next) {
    try {
        //nothing is implemented yet
        throw new NotImplemented("addProblem");
    } catch (error) {
        next(error);
    }
}

function addProblem(req, res, next) {
    try {
        //nothing is implemented yet
        throw new NotImplemented("addProblem");
    } catch (error) {
        next(error);
    }
}

function deleteProblem(req, res, next) {
    try {
        //nothing is implemented yet
        throw new NotImplemented("addProblem");
    } catch (error) {
        next(error);
    }
}

function updateProblem(req, res, next) {
    try {
        //nothing is implemented yet
        throw new NotImplemented("addProblem");
    } catch (error) {
        next(error);
    }
}

module.exports = {
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
    pingProblemController
};

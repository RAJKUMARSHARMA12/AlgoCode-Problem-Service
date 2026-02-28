const NotImplemented = require("../errors/notImplemented.error");
const { ProblemService } = require("../services");
const { ProblemRepository } = require("../repositories");
const { StatusCodes } = require("http-status-codes");

const problemService = new ProblemService(new ProblemRepository());


function pingProblemController(req, res) {
    return res.json({ message: "problem controller is alive" });
}

async function getProblems(req, res, next) {
    try {
        const response = await problemService.getAllProblems();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Problems fetched successfully",
            error: {},
            data: response,
        });
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

async function addProblem(req, res, next) {
    try {
        const problem = await problemService.createProblem(req.body);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "Problem created successfully",
            error: {},
            data: problem,
        });

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

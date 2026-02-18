const sanitize = require("sanitize-html");
const sanitizeMarkdownContent = require("../utils/markdownSanitizer");

class ProblemService {
    constructor(problemRepository) {
        this.problemRepository = problemRepository;
    }

    async createProblem(problemData) {
        try {
            // 1.Sanitize the markdown fro description
            problemData.description = sanitizeMarkdownContent(problemData.description);

            console.log("Sanitized Problem Data:", problemData);
            // 2. Create the problem using the repository
            const problem = await this.problemRepository.createProblem(problemData);
            console.log("Created Problem:", problem);
            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}
module.exports = ProblemService;
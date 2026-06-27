const asyncHandler = require("../utils/asyncHandler");
const Resume = require("../models/Resume");
const ApiError = require("../utils/ApiError");



const {
    analyzeResumeService,
} = require("../services/analysisService");

const analyzeResume = asyncHandler(async (req, res) => {


  if (!req.file) {
        return res.status(400).json({
            success: false,
            message: "Resume PDF is required",
        });
    }

    const result = await analyzeResumeService(
        req.user._id,
        req.file,
        req.body.jobDescription || ""
    );

  res.status(200).json({

    success:true,

    resumeId:result._id,

    uploadedFile:
        result.originalFileName,

    createdAt:
        result.createdAt,

    analysis:
        result.analysis

});

});



const getResumeHistory =
            asyncHandler(async(req,res)=>{

            const resumes=
            await Resume.find({

            user:req.user._id

            })

            .sort({

            createdAt:-1

            });

            res.json({

            success:true,

            history:resumes

            });

            });

const getResumeById = asyncHandler(async (req, res) => {

    const resume = await Resume.findOne({

        _id: req.params.id,

        user: req.user._id,

    });

    if (!resume) {

        throw new ApiError(

            404,

            "Resume not found"

        );

    }

    res.json({

        success: true,

        resume,

    });

});


const deleteResume = asyncHandler(async (req, res) => {

    const resume = await Resume.findOne({

        _id: req.params.id,

        user: req.user._id,

    });

    if (!resume) {

        throw new ApiError(

            404,

            "Resume not found"

        );

    }

    await Resume.findByIdAndDelete(

        req.params.id

    );

    res.json({

        success: true,

        message: "Resume deleted successfully",

    });

});


module.exports = {

    analyzeResume,

    getResumeHistory,

    getResumeById,

    deleteResume,

};
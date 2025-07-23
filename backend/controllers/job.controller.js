import { Job } from "../models/job.model.js";

export const postJob = async (req,res)=>{
    try {
        const{title,description,requirements,location,jobType,salary,experience,position,companyId}=req.body;
        const userId=req.id;

        if(!title || !description || !requirements||  !location || !jobType || !salary || !experience || !position || !companyId){
            return res.status(400).json({
                message:"Fill all the required fields",
                success:false
            })
        }

        const job=await Job.create({
            title,
            requirements:requirements.split(","),
            description,
            location,
            jobType,
            salary,
            experienceLevel:experience,
            position,
            company:companyId,
            created_by:userId

        })

        return res.status(201).json({
            message:"New Job created",
            job,
            success:true
        })
    } catch (error) {
        console.log(error);
    }

}

export const getAllJobs=async(req,res)=>{
    try {
        const keyword=req.query.keyword || " ";

        const query = {
            $or:[
                {title:{$regex:keyword, $options:"i"}},
                {description:{$regex:keyword, $options:"i"}}
            ]
        }

        const jobs=await Job.find(query).populate({
            path:"company"
        }).sort({createdAt:-1});
        if(!jobs){
            return res.status(404).json({
                message:"Jobs not found",
                success:false
            })
        }

        return res.status(200).json({
            jobs,
            success:true
        })
    } catch (error) {
        console.log(error);
    }
}

export const getJobById=async (req,res)=>{
    try {

        const jobId= req.params.id;

        const job= await Job.findById(jobId).populate({
            path:"applications"
        });

        if(!job){
            return res.status(404).json({
                message:"no Jobs found",
                success:false
            })
        }

        return res.status(200).json({
            job,
            success:true

        })

        
    } catch (error) {
        console.log(error);
    }
}


export const getAdminJobs= async(req,res)=>{
    try {
        const adminId=req.id;
        const jobs =await Job.find({created_by:adminId}).populate({
            path:'company',
            createdAt:'-1'
        });

        if(!jobs){
            return res.status(404).json({
                message:"no Jobs found",
                success:false
            })
        }

        return res.status(200).json({
            jobs,
            success:true

        })

    } catch (error) {
        console.log(error);
    }
}
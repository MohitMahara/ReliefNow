import userModel from "../Models/userModel.js";
import volunteerApplicationModel from "../Models/volunteerApplicationModel.js";

export const getStatusController = async(req, res, next) => {
    try {
        const {uid} = req.params;

        const user = await userModel.findById(uid);

        if(!user){
            return res.status(400).send({
                msg : "user not found",
                success : false
            })
        }

        const applicationStatus = await volunteerApplicationModel.findOne({userId : uid});

        let status= false;

        if(applicationStatus){
          status = true;
        }
   
        return res.status(200).send({
            msg : "user status",
            success : true,
            status
        })
        
    } catch (error) {
        next(error);
    }
}
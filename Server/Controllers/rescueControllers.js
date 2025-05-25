import rescueReqModel from "../Models/rescueReqModel.js";


export const rescueReqController = async(req, res, next) => {
    try {
      const { fullname, phone, emergencyLevel, disasterType, description, location } = req.body;

      if(!fullname || !phone || !emergencyLevel || !disasterType || !location){
        return res.status(400).send({
            success : false,
            msg  : "All fields are required"
        })
      }

     const newReq = rescueReqModel({
        fullName : fullname,
        phone,
        emergencyLvl : emergencyLevel,
        disasterType,
        description,
        location
     });
     
     await newReq.save();

     res.status(200).send({
        success :true,
        msg : "Rescue request submitted successfully",
        newReq
     })

    } catch (error) {
        next(error);
    }
}
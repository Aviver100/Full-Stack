import MemberModel from "../models/MemberSchema.js";

export async function insertMember(req, res) {
    const {
        name,
        email,
        phone,
        // address,
        admin,
    } = req.body;
    try {

        const newMember = new MemberModel({
            name,
            email,
            phone,
            // address,
            admin,
        })
        await newMember.save();
        res.json(newMember);
    } catch (error) {
        res.status(500).json({
            message: "Error inserting member",
            error: error.message
        })
    }
}

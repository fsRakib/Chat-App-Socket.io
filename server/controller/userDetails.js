const { get } = require("mongoose")
const getUserDetailsFromToken = require("../helpers/getUserDetailsFromToken")

async function userDetails(req, res) {
    try {
       const token = req.cookies.token || ""
      //    const { token } = req.body;
        const user = await getUserDetailsFromToken(token)
        return res.status(200).json({
            message: "User Details",
            data: user
        })

    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true
        })
    }
}
module.exports = userDetails;
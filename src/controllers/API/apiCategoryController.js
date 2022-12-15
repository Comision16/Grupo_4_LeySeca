const db = require("../../database/models");
module.exports = {
  list: async (req, res) => {
    try {
        let total = await db.Category.count()
        //let categories = await db.Category.findAll();

      return res.status(200).json({
        ok: true,
        data : {
          total,
        }
        

      });
    } catch (error) {
      return res.status(error.status || 500).json({
        ok: false,
        msg: error.message || "Comunicate con el administrador",
      });
    }
  },
};
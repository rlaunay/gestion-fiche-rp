module.exports = class FichesController {

    getAllFiches(req, res) {
        console.log(req);
        res
            .status(200)
            .json({
                status: 'success',
                data: 'Ca marche'
            })
    }

    getFiche(req, res) {
        console.log(req);
        res
            .status(200)
            .json({
                      status: 'success',
                      data: 'Ca marche'
            })
    }

    createFiche(req, res) {
        console.log(req);
        res
            .status(200)
            .json({
                success: 'success'
            })
    }

    updateFiche(req, res) {
        console.log(req);
        res
            .status(200)
            .json({
                success: 'success'
            })
    }

    deleteFiche(req, res) {
        console.log(req);
        res
            .status(200)
            .json({
                success: 'success'
            })
    }
};

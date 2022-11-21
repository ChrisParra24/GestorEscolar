exports.check = (res,rowCount, data) => {
    if (rowCount < 1) {
        res.status(404).json({
            message : "Nonexistent object!" 
        });
    }

    res.status(200).json({
        message : "success!",
        data : data
    });
};
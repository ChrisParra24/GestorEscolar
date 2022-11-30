exports.check = (res,rowCount, data) => {
    if (rowCount < 1) {
        res.status(404).json({
            message : "[!] No records found" 
        });
    } else {
        res.status(200).json({
            message : "[i] success!",
            data : data
        });
    }
};
const asyncHandler = (handleFunction) => {
    
    async(req, res, next) => {
        try {
            await handleFunction(req, res, next)
        } catch (error) {
            res.status(error.code || 500).json({
                success: false,
                message: error.message
            })
        }
    }



}

export { asyncHandler }
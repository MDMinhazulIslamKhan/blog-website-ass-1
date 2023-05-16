const auth = async (req, res, next) => {
    try {
        // if we need something, it will be written here




        next()
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

export default auth;
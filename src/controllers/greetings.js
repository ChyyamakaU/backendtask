const morning = (req, res) => {
    res.status(200).json({
        "status": "sucess",
        "message": "Hello, good morning"
    });
};

const afternon = (req, res) => {
    res.status(200).json({
        "status": "sucess",
        "message": "Hi there, good Afternoon"
    });
};

const evening = (req, res) => {
    res.status(200).json({
        "status": "sucess",
        "message": "hello and Good evening"
    });
};

// eslint-disable-next-line no-undef
module.exports = { morning, afternon, evening }
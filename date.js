module.exports.getDay = getDay;
module.exports.getDate = getDate;

function getDay() {
    const today = new Date();

    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long'
    };

    return today.toLocaleDateString("en-US", options);
}


function getDate() {
    const today = new Date();

    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long'
    };

    return today.toLocaleDateString("en-US", options);
}


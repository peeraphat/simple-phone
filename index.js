module.exports = (string) => {
    let phone = string.replace(/-|\+/g, '')

    if (/^66/.test(phone)) {
        return phone.replace(/66/, '0')
    } else {
        if (!/^0/.test(phone)) {
            return '0'+phone
        } else {
            return phone
        }
    }
}
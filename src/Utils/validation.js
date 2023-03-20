import patterns from './patterns'

export const formValidate = (value) => {
    console.log('values', value)
    let error = {}

    if (!value.name || !value.name.trim()) {
        error.name = 'Please enter name'
    } else if (value.name.length > 15) {
        error.name = "Name should be 15 max"
    } else if (!patterns.alpha_spaces_no_white.test(value.name)) {
        error.name = "Please enter only alphabets"
    }

    if (!value.email || !value.email.trim()) {
        error.email = "Please enter email";
    } else if (
        value.email &&
        !/^[^\W_](?:[\w.-]*[^\W_])?@(?:\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.|(?:[\w-]+\.)+)(?:[a-zA-Z]{2,3}|[0-9]{1,3})\]?$/i.test(
            value.email
        )
    ) {
        error.email = "Please enter valid email";
    }

    if (!value.password || !value.password.trim()) {
        error.password = 'Please enter password'
    } else if (value.password && !/^[^\s]+(\s+[^\s]+)*$/.test(value.password)) {
        error.password = "Password must not contain while spaces"
    } else if(!patterns.strong_password.test(value.password)){
        error.password = "Please enter strong password"
    }

    if (!value.address || !value.address.trim()) {
        error.address = 'Please enter address'
    } else if (value.address.length > 500) {
        error.address = "address should be 500 max"
    } 

    return error;
}
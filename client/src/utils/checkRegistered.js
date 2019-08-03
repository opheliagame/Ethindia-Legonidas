const checkRegistered = () => {
    const localStorage = window.localStorage;
    if (localStorage.getItem('isRegistered'))   return true;
    return false;
}

export default checkRegistered;
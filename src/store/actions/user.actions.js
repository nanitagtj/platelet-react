export const SET_USUARIO= "[USUARIO] SET USUARIO";
export const set_usuario = (nombres, mail) => ({
    type: SET_USUARIO,
    payload: {nombres, mail}
});

export const SET_MAIL= "[USUARIO] SET MAIL";
export const set_mail = (mail) => ({
    type: SET_MAIL,
    payload: mail
});

export const SET_TOKEN= "[USUARIO] SET TOKEN";
export const set_token = (token) => ({
    type: SET_TOKEN,
    payload: token
});

export const REMOVE_USUARIO= "[USUARIO] REMOVE USUARIO";
export const remove_usuario = () => ({
    type: REMOVE_USUARIO,
});
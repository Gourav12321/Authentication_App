export const errorHandleer = (statusCode , message) =>{
    const error = new Error(message);
    error.message = message;
    return error;
};
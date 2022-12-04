export const passwordValidation = (props) => {
    if(props.length < 4){
        return {
            massage :" password too short",
            result : false
        }
    }
    return {
        massage : 'success',
        result : true
    }
}

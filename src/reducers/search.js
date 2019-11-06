
export const searchDataReducer = (state={},action)=>{
    switch(action.type){
        case "SEARCH_DATA":
            return {
                ...state,
                data:action.data
            }
         default :
            return state   
    }
}


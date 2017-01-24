
export const actionCreator = (type, ...argNames) => {
    return (...args) => {
        let action = {type};
        argNames.forEach((arg, index) => {
            action[argNames[index]] = args[index];
        });
        return action;
    }
}

/** 
export function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    let error = new Error(response.statusText);
    error.response = response;
    throw error
  }
}


actionCreator(type,argNames)(argNames)

高阶函数链式传递方法，比如 
this.props.dispatch = (fuctionOut) => {
    var functionInner =  functionOut();// 传递dipatch
    functionInner(dispatch);
}
fuctionOut = () =>{
    return (dispatch) => {
        .....
    }
}

*/
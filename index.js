const receivesAFunction = (callback) => {
    callback();
}

const namedFunction = ( ) => {
    console.log("The named function");
}
const returnsANamedFunction = () => {
    return namedFunction;
}

const returnsAnAnonymousFunction = () => {
    return(function() { console.log("The anonymous function") })
}
import React from 'react'

//this method is used to create a context that can pass the value of a prop down the components tree without including this value in each component,there are 3 steps involved in doing this:-
// 1) Create a context 
// 2) Provide the Context(in main app.js component)
// 3) Consume the context(in the component upto which the value has to be passed,here Greet3.js)

const UserContext = React.createContext()//this provides a default value to the context which is used when Provider is not present in the main(app.js) component.
 
const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvider,UserConsumer}
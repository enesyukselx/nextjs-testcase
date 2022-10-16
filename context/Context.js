import React from "react";

const Context = React.createContext({
    actions: [],
    isLoggedIn: false,
    setIsLoggedIn: () => {},
    completedActions: [],
    points: 0,
    addAction: (action) => {},
});

export default Context;

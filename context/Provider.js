import { useState, useEffect } from "react";

import Context from "./Context";

const Provider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [actions, setActions] = useState([]);
    const [completedActions, setCompletedAction] = useState([]);
    const [points, setPoints] = useState(0);

    const addAction = (action) => {
        setCompletedAction((prevState) => {
            return [...prevState, action];
        });
    };

    const totalPoint = completedActions.reduce((acc, cur) => {
        return acc + cur.point;
    }, 0);

    useEffect(() => {
        setPoints(totalPoint);
    }, [completedActions, totalPoint]);

    const contextValue = {
        actions,
        setActions,
        isLoggedIn: isLoggedIn,
        setIsLoggedIn: setIsLoggedIn,
        completedActions: completedActions,
        addAction: addAction,
        points: points,
    };

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
};

export default Provider;

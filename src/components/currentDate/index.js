import React from "react";
import { MonthLIst, DayLIst } from "./../../utils/currentDate";
const CurrentDate = () => {
    const date = new Date();
    
    return (
        <div className="contentCurrentDate">
            <span className="weekDay">{DayLIst[date.getDay()]}</span>
            <span className="day">{date.getDate()}</span>
            <span className="month">{MonthLIst[date.getMonth()]}</span>
        </div>
    )
}
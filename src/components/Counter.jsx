import { useState } from "react"
export const Counter = (props) => {


    return <>

        counter : <span> {props.time.h > 0 ? props.time.h : "0" + props.time.h}H </span>
        <span>{props.time.m > 0 ? props.time.m : "0" + props.time.m}M </span> <span> {props.time.s > 0 ? props.time.s : "0" + props.time.s}S </span>
        <span>{props.time.ms > 0 ? props.time.ms : "0" + props.time.ms}Ms </span>
    </>
}
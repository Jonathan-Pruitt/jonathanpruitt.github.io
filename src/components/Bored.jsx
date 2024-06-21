import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import frame1 from "../images/Before_Jonathan.png";
import frame2 from "../images/Suggest_Jonathan.png";
import frame3 from "../images/After_Jonathan.png";


function Bored() {
    
    const[activity, setActivity] = React.useState("")

    function handlePicClick() {
        console.log("Clicked")
        const rando = [
            "scrub my kitchen floor", 
            "go hide a buried treasure", 
            "play hide and seek", 
            "learn origami", 
            "knit a washcloth", 
            "adopt a cat", 
            "dye my hair turquoise", 
            "plant a tree", 
            "play chess with a stranger", 
            "go for a run", 
            "learn how to code", 
            "feed the local fish", 
            "help my bestie bury a body", 
            "learn to whistle dixie", 
            "join a revolution", 
            "volunteer at a local charity", 
            "tell my spouse I love them", 
            "seek out the lost city of Atlantis", 
            "fight Bigfoot", 
            "play with my neighbor's dog", 
            "find the resting place of Yamashita's gold",
            "reupholster my favorite chair",
            "start a new political party",
            "consider the meaning of life",
            "count backwards from one million",
            "teach my cat to fetch",
            "memorize pi to the 50th digit",
            "drink a liter of sprite, then quickly eat a banana",
            "stuff doughnut holes into the center of doughnuts",
            "attempt to untie a Gordian Knot",
            "try to solve the three body problem",
            "start a family tree",
            "ding-dong-ditch my neighbors",
            "tell you a joke",
            "spend quality time with a loved one",
            "participate in a local social group",
            "learn how to code",
            "go to a drag-race",
            "play Catan",
            "order a pizza",
            "adopt a tiger",
            "watch a trending TikTok",
            "go bowling",
            "parachute out of an airplane"
        ]
        const i =  Math.floor(Math.random() * rando.length)
    
        setActivity(() => ({activity : rando[i]}))
    }//end method
    
    return (
        <div id="misc" className="">                 
            <h2 className="offset-1">A Premonition of Your Next Few Moments</h2>
            <div className="row justify-content-center">
                <div className="col-10">
                    <ImageText activitySetter={setActivity} backupSetter={handlePicClick}/>
                    <ImageItem activityText={activity} picClick={handlePicClick}/>
                </div>
            </div>
        </div>
    )
}//end method

function ImageText(props) {
    
    
    if (props.activity != null) {
        console.log(props.activity)
    }//end if
    
    
    
    function getActivity() {   

            fetch(`http://www.boredapi.com/api/activity/`)
            .then(res => res.json())
            .then(data => props.activitySetter(data))          
            .catch(() => {props.backupSetter()})           
    }//end method
    
    
    React.useEffect(
        getActivity,
        []        
    )   
    
    return (
        <div className="">
            {props != null && <h3>{props.activity}</h3>}
        </div>
    )
}//end method

function ImageItem(props) {
    console.log(props)

    const responses = [
        "Great idea!",
        "Excellent idea!", 
        "I'll do that now!", 
        "Heck yes!", 
        "AS YOU WISH!"
    ]

    const id = Math.floor(Math.random() * responses.length)

    let activity = ""
    if (props.activityText != "") {
        activity = props.activityText.activity
        //activity = activity.toLowerCase()
        activity = upcaseFirstChar(activity)
        activity = `I'm bored, should I ${activity}?`
    }//end if
    
    return(
        <div className="row justify-content-center">
            <div className="image-container col-12">
                <img className="bordered" src={frame1} alt="Test1" />
                {props.activityText != "" && <h6 className="overlay-text clickable" onClick={props.picClick}>{activity}</h6>}
            </div>
            <div className="image-container col-12">
                <img className="bordered" src={frame2} alt="Test2" />
                <h6 className="overlay-text">No! You should hire Jonathan Pruitt!</h6>
            </div>
            <div className="image-container col-12">
                <img className="bordered" src={frame3} alt="Test3" />
                <h6 className="overlay-text">{responses[id]}</h6>
                
            </div>
        </div>
    )

}//end method

function upcaseFirstChar(text) {
    let firstChar = text[0]
    firstChar = firstChar.toLowerCase()
    return (firstChar + text.slice(1));
}//end method



export default Bored;
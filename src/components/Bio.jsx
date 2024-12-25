function Bio() {

    const CURRENT_HOME = 'San Antonio, TX'
    
    let myInfoPre = `Before I reached the age where I began forming memories, I have always been in love with puzzles. As a toddler, I would ask my parents to buy me the books of mazes so I could solve them. When I got a little older, I became enamored with RPGs (like Legend of Dragoon, Ocarina of Time, and Final Fantasy X). I loved the stories and characters, but I especially loved the satisfaction of problem solving and strategizing.\nIn school, I loved mathematics because I would regularly learn new formulas, then I would be set loose to discover how to solve problems using that formula as a tool. As an adult, I will often cozy up on the couch with a coffee, and break out an advanced sudoku puzzle like the one `
    let sudokuLink = "https://sudokupad.app/qy2dyyfrcg"
    let myInfoPost = `In early 2023, I discovered Mississippi Coding Academies (MCA) -- a not-for-profit organization that teaches coding to Mississippians near where I was living in Biloxi, MS -- where I was able to learn the fundamentals of Full Stack developing. Ever since then, I have been having a fantastic time learning new tools and using them to solve more and more advanced problems. I also began working with the MCA as an assistant instructor. It was the most rewarding experience to have a hand in bettering the lives of people from a state which struggles with its education system. I primarily taught C# (C Sharp), and instilled those same fundamentals that I was taught by the program when I was a member of the learning group. Since then, I have moved to ${CURRENT_HOME} where I have been continuing to develop and grow.`
    
    return(
        <div id="bio" className="">
            <h2 className="offset-1">About Me</h2>
            <div className="row justify-content-center">
                <p className="col-10 ltrsp-sm">{myInfoPre}<a target="_blank" href={sudokuLink}>here</a>.<br/><br/>{myInfoPost}</p>             
            </div>
        </div>
    )
}//end method

export default Bio;
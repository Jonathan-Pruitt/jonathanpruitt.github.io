function Bio() {

    let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    let myInfoPre = `Before I reached the age where I began forming memories, I have always been in love with puzzles. As a toddler, I would ask my parents to buy me the books of mazes so I could solve them. When I got a little older, I became enamored with RPGs (like Legend of Dragoon, Ocarina of Time, and Final Fantasy X). I loved the story and characters, but I especially loved the satisfaction of problem solving.\nIn school, I loved Math class because I would learn a new mathematical formula or tool, then I would be set loose learning how to solve problems using that tool. As an adult, I will often cozy up on the couch with a coffee, and break out an advanced sudoku puzzle like the one `
    let sudokuLink = "https://sudokupad.app/qy2dyyfrcg"
    let myInfoPost = `About a year and a half ago, I found a coding academy near me where I was able to learn the fundamentals. Ever since then, I have been having a fantastic time learning about new tools and using them to solve more and more advanced problems. I also began working with the Mississippi Coding Academy (MCA) --a nonprofit that educates citizens of Mississippi in how to code-- as an assistant instructor. It has been greatly rewarding to help better the lives of people from a state which struggles with its education system. I have primarily been teaching C# (C Sharp), and instilling those same fundamentals that I was taught by the program a year ago.`
    
    return(
        <div id="bio" className="">
            <h2 className="offset-1">About Me</h2>
            <div className="row justify-content-center">
                {/* <p className="col-10 ltrsp-sm">{lorem}</p>              */}
                <p className="col-10 ltrsp-sm">{myInfoPre}<a target="_blank" href={sudokuLink}>here</a>.<br/><br/>{myInfoPost}</p>             
            </div>
        </div>
    )
}//end method

export default Bio;
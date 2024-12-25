function Knowledge() {
    
const SECURITY_PLUS_LINK = "https://www.credly.com/badges/b37cea9a-b977-4d8f-89b5-edf77da96f72/public_url"

    return(
        <>
            <h2 id="experience" className="offset-1">Knowledge</h2>
            <h4 className="offset-1">Languages</h4>
            <div className="row justify-content-center buff-tb">

                <ul className="list-group col-10 pop">
                    <li className="list-group-item">
                        <h5>C# (C Sharp)</h5>
                    </li>
                    <li className="list-group-item">
                        <h5>JS (JavaScript)</h5>
                    </li>
                    <li className="list-group-item">
                        <h5>React.JS (JS Framework)</h5>
                    </li>
                    <li className="list-group-item">
                        <h5>Express.JS (JS Framework)</h5>
                    </li>
                    <li className="list-group-item">
                        <h5>HTML/CSS</h5>
                    </li>
                    <li className="list-group-item">
                        <h5><strong>Limited Knowledge</strong></h5>
                        <h5>&emsp;Python</h5>
                        <h5>&emsp;Ruby</h5>
                        <h5>&emsp;Java</h5>
                        <h5>&emsp;SQL</h5>
                    </li>
                    <li className="list-group-item">
                        <h5><strong>Miscellaneous</strong></h5>
                        <h5>&emsp;GML - GameMakerLanguage</h5>
                        <h5>&emsp;Godot Script (Game Making Software Language)</h5>
                    </li>
                </ul>
            </div>
            <h4 className="offset-1">Experience</h4>
            <div className="row justify-content-center buff-tb">
                <ul className="list-group col-10 pop">
                    <li className="list-group-item">
                        <h5 className="row">
                            <strong className="col-6">Freelance Developer</strong>
                            <strong className="col-6">June, 2024 - Present</strong>
                        </h5>
                        <h5>&emsp;Mississippi Coding Academy</h5>
                    </li>
                    <li className="list-group-item">
                        <h5 className="row">
                            <strong className="col-6">Assistant Instructor</strong>
                            <strong className="col-6">6 months</strong>
                        </h5>
                        <h5>&emsp;Mississippi Coding Academy</h5>
                    </li>
                    <li className="list-group-item">
                        <h5 className="row">
                            <strong className="col-6">Work/Study</strong>
                            <strong className="col-6">1 year</strong>
                        </h5>
                        <h5>&emsp;Mississippi Coding Academy</h5>
                    </li>
                </ul>
            </div>
            <h4 className="offset-1">Certifications</h4>
            <div className="row justify-content-center buff-tb">
                <ul className="list-group col-10 pop">
                    <li className="list-group-item">
                        <h5>Comptia - Security+</h5>
                        <h5>&emsp;<a target="_blank" href={SECURITY_PLUS_LINK}>View Certificate</a>&#128279;</h5>
                    </li>                
                </ul>
            </div>
        </>
    )
}//end method

export default Knowledge;
import User from "./User";
import UserClass from "./UserClass";

const AboutUs = () => {
    return (
        <div className="about">
            <h1> This is About Us</h1>
            {/* <User name={"Shiwali from Function based component.."}/> */}
            <UserClass name={"Shiwali from class based component."} location={"GGN"}/>
        </div>
    )
};

export default AboutUs;

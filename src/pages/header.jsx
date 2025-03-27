import {Link} from "react-router-dom";
export const Header = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Link><img src="https://th.bing.com/th/id/OIP.JoTau08BSEDi3Qfi701hgwHaE8?rs=&pid=ImgDetMain"
                    alt="The Simpsons" width={100} /></Link>
                </div>
                <div clasName="col">
                    <ul>
                        <li class="nav-item">
                            <Link to="/" class="nav-link active">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/Family" class="nav-link">Family</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/History" class="nav-link">History</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

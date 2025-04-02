import { Title } from "../elements/title";

export const About = () => {
    return (
        <div className="bg-dark vh-100 text-white">
            <div className="py-5 d-flex justify-content-center align-items-center" style={{ minHeight: "60vh" }}>
                <div className="card bg-dark text-light" style={{ width: '100%', maxWidth: '600px' }}>
                    <div className="card-body text-center">
                        <h3 className="card-title mb-4">About me</h3>
                        <p className="card-text" style={{ fontSize: "1.2rem" }}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, unde quae recusandae harum debitis ducimus obcaecati facere molestiae praesentium consequatur quasi error cupiditate. Tenetur qui magni error aspernatur ab vitae.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}


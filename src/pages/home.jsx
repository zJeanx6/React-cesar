import { Title } from "../elements/titulos";

export const Home = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <Title text="Home"/>
                <div className="col-md-9">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, unde quae recusandae harum debitis ducimus obcaecati facere molestiae praesentium consequatur quasi error cupiditate. Tenetur qui magni error aspernatur ab vitae.</p>
                </div>
                <div className="col-md-3">
                <img src="https://cloudfront-eu-central-1.images.arcpublishing.com/prisaradio/G4HOEFMK4RPW3AVXMJJZ4ER5XA.jpg" alt="The Simp" className="img-fluid"/>
                </div>
            </div>
        </div>
    );
};

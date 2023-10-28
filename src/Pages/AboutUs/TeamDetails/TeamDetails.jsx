import { useLoaderData, useParams } from "react-router-dom";
import bannerBg from "../../../assets/banner-bg.jpg";
import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";

const TeamDetails = () => {
    const { id } = useParams();
    const teams = useLoaderData();
    const data = teams.find((team) => team.id === parseInt(id));
    console.log(data);

    const { name, image, expertise, social_accounts, about } = data;
    return (
        <div>
            <div className="hero h-64 bg-cover bg-center" style={{ backgroundImage: `url(${bannerBg})` }}></div>
            <div className="card mx-auto -mt-40 p-10 md:w-8/12 w-full bg-base-100 shadow-2xl">
                <div className="flex flex-col items-center md:flex-row md:justify-between md:items-start md:gap-5">
                    <div className="w-40 h-40 md:w-48 md:h-48">
                        <img src={image} alt="" className="rounded-full w-full h-full object-cover" />
                    </div>
                    <div className="mt-5 md:mt-0 md:w-2/3">
                        <h2 className="text-2xl font-bold">{name}</h2>
                        <p className="text-gray-600 text-lg">Expertise: {expertise}</p>
                        <div className="flex gap-5 mt-5">
                            <a href={social_accounts.facebook}>
                                <BsFacebook className="text-primary text-3xl" />
                            </a>
                            <a href={social_accounts.linkedin}>
                                <BsLinkedin className="text-primary text-3xl" />
                            </a>
                            <a href={social_accounts.twitter}>
                                <BsTwitter className="text-primary text-3xl" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-7">
                    <h2 className="text-2xl font-bold">About {name}</h2>
                    <p className="mt-2 text-base">{about}</p>
                </div>
            </div>
        </div>
    );
};

export default TeamDetails;

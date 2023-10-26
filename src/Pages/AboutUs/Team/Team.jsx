import { useEffect, useState } from "react";

const Team = () => {
    const [teamData, setTeamData] = useState([]);
    useEffect(() => {
        fetch("team.json")
            .then((res) => res.json())
            .then((data) => setTeamData(data));
    }, []);

    return (
        <div className="w-11/12 mx-auto my-20">
            <div className="my-10 text-center">
                <h1 className="text-3xl text-black mb-3">Meet our Team</h1>
                <h4 className="text-black uppercase">------ Creative Minds at Work ------</h4>
            </div>

            {/* Team Card*/}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {teamData.map((member, index) => (
                    <div
                        key={index}
                        className="card card-compact bg-base-100 shadow-xl overflow-hidden transform transition duration-300 hover:scale-105"
                    >
                        <figure>
                            <img className="rounded-lg w-full" src={member.image} alt={member.name} />
                        </figure>
                        <div className="card-body space-y-2 p-4 md:p-6">
                            <h2 className="card-title text-xl md:text-2xl">{member.name}</h2>
                            <p className="text-sm md:text-base">{member.expertise}</p>
                            <div className="card-actions justify-start mt-4">
                                <button className="btn px-4 py-2">View Details</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Team;

import { useEffect } from "react";
import { useState } from "react";
import ProductCard from "../../../components/ProductCard/ProductCard";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const DesignResource = () => {
    const [designResource, setDesignResource] = useState([]);
    useEffect(() => {
        fetch("/products.json")
            .then(res => res.json())
            .then(data => setDesignResource(data))
    }, [])
    return (
        <div className="p-5 md:p-20">
            <SectionTitle></SectionTitle>
            <div className="grid md:grid-cols-4 gap-3 mt-10">
                {
                    designResource.filter(product => product.category == "design resource").map(product => <ProductCard
                        key={product.id}
                        product={product}
                    ></ProductCard>)
                }
            </div>
            <div className="mt-16 text-center">
                <button className=" btn bg-primary text-white font-semibold">More Design Resources</button>
            </div>
        </div>
    );
};

export default DesignResource;
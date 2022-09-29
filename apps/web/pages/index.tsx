import type { NextPage } from "next";
import { useQuery } from "@tanstack/react-query";

const Home: NextPage = () => {
    const { error, data } = useQuery(["getHello"], () =>
        fetch("http://localhost:3333/").then((res) => res.json())
    );

    return (
        <div className="container flex justify-center items-center">
            <h1 className="text-3xl font-bold underline">
                Hello {data?.message}!
            </h1>
        </div>
    );
};

export default Home;

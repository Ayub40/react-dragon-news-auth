import BreakingNews from "./Home/BreakingNews";
import NewsCard from "./Home/NewsCard";
import Header from "./shared/Header";
import LeftSideNav from "./shared/LeftSideNav";
import Navbar from "./shared/Navbar";
import RightSideNav from "./shared/RightSideNav";
import { useLoaderData } from "react-router-dom";

const Home = () => {
    const news = useLoaderData();
    // console.log(news);


    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="">
                    <LeftSideNav></LeftSideNav>
                </div>
                {/* news container */}
                <div className="md:col-span-2 ">
                    {
                        news.map(aNews => <NewsCard
                            key={aNews._id}
                            news={aNews}>
                        </NewsCard>)
                    }
                </div>
                <div className="">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;
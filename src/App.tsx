import {Header} from "./components/Header/Header.tsx";
import {HeroBanner} from "./components/HeroBanner/HeroBanner.tsx";
import {PromoCarousel} from "./components/PromoCarousel/PromoCarousel.tsx";

function App() {

    return (
        <div className="min-h-screen bg-[#f3f3f3]">
            <Header/>
            <HeroBanner/>
            <PromoCarousel/>
        </div>
    )
}

export default App

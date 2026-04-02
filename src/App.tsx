import {Header} from "./components/Header/Header.tsx";
import {HeroBanner} from "./components/HeroBanner/HeroBanner.tsx";
import {PromoCarousel} from "./components/PromoCarousel/PromoCarousel.tsx";
import {ProductCarousel} from "./components/ProductsCarousel/ProductCarousel.tsx";
import {chiperProducts, favoriteProducts} from "./components/ProductsCarousel/products.ts";

function App() {

    return (
        <div className="min-h-screen bg-[#f3f3f3]">
            <Header/>
            <HeroBanner/>
            <PromoCarousel/>
            <ProductCarousel title={'Najtaniej online'} products={favoriteProducts}/>
            <ProductCarousel title={'Ulubione produkty naszych klientów'} products={chiperProducts}/>
        </div>
    )
}

export default App

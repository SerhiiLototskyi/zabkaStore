import {Header} from "./components/Header/Header.tsx";
import {HeroBanner} from "./components/HeroBanner/HeroBanner.tsx";
import {PromoCarousel} from "./components/PromoCarousel/PromoCarousel.tsx";
import {ProductCarousel} from "./components/ProductsCarousel/ProductCarousel.tsx";
import {chiperProducts, favoriteProducts} from "./components/ProductsCarousel/products.ts";
import {FaqSection} from "./components/FaqSection/FaqSection.tsx";
import {faqItems} from "./components/FaqSection/faqSectionData.ts";
import {InfoCardsSection} from "./components/InfoCardsSection/InfoCardsSection.tsx";
import {appPromo, infoCards} from "./components/InfoCardsSection/infoCardsData.ts";
import {Footer} from "./components/Footer/Footer.tsx";

function App() {

    return (
        <div className="min-h-screen bg-[#f3f3f3]">
            <Header/>
            <HeroBanner/>
            <PromoCarousel/>
            <ProductCarousel title={'Najtaniej online'} products={favoriteProducts}/>
            <ProductCarousel title={'Ulubione produkty naszych klientów'} products={chiperProducts}/>
            <FaqSection
                title="Najczęściej zadawane pytania (FAQ)"
                items={faqItems}
            />
            <InfoCardsSection
                title="Zakupy u Ciebie jeszcze dziś"
                cards={infoCards}
                appPromo={appPromo}
            />
            <Footer/>
        </div>
    )
}

export default App

import Footer from "./Footer";
import Header2 from "./Header2";

const LayoutInit2 = ({ children }) => {
    return (
        <div className="relative min-h-screen">
            <Header2 />
            <section className="relative flex-1">
                {children}
            </section>
            <Footer className="absolute bottom-0 w-full" />
        </div>
    );
};

export default LayoutInit2;

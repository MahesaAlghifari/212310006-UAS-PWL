import Footer from "./Footer";
import Header from "./Header";

const LayoutInit = ({ children }) => {
    return (
        <div className="relative min-h-screen">
            <Header />
            <section className="relative flex-1">
                {children}
            </section>
            <Footer className="absolute bottom-0 w-full" />
        </div>
    );
};

export default LayoutInit;

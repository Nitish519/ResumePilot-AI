// import Navbar from "../components/common/Navbar";

// export default function MainLayout({ children }) {

//     return (

//         <div className="min-h-screen bg-gray-100">

//             <Navbar />

//             <main className="max-w-7xl mx-auto px-8 py-8">

//                 {children}

//             </main>

//         </div>

//     );

// }


import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

export default function MainLayout({ children }) {

    return (

        <div className="min-h-screen bg-slate-50">

            <Navbar />

            <main className="max-w-7xl mx-auto px-6 py-8">

                {children}

            </main>

              <Footer />

        </div>

    );

}
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Dashboard from "./pages/Dashboard";
// import UploadResume from "./pages/UploadResume";
// import ResumeHistory from "./pages/ResumeHistory";
// import ResumeDetails from "./pages/ResumeDetails";
// import ProtectedRoute from "./components/common/ProtectedRoute";

// import { Toaster } from "react-hot-toast";

// function App() {
//   return (
//     <BrowserRouter>

//     <Toaster position="top-right" />

//       <Routes>

//         <Route path="/" element={<Navigate to="/login" />} />

//         <Route path="/login" element={<Login />} />

//         <Route path="/register" element={<Register />} />

//        <Route
//             path="/dashboard"
//             element={
//                 // <ProtectedRoute>
//                     <Dashboard />
//                 // </ProtectedRoute>
//             }
//         />

//         <Route path="/upload" element={
//            <ProtectedRoute>
//                 <UploadResume />
//            </ProtectedRoute>  
//           } />

//         <Route path="/history" element={
//            <ProtectedRoute>
//               <ResumeHistory />
//             </ProtectedRoute>  
//           } />

//           <Route path="/history/:id"
//            element={<ResumeDetails />} 
//            />

//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import UploadResume from "./pages/UploadResume";
import ResumeHistory from "./pages/ResumeHistory";
import ResumeDetails from "./pages/ResumeDetails";
import ProtectedRoute from "./components/common/ProtectedRoute";

import { Toaster } from "react-hot-toast";

function App() {

    return (

        <BrowserRouter>

            <Toaster position="top-right" />

            <Routes>

                {/* Public */}

                <Route
                    path="/"
                    element={<Navigate to="/dashboard" replace />}
                />

                <Route
                    path="/dashboard"
                    element={<Dashboard />}
                />

                <Route
                    path="/login"
                    element={<Login />}
                />

                <Route
                    path="/register"
                    element={<Register />}
                />

                {/* Protected */}

                <Route
                    path="/upload"
                    element={
                        // <ProtectedRoute>
                            <UploadResume />
                        // </ProtectedRoute> 
                    }
                />

                <Route
                    path="/history"
                    element={
                        <ProtectedRoute>
                            <ResumeHistory />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/history/:id"
                    element={
                        <ProtectedRoute>
                            <ResumeDetails />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="*"
                    element={<Navigate to="/dashboard" replace />}
                />

            </Routes>

        </BrowserRouter>

    );

}

export default App;
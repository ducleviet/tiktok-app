import { publicRoures } from './routes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import ModerVideo from './layouts/ModerVideo';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyBo6q-idQRTYymWjQJOSf11arei0Cv4ukg',
    authDomain: 'tiktokdc-9bb03.firebaseapp.com',
    projectId: 'tiktokdc-9bb03',
    storageBucket: 'tiktokdc-9bb03.appspot.com',
    messagingSenderId: '612850438758',
    appId: '1:612850438758:web:6ed7cbdd4de48e381453a7',
    measurementId: 'G-NMMR3YYMPF',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoures.map((route) => {
                        const Page = route.element;
                        let Layout = route.layout;
                        return (
                            <Route
                                path={route.path}
                                key={route.index}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;

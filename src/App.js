import { publicRoures } from './routes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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

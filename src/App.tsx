import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Post from "./components/post";
import PostList from "./components/postList";
import './App.css'
import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient();


function App() {

    return (
        <QueryClientProvider client={queryClient}>
            <Router>
                <Routes>
                    <Route path="/" element={<PostList/>}/>
                    <Route path="/:postId" element={<Post/>}/>
                </Routes>
            </Router>
        </QueryClientProvider>

    )
}

export default App

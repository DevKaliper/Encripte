import Header from "./components/Header"
import Footer from "./components/Footer"
import Main from "./components/Main"

const App = () => {
    
    return (<>
    <div className="h-screen w-screen overflow-hidden relative flex flex-col   ">
    <header><Header/></header>
    <main><Main/></main>
    <footer><Footer/></footer>
    </div>

        
    
    
    </>)
}

export default App
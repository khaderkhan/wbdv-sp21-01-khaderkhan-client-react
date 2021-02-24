import './App.css';
import CourseManager from "./components/course-manager";
import CourseEditor from "./components/course-editor";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/home"


function App() {
  return (
      <BrowserRouter>
          <Route path="/" exact={true}  component={Home}/>
          <Route path="/courses" component={CourseManager}/>
          <Route path="/editor" exact={true} render={(props) => <CourseEditor {...props}/>}/>
      {/*<div className="container-fluid">*/}
      {/*  <CourseManager/>*/}
      {/*  <CourseEditor />*/}
      {/*</div>*/}
      </BrowserRouter>
  );
}

export default App;
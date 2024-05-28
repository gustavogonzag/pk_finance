import Head from "./components/head";
import SessionAddContent from "./components/sessionAddContent";
import List from './components/list';

export default function App() {
  return (


    <div className="flex flex-wrap flex-col align-center bg-gray-dark min-h-screen">
      <Head />
      <SessionAddContent />
      <List />
    </div>
  );
}

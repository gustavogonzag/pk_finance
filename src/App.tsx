import Head from "./components/head";
import SessionAddContent from "./components/sessionAddContent";
import Resume from './components/resume';
import List from './components/list';

export default function App() {
  return (
    <div className="flex flex-wrap flex-col align-center bg-gray-dark min-h-screen">
      <Head />
      <SessionAddContent />
      <Resume />
      <List />
    </div>
  );
}

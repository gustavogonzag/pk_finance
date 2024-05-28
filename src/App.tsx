import Head from "./components/head";
import SessionAddContent from "./components/sessionAddContent";
import Resume from './components/resume';

export default function App() {
  return (
    <div className="bg-gray-dark min-h-screen">
      <Head />
      <SessionAddContent />
      <Resume />
    </div>
  );
}

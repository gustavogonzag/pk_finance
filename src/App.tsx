import Head from "./components/head";
import SessionAddContent from "./components/sessionAddContent";

export default function App() {
  return (


    <div className="flex flex-wrap flex-col align-center bg-gray-dark min-h-screen">
      <Head />
      <SessionAddContent />
    </div>
  );
}

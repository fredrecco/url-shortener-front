import { useParams, useNavigate } from "react-router-dom";
import { useCallback, useEffect } from "react";
import { HistoryContextProvider } from "./context/history/";
import { ModalContextProvider } from "./context/modal";
import "./App.css";
import Redirect from "./pages/redirect";
import GenerateUrl from "./pages/generate-url";
import History from "./pages/history";
import Footer from "./components/footer";
import Header from "./components/header";
import More from "./pages/more";

type ResponseSearch = {
  expanded: string;
  shortened: string;
  createdAt: Date;
  updatedAt: Date;
};

function App() {
  const { shortened } = useParams();
  const navigate = useNavigate();
  const baseUrl = import.meta.env.VITE_SOME_BASE_URL;

  const search = useCallback(() => {
    const key = import.meta.env.VITE_SOME_KEY;
    console.log(shortened);

    fetch(`${baseUrl}/url/${shortened}`, {
      method: "GET",
      headers: {
        "api-key": key
      },
    })
      .then((response) => response.json())
      .then((response: ResponseSearch) => {
        setTimeout(() => {
          window.location.href = response.expanded;
        }, 2500);
      })
      .catch(() => {
        navigate("/");
      });
  }, [shortened, navigate, baseUrl]);

  useEffect(() => {
    if (shortened) {
      search();
    }
  }, [shortened, search]);

  return (
    <ModalContextProvider>
      <HistoryContextProvider>
        {!shortened ? (
          <div className="flex flex-col items-center w-full h-screen">
            <Header />
            <GenerateUrl />
            <History />
            <More />
            <Footer />
          </div>
        ) : (
          <Redirect />
        )}
      </HistoryContextProvider>
    </ModalContextProvider>
  );
}

export default App;

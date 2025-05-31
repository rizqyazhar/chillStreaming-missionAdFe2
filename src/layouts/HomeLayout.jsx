import { Outlet } from "react-router-dom";
import { ListProvider } from "../state/ContextState";
import Navbar from "../fragments/Navbar";
import Footer from "../fragments/Footer";
import GenreTab from "../fragments/genre/GenreTab";

const HomeLayout = () => {
  return (
    <ListProvider>
      <Navbar genreTab={<GenreTab width='100px' />} />
      <Outlet />
      <Footer />
    </ListProvider>
  );
};

export default HomeLayout;

import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { SmartAssistant } from "./pages/SmartAssistant";
import { Services } from "./pages/Services";
import { ContactUs } from "./pages/ContactUs";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/smart-assistant",
    Component: SmartAssistant,
  },
  {
    path: "/services",
    Component: Services,
  },
  {
    path: "/contact-us",
    Component: ContactUs,
  },
]);
import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { SmartAssistant } from "./pages/SmartAssistant";
import { Services } from "./pages/Services";
import { ContactUs } from "./pages/ContactUs";
import { IVRDetails } from "./pages/IVRDetails";
import { Layout } from "./components/Layout.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "smart-assistant",
        Component: SmartAssistant,
      },
      {
        path: "services",
        Component: Services,
      },
      {
        path: "ivr-details",
        Component: IVRDetails,
      },
      {
        path: "contact-us",
        Component: ContactUs,
      },
    ],
  },
]);
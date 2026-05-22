import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../mainlayout/MainLayout";
import ErrorPage from "../../assets/pages/Errorpage";
import Home from "../../assets/pages/Home";
import VisaTicket from "../visa/VisaTicket";
import Contact from "../contact/Contact";
import MainService from "../services/MainService";
import InvestorLicense from "../investorLicense/InvestorLicense";
import InvestorForm from "../investorLicense/InvestorForm";
import ServiceLicense from "../investorLicense/ServiceLicense";
import TradingLicense from "../investorLicense/TradingLicense";
import InvestorLicensePage from "../investorLicense/InvestorLicensePage";
import CompanySetup from "../investorLicense/CompanySetup";
import VisaServices from "../visa/VisaServices";
import AirTicketMain from "../airticket/AirTicketMain";
import About from "../about/About";


export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/visaticket",
        element: <VisaTicket />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/mainservice",
        element: <MainService />,
      },
      {
        path: "/investorlicense",
        element: <InvestorLicense />,
        
      },
      {
        path:"/investorForm",
        element: <InvestorForm/>
      },
      {
        path: "/servicelicense",
        element: <ServiceLicense />,
      },
      {
        path: "/tradinglicense",
        element: <TradingLicense />,
      },
      {
        path: "/investorlicensepage",
        element: <InvestorLicensePage />,
      },
      {
        path: "/companysetup",
        element: <CompanySetup />,
      },
      {
        path: "/visaServices",
        element: <VisaServices />,
      },
      {
        path: "/airticketmain",
        element: <AirTicketMain />,
      },
      {
        path:"/about",
        element: <About />
      }
    ],
  },
]);
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import ContactForm from "./components/ContactForm"
import Error from "./components/Error"
import { Toaster } from "react-hot-toast"

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <ContactForm />,
      // action: contactFormAction,
      errorElement: <Error />
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
      <Toaster toastOptions={{
        className: "leading-none bg-greyDarker p-0"
      }} />
    </>
  )
}

export default App

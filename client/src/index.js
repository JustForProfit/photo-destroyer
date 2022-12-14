import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import { ChakraProvider } from "@chakra-ui/react";
import router from "./router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<ChakraProvider>
			<RouterProvider router={router} />
		</ChakraProvider>
	</React.StrictMode>
);

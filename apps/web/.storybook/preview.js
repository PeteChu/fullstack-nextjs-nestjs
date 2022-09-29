import "../styles/globals.css";
import React from "react";
import * as NextImage from "next/image";
import {
    QueryClientProvider,
    QueryClient,
    QueryCache,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryCache = new QueryCache();
const queryClient = new QueryClient({ queryCache: queryCache });

export const decorators = [
    (story) => (
        <QueryClientProvider client={queryClient}>
            {story()}
            <ReactQueryDevtools />
        </QueryClientProvider>
    ),
];

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
    configurable: true,
    value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    previewTabs: {
        "storybook/docs/panel": { index: -1 },
    },
};

import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    }

    main {
        position: absolute;
        width: 25%;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        text-align: center;

        @media (max-width: 768px) {
            width: 50%;
        }

        @media (max-width: 480px) {
            width: 75%;
        }
    }
`;

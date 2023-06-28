import styled from "styled-components";

const Loading = () => {
    return (
        <LoadingStyle>
            <div />
        </LoadingStyle>
    );
}

const LoadingStyle = styled.div`
    background-color: transparent;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;

    div {
        background-color: #FFF;
        width: 0;
        height: 0;
        border-radius: 50px;
        animation: loader 1.5s infinite;
    }
    @keyframes loader {
        0% { width: 0px; height: 0px; background-color: transparent }
        50% { width: 50px; height: 50px; background-color: #FFF }
        100% { width: 0px; height: 0px; background-color: transparent }
    }
`

export default Loading;

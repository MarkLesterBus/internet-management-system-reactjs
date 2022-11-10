import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
    return (
        <div id="error-page">
            <main className="flex-shrink-0">
                <div className="container">
                    <h1 className="mt-5">  404 Not Found</h1>
                    <p className="lead">Sorry we could not find the page. </p>
                </div>
            </main>

        </div>
    );
}

export default ErrorPage
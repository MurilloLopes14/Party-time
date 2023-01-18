import { CircleLoader } from "react-spinners";
import { LoaderStyle } from "./LoaderStyle";

const override = {
  margin: "20px",
};

export const Loader = () => {
  return (
    <>
      <LoaderStyle>
        <CircleLoader size={80} color={"#114797"} cssOverride={override} />
      </LoaderStyle>
    </>
  );
};

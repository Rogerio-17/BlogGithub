import { SpinnerContainer } from "./style";

export function Spinner() {
    return(
        <SpinnerContainer className="spinner">
          <div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
          </div>
        </SpinnerContainer>
    )
}

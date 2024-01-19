import * as React from "react";
import ScaleLoader from "react-spinners/ScaleLoader";

export const LoadingLazy = () => {
      return(
            <>
                  <div className="flex flex-col items-center justify-center h-full gap-12">
                        <ScaleLoader
                              aria-label="Loading Spinner"
                              className="mx-auto"
                              color={"#DCAC68"}
                              height={110}
                              width={30}
                              radius={2}
                              margin={3}
                              data-testid="loader"
                        />
                        <p className="text-base font-medium">Gambarnya lagi loading...</p>
                  </div>
            </>
      );
};    
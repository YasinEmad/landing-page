import { Statistics } from "./Statistics";
import pilotImage from "../assets/pilot.png";

export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="py-12 border rounded-lg bg-muted/50">
        <div className="flex flex-col-reverse gap-8 px-6 md:flex-row md:gap-12">
          <img
            src={pilotImage}
            alt="Pilot"
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold md:text-4xl">
                <span className="text-transparent bg-gradient-to-b from-primary/60 to-primary bg-clip-text">
                  About{" "}
                </span>
                Company
              </h2>
              <p className="mt-4 text-xl text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};

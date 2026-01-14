import { Orbit } from "./Orbit";
import { Planet } from "./Planet";
import { Astronaut } from "./Astronaut";

export const SolarSystem = ({ onPlanetClick }) => {
  return (
    <>
      <Astronaut />

      {/* Earth/About */}
      <Orbit radius={2} tilt={0.35} />
      <Planet
        model="/earth.glb"
        distance={2}
        tilt={0.35}
        speed={0.35}
        onClick={() => onPlanetClick("about")}
      />

      {/* Mars/Contact */}
      <Orbit radius={4} tilt={0.25} />
      <Planet
        model="/planet_mars.glb"
        scale={0.05}
        distance={4}
        tilt={0.25}
        speed={0.25}
        onClick={() => onPlanetClick("contact")}
      />

      {/* Saturn/Projects */}
      <Orbit radius={6} tilt={0.25} />
      <Planet
        model="/saturn_planet.glb"
        scale={0.4}
        distance={6}
        tilt={0.25}
        speed={0.15}
        onClick={() => onPlanetClick("projects")}
      />
    </>
  );
};

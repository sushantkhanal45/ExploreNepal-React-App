import DestinationCard from "./DestinationCard";

function DestinationGrid({ destinations }) {
  return (
    <div
      className="
        mt-12 grid gap-6
        md:grid-cols-2
        xl:grid-cols-3
      "
    >
      {destinations.map(
        (destination, index) => (
          <DestinationCard
            key={destination.id}
            destination={destination}
            index={index}
          />
        )
      )}
    </div>
  );
}

export default DestinationGrid;
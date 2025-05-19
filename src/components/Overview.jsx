import React from "react";
import FoodProcessingImage from "../assets/processed-food.png"; // Adjust the path as necessary
import TrainingImage from "../assets/training.png"; // Adjust the path as necessary
import ConsultancyImage from "../assets/conversation.png"; // Adjust the path as necessary
import ResearchImage from "../assets/discover.png"; // Adjust the path as necessary

export default function Overview() {
  const items = [
    { icon: FoodProcessingImage, label: "Food Processing" },
    { icon: TrainingImage, label: "Training" },
    { icon: ConsultancyImage, label: "Consultancy" },
    { icon: ResearchImage, label: "R&D" },
  ];
  return (
    <section className="py-16 bg-white text-center">
      <h3 className="text-2xl font-semibold mb-6">Our Focus Areas</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {items.map(({ icon, label }, i) => (
          <div key={i} className="flex flex-col items-center">
            <img src={icon} alt={label} className="w-16 h-16 mb-3" />
            <p className="text-sm font-medium">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
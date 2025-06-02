// --- FILE: src/pages/Team.jsx ---
import Header from "../components/Header";
import Footer from "../components/Footer";
import ASharma from "../assets/ASharma.jpg";
import RVerma from "../assets/RiyaVerma.jpg";
import KMehra from "../assets/KMehra.jpg";
import Frontend from "../assets/Frontend.jpg";

const team = {
  Founder: [
    {
      name: "Dr. A. Sharma",
      role: "Founder & Agri-Innovation Lead",
      image: ASharma,
      bio: "PhD in Horticulture with 15+ years of experience in agri-research and startup incubation. Leads our strategic partnerships and research direction.",
    },
  ],
  "Core Team": [
    {
      name: "Ms. R. Verma",
      role: "Operations & Outreach",
      image: RVerma,
      bio: "Manages incubation programs, startup support, and outreach initiatives across academia and industry stakeholders.",
    },
    {
      name: "Mr. K. Mehra",
      role: "Technical Advisor",
      image: KMehra,
      bio: "Software architect with expertise in building scalable agri-tech solutions. Guides technical infrastructure and digital product strategy.",
    },
    {
      name: "John",
      role: "Frontend Developer",
      image: Frontend,
      bio: "Built Plantosphere's responsive frontend during the Smart India Hackathon 2025. Passionate about open-source, design, and agri-innovation.",
    },
  ],
};

export default function Team() {
  return (
    <>
      <Header />
      <section className="py-16 px-6 max-w-6xl mx-auto mt-14">
        <h2 className="text-4xl font-bold text-center text-green-700 dark:text-green-500 mb-2">
          The Minds Behind Plantosphere
        </h2>
        <p className="text-center text-lg text-gray-600 dark:text-gray-200 mb-12">
          Our team drives innovation and impact.
        </p>

        {Object.entries(team).map(([group, members], idx) => (
          <div key={idx} className="mb-12">
            <h3 className="text-2xl font-semibold text-green-800 dark:text-green-500 mb-6">{group}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {members.map((member, i) => (
                <div
                  key={i}
                  className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-28 h-28 mx-auto rounded-full object-cover mb-4"
                  />
                  <h4 className="text-xl font-semibold text-green-900 dark:text-green-600">{member.name}</h4>
                  <p className="text-sm text-indigo-600 dark:text-indigo-300 font-medium">{member.role}</p>
                  <p className="mt-2 text-gray-600 dark:text-gray-200 text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
      <Footer />
    </>
  );
}
